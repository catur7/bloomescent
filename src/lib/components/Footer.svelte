<script lang="ts">
  import { ArrowUp, ArrowUpRight } from '@lucide/svelte';
  import { navigation, socialLinks } from '#lib/storefront.ts';
  import Brand from './Brand.svelte';
</script>

<footer>
  <div class="wrap">
    <div class="site-map">
      <div><Brand /><p>Elegant by Nature<br />Semarang, Indonesia</p></div>
      <nav aria-label="Footer navigation">
        {#each navigation as item (item.href)}<a href={item.href}>{item.label}</a>{/each}
      </nav>
      <div class="social" aria-label="Social media">
        {#each socialLinks as social (social.href)}
          <a href={social.href} target="_blank" rel="noopener noreferrer">{social.label} <ArrowUpRight size={14} aria-hidden="true" /></a>
        {/each}
      </div>
    </div>
    <div class="legal"><small>© 2026 Bloomé Scent. All rights reserved.</small><a href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a></div>
  </div>
</footer>

<style>
  footer { background: var(--olive); color: var(--paper); --footer-rule: #f7eddb45; }
  .site-map { display: grid; grid-template-columns: 1.3fr 1fr auto; gap: 2rem; padding-block: 2.6rem 2.2rem; }
  .site-map p { margin: .8rem 0 0; color: #e4dfd0; font-size: .84rem; }
  nav, .social { display: grid; align-content: start; justify-items: start; column-gap: .8rem; }
  nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  nav a, .social a, .legal a { display: inline-flex; align-items: center; gap: .4rem; min-height: 44px; font-size: .83rem; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .legal { border-top: 1px solid var(--footer-rule); display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-block: .85rem; }
  @media (max-width: 700px) {
    .site-map { grid-template-columns: 1fr auto; }
    .site-map > div:first-child { grid-column: 1 / -1; }
    nav { grid-template-columns: 1fr; }
  }
</style>
