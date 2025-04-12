<!-- Project.svelte -->
<script>
  import Icon from "@iconify/svelte";

  export let project;
</script>

<div
  class="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4 mb-3 sm:mb-4 bg-white dark:bg-gray-800"
>
  <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
    {project.company}
  </h2>
  <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-1">
    <strong>Purpose:</strong>
    {project.purpose}
  </p>
  <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-1">
    <strong>Technologies:</strong>
  </p>
  <div class="flex flex-wrap gap-2 mt-2">
    {#each project.technologies as tech}
      <div class="flex items-center justify-center">
        <Icon
          icon={tech}
          class="h-6 w-6 sm:h-8 sm:w-8 text-gray-700 dark:text-gray-300"
        />
      </div>
    {/each}
  </div>
</div>
