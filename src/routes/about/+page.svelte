<script>
    import ClientsBars from "$lib/components/ClientsBar.svelte";

    // Array of logo image URLs to pass to the component
    let logos = [
        "/images/akamai_logo.webp",
        "/images/cloudyo_logo.webp",
        "/images/rakuten_viber_logo.webp",
    ];
    let team = [
        {
            name: "Ryan Wright",
            position: "CEO",
            description:
                "Ryan leads the company with over 10 years of experience in tech and business.",
            avatar: "/images/me.webp",
        },
    ];
</script>

<!-- Management Team Section -->
<section class="bg-gray-100 dark:bg-gray-900 py-12">
    <div class="container mx-auto">
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

<section class="text-center py-12">
    <h1 class="page-title">About Us</h1>
    <p class="mt-4 text-lg text-gray-700 dark:text-gray-400">
        We provide cutting-edge solutions for businesses using advanced
        technologies.
    </p>

    <!-- Client logos component -->
    <div class="mt-12">
        <ClientsBars {logos} />
    </div>
</section>
