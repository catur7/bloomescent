<script lang="ts">
  import { ArrowUpRight, Menu, X } from '@lucide/svelte';
  import { page } from '$app/state';
  import { navigation } from '#lib/storefront.ts';
  import Brand from './Brand.svelte';

  let open = $state(false);
  let toggle: HTMLButtonElement;

  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      open = false;
      toggle?.focus();
    }
  }
</script>

<svelte:window onkeydown={handleEscape} />

<header class="masthead" id="top">
  <div class="wrap header-inner">
    <Brand />
    <button class="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-nav" bind:this={toggle} onclick={() => (open = !open)}>
      {#if open}<X size={23} aria-hidden="true" />{:else}<Menu size={23} aria-hidden="true" />{/if}
    </button>
    <nav id="site-nav" class:open aria-label="Main navigation">
      {#each navigation as item (item.href)}
        <a href={item.href} aria-current={page.url.pathname === item.href ? 'page' : undefined} onclick={() => (open = false)}>{item.label}</a>
      {/each}
    </nav>
    <a href="/products" class="header-action">Explore scents <ArrowUpRight size={15} aria-hidden="true" /></a>
  </div>
</header>

<style>
  .masthead { position: relative; z-index: 2; background: var(--paper); border-bottom: 1px solid var(--rule); }
  .header-inner { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; min-height: 74px; gap: 1.5rem; }
  nav { display: flex; align-items: center; gap: clamp(1rem, 2.5vw, 2.7rem); }
  nav a, .header-action { font-size: .8rem; font-weight: 650; text-decoration: none; }
  nav a { display: inline-flex; align-items: center; min-height: 44px; }
  nav a:hover, nav a[aria-current] { text-decoration: underline; }
  .header-action { justify-self: end; display: flex; align-items: center; gap: .5rem; border-bottom: 1px solid currentColor; padding-block: .33rem; }
  .menu-toggle { display: none; }
  @media (max-width: 850px) {
    .header-inner { min-height: 64px; grid-template-columns: 1fr auto; }
    .header-action { display: none; }
    .menu-toggle { display: grid; place-items: center; width: 44px; height: 44px; background: transparent; color: inherit; border: 0; cursor: pointer; }
    nav { display: none; position: absolute; inset: 100% 0 auto; padding: .5rem var(--gutter) 1.15rem; background: var(--paper); border-bottom: 1px solid var(--rule); }
    nav.open { display: grid; gap: 0; }
    nav a { padding-block: .85rem; border-bottom: 1px solid var(--rule); }
    nav a:last-child { border: 0; }
    @media (scripting: none) {
      nav { display: flex; flex-wrap: wrap; position: static; grid-column: 1 / -1; padding: 0 0 .8rem; border: 0; }
      nav a { padding: .4rem 0; border: 0; }
      .menu-toggle { display: none; }
    }
  }
</style>
