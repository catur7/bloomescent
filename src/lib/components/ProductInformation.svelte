<script lang="ts">
  import { Flower2, Hand, Leaf, Wind } from '@lucide/svelte';

  let { standalone = false }: { standalone?: boolean } = $props();
  const heading = $derived(standalone ? 'h1' : 'h2');

  const details = [
    { name: 'Materials', text: 'Wax and fragrance oil, finished with dried flowers, leaves, and fruit peels.' },
    { name: 'How to use it', text: 'Hang it by the attached cord or set it on a shelf. No flame needed.' },
    { name: 'Where to use it', text: 'Closets, shelves, bathrooms, and other small spaces.' }
  ];

  const benefits = [
    { icon: Wind, title: 'Scents for small spaces', text: 'Choose from fresh lavender, sweet jasmine, and warm coffee.' },
    { icon: Flower2, title: 'Decorative by design', text: 'Dried flowers and leaves make each sachet a little different.' },
    { icon: Hand, title: 'Easy to use', text: 'Hang it up or set it down. It releases fragrance on its own.' },
    { icon: Leaf, title: 'Upcycled details', text: 'Leftover flowers and fruit peels get a second life in our sachets.' }
  ];
</script>

<section id="informasi-produk" class="information" aria-labelledby="info-title">
  <div class="wrap">
    <div class="intro">
      <div>
        <svelte:element this={heading} id="info-title" class="display-title">Simply hang <em>and enjoy.</em></svelte:element>
        <p>Each wax sachet releases its scent into the air as it hangs or rests on a shelf.</p>
        {#if !standalone}<a class="text-link" href="/how-it-works">See how it works <span aria-hidden="true">→</span></a>{/if}
      </div>
      <dl>
        {#each details as detail (detail.name)}
          <div><dt>{detail.name}</dt><dd>{detail.text}</dd></div>
        {/each}
      </dl>
    </div>
    {#if standalone}
    <div class="why">
      <h2 class="why-title">Why choose Bloomé?</h2>
      <ul>
        {#each benefits as { icon: Icon, title, text } (title)}
          <li><Icon size={23} strokeWidth={1.4} aria-hidden="true" /><div><h3 class="benefit-title">{title}</h3><p>{text}</p></div></li>
        {/each}
      </ul>
    </div>
    <p class="note">How strong the scent is and how long it lasts depend on the room and where you place the sachet.</p>
    {/if}
  </div>
</section>

<style>
  .information { background: var(--cream); padding-block: var(--section); }
  .intro { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1.5rem, 8vw, 8rem); align-items: start; }
  .intro p { margin-block: 1rem 0; max-width: 34ch; }
  .intro a { margin-top: .7rem; }
  dl { margin: .2rem 0 0; border-top: 1px solid var(--rule); }
  dl div { display: grid; grid-template-columns: minmax(7rem, .46fr) 1fr; gap: 1rem; border-bottom: 1px solid var(--rule); padding-block: 1rem; }
  dt { font-weight: 700; }
  dd { margin: 0; color: var(--muted); }
  .why { margin-top: clamp(2.5rem, 6vw, 5rem); }
  .why-title { font-size: clamp(2.25rem, 4vw, 3.6rem); }
  ul { display: grid; grid-template-columns: repeat(4, 1fr); list-style: none; padding: 0; margin: 1.2rem 0 0; border-block: 1px solid var(--rule); }
  li { padding: 1.35rem 1.15rem; }
  li:first-child { padding-left: 0; }
  li + li { border-left: 1px solid var(--rule); }
  li :global(svg) { color: var(--olive); margin-bottom: .65rem; }
  .benefit-title { margin: 0 0 .35rem; font: 700 .92rem/1.4 var(--body); letter-spacing: normal; }
  li p, .note { font-size: .84rem; margin: 0; color: var(--muted); }
  .note { margin-top: 1rem; }
  @media (max-width: 850px) {
    ul { grid-template-columns: repeat(2, 1fr); }
    li:nth-child(3) { padding-left: 0; border-left: 0; }
    li:nth-child(n + 3) { border-top: 1px solid var(--rule); }
  }
  @media (max-width: 700px) { .intro { grid-template-columns: 1fr; } }
  @media (max-width: 420px) {
    dl div { grid-template-columns: 1fr; gap: .2rem; }
    li { padding-inline: .75rem; }
  }
</style>
