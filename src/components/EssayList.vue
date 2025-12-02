<template>
  <v-list rounded="lg" class="pa-2">
    <v-list-item
      v-for="essay in essays"
      :key="essay.id"
      @click="handleSelect(essay.id)"
      :active="essay.id === selectedEssay?.id"
      rounded="lg"
      class="mb-2"
    >
      <v-list-item-title class="font-weight-medium">
        {{ essay.studentName }}
      </v-list-item-title>

      <v-list-item-subtitle>
        {{ essay.uploadedAt }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { computed } from 'vue'
import { useEssayStore } from '../store/essayStore'

const store = useEssayStore()

// reactive references
const essays = computed(() => store.essays.value)
const selectedEssay = computed(() => store.selectedEssay.value)

const handleSelect = (id) => {
  store.selectEssay(id)
}
</script>

<style scoped>
.v-list-item {
  transition: 0.2s;
}
.v-list-item:hover {
  background: #f3f6ff;
}
</style>
