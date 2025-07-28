<script setup>
import { onMounted } from 'vue'

const areas = [
  {
    id: 1,
    title: 'Direito de Família',
    icon: 'fas fa-home',
    description: 'Atuação em divórcios, guarda de filhos, pensão alimentícia, inventários, partilha de bens, adoção, reconhecimento e dissolução de união estável, entre outros.',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Direito Civil',
    icon: 'fas fa-balance-scale',
    description: 'Assessoria em contratos em geral, ações de indenização, responsabilidade civil, direitos do consumidor, locações, cobranças, usucapião e direitos reais.',
    color: 'purple'
  },
  {
    id: 3,
    title: 'Direito do Consumidor',
    icon: 'fas fa-shopping-cart',
    description: 'Defesa dos direitos do consumidor em casos de vícios de produtos e serviços, cobranças indevidas, publicidade enganosa, planos de saúde e relações de consumo.',
    color: 'green'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.1}s`
        entry.target.classList.add('fade-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.area-card').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <section id="atuacao" class="atuacao-section">
    <div class="container">
      <h2 class="section-title">Áreas de Atuação</h2>
      <p class="section-subtitle">Especializada nas seguintes áreas do Direito</p>
      
      <div class="card-grid">
        <div 
          v-for="area in areas" 
          :key="area.id"
          class="area-card"
        >
          <div :class="`icon-circle ${area.color}`">
            <i :class="area.icon"></i>
          </div>
          <h3 class="card-title">{{ area.title }}</h3>
          <p class="card-text">{{ area.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Seção principal */
.atuacao-section {
  background-color: #f9f9f9;
  padding: 80px 20px;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Título e subtítulo */
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

/* Grid de cards */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Card individual */
.area-card {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

.area-card:hover {
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  transform: translateY(0);
}

/* Ícones */
.icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto;
  font-size: 24px;
  color: white;
}

.icon-circle.blue {
  background-color: #3b82f6;
}

.icon-circle.purple {
  background-color: #8b5cf6;
}

.icon-circle.green {
  background-color: #10b981;
}

/* Títulos e textos */
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.card-text {
  font-size: 0.95rem;
  color: #555;
}

/* Animação fade-in */
.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
