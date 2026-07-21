<script>
    import { browser } from "$app/environment";
    import Icon from "@iconify/svelte";

    let isDarkMode = true;

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        if (browser) {
            document.documentElement.classList.toggle("dark", isDarkMode);
        }
    }
</script>

<header class="bg-white dark:bg-gray-800 shadow-sm">
    <nav class="container py-4 px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="flex items-center justify-between">
            <!-- Logo and Brand Name -->
            <a
                class="flex items-center text-lg font-bold text-gray-800 dark:text-white sm:text-xl md:text-2xl"
                href="/"
                aria-label="Ran Wright Home"
            >
                <img
                    src={isDarkMode
                        ? "/images/brand_logo_white.svg"
                        : "/images/brand_logo.svg"}
                    alt=""
                    class="h-6 w-auto sm:h-7 md:h-8 mr-2 sm:mr-3"
                />
                <span class="whitespace-nowrap">Ran Wright</span>
            </a>

            <!-- Dark Mode Toggle -->
            <button
                on:click={toggleDarkMode}
                class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle dark mode"
            >
                <Icon
                    icon={isDarkMode ? "octicon:sun-24" : "ic:outline-dark-mode"}
                    class="h-5 w-5"
                />
            </button>
        </div>
    </nav>
</header>
