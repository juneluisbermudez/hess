<template>
  <v-card v-if="essay" class="pa-6 rounded-xl">
    <v-card-title class="text-h6 font-weight-bold">
      Essay Details — {{ essay.studentName }}
    </v-card-title>

    <v-card-text>

      <!-- Image Preview -->
      <div v-if="essay.imagePath" class="mb-5 text-center">
        <img :src="essay.imagePath" class="detail-image" />
      </div>

      <!-- OCR TEXT -->
      <div class="text-subtitle-1 font-weight-medium mb-1">OCR Text</div>
      <div class="mb-4">{{ essay.ocrText }}</div>

      <v-divider class="my-4"></v-divider>

      <!-- SCORES -->
      <div class="text-subtitle-1 font-weight-medium mb-2">Scores</div>
      <v-row>
        <v-col
          v-for="(score, key) in essay.scores"
          :key="key"
          cols="12"
          sm="4"
        >
          <v-card class="pa-3 rounded-lg text-center">
            <div class="font-weight-medium text-capitalize">{{ key }}</div>
            <div class="text-h6">{{ score }}</div>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>

      <!-- AI FEEDBACK -->
      <div class="text-subtitle-1 font-weight-medium mb-1">AI Feedback</div>
      <div>{{ essay.feedback }}</div>

    </v-card-text>
  </v-card>

  <div v-else class="text-center py-10 text-grey">
    No essay selected.
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useEssayStore } from '../store/essayStore'

const store = useEssayStore()

// selectedEssay is a ref, so we must return its .value
const essay = computed(() => store.selectedEssay.value)
</script>

<style scoped>
.detail-image {
  max-width: 100%;
  max-height: 320px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
</style>
