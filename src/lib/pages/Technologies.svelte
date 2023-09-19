<script>
  import TechCard from "$lib/components/TechCard.svelte";
  export let data;
</script>

<div>
  {#each data.skills as { category, technologies, type_icon }}
    <TechCard {category} {technologies} {type_icon} />
  {/each}
</div>
