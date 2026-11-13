<script lang="ts">
  import { ArrowUp, ArrowUpRight } from '@lucide/svelte';
  import { navigation, whatsappLink } from '#lib/storefront.ts';
  import Brand from './Brand.svelte';
</script>

<footer id="kontak" aria-labelledby="contact-title">
  <div class="wrap">
    <div class="contact">
      <div>
        <h2 id="contact-title">Bingung pilih aroma?</h2>
        <p>Tanya tentang varian atau cara pesan lewat WhatsApp.</p>
      </div>
      <a class="button light" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Buka WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>
    </div>
    <div class="site-map">
      <div><Brand /><p>Elegant by Nature<br />Semarang, Indonesia</p></div>
      <nav aria-label="Navigasi footer">
        {#each navigation as item (item.id)}<a href={'#' + item.id}>{item.label}</a>{/each}
      </nav>
      <div class="social" aria-label="Media sosial">
        <a href="https://www.instagram.com/bloome_scent/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} aria-hidden="true" /></a>
        <a href="https://www.tiktok.com/@house.of.bloomee" target="_blank" rel="noopener noreferrer">TikTok <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </div>
    <div class="legal"><small>© Bloomé Scent</small><a href="#home">Kembali ke atas <ArrowUp size={14} aria-hidden="true" /></a></div>
  </div>
</footer>

<style>
  footer { background: var(--olive); color: var(--paper); --footer-rule: #f7eddb45; }
  .contact { padding-block: clamp(2.5rem, 6vw, 5rem); display: flex; align-items: center; justify-content: space-between; gap: 1.5rem 3rem; border-bottom: 1px solid var(--footer-rule); }
  .contact p { margin: .75rem 0 0; color: #e4dfd0; }
  .site-map { display: grid; grid-template-columns: 1.3fr 1fr auto; gap: 2rem; padding-block: 2.6rem 2.2rem; }
  .site-map p { margin: .8rem 0 0; color: #e4dfd0; font-size: .84rem; }
  nav, .social { display: grid; align-content: start; justify-items: start; gap: .45rem; }
  nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  nav a, .social a, .legal a { font-size: .83rem; text-decoration: none; }
  .social a, .legal a { display: inline-flex; align-items: center; gap: .4rem; }
  a:hover { text-decoration: underline; }
  .legal { border-top: 1px solid var(--footer-rule); display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-block: .85rem; }
  @media (max-width: 700px) {
    .contact { align-items: flex-start; flex-direction: column; }
    .site-map { grid-template-columns: 1fr auto; }
    .site-map > div:first-child { grid-column: 1 / -1; }
    nav { grid-template-columns: 1fr; }
  }
</style>
