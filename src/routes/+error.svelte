<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte"; // Import the Iconify component

  // Function to go back to the previous page
  function goBack() {
    history.back();
  }

  // Function to go to the homepage
  function goHome() {
    goto("/");
  }
</script>

<section
  class="container mx-auto p-4 flex flex-col items-center justify-center text-center"
>
  <!-- Forbidden Icon -->
  <Icon icon="mdi:alert-circle-outline" class="text-red-600 w-16 h-16 mb-4" />

  <h1 class="text-4xl font-bold text-red-600 mb-2">404 - Page Not Found</h1>
  <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
    Sorry, the page you are looking for does not exist or may have been moved.
  </p>

  <!-- Action buttons -->
  <div class="flex space-x-2">
    <button
      on:click={goBack}
      class="px-3 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      Go Back
    </button>

    <button
      on:click={goHome}
      class="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Go to Homepage
    </button>
  </div>
</section>
