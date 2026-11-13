use serde::{Deserialize, Serialize};

const PRODUCTS: &str = include_str!("../../catalog/products.json");

#[derive(Clone, Debug, Deserialize, PartialEq, Serialize)]
#[serde(rename_all = "camelCase", deny_unknown_fields)]
pub struct Product {
    pub slug: String,
    pub name: String,
    pub notes: String,
    pub description: String,
    pub price_idr: u32,
    pub image_alt: String,
}

pub fn load() -> Result<Vec<Product>, serde_json::Error> {
    serde_json::from_str(PRODUCTS)
}
