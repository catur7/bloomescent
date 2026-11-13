<script lang="ts">
  import { ArrowUpRight } from '@lucide/svelte';
  import { formatRupiah, products, whatsappLink } from '#lib/storefront.ts';
</script>

<section id="produk" class="collection wrap" aria-labelledby="collection-title">
  <div class="heading">
    <h2 id="collection-title">Find <em>your scent.</em></h2>
    <p>Three scents, from fresh lavender to warm coffee.</p>
  </div>
  <div class="products">
    {#each products as product (product.slug)}
      <article aria-labelledby={'product-' + product.slug}>
        <div class="photo">
          <img src={'/images/' + product.slug + '.webp'} srcset={'/images/' + product.slug + '-small.webp 420w, /images/' + product.slug + '.webp 760w'} sizes="(max-width: 560px) 92vw, 32vw" width="760" height="1140" loading="lazy" alt={product.imageAlt} />
        </div>
        <div class="title-row">
          <h3 id={'product-' + product.slug}>{product.name}</h3>
          <span>{formatRupiah(product.priceIdr)}</span>
        </div>
        <p>{product.description}</p>
        <a class="text-link" href={whatsappLink(product)} target="_blank" rel="noopener noreferrer" aria-label={`Order on WhatsApp: ${product.name}`}>Order on WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
      </article>
    {/each}
  </div>
</section>

<style>
  .collection { padding-block: var(--section); }
  .heading { display: flex; justify-content: space-between; gap: 1rem 2rem; align-items: end; margin-bottom: clamp(1.35rem, 3vw, 2.3rem); }
  .heading p { margin: 0 0 .25rem; color: var(--muted); }
  .products { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1rem, 2.4vw, 2rem); }
  article { border-bottom: 1px solid var(--rule); padding-bottom: 1.15rem; display: flex; flex-direction: column; }
  .photo { overflow: hidden; background: var(--cream); }
  img { width: 100%; height: auto; aspect-ratio: .91; object-fit: cover; object-position: center 56%; transition: transform 450ms ease; }
  .title-row { display: flex; flex-wrap: wrap; gap: .35rem .8rem; align-items: baseline; justify-content: space-between; margin-top: 1.1rem; }
  h3 { font-size: clamp(1.75rem, 3vw, 2.65rem); }
  .title-row span { font-size: .87rem; font-weight: 700; font-variant-numeric: tabular-nums; }
  article p { margin: .55rem 0 1rem; font-size: .91rem; color: var(--muted); }
  article a { margin-top: auto; }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) { article:hover img { transform: scale(1.035); } }
  @media (max-width: 850px) { .heading { align-items: start; flex-direction: column; } }
  @media (max-width: 560px) { .products { grid-template-columns: 1fr; gap: 1.75rem; } img { aspect-ratio: 1.12; } }
</style>
