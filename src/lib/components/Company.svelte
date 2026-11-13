<script lang="ts">
  let { standalone = false }: { standalone?: boolean } = $props();
  const heading = $derived(standalone ? 'h1' : 'h2');
</script>

<section id="company-profile" class="company wrap" aria-labelledby="company-title">
  <figure>
    <img src="/images/upcycling.webp" srcset="/images/upcycling-small.webp 420w, /images/upcycling.webp 760w" sizes="(max-width: 700px) 92vw, 46vw" width="760" height="1140" loading={standalone ? 'eager' : 'lazy'} alt="A wax sachet decorated with dried citrus slices and flower petals" />
    <figcaption>A closer look at the dried flowers and citrus in a Bloomé sachet.</figcaption>
  </figure>
  <div class="story">
    <svelte:element this={heading} id="company-title" class="display-title">A second life for <em>flowers and fruit.</em></svelte:element>
    <p>We’re Bloomé Scent, a home fragrance brand from Semarang. We make scented wax sachets to brighten the little corners of your home.</p>
    <p>We save leftover flowers and fruit peels that would otherwise go to waste. Once dried, they become part of our designs, so each sachet has its own arrangement.</p>
    {#if !standalone}
      <a class="text-link" href="/our-story">Read our story <span aria-hidden="true">→</span></a>
    {/if}
  </div>
</section>

<style>
  .company { display: grid; grid-template-columns: 1fr .94fr; align-items: center; gap: clamp(2.5rem, 8vw, 8.75rem); padding-block: var(--section); }
  figure { margin: 0; }
  img { width: 100%; height: auto; aspect-ratio: 1.14; object-fit: cover; object-position: center 56%; }
  figcaption { margin-top: .72rem; color: var(--muted); font-size: .75rem; }
  .display-title { margin-bottom: 1.3rem; }
  p { max-width: 47ch; margin-block: 0 1rem; }
  .text-link { margin-top: .5rem; }
  @media (max-width: 700px) {
    .company { grid-template-columns: 1fr; gap: 1.7rem; }
    figure { order: 2; }
  }
</style>
