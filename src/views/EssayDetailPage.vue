<template>
  <v-container>
    <v-btn text @click="$router.back()">← Back</v-btn>
    <div v-if="essay">
      <h2>{{ essay.studentName }}</h2>
      <p><strong>OCR Text:</strong> {{ essay.ocrText }}</p>
      <p><strong>Scores:</strong></p>
      <ul>
        <li>Grammar: {{ essay.scores.grammar }}</li>
        <li>Structure: {{ essay.scores.structure }}</li>
        <li>Argument: {{ essay.scores.argument }}</li>
      </ul>
      <p><strong>Feedback:</strong> {{ essay.feedback }}</p>
    </div>
  </v-container>
</template>

<script setup>
import { useEssayStore } from '../store/essayStore'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = useEssayStore()
const route = useRoute()

onMounted(() => {
  store.selectEssay(route.params.id)
})

const essay = computed(() => store.selectedEssay)
</script>
