<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import "../app.css";
  import NextPrevButton from "$lib/components/NextPrevButton.svelte";
  import Footer from "./Footer.svelte";
</script>

<Header />
<main class="dark-main-content">
  <slot />
  <NextPrevButton />
</main>
<Footer />
