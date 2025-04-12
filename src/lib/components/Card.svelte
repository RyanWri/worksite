<script>
  export let image;
  export let title;
  export let description;
</script>

<div
  class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md"
>
  <img
    src={image}
    alt={title}
    class="w-full h-auto object-cover aspect-[16/9]"
  />
  <div class="p-3 sm:p-4">
    <h2 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h2>
    <p
      class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2"
    >
      {description}
    </p>
  </div>
</div>
