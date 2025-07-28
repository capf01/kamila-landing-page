<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const elements = document.querySelectorAll('.hero-element')
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`
    el.classList.add('fade-in')
  })
})
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text hero-element">
          <h1 class="hero-title">
            Atendimento Jurídico Humanizado
          </h1>
          <p class="hero-subtitle">
            Especialista em Direito de Família, Civil e do Consumidor
          </p>
          <a 
            href="https://wa.me/559291156851" 
            target="_blank"
            class="hero-button"
          >
            <i class="fab fa-whatsapp"></i> Fale com a Dra. Kamila
          </a>
        </div>
        <div class="hero-image hero-element">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Dra. Kamila Santos" 
            class="image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 130px 0 80px;
  background: linear-gradient(to right, #eff6ff, #f5f3ff);
}

@media (min-width: 768px) {
  .hero-section {
    padding: 160px 0 112px;
  }
}

.hero-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: #0077cc;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 1.5rem;
  }
}

.hero-button {
  display: inline-block;
  background-color: #0077cc;
  color: #fff;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;
}

.hero-button i {
  margin-right: 8px;
}

.hero-button:hover {
  background-color: #3399ff;
  transform: scale(1.02);
}

.hero-image {
  flex: 1;
  margin-top: 48px;
}

@media (min-width: 768px) {
  .hero-image {
    margin-top: 0;
    text-align: right;
  }
}

.image {
  max-width: 400px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  display: block;
}

/* Fade-in animation */
.fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
