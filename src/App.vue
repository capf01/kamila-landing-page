<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Sobre from './components/Sobre.vue'
import AreasAtuacao from './components/AreasAtuacao.vue'
import Depoimentos from './components/Depoimentos.vue'
import Contato from './components/Contato.vue'
import Footer from './components/Footer.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'

const activeSection = ref('hero')

const handleScroll = () => {
  const sections = ['hero', 'sobre', 'atuacao', 'depoimentos', 'contato']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app-container">
    <Header :activeSection="activeSection" />
    <main>
      <section id="hero" class="section hero-section">
        <Hero />
      </section>
      <section id="sobre" class="section bg-white">
        <Sobre />
      </section>
      <section id="atuacao" class="section bg-light">
        <AreasAtuacao />
      </section>
      <section id="depoimentos" class="section bg-white">
        <Depoimentos />
      </section>
      <section id="contato" class="section bg-light">
        <Contato />
      </section>
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
</template>

<style scoped>
/* Fonte geral */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.app-container {
  font-family: 'Inter', sans-serif;
  color: #333;
  background-color: #f6f6f6;
  scroll-behavior: smooth;
}

/* Seções da página */
.section {
  padding: 80px 20px;
}

.bg-white {
  background-color: #ffffff;
}

.bg-light {
  background-color: #f0f0f0;
}

/* Responsividade básica */
@media (max-width: 768px) {
  .section {
    padding: 60px 15px;
  }
}
</style>
