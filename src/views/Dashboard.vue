<template>
  <v-container>
    <v-row>
      
        <EssayUploader />
      <v-col>
        <EssayList />
      </v-col>
      <v-col cols="8">
        <EssayDetail />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import EssayDetail from '../components/EssayDetail.vue';
import EssayList from '../components/EssayList.vue';
import EssayUploader from '../components/EssayUploader.vue';
</script>
