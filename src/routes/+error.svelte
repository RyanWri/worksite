<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";

  function navigateHome() {
    goto("/");
  }
</script>

<div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
  <div class="flex flex-col items-center max-w-sm mx-auto text-center">
    <p
      class="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800"
    >
      <Icon icon="nonicons:not-found-16" />
    </p>
    <h1
      class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
    >
      Page not found
    </h1>
    <p class="mt-4 text-gray-500 dark:text-gray-400">
      The page you are looking for doesn't exist. Here are some helpful links:
    </p>

    <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
      <button
        on:click={() => history.back()}
        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
      >
        <Icon icon="ep:back" />
        <span>Go back</span>
      </button>

      <button
        on:click={navigateHome}
        class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
      >
        Take me home
      </button>
    </div>
  </div>
</div>
