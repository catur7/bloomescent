<script lang="ts">
  import { ArrowUpRight } from '@lucide/svelte';
  import PageMeta from '#lib/components/PageMeta.svelte';
  import { socialLinks, whatsappLink } from '#lib/storefront.ts';
</script>

<PageMeta title="Contact | Bloomé Scent" description="Get in touch with Bloomé Scent on WhatsApp for help choosing a wax sachet or to ask about an order." />

<section class="wrap contact" aria-labelledby="contact-title">
  <div>
    <h1 id="contact-title" class="display-title">Let’s talk <em>scents.</em></h1>
    <p>Have a scent in mind? Tell us what you like and where you’d use your sachet. We’ll help you choose.</p>
    <a class="button primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>

    <div class="social">
      <h2>Find us on social</h2>
      <ul>
        {#each socialLinks as item (item.href)}
          <li><a href={item.href} target="_blank" rel="noopener noreferrer">
            <strong>{item.label}</strong><span>{item.handle}</span><ArrowUpRight size={15} aria-hidden="true" />
          </a></li>
        {/each}
      </ul>
    </div>
  </div>
  <img src="/images/boxed-sachet.webp" srcset="/images/boxed-sachet-small.webp 420w, /images/boxed-sachet.webp 760w" sizes="(max-width: 700px) 92vw, 46vw" width="760" height="1140" alt="A Bloomé wax sachet with pink petals in an open kraft box" />
</section>

<style>
  .contact { display: grid; grid-template-columns: 1fr .92fr; gap: clamp(2.1rem, 8vw, 8rem); align-items: center; padding-block: var(--section); }
  .contact p { max-width: 40ch; margin: 1rem 0 1.5rem; }
  img { width: 100%; height: auto; aspect-ratio: 1.08; object-fit: cover; object-position: center 59%; }
  .social { margin-top: 2.6rem; max-width: 26rem; }
  .social h2 { font-size: 2rem; }
  ul { list-style: none; margin: .75rem 0 0; padding: 0; border-top: 1px solid var(--rule); }
  li { border-bottom: 1px solid var(--rule); }
  li a { display: grid; grid-template-columns: minmax(4.6rem, .6fr) 1fr auto; align-items: center; gap: .6rem; min-height: 46px; font-size: .86rem; text-decoration: none; }
  li a:hover strong { text-decoration: underline; }
  li span { color: var(--muted); overflow-wrap: anywhere; }
  @media (max-width: 700px) { .contact { grid-template-columns: 1fr; } }
</style>
