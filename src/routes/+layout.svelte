<script lang="ts">
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "./styles.css";
</script>

<header>
  <Header />
</header>
<main class="h-screen w-screen">
  <slot />
</main>

<footer class="mt-1 border-2 shadow-md">
  <Footer />
</footer>
