<script lang="ts">
  import { ArrowUpRight } from '@lucide/svelte';
  import Company from '#lib/components/Company.svelte';
  import PageMeta from '#lib/components/PageMeta.svelte';
</script>

<PageMeta title="Our Story | Bloomé Scent" description="Meet Bloomé Scent, a home fragrance brand from Semarang that gives leftover flowers and fruit peels a second life." />
<Company standalone />

<section class="process" aria-labelledby="process-title">
  <div class="wrap process-inner">
    <div>
      <h2 id="process-title">From scraps <em>to sachets.</em></h2>
      <p>Look closely and you’ll see the textures we wanted to keep, from the edges of a dried petal to the rind of a citrus slice.</p>
      <a class="text-link" href="/how-it-works">How to use a wax sachet <ArrowUpRight size={15} aria-hidden="true" /></a>
    </div>
    <ol>
      <li><h3>Save what can be used</h3><p>We set aside leftover flowers and fruit peels that are still suitable for drying.</p></li>
      <li><h3>Let the botanicals dry</h3><p>The dried petals, leaves, and peels are ready to become part of a new design.</p></li>
      <li><h3>Arrange each piece by hand</h3><p>We finish the scented wax with dried botanicals, giving each sachet its own pattern.</p></li>
    </ol>
  </div>
</section>

<style>
  .process { background: var(--cream); padding-block: var(--section); }
  .process-inner { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 8vw, 8rem); }
  .process-inner > div p { max-width: 41ch; }
  ol { margin: 0; padding: 0; list-style: none; counter-reset: steps; border-top: 1px solid var(--rule); }
  li { position: relative; padding: 1.2rem 0 1.2rem 2.9rem; border-bottom: 1px solid var(--rule); counter-increment: steps; }
  li::before { content: counter(steps, decimal-leading-zero); position: absolute; inset: 1.5rem auto auto 0; color: var(--olive); font-size: .82rem; font-weight: 700; }
  h3 { font-size: clamp(1.7rem, 3vw, 2.45rem); }
  li p { margin: .45rem 0 0; color: var(--muted); }
  @media (max-width: 700px) { .process-inner { grid-template-columns: 1fr; } }
</style>
