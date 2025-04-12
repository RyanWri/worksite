<script>
    export let data;
    export let about = data.about;
    import Icon from "@iconify/svelte";
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
    <!-- Hero Section -->
    <div class="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
        <div
            class="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
        >
            <Icon icon="mdi:star" class="w-4 h-4 mr-1" />
            <span>AI & Data Platform Consultant</span>
        </div>
        <h1
            class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
            {about.name}
        </h1>
        <p
            class="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium"
        >
            {about.profession}
        </p>
    </div>

    <!-- Value Proposition -->
    <div class="max-w-3xl mx-auto text-center mb-16">
        <p
            class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
        >
            {about.description}
        </p>
    </div>

    <!-- Expertise Cards -->
    <div class="mb-16">
        <h2
            class="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
            Core Expertise
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each about.expertise as skill}
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                >
                    <div class="flex items-start">
                        <div class="flex-shrink-0 mr-4">
                            <div
                                class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg"
                            >
                                <Icon
                                    icon="mdi:lightning-bolt"
                                    class="w-6 h-6 text-blue-600 dark:text-blue-400"
                                />
                            </div>
                        </div>
                        <div>
                            <p
                                class="text-gray-800 dark:text-gray-200 font-medium"
                            >
                                {skill}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Notable Projects -->
    <div class="mb-16">
        <h2
            class="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
            Notable Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each about.projects as project}
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                >
                    <div class="p-6">
                        <h3
                            class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3"
                        >
                            {project.title}
                        </h3>
                        <p class="text-gray-700 dark:text-gray-300 mb-4">
                            {project.description}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                        >
                            View Case Study
                            <Icon icon="mdi:arrow-right" class="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Philosophy Section -->
    <div
        class="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm"
    >
        <h2
            class="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
            My Approach
        </h2>
        <p class="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            {about.philosophy}
        </p>
    </div>

    <!-- Call to Action -->
    <div class="mt-16 text-center">
        <a
            href="/contact"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
            Let's Discuss Your Project
            <Icon icon="mdi:arrow-right" class="w-5 h-5 ml-2" />
        </a>
    </div>
</section>
