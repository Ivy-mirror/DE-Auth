<script setup>
import { $auth } from '@/firebaseApp'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

async function handleLogin() {
  try {
    await signInWithEmailAndPassword($auth, email.value, password.value)
    email.value = ''
    password.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin" class="Login">
      <label for="email">Ingresa Email</label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Ingresa Contraseña</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>
