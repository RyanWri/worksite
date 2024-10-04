<script>
    import Icon from "@iconify/svelte"; // Import Icon from Iconify

    let name = "";
    let email = "";
    let company = "";
    let message = "";
    let interest = "service"; // Default value for the dropdown

    function handleSubmit() {
        console.log({
            name,
            email,
            company,
            message,
            interest, // Log the interest as well
        });
        alert("Form submitted successfully! Check the console for details.");
    }
</script>

<svelte:head>
    <title>Contact Us - The Wright Way</title>
    <meta
        name="description"
        content="Get in touch with us for your technology, training, and consulting needs."
    />
</svelte:head>

<section class="container mx-auto p-6">
    <h1 class="text-4xl font-bold text-center mb-12">Contact Us</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Call to Action Section -->
        <div class="space-y-6 text-center lg:text-left">
            <h2 class="text-3xl font-bold">Let's Talk</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300">
                Whether you're interested in our tech services, training, or
                education, we're here to help! Get in touch and let's discuss
                how we can collaborate.
            </p>

            <!-- Contact Information with Icons -->
            <div class="space-y-4">
                <div class="flex items-center justify-center lg:justify-start">
                    <Icon icon="mdi:email" class="w-6 h-6 mr-2 text-blue-600" />
                    <span class="text-gray-700 dark:text-gray-300"
                        >contact@thewrightway.com</span
                    >
                </div>
                <div class="flex items-center justify-center lg:justify-start">
                    <Icon icon="mdi:phone" class="w-6 h-6 mr-2 text-blue-600" />
                    <span class="text-gray-700 dark:text-gray-300"
                        >+123 456 7890</span
                    >
                </div>
                <div class="flex items-center justify-center lg:justify-start">
                    <Icon
                        icon="mdi:map-marker"
                        class="w-6 h-6 mr-2 text-blue-600"
                    />
                    <span class="text-gray-700 dark:text-gray-300"
                        >123 Main Street, City, Country</span
                    >
                </div>
            </div>
        </div>

        <!-- Contact Form Section with Stronger Border -->
        <div
            class="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-600"
        >
            <form on:submit|preventDefault={handleSubmit}>
                <div class="mb-6">
                    <label
                        for="name"
                        class="block text-gray-700 dark:text-gray-300 mb-2"
                        >Your Name</label
                    >
                    <input
                        type="text"
                        id="name"
                        bind:value={name}
                        placeholder="Enter your name"
                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
                    />
                </div>

                <div class="mb-6">
                    <label
                        for="email"
                        class="block text-gray-700 dark:text-gray-300 mb-2"
                        >Email Address</label
                    >
                    <input
                        type="email"
                        id="email"
                        bind:value={email}
                        placeholder="Enter your email"
                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
                    />
                </div>

                <div class="mb-6">
                    <label
                        for="company"
                        class="block text-gray-700 dark:text-gray-300 mb-2"
                        >Company</label
                    >
                    <input
                        type="text"
                        id="company"
                        bind:value={company}
                        placeholder="Enter your company name"
                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
                    />
                </div>

                <!-- New Select Dropdown for Interest -->
                <div class="mb-6">
                    <label
                        for="interest"
                        class="block text-gray-700 dark:text-gray-300 mb-2"
                        >What are you interested in?</label
                    >
                    <select
                        id="interest"
                        bind:value={interest}
                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
                    >
                        <option value="service">Service</option>
                        <option value="training">Training</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="mb-6">
                    <label
                        for="message"
                        class="block text-gray-700 dark:text-gray-300 mb-2"
                        >Message</label
                    >
                    <textarea
                        id="message"
                        bind:value={message}
                        placeholder="Enter your message"
                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
                    ></textarea>
                </div>

                <div class="text-center lg:text-right">
                    <button
                        type="submit"
                        class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >Submit</button
                    >
                </div>
            </form>
        </div>
    </div>
</section>
