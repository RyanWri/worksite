<!-- Project.svelte -->
<script>
  import Icon from "@iconify/svelte";

  export let project;
</script>

<div class="border border-r-2 p-4 mt-4 mb-4">
  <h2 class="text-lg font-bold">{project.company}</h2>
  <p><strong>Purpose:</strong> {project.purpose}</p>
  <p><strong>Technologies:</strong></p>
  <div class="flex flex-wrap">
    {#each project.technologies as tech}
      <Icon icon={tech} height="48" width="48" />
    {/each}
  </div>
</div>
