<script>
  import { onMount } from "svelte";

  let timelineData = [];

  onMount(async () => {
    const response = await fetch("/data/work_experince.json");
    if (response.ok) {
      timelineData = await response.json();
    } else {
      console.error("Failed to fetch data");
    }
  });
</script>

{#if timelineData && timelineData.length > 0}
  <div class="container mx-auto p-4">
    <h1 class="page-title text-3xl font-bold text-center my-8">
      Work Experience
    </h1>
    <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-3">
      {#each timelineData as item, index}
        <li class="mb-10 ml-4">
          {#if index === 0}
            <!-- Offset the first item to start the line from its top -->
            <div
              class="absolute w-3 h-3 bg-gray-200 rounded-full mt-0 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
            ></div>
          {/if}

          <div class="flex items-center space-x-4">
            <img
              src={`/images/${item.logo}`}
              alt={item.company}
              class="rounded-full h-16 w-16 object-cover"
            />
            <div>
              <h2 class="text-lg font-bold dark:text-white">{item.title}</h2>
              <time
                class="block mb-1 font-semibold text-gray-500 dark:text-gray-400"
                >{item.date}</time
              >
              <ul
                class="list-disc list-inside text-gray-700 dark:text-gray-300"
              >
                {#each item.description as bullet}
                  <li>{bullet}</li>
                {/each}
              </ul>
            </div>
          </div>
        </li>
      {/each}
    </ol>
  </div>
{/if}

<style>
  .container {
    position: relative;
  }
  ol.relative::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    top: 1.5rem; /* Adjusted to align with the first item */
    left: 1.5rem; /* Align with the bullet points */
    background-color: #cbd5e0; /* Tailwind border-gray-300 */
  }
  @media (min-width: 768px) {
    .container {
      max-width: 800px;
    }
  }
</style>
