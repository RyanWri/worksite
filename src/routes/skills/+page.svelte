<script>
  import SkillsIconGrid from "$lib/components/SkillsIconGrid.svelte";
  import { onMount } from "svelte";

  let skillsData = [];

  onMount(async () => {
    const response = await fetch("/data/skills.json");
    if (response.ok) {
      skillsData = await response.json();
    } else {
      console.error("Failed to fetch data");
    }
  });
</script>

{#if skillsData && skillsData.length > 0}
  <div class="container mx-auto">
    <h1 class="page-title">Skills</h1>
    {#each skillsData as skills_item}
      <SkillsIconGrid {skills_item} />
      <div class="border-t divide-y-2 divide-dashed bg-gray-600 my-2" />
    {/each}
  </div>
{/if}
