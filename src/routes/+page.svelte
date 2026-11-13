<script lang="ts">
  import Collection from '#lib/components/Collection.svelte';
  import Company from '#lib/components/Company.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import Header from '#lib/components/Header.svelte';
  import Hero from '#lib/components/Hero.svelte';
  import ProductInformation from '#lib/components/ProductInformation.svelte';

  const title = 'Bloomé Scent | Elegant by Nature';
  const description = 'Handmade wax sachets from Semarang with dried flowers and fruit peels. Choose from Bloomy Lavender, Jasmine, and Dalgona Coffee for Rp13.000 each.';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="theme-color" content="#faf5ea" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
</svelte:head>

<a href="#main" class="skip">Skip to content</a>
<Header />
<main id="main" tabindex="-1">
  <Hero />
  <Company />
  <ProductInformation />
  <Collection />
</main>
<Footer />
