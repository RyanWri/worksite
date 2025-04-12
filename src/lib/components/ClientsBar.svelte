<script>
    export let logos = [];
</script>

<div class="relative overflow-hidden w-full bg-gray-50 dark:bg-gray-800 py-6">
    <!-- Wrapper for the logos -->
    <div class="animate-scroll flex gap-6 sm:gap-8 w-max">
        {#each logos as logo}
            <img
                src={logo}
                alt="Client logo"
                class="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
        {/each}
        <!-- Duplicate logos for seamless loop -->
        {#each logos as logo}
            <img
                src={logo}
                alt="Client logo"
                class="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
        {/each}
    </div>
</div>
