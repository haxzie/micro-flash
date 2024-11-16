import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/pages/HomeView.vue";
import SettingsView from "@/pages/SettingsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/settings", component: SettingsView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
