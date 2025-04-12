<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";
</script>

<div
  class="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
>
  <Header />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>
