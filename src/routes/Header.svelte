<!--   This header is mobile compatible -->
<script>
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";

  let showMenu = false;
  // Add this to a component or layout file
  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", isDarkMode);
  }
  function toggleNavbar() {
    showMenu = !showMenu;
  }

  afterNavigate(() => {
    showMenu = false;
  });
</script>

<header class="sticky top-0 w-full shadow-md bg-white dark:bg-slate-400">
  <div>
    <div>
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <a
            class="flex text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
            href="/"
          >
            <img
              src={"/images/brand_logo.svg"}
              class="h-8 mr-3"
              alt="The Wright Way"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap"
              >The Wright Way</span
            >
          </a>
          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <div class="flex flex-row gap-5">
              <button on:click={toggleDarkMode}>
                {#if isDarkMode}
                  <Icon icon="ic:round-dark-mode" />
                {:else}
                  <Icon icon="ic:outline-dark-mode" />
                {/if}
              </button>
              <button
                on:click={toggleNavbar}
                type="button"
                class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              >
                <Icon icon="gg:menu" />
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        {showMenu ? 'flex' : 'hidden'}"
        >
          <a class="text-gray-800 hover:text-blue-400" href="#about">About</a>
          <a class="text-gray-800 hover:text-blue-400" href="#projects"
            >Projects</a
          >
          <a class="text-gray-800 hover:text-blue-400" href="#technologies"
            >Technologies</a
          >
          <a class="text-gray-800 hover:text-blue-400" href="#contact"
            >Contact</a
          >
          <a
            class="text-gray-800 hover:text-blue-400"
            href="/sandbox"
            aria-current={$page.url.pathname === "/"}>Sandbox</a
          >
        </div>
      </nav>
    </div>
  </div>
</header>
