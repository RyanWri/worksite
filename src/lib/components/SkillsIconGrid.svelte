<script>
  import Icon from "@iconify/svelte";
  export let skills_item;
</script>

<h2 class="text-2xl font-bold mb-4 mt-1 capitalize">{skills_item.category}</h2>
<div class="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-1 pb-4 mb-2">
  {#each skills_item.technologies as icon}
    <Icon {icon} height="48" width="48" />
  {/each}
</div>
