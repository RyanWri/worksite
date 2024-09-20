<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import "../app.css";
  import Footer from "./Footer.svelte";
</script>

<Header />
<main class="min-h-screen">
  <slot />
</main>
<Footer />
