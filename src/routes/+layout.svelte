<script lang="ts">
  import Header from "./Header.svelte";
  import "./styles.css";
</script>

<Header />
<main class="h-screen w-screen">
  <slot />
</main>
