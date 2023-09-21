<script>
  export let project_item;
</script>

<div class="bg-white shadow-md rounded-lg p-6">
  <div class="flex justify-center">
    <img
      src={`/images/${project_item.imagePath}`}
      alt="welcome"
      class="w-32 h-32 rounded"
    />
  </div>
  <div class="mt-4">
    <h2 class="text-xl font-semibold">{project_item.title}</h2>
    <p class="text-gray-500">{project_item.slug}</p>
  </div>
</div>
