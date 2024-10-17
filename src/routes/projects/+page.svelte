<script>
  import Project from "$lib/components/Project.svelte";
  export let data;
  export let projects = data.projects;
</script>

<div class="grid lg:grid-cols-2 md:grid-cols-3 gap-4">
  {#each projects as project}
    <Project {project} />
  {/each}
</div>
