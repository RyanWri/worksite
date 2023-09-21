<script>
  import Icon from "@iconify/svelte";
  export let technology_item;
</script>

<h2 class="text-2xl text-black mb-4 capitalize">{technology_item.category}</h2>
<div class="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-1 pb-4 mb-2">
  {#each technology_item.technologies as sub_item}
    <Icon
      icon="{technology_item.type_icon}:{sub_item}"
      height="48"
      width="48"
    />
  {/each}
</div>
