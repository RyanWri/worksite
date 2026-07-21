<script>
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    // Initialized from the DOM in onMount (set pre-paint by the app.html script).
    let isDarkMode = true;

    onMount(() => {
        isDarkMode = document.documentElement.classList.contains("dark");
    });

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
</script>

<header
    class="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur"
>
    <nav class="container flex items-center justify-between py-4">
        <!-- Brand -->
        <a
            class="flex items-center gap-2 sm:gap-3 text-lg font-bold tracking-tight sm:text-xl"
            href="/"
            aria-label="Ran Wright Home"
        >
            <img
                src={isDarkMode
                    ? "/images/brand_logo_white.svg"
                    : "/images/brand_logo.svg"}
                alt=""
                class="h-6 w-auto sm:h-7"
            />
            <span class="whitespace-nowrap">Ran Wright</span>
        </a>

        <!-- Dark mode toggle -->
        <button
            on:click={toggleDarkMode}
            class="rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Toggle dark mode"
        >
            <Icon
                icon={isDarkMode ? "octicon:sun-24" : "octicon:moon-24"}
                class="h-5 w-5"
            />
        </button>
    </nav>
</header>
