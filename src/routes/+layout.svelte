<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import "../app.css";
  import NextPrevButton from "$lib/components/NextPrevButton.svelte";
</script>

<Header />
<main class="h-screen dark-main-content">
  <slot />
  <NextPrevButton />
</main>
