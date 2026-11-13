<script lang="ts">
  import { ArrowUpRight } from '@lucide/svelte';
</script>

<section id="kontak" class="contact-callout" aria-labelledby="contact-callout-title">
  <div class="wrap callout-inner">
    <div>
      <h2 id="contact-callout-title">Need help choosing a scent?</h2>
      <p>Tell us where you’d like to use it and what kinds of scents you enjoy.</p>
    </div>
    <a class="button light" href="/contact">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
  </div>
</section>

<style>
  .contact-callout { background: var(--olive); color: var(--paper); border-bottom: 1px solid #f7eddb45; }
  .callout-inner { display: flex; align-items: center; justify-content: space-between; gap: 1.4rem 2.5rem; padding-block: clamp(2.5rem, 6vw, 5rem); }
  h2 { font-size: clamp(2.65rem, 5.4vw, 5rem); }
  p { margin: .75rem 0 0; }
  .button { flex-shrink: 0; }
  @media (max-width: 700px) { .callout-inner { flex-direction: column; align-items: flex-start; } }
</style>
