<script>
  import { onMount } from "svelte";

  let educationData = [];

  onMount(async () => {
    const response = await fetch("/data/education.json");
    if (response.ok) {
      educationData = await response.json();
    } else {
      console.error("Failed to fetch data");
    }
  });
</script>

<section class="container mx-auto p-8">
  <h1 class="text-4xl font-bold text-center mb-12">Education</h1>

  {#if educationData && educationData.length > 0}
    <div class="relative border-l border-gray-200 dark:border-gray-700">
      {#each educationData as item}
        <div class="mb-10 ml-6">
          <!-- Timeline Dot -->
          <span
            class="absolute w-4 h-4 bg-gray-200 rounded-full -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></span>

          <!-- Education Details -->
          <div class="flex items-start space-x-6">
            <img
              src={`/images/${item.logo}`}
              alt={item.institution}
              class="rounded-full h-20 w-20 object-cover"
            />

            <div>
              <h2 class="text-xl font-bold dark:text-white">
                {item.degree} in {item.field}
              </h2>
              <time
                class="block text-sm font-semibold text-gray-500 dark:text-gray-400"
                >{item.date}</time
              >
              <ul
                class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2"
              >
                {#each item.description as bullet}
                  <li>{bullet}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>
