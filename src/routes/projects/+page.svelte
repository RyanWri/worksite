<script lang="ts">
  import type { PageData } from "./$types";
  import Counter from "$lib/components/Counter.svelte";
  export let data: PageData;
</script>

<div class="container">
  <h1 class="text-2xl">Projects</h1>
  <Counter />
</div>
