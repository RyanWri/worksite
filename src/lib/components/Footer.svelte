<script>
  import Icon from "@iconify/svelte";

  const year = new Date().getFullYear();

  const socials = [
    { href: "https://github.com/RyanWri", icon: "mdi:github", label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/ran-wright46/",
      icon: "mdi:linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://discordapp.com/users/1119880721289453639",
      icon: "mdi:discord",
      label: "Discord",
    },
    {
      href: "https://www.facebook.com/rrwright46/",
      icon: "mdi:facebook",
      label: "Facebook",
    },
  ];
</script>

<footer class="border-t border-border">
  <div
    class="container flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between"
  >
    <span class="text-sm text-muted">
      © {year}
      <a href="/" class="transition-colors hover:text-fg">Ran Wright</a>. All
      rights reserved.
    </span>

    <div class="flex items-center gap-5">
      {#each socials as { href, icon, label }}
        <a
          {href}
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted transition-colors hover:text-accent"
          aria-label={label}
        >
          <Icon {icon} class="h-5 w-5" />
        </a>
      {/each}
    </div>
  </div>
</footer>
