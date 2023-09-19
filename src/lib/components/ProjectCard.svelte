<script>
  export let imagePath;
  export let slug;
  export let title;
</script>

<div class="bg-white shadow-md rounded-lg p-6">
  <div class="flex justify-center">
    <img src={`/images/${imagePath}`} alt="welcome" class="w-32 h-32 rounded" />
  </div>
  <div class="mt-4">
    <h2 class="text-xl font-semibold">{title}</h2>
    <p class="text-gray-500">{slug}</p>
  </div>
</div>
