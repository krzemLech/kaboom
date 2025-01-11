import type { IconListItem } from "../types";

const programmingLanguages: IconListItem[] = [
  {
    name: "Python",
    icon: "python",
    color: "text-red-500",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "text-yellow-500",
  },
  {
    name: "Go Lang",
    icon: "go",
    color: "text-sky-500",
  },
];

const uiFrameworks: IconListItem[] = [
  {
    name: "Astro.js",
    icon: "astro",
    color: "text-red-500",
  },
  {
    name: "Svelte with SvelteKit",
    icon: "svelte",
    color: "text-orange-500",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    color: "text-yellow-500",
  },
  {
    name: "StreamLit (for Python Apps)",
    icon: "streamlit",
    color: "text-yellow-200",
  },
  {
    name: "Vue.js",
    icon: "vuejs",
    color: "text-green-500",
  },
];
const beFrameworks: IconListItem[] = [
  {
    name: "Express.js",
    icon: "npm",
    color: "text-red-500",
  },
  {
    name: "Hono.js",
    icon: "codeigniter",
    color: "text-orange-500",
  },
  {
    name: "FasAPI",
    icon: "fastapi",
    color: "text-green-500",
  },
];
const databases: IconListItem[] = [
  {
    name: "Google Firebase",
    icon: "firebase",
    color: "text-yellow-500",
  },
  {
    name: "Mongo DB",
    icon: "mongodb",
    color: "text-green-500",
  },
  {
    name: "Posgress",
    icon: "postgresql",
    color: "text-sky-500",
  },
];

export { programmingLanguages, uiFrameworks, beFrameworks, databases };
