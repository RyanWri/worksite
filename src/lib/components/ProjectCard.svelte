<script lang="ts">
  import logo from "$lib/images/svelte-welcome.webp";
  export let slug: string;
  export let title: string;
</script>

<div class="bg-white shadow-md rounded-lg p-6">
  <div class="flex justify-center">
    <img src={logo} alt="welcome" class="w-32 h-32 rounded-full" />
  </div>
  <div class="mt-4">
    <h2 class="text-xl font-semibold">{title}</h2>
    <p class="text-gray-500">{slug}</p>
  </div>
</div>
