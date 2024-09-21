<script>
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    let services = [];

    // Fetch the services from the JSON file
    onMount(async () => {
        const response = await fetch("/data/services.json");
        if (response.ok) {
            services = await response.json();
        } else {
            console.error("Failed to load services data");
        }
    });
</script>

<section class="container mx-auto p-8">
    <h1 class="text-4xl font-bold text-center mb-12">Our Services</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each services as service}
            <div
                class="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105"
            >
                <Icon
                    icon={service.icon}
                    class="h-16 w-16 mb-4 text-gray-700 dark:text-white"
                />
                <h2 class="text-2xl font-bold dark:text-white">
                    {service.title}
                </h2>
                <p class="text-gray-600 dark:text-gray-400 mt-2 text-center">
                    {service.description}
                </p>
            </div>
        {/each}
    </div>
</section>
