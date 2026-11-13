<script lang="ts">
  import Collection from '#lib/components/Collection.svelte';
  import Company from '#lib/components/Company.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import Header from '#lib/components/Header.svelte';
  import Hero from '#lib/components/Hero.svelte';
  import ProductInformation from '#lib/components/ProductInformation.svelte';

  const title = 'Bloomé Scent | Elegant by Nature';
  const description = 'Scented wax buatan tangan dari Semarang dengan bunga dan kulit buah kering. Pilih Bloomy Lavender, Jasmine, atau Dalgona Coffee dengan harga Rp13.000.';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="theme-color" content="#faf5ea" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
</svelte:head>

<a href="#main" class="skip">Lewati ke konten</a>
<Header />
<main id="main" tabindex="-1">
  <Hero />
  <Company />
  <ProductInformation />
  <Collection />
</main>
<Footer />
