<template>
  <v-app :theme="theme">
    <!-- Background container -->
    <div class="background-container">
      <FloatingLines 
      :enabled-waves="['top', 'middle', 'bottom']"
      :line-count="[4, 1, 5]"
      :line-distance="[8, 6, 4]"
      :bend-radius="5.0"
      :bend-strength="-0.5"
      :interactive="true"
      :parallax="true"
    />
    </div>

    <!-- Centered login card -->
    <v-main class="d-flex align-center justify-center" style="min-height: 100vh;">
      <transition name="fade-scale">
        <v-card
          class="pa-8"
          elevation="10"
          style="width: 380px; border-radius: 20px; backdrop-filter: blur(20px); background: rgba(255,255,255,0.12); z-index: 10;"
        >
          <div class="text-center mb-6">
            <TextTrail
              text="Welcome to HEES!"
              :noise-factor="1"
              :noise-scale="0.0005"
              font-weight="600"
              :alpha-persist-factor="0.95"
              :animate-color="false"
              text-color="#ffffff"
            />
            <p class="text-grey">{{ quote }}</p>
          </div>

          <v-form @submit.prevent="loginUser">
            <v-text-field
              v-model="email"
              label="Username"
              variant="outlined"
              prepend-inner-icon="mdi-email"
              density="comfortable"
              rounded
            />

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              variant="outlined"
              prepend-inner-icon="mdi-lock"
              density="comfortable"
              rounded
            />
            <p class="text-grey text-caption">
              Username: user Password: user123
            </p>

            <v-btn
              type="submit"
              block
              rounded="lg"
              height="45"
              class="text-white"
            >
              LOGIN
            </v-btn>

            <div class="text-center mt-4 text-grey text-caption">Forgot Password?</div>
          </v-form>
        </v-card>
      </transition>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import FloatingLines from "../components/FloatingLines.vue";
import TextTrail from "../components/TextTrail.vue";

const router = useRouter();

const email = ref("");
const password = ref("");
const quote = ref("");
const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quote.value = data.content;
  } catch {
    quote.value = "Write with clarity and purpose.";
  }
}

function loginUser() {
  if (email.value === "user" && password.value === "user123") {
    router.push("/dashboard");
  } else {
    alert("Invalid credentials");
  }
}

onMounted(() => {
  fetchQuote();
});
</script>

<style scoped>
.background-container {
  position: fixed; /* fill viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* behind card */
}

v-card {
  backdrop-filter: blur(25px) !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
