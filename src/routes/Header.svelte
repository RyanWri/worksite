<!--   This header is mobile compatible -->
<script lang="ts">
  import { afterNavigate } from "$app/navigation";

  let showMenu: boolean = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }

  afterNavigate(() => {
    showMenu = false;
  });
</script>

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
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >The Wright Way</span
          >
        </a>
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            on:click={toggleNavbar}
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
          ? 'flex'
          : 'hidden'}"
      >
        <a class="text-gray-800 hover:text-blue-400" href="/about">About</a>
        <a class="text-gray-800 hover:text-blue-400" href="/projects"
          >Projects</a
        >
        <a class="text-gray-800 hover:text-blue-400" href="/technology"
          >Technology</a
        >
        <a class="text-gray-800 hover:text-blue-400" href="/contact">Contact</a>
        <a class="text-gray-800 hover:text-blue-400" href="/sandbox">Sandbox</a>
      </div>
    </nav>
  </div>
</div>
