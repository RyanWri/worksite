<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section
  class="w-full aspect-w-1 aspect-h-1 bg-cover bg-center"
  style="background-image: url('/images/welcome-bg-comp.jpg')"
>
  <h1 class="text-2xl font-bold capitalize">Welcome to my website</h1>
  <p class="pt-6 text-xl mb-2 animated-text">
    I am here to assist you with the navigation
  </p>
  <a href="/about" class="text-blue-500 mb-2 animated-paragraph">About</a>
  <a href="/projects" class="text-blue-500 mb-2 animated-paragraph">Projects</a>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.9;
  }
</style>
