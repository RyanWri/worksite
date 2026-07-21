<script>
  import { goto } from "$app/navigation";

  function goBack() {
    history.back();
  }

  function goHome() {
    goto("/");
  }
</script>

<section
  class="container flex flex-col items-center justify-center py-24 text-center"
>
  <p class="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
    Error 404
  </p>
  <h1 class="mb-2 text-4xl font-bold tracking-tight">Page not found</h1>
  <p class="mb-8 max-w-md text-lg text-muted">
    Sorry, the page you are looking for does not exist or may have been moved.
  </p>

  <div class="flex gap-3">
    <button
      on:click={goBack}
      class="rounded-md border border-border px-4 py-2 font-medium text-fg transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      Go Back
    </button>
    <button
      on:click={goHome}
      class="rounded-md bg-accent px-4 py-2 font-medium text-white transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      Go to Homepage
    </button>
  </div>
</section>
