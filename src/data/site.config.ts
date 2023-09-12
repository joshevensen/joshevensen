export const siteConfig = {
  articles: {
    revalidateTime: 60 * 60 * 2, // 60 seconds * 60 minutes * 2 hours
  },
  pagination: {
    perPage: 10,
  },
  affiliateLinks: {
    DigitalOcean: {
      display: "digitalocean.com",
      link: "https://digitalocean.com",
    },
    Ergodox: {
      display: "ergodox-ex.com",
      link: "https://ergodox-ex.com",
    },
    Laravel: {
      display: "laravel.com",
      link: "https://laravel.com",
    },
    PhpStorm: {
      display: "jetbrains.com/phpstorm",
      link: "https://jetbrains.com/phpstorm",
    },
    VSCode: {
      display: "code.visualstudio.com",
      link: "https://code.visualstudio.com",
    },
  },
};
