<script>
  import TechCard from "$lib/components/TechCard.svelte";
  import { data } from "./data";
</script>

<div>
  {#each data.skills_by_category as technology_item}
    <TechCard {technology_item} />
  {/each}
</div>
