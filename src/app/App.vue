<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import USBIcon from "@/components/icons/USBIcon.vue";
import PackageIcon from "@/components/icons/PackageIcon.vue";
import ChipIcon from "@/components/icons/ChipIcon.vue";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <main class="container">
    <USBIcon :size="24"/>
    <PackageIcon :size="24"/>
    <ChipIcon :size="24"/>
    <RouterView/>
  </main>
</template>

<style scoped></style>
