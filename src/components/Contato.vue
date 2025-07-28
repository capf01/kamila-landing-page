<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const validateForm = () => {
  let valid = true
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Por favor, insira seu nome'
    valid = false
  } else {
    errors.value.name = ''
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Por favor, insira seu e-mail'
    valid = false
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = 'Por favor, insira um e-mail válido'
    valid = false
  } else {
    errors.value.email = ''
  }
  
  if (!form.value.message.trim()) {
    errors.value.message = 'Por favor, insira sua mensagem'
    valid = false
  } else {
    errors.value.message = ''
  }
  
  return valid
}

const submitForm = () => {
  if (validateForm()) {
    console.log('Formulário enviado:', form.value)
    submitted.value = true
    form.value = { name: '', email: '', message: '' }

    setTimeout(() => {
      submitted.value = false
    }, 5000)
  }
}
</script>

<template>
  <section id="contato" class="contato-section">
    <div class="container">
      <h2 class="title">Entre em Contato</h2>
      <p class="subtitle">Envie sua mensagem e retornaremos o mais breve possível</p>
      
      <div class="form-wrapper">
        <form @submit.prevent="submitForm">
          <div v-if="submitted" class="success-message">
            <p>Obrigado por sua mensagem! Entraremos em contato em breve.</p>
          </div>

          <div class="form-group">
            <label for="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              :class="{ error: errors.name }"
            >
            <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              :class="{ error: errors.email }"
            >
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
          </div>

          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea 
              id="message" 
              rows="5" 
              v-model="form.message" 
              :class="{ error: errors.message }"
            ></textarea>
            <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
          </div>

          <button type="submit" class="submit-btn">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estrutura geral */
.contato-section {
  background-color: #f8f8f8;
  padding: 80px 20px;
}

.container {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
}

/* Estilo do formulário */
.form-wrapper {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #0077cc;
}

.error {
  border-color: #e53935;
}

.error-message {
  color: #e53935;
  font-size: 0.85rem;
  margin-top: 4px;
}

/* Botão */
.submit-btn {
  display: inline-block;
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #005fa3;
}

/* Mensagem de sucesso */
.success-message {
  background-color: #e6f4ea;
  border: 1px solid #5cb85c;
  color: #3c763d;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>
