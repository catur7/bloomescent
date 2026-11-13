<script lang="ts">
  import { Flower2, Hand, Leaf, Wind } from '@lucide/svelte';

  const details = [
    { name: 'Bahan', text: 'Wax dan fragrance oil, dengan hiasan bunga, daun, dan kulit buah kering.' },
    { name: 'Cara pakai', text: 'Gantung dengan tali yang tersedia atau letakkan di rak. Tidak perlu dibakar.' },
    { name: 'Tempat yang cocok', text: 'Lemari, rak penyimpanan, kamar tidur, kamar mandi, dan ruang kecil lainnya.' }
  ];

  const benefits = [
    { icon: Wind, title: 'Aroma untuk ruang kecil', text: 'Pilih wangi floral, melati, atau kopi sesuai suasana yang kamu inginkan.' },
    { icon: Flower2, title: 'Sekaligus dekorasi', text: 'Susunan bunga dan daun kering memberi detail pada setiap scented wax.' },
    { icon: Hand, title: 'Mudah dipakai', text: 'Cukup gantung atau letakkan. Tanpa api dan tanpa listrik.' },
    { icon: Leaf, title: 'Bahan yang dimanfaatkan kembali', text: 'Bunga sisa dan kulit buah yang masih layak olah mendapat kegunaan baru.' }
  ];
</script>

<section id="informasi-produk" class="information" aria-labelledby="info-title">
  <div class="wrap">
    <div class="intro">
      <div>
        <h2 id="info-title">Wangi yang<br /><em>cukup digantung.</em></h2>
        <p>Scented wax melepas aroma secara alami dan bisa dipajang di sudut favoritmu.</p>
      </div>
      <dl>
        {#each details as detail (detail.name)}
          <div><dt>{detail.name}</dt><dd>{detail.text}</dd></div>
        {/each}
      </dl>
    </div>
    <div class="why">
      <h3>Mengapa pilih Bloomé?</h3>
      <ul>
        {#each benefits as { icon: Icon, title, text } (title)}
          <li><Icon size={23} strokeWidth={1.4} aria-hidden="true" /><div><h4>{title}</h4><p>{text}</p></div></li>
        {/each}
      </ul>
    </div>
    <p class="note">Intensitas dan ketahanan aroma bergantung pada kondisi ruangan dan penempatan.</p>
  </div>
</section>

<style>
  .information { background: var(--cream); padding-block: var(--section); }
  .intro { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1.5rem, 8vw, 8rem); align-items: start; }
  .intro p { margin-block: 1rem 0; max-width: 34ch; }
  dl { margin: .2rem 0 0; border-top: 1px solid var(--rule); }
  dl div { display: grid; grid-template-columns: minmax(7rem, .46fr) 1fr; gap: 1rem; border-bottom: 1px solid var(--rule); padding-block: 1rem; }
  dt { font-weight: 700; }
  dd { margin: 0; color: var(--muted); }
  .why { margin-top: clamp(2.5rem, 6vw, 5rem); }
  h3 { font-size: clamp(2.25rem, 4vw, 3.6rem); }
  ul { display: grid; grid-template-columns: repeat(4, 1fr); list-style: none; padding: 0; margin: 1.2rem 0 0; border-block: 1px solid var(--rule); }
  li { padding: 1.35rem 1.15rem; }
  li:first-child { padding-left: 0; }
  li + li { border-left: 1px solid var(--rule); }
  li :global(svg) { color: var(--olive); margin-bottom: .65rem; }
  h4 { margin: 0 0 .35rem; font-size: .92rem; }
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
