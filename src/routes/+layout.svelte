<script lang="ts">
  import '@fontsource/instrument-serif/latin-400.css';
  import '@fontsource/instrument-serif/latin-400-italic.css';
  import '@fontsource-variable/dm-sans';
  import Header from '#lib/components/Header.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#faf5ea" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
</svelte:head>

<a href="#main" class="skip">Skip to content</a>
<Header />
<main id="main" tabindex="-1">
  {@render children()}
</main>
<Footer />
