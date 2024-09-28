<script>
  export let image;
  export let title;
  export let description;
</script>

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
  <img
    src={image}
    alt={title}
    class="w-full h-auto object-cover aspect-[16/9]"
  />
  <div class="p-4">
    <h2 class="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
    <p class="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
  </div>
</div>
