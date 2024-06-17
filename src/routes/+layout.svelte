<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import "../app.css";
  import "modern-normalize/modern-normalize.css";
  import NextPrevButton from "$lib/components/NextPrevButton.svelte";
  import Footer from "./Footer.svelte";
</script>

<Header />
<main class="min-h-screen">
  <slot />
  <NextPrevButton />
</main>
<Footer />
