<script>
  import Icon from "@iconify/svelte";
  export let skills_item;
</script>

<h2
  class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-1 capitalize text-gray-900 dark:text-white"
>
  {skills_item.category}
</h2>
<div
  class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 sm:gap-3 pb-3 sm:pb-4 mb-2"
>
  {#each skills_item.technologies as icon}
    <div class="flex justify-center items-center">
      <Icon
        {icon}
        class="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-700 dark:text-gray-300"
      />
    </div>
  {/each}
</div>
