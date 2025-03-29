<script>
    export let data;
    export let about = data.about;
</script>

<section class="container mx-auto px-6 py-16">
    <!-- Title Section -->
    <div class="text-center">
        <h1 class="text-5xl font-bold animate-fade-in">
            {about.title}
        </h1>
        <p class="text-lg text-gray-700 mt-2">{about.profession}</p>
    </div>

    <!-- Introduction -->
    <div class="mt-6 max-w-3xl mx-auto text-center">
        <p class="text-lg text-gray-600">{about.description}</p>
    </div>

    <!-- Expertise Section -->
    <div class="mt-12">
        <h2 class="text-3xl font-semibold text-center">Expertise</h2>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each about.expertise as skill}
                <div
                    class="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:border-blue-500 transition"
                >
                    <p class="text-gray-700">{skill}</p>
                </div>
            {/each}
        </div>
    </div>

    <!-- Notable Projects Section -->
    <div class="mt-12">
        <h2 class="text-3xl font-semibold text-center">Notable Projects</h2>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each about.projects as project}
                <div
                    class="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:border-blue-500 transition"
                >
                    <h3 class="text-2xl font-semibold text-blue-600">
                        {project.title}
                    </h3>
                    <p class="mt-2 text-gray-700">{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        class="mt-3 inline-block text-blue-500 hover:text-blue-700 font-semibold"
                        >View Project</a
                    >
                </div>
            {/each}
        </div>
    </div>

    <!-- Philosophy Section -->
    <div class="mt-12 max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-900">My Philosophy</h2>
        <p class="mt-4 text-lg text-gray-600">{about.philosophy}</p>
    </div>
</section>
