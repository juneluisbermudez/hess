<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4 mb-4">
          <v-card-title>Welcome to the Essay Dashboard</v-card-title>
          <v-card-text>
            Below are all uploaded essays:
          </v-card-text>
        </v-card>
      </v-col>

      <v-col v-for="essay in essays" :key="essay.id" cols="12" md="4">
        <v-card class="pa-3" @click="goToDetail(essay.id)" hover>
          <v-card-title>{{ essay.studentName }}</v-card-title>
          <v-card-subtitle>{{ essay.uploadedAt }}</v-card-subtitle>
          <v-card-text>
            <img v-if="essay.imagePath" :src="essay.imagePath" class="thumbnail" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useEssayStore } from '../store/essayStore'
import { useRouter } from 'vue-router'

const store = useEssayStore()
const essays = store.essays
const router = useRouter()

const goToDetail = (id) => {
  store.selectEssay(id)
  router.push(`/essay/${id}`)
}
</script>

<style scoped>
.thumbnail {
  max-width: 100%;
  max-height: 150px;
  border-radius: 4px;
}
</style>
