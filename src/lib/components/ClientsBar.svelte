<script>
    export let logos = [];
</script>

<div class="relative overflow-hidden w-full bg-gray-100 py-4">
    <!-- Wrapper for the logos -->
    <div class="animate-scroll gap-8 w-max">
        {#each logos as logo}
            <img
                src={logo}
                alt="Client logo"
                class="h-16 w-auto object-contain"
            />
        {/each}
        <!-- Duplicate logos for seamless loop -->
        {#each logos as logo}
            <img
                src={logo}
                alt="Client logo"
                class="h-16 w-auto object-contain"
            />
        {/each}
    </div>
</div>
