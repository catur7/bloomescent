mod catalog;

use std::{env, error::Error, sync::Arc};

use axum::{Json, Router, extract::State, http::StatusCode, routing::get};
use catalog::Product;

type Catalog = Arc<Vec<Product>>;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let host = env::var("HOST").unwrap_or_else(|_| "127.0.0.1".into());
    let port = env::var("PORT").unwrap_or_else(|_| "8080".into());
    let address = format!("{host}:{port}");
    let listener = tokio::net::TcpListener::bind(&address).await?;
    let products = Arc::new(catalog::load()?);

    println!("Bloomé catalog API listening on {}", listener.local_addr()?);
    axum::serve(listener, app(products))
        .with_graceful_shutdown(async {
            let _ = tokio::signal::ctrl_c().await;
        })
        .await?;
    Ok(())
}

fn app(products: Catalog) -> Router {
    Router::new()
        .route("/healthz", get(|| async { StatusCode::NO_CONTENT }))
        .route("/api/v1/products", get(list_products))
        .with_state(products)
}

async fn list_products(State(products): State<Catalog>) -> Json<Vec<Product>> {
    Json(products.as_ref().clone())
}

#[cfg(test)]
mod tests {
    use axum::{
        body::{Body, to_bytes},
        http::Request,
    };
    use tower::ServiceExt;

    use super::*;

    #[tokio::test]
    async fn serves_the_shared_catalog_over_http() {
        let products = catalog::load().unwrap();
        let response = app(Arc::new(products.clone()))
            .oneshot(
                Request::get("/api/v1/products")
                    .body(Body::empty())
                    .unwrap(),
            )
            .await
            .unwrap();

        assert_eq!(response.status(), StatusCode::OK);
        let body = to_bytes(response.into_body(), 16 * 1024).await.unwrap();
        let payload: Vec<Product> = serde_json::from_slice(&body).unwrap();
        assert_eq!(payload, products);
        assert!(!payload.is_empty());
        assert!(payload.iter().all(|product| product.price_idr > 0));
    }
}
