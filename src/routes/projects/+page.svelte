<script>
  import Project from "$lib/components/Project.svelte";
  import { onMount } from "svelte";

  let projects = [];
  onMount(async () => {
    const response = await fetch("/data/projects.json");
    if (response.ok) {
      projects = await response.json();
    } else {
      console.error("Failed to fetch projects");
    }
  });
</script>

<div class="grid lg:grid-cols-2 md:grid-cols-3 gap-4">
  {#each projects as project}
    <Project {project} />
  {/each}
</div>
