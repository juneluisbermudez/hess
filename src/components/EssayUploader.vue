<template>
  <v-card class="pa-6 rounded-xl w-100 h-100">
    <v-card-text>
      
      <!-- Student Name -->
      <div class="d-flex gap-4">
  <v-text-field
    label="Student Name"
    v-model="studentName"
    variant="outlined"
    rounded
    class="flex-1"
  />

  <v-text-field
    label="Subject"
    v-model="subject"
    variant="outlined"
    rounded
    class="flex-1"
  />

  <v-text-field
    label="Section"
    v-model="section"
    variant="outlined"
    rounded
    class="flex-1"
  />
</div>


      <!-- Drag & Drop Zone -->
      <div
        class="drop-zone"
        @dragover.prevent
        @drop.prevent="handleDrop"
        @dragenter.prevent
        @click="fileInput.click()"
      >
        <p v-if="!image">Drag & drop an image here or click to select</p>
        <img v-if="image" :src="imagePreview" class="preview-image" />
        <input type="file" accept="image/*" @change="handleFileSelect" ref="fileInput" hidden />
      </div>
    </v-card-text>

    <v-card-actions>
      <modern-button color="primary" @click="doSomething">
        Upload Now
      </modern-button>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ModernButton from '../components/modernButton.vue'
import { useEssayStore } from '../store/essayStore'

const studentName = ref('')
const image = ref(null)
const imagePreview = ref('')
const fileInput = ref(null)

const store = useEssayStore()
const router = useRouter()

const doSomething = () => {
  alert("Uploaded!")
}

// -------- FILE HANDLERS -------- //
const handleDrop = (event) => processFile(event.dataTransfer.files[0])
const handleFileSelect = (event) => processFile(event.target.files[0])

const processFile = (file) => {
  if (!file?.type?.startsWith('image/')) {
    alert('Please upload an image file!')
    return
  }

  image.value = file

  const reader = new FileReader()
  reader.onload = (e) => {
    imagePreview.value = e.target.result
  }
  reader.readAsDataURL(file)
}

// -------- UPLOAD (NO BACKEND) -------- //
const uploadEssay = () => {
  if (!studentName.value) return alert('Enter student name!')
  if (!image.value) return alert('Select an image!')

  // Create and save essay in store
  const newEssay = store.uploadEssay(studentName.value)

  // Save the base64 image preview as imagePath
  newEssay.imagePath = imagePreview.value

  alert('Upload Successful!')

  // Reset form
  studentName.value = ''
  image.value = null
  imagePreview.value = ''

  // Navigate to essay detail page
  router.push(`/essay/${newEssay.id}`)
}
</script>

<style scoped>
.drop-zone {
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s ease;
}
.drop-zone:hover {
  border-color: #1976d2;
}

.preview-image {
  max-width: 100%;
  max-height: 240px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.gap-4 {
  gap: 16px;
}
.flex-1 {
  flex: 1;
}

</style>
