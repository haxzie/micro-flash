<script setup lang="ts">
const props = defineProps({
  size: {
    default: 24,
    type: Number,
  },
});
</script>
<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 17H20V7H4V17ZM5 21V19H2V5H5V3H7V5H11V3H13V5H17V3H19V5H22V19H19V21H17V19H13V21H11V19H7V21H5Z"
      fill="currentColor"
    />
    <g opacity="0.5">
      <path
        d="M8 10V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10Z"
        fill="currentColor"
      />
      <path
        d="M13 10V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z"
        fill="currentColor"
      />
      <path
        d="M18 10V14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14V10C16 9.44772 16.4477 9 17 9C17.5523 9 18 9.44772 18 10Z"
        fill="currentColor"
      />
    </g>
  </svg>
</template>
