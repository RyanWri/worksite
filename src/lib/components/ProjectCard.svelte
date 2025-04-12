<script>
  export let project_item;
</script>

<div
  class="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 sm:p-6 transition-shadow hover:shadow-md"
>
  <div class="flex justify-center">
    <img
      src={`/images/${project_item.imagePath}`}
      alt={project_item.title}
      class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded object-cover"
    />
  </div>
  <div class="mt-3 sm:mt-4">
    <h2 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
      {project_item.title}
    </h2>
    <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
      {project_item.slug}
    </p>
  </div>
</div>
