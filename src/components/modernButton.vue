<template>
  <v-btn
    v-bind="$attrs"
    class="modern-btn"
    :ripple="true"
  >
    <slot />
  </v-btn>
</template>

<script setup>
// No need for props; all attributes from parent are passed via v-bind="$attrs"
</script>

<style scoped>
.modern-btn {
  border-radius: 999px; /* pill shape */
  padding-left: 24px;
  padding-right: 24px;
  font-weight: 600;
  letter-spacing: 0.3px;

  /* Soft modern effect */
  background: var(--v-theme-primary);
  color: white;
  transition: 0.25s ease;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.18),
    0 2px 4px rgba(0, 0, 0, 0.10);
}

/* Hover Glow */
.modern-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.25),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Click/Active */
.modern-btn:active {
  transform: scale(0.97);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
