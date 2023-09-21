<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { data } from "./data";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  {#each data.projects as project_item}
    <div class="mb-4">
      <ProjectCard {project_item} />
    </div>
  {/each}
</div>
