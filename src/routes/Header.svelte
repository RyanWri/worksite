<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/brand_logo.svg";
  import github from "$lib/images/github.svg";
</script>

<header>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center h-16">
        <div class="flex items-center">
          <div class="flex lg:flex-1">
            <a href="/" class="-m-1.5 p-1.5">
              <img class="h-8 w-auto" src={logo} alt="The Wright Way" />
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Navigation links -->
              <a
                href="/about"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >About</a
              >
              <a
                href="/technology"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Technology</a
              >
              <a
                href="/projects"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Projects</a
              >
              <a
                href="/contact"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Contact</a
              >
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <div class="flex-shrink-0">
              <!-- Your logo or brand -->
              <a href="https://github.com/RyanWri">
                <img class="h-8 w-8" src={github} alt="Github" />
              </a>
            </div>
            <!-- Other elements like search, user profile, etc. -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
