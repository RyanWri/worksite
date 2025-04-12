<script>
    import { browser } from "$app/environment";
    import { afterNavigate } from "$app/navigation";
    import Icon from "@iconify/svelte";

    let showMenu = false;
    let isDarkMode = true;

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        if (browser) {
            document.documentElement.classList.toggle("dark", isDarkMode);
        }
    }

    function toggleNavbar() {
        showMenu = !showMenu;
    }

    afterNavigate(() => {
        showMenu = false;
    });
</script>

<header class="bg-white dark:bg-gray-800 shadow-sm">
    <nav class="container py-4 px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="flex items-center justify-between">
            <!-- Logo and Brand Name -->
            <a
                class="flex items-center text-lg font-bold text-gray-800 dark:text-white sm:text-xl md:text-2xl"
                href="/"
                aria-label="DataZen.Dev Home"
            >
                <Icon
                    icon={isDarkMode
                        ? "iconoir:database-check"
                        : "iconoir:database-check-solid"}
                    class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mr-2 sm:mr-3"
                />
                <span class="whitespace-nowrap">DataZen.Dev</span>
            </a>

            <!-- Mobile Menu and Dark Mode Toggle -->
            <div class="flex items-center space-x-4 md:hidden">
                <button
                    on:click={toggleDarkMode}
                    class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Toggle dark mode"
                >
                    <Icon
                        icon={isDarkMode
                            ? "octicon:sun-24"
                            : "ic:outline-dark-mode"}
                        class="h-5 w-5"
                    />
                </button>
                <button
                    on:click={toggleNavbar}
                    type="button"
                    class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Toggle menu"
                    aria-expanded={showMenu}
                >
                    <Icon icon="gg:menu" class="h-5 w-5" />
                </button>
            </div>
        </div>

        <!-- Navigation Links -->
        <div
            class={`${
                showMenu ? "flex" : "hidden"
            } flex-col mt-4 space-y-3 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6 md:mt-0 md:ml-auto`}
        >
            <a
                class="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 md:py-0"
                href="/technologies"
            >
                Technologies
            </a>
            <a
                class="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 md:py-0"
                href="/about"
            >
                About
            </a>
            <a
                class="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 md:py-0"
                href="/contact"
            >
                Contact
            </a>
        </div>

        <!-- Dark Mode for Large Screens -->
        <div class="hidden md:flex items-center">
            <button
                on:click={toggleDarkMode}
                class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle dark mode"
            >
                <Icon
                    icon={isDarkMode
                        ? "octicon:sun-24"
                        : "ic:outline-dark-mode"}
                    class="h-5 w-5"
                />
            </button>
        </div>
    </nav>
</header>
