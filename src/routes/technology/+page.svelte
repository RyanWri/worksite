<script lang="ts">
  import TechCard from "$lib/components/TechCard.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

{#each data.skills as { category, technologies, type_icon }}
  <TechCard {category} {technologies} {type_icon} />
{/each}
