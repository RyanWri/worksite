<!--   This header is mobile compatible -->
<script>
  import { afterNavigate } from "$app/navigation";
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

<header class="dark-header">
  <div>
    <div>
      <nav
        class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <a
            class="flex text-xl font-bold text-gray-800 dark:text-white md:text-2xl"
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
                  <Icon icon="octicon:sun-24" />
                {:else}
                  <Icon icon="ic:outline-dark-mode" />
                {/if}
              </button>
              <button on:click={toggleNavbar} type="button">
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
          <a class="text-gray-800 dark:text-white" href="/profile">Profile</a>
          <a class="text-gray-800 dark:text-white" href="/experience"
            >Work Experience</a
          >
          <a class="text-gray-800 dark:text-white" href="/education"
            >Education</a
          >
          <a class="text-gray-800 dark:text-white" href="/skills">Skills</a>
          <a class="text-gray-800 dark:text-white" href="/hobbies">Hobbies</a>
        </div>

        <!-- dark mode and github logo on large screens-->
        <div class="flex">
          <div class="flex flex-row gap-4 invisible md:visible">
            <button on:click={toggleDarkMode}>
              {#if isDarkMode}
                <Icon icon="octicon:sun-24" />
              {:else}
                <Icon icon="ic:outline-dark-mode" />
              {/if}
            </button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
