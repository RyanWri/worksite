<script>
    import { afterNavigate } from "$app/navigation";
    import Icon from "@iconify/svelte";

    let showMenu = false;
    let isDarkMode = true;

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
    <nav
        class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center"
    >
        <div class="flex items-center justify-between">
            <!-- Logo and Brand Name -->
            <a
                class="flex text-xl font-bold text-gray-800 dark:text-white md:text-2xl"
                href="/"
            >
                <img
                    src={isDarkMode
                        ? "/images/brand_logo_white.svg"
                        : "/images/brand_logo.svg"}
                    class="h-8 mr-3"
                    alt="The Wright Way"
                />
                <span
                    class="self-center text-xl font-semibold whitespace-nowrap"
                    >The Wright Way</span
                >
            </a>
            <!-- Mobile Menu and Dark Mode Toggle -->
            <div class="flex md:hidden">
                <div class="flex gap-5">
                    <button on:click={toggleDarkMode}>
                        <Icon
                            icon={isDarkMode
                                ? "octicon:sun-24"
                                : "ic:outline-dark-mode"}
                        />
                    </button>
                    <button on:click={toggleNavbar} type="button">
                        <Icon icon="gg:menu" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Navigation Links -->
        <div
            class={`flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ${showMenu ? "flex" : "hidden"}`}
        >
            <a class="text-gray-800 dark:text-white" href="/technologies"
                >Technologies</a
            >
            <a class="text-gray-800 dark:text-white" href="/hobbies">Hobbies</a>
            <a class="text-gray-800 dark:text-white" href="/about">About Us</a>
        </div>

        <!-- Dark Mode and Other Icons for Large Screens -->
        <div class="hidden md:flex gap-4">
            <button on:click={toggleDarkMode}>
                <Icon
                    icon={isDarkMode
                        ? "octicon:sun-24"
                        : "ic:outline-dark-mode"}
                />
            </button>
        </div>
    </nav>
</header>
