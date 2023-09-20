<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import "../app.css";
</script>

<Header />
<main class="h-screen dark-main-content">
  <slot />
</main>
