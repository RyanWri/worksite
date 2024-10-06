<script>
    // Import the ClientsBars component
    import ClientsBars from "$lib/components/ClientsBar.svelte";

    // Data passed from the server (SSR)
    export let data;
    export let team = data.team;
    export let logos = data.logos;
</script>

<!-- About Us Section -->
<section class="bg-white dark:bg-gray-900 py-12 px-6 lg:px-12">
    <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Journey
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-400 mb-8">
            Our company was founded with a single goal: to empower hands-on
            developers and prepare them for real-world challenges. We offer
            hands-on training, consulting, and resources to help you excel in
            your career.
        </p>
        <p class="text-lg text-gray-700 dark:text-gray-400 mb-8">
            We believe in the power of the open-source community and acknowledge
            the incredible work that has gone into the tools we use every day.
            Our mission is to help you succeed by offering market-ready skills
            and tools, with a strong focus on listening to our clients' needs.
        </p>
        <p class="text-lg font-semibold text-blue-600 dark:text-blue-400">
            Join us in shaping the future of technology.
        </p>
    </div>
</section>

<!-- Trusted By Section -->
<section class="bg-gray-100 dark:bg-gray-900 py-12">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted By
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-400 mb-8">
            Our clients work closely with us to achieve their business goals. We
            listen, we learn, and we deliver solutions that help them succeed in
            a competitive landscape.
        </p>
        <!-- Client Logos -->
        <ClientsBars {logos} />
    </div>
</section>

<!-- Management Team Section -->
<section class="bg-gray-100 dark:bg-gray-900 py-12">
    <div class="container mx-auto text-center">
        <h2
            class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
            Management Team
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each team as member}
                <div
                    class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
                >
                    <img
                        src={member.avatar}
                        alt={member.name}
                        class="h-24 w-24 rounded-full mb-4 object-cover"
                    />
                    <h3
                        class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                        {member.name}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
                        {member.position}
                    </p>
                    <p class="mt-2 text-gray-500 dark:text-gray-300">
                        {member.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
