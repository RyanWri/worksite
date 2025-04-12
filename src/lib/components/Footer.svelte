<script>
    import Icon from "@iconify/svelte";
</script>

<footer class="bg-white dark:bg-gray-800 py-6">
    <hr class="border-gray-200 dark:border-gray-700 mb-6" />
    <div class="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
            <span
                class="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left"
            >
                © 2023 <a href="/" class="hover:underline">DataZen.Dev™</a>.
                All Rights Reserved.
            </span>

            <!-- Social Icons -->
            <div class="flex justify-center space-x-5 sm:justify-end">
                <a
                    href="https://github.com/RyanWri"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <Icon icon="mdi:github" class="h-5 w-5" />
                </a>
                <a
                    href="https://discordapp.com/users/1119880721289453639"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Discord"
                >
                    <Icon icon="mdi:discord" class="h-5 w-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/ran-wright46/"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="LinkedIn"
                >
                    <Icon icon="mdi:linkedin" class="h-5 w-5" />
                </a>
                <a
                    href="https://www.facebook.com/rrwright46/"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Facebook"
                >
                    <Icon icon="mdi:facebook" class="h-5 w-5" />
                </a>
            </div>
        </div>
    </div>
</footer>
