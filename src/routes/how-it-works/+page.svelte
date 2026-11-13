<script lang="ts">
  import { ArrowUpRight, Plus } from '@lucide/svelte';
  import PageMeta from '#lib/components/PageMeta.svelte';
  import ProductInformation from '#lib/components/ProductInformation.svelte';

  const questions = [
    { question: 'Is a wax sachet the same as a wax melt?', answer: 'A Bloomé sachet is designed to release its scent at room temperature. Hang it by the cord or place it on a shelf, with no warmer needed.' },
    { question: 'Where should I put it for a noticeable scent?', answer: 'Start with a small space, like a closet or a bathroom. Try a different spot if the fragrance feels too subtle.' },
    { question: 'Will my sachet look exactly like the photo?', answer: 'Each sachet is finished by hand, so the placement of dried petals, leaves, and fruit peel can vary.' }
  ];
</script>

<PageMeta title="How It Works | Bloomé Scent" description="Learn how to use a Bloomé wax sachet, what it’s made of, and where to hang or place it for a touch of fragrance." />
<ProductInformation standalone />

<section class="wrap faq" aria-labelledby="faq-title">
  <div>
    <h2 id="faq-title">Good to <em>know.</em></h2>
    <a class="text-link" href="/products">Explore the scents <ArrowUpRight size={15} aria-hidden="true" /></a>
  </div>
  <div class="questions">
    {#each questions as item (item.question)}
      <details name="wax-sachet-faq">
        <summary>{item.question}<Plus size={19} aria-hidden="true" /></summary>
        <p>{item.answer}</p>
      </details>
    {/each}
  </div>
</section>

<style>
  .faq { padding-block: var(--section); display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(1.5rem, 7vw, 7rem); }
  .text-link { margin-top: 1rem; }
  .questions { border-top: 1px solid var(--rule); }
  details { border-bottom: 1px solid var(--rule); }
  summary { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding-block: 1rem; min-height: 54px; font-weight: 700; list-style: none; cursor: pointer; }
  summary::-webkit-details-marker { display: none; }
  summary :global(svg) { flex-shrink: 0; }
  details[open] summary :global(svg) { transform: rotate(45deg); }
  details p { margin: 0 2rem 1.2rem 0; color: var(--muted); }
  @media (prefers-reduced-motion: no-preference) { summary :global(svg) { transition: transform 220ms cubic-bezier(.19, 1, .22, 1); } }
  @media (max-width: 700px) { .faq { grid-template-columns: 1fr; } }
</style>
