<script lang="ts">
  import { ArrowDown, ArrowUpRight, Flower2, Leaf, Wind } from '@lucide/svelte';
  import { whatsappLink } from '#lib/storefront.ts';
</script>

<section id="home" class="hero" aria-labelledby="hero-title">
  <div class="stage">
    <picture class="visual">
      <source media="(max-width: 700px)" srcset="/images/hero-mobile.webp" />
      <img src="/images/hero.webp" srcset="/images/hero-compact.webp 1000w, /images/hero.webp 1600w" sizes="100vw" width="1600" height="900" fetchpriority="high" alt="Three Bloomé wax sachets decorated with dried flowers and leaves on cream fabric" />
    </picture>
    <div class="wrap hero-inner">
      <div class="copy">
        <h1 id="hero-title">Elegant by<br /><em>Nature.</em></h1>
        <p>Handmade wax sachets with dried flowers and fruit peels. Hang one in your favorite corner for a gentle touch of fragrance.</p>
        <div class="actions">
          <a class="button primary" href="#produk">View products <ArrowDown size={16} aria-hidden="true" /></a>
          <a class="button outline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Order on WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="qualities">
    <ul class="wrap" aria-label="Product highlights">
      <li><Flower2 size={18} strokeWidth={1.55} aria-hidden="true" /> Handmade</li>
      <li><Leaf size={18} strokeWidth={1.55} aria-hidden="true" /> Upcycled details</li>
      <li><Wind size={18} strokeWidth={1.55} aria-hidden="true" /> No flame needed</li>
    </ul>
  </div>
</section>

<style>
  .stage { position: relative; isolation: isolate; display: grid; align-items: center; min-height: clamp(490px, 43vw, 660px); background: #f5e7cd; }
  .visual, .visual img, .stage::after { position: absolute; inset: 0; width: 100%; height: 100%; }
  .visual { z-index: -2; }
  .visual img { object-fit: cover; object-position: center 52%; }
  .stage::after { content: ''; z-index: -1; background: linear-gradient(90deg, #f6ebd7 0%, #f6ebd7ec 22%, #f6ebd78c 36%, transparent 53%); }
  .hero-inner { padding-block: 3rem 4.25rem; }
  .copy { max-width: 30rem; }
  h1 { font-size: clamp(5rem, 8.2vw, 8.8rem); line-height: .82; letter-spacing: -.035em; }
  h1 em { color: var(--olive); }
  p { max-width: 30ch; margin: 1.65rem 0 1.65rem; font-size: clamp(.98rem, 1.2vw, 1.125rem); line-height: 1.65; }
  .actions { display: flex; flex-wrap: wrap; gap: .65rem; }
  .qualities { background: var(--olive); color: var(--paper); }
  .qualities ul { list-style: none; margin-block: 0; padding: .91rem 0; display: grid; grid-template-columns: repeat(3, 1fr); }
  li { display: flex; justify-content: center; align-items: center; gap: .65rem; min-height: 1.8rem; text-align: center; font-size: .81rem; font-weight: 600; letter-spacing: .025em; }
  li + li { border-left: 1px solid #f7eddb45; }
  @media (max-width: 700px) {
    .stage { min-height: auto; display: flex; flex-direction: column; background: var(--paper); }
    .stage::after { display: none; }
    .visual { position: relative; inset: auto; z-index: auto; display: block; order: 2; aspect-ratio: 1.45; overflow: hidden; }
    .visual img { object-position: center 53%; }
    .hero-inner { padding-block: 2.55rem 2.1rem; }
    h1 { font-size: clamp(4.3rem, 13vw, 6.1rem); }
    p { margin-block: 1.1rem 1.25rem; max-width: 35ch; }
    .qualities ul { width: calc(100% - 1.25rem); padding-block: .65rem; }
    li { font-size: .68rem; gap: .32rem; letter-spacing: 0; }
    li :global(svg) { width: 14px; flex-shrink: 0; }
  }
  @media (prefers-reduced-motion: no-preference) {
    .copy { animation: settle 720ms cubic-bezier(.19, 1, .22, 1) both; }
    @keyframes settle { from { opacity: .8; transform: translateY(10px); } }
  }
</style>
