<script>
  import SkillsIconGrid from "$lib/components/SkillsIconGrid.svelte";
  import { data } from "./data";
  let skills = data.skills;
</script>

<div class="container mx-auto">
  <h1 class="page-title">Skills</h1>
  {#each skills as skills_item}
    <SkillsIconGrid {skills_item} />
    <div class="border-t divide-y-2 divide-dashed bg-gray-600 my-2" />
  {/each}
</div>
