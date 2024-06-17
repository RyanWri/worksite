<script>
  export let image;
  export let title;
  export let description;
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full h-1/2" src={image} alt={title} />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-md text-base">{description}</p>
  </div>
</div>
