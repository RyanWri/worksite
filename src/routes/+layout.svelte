<script lang="ts">
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "./styles.css";
  import "../app.css";
  import Header2 from "./Header2.svelte";
</script>

<header>
  <Header2 />
</header>
<main class="h-screen w-screen">
  <slot />
</main>

<footer class="bg-gray-100 mt-1">
  <Footer />
</footer>
