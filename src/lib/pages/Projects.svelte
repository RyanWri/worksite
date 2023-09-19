<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  export let data;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  {#each data.posts as { slug, title, imagePath }}
    <div class="mb-4">
      <ProjectCard {slug} {title} {imagePath} />
    </div>
  {/each}
</div>
