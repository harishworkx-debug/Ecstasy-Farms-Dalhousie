import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: 'About Us | Ecstasy Farms Dalhousie' },
      { name: "description", content: 'Discover the quiet Himalayan homestay in Village Manola, hosted with local warmth since 2018 for families, couples, groups and pets.' },
      { property: "og:title", content: 'About Us | Ecstasy Farms Dalhousie' },
      { property: "og:description", content: 'Discover the quiet Himalayan homestay in Village Manola, hosted with local warmth since 2018 for families, couples, groups and pets.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.ecstasyfarmsdalhousie.com/about" }],
  }),
  component: AboutPage,
});
