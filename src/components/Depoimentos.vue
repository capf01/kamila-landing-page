<script setup>
import { onMounted } from 'vue'

const testimonials = [
  {
    id: 1,
    name: 'Ana Carolina Silva',
    role: 'Cliente - Processo de Divórcio',
    content: 'A Dra. Kamila foi extremamente profissional e humana durante todo o meu processo de divórcio. Ela me orientou em cada passo e conseguiu um acordo justo, preservando meus direitos e os dos meus filhos.',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    id: 2,
    name: 'Roberto Almeida',
    role: 'Cliente - Direito do Consumidor',
    content: 'Quando tive problemas com uma grande empresa de telefonia, a Dra. Kamila me auxiliou de forma brilhante. Em poucas semanas resolveu um problema que eu já tentava resolver há meses. Recomendo seus serviços!',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.2}s`
        entry.target.classList.add('fade-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.testimonial-card').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <section id="depoimentos" class="depoimentos-section">
    <div class="container">
      <h2 class="title">Depoimentos</h2>
      <p class="subtitle">O que nossos clientes dizem</p>

      <div class="testimonials-grid">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="testimonial-card"
        >
          <div class="testimonial-header">
            <img 
              :src="testimonial.avatar" 
              :alt="testimonial.name"
              class="avatar"
              loading="lazy"
            >
            <div>
              <h4 class="name">{{ testimonial.name }}</h4>
              <p class="role">{{ testimonial.role }}</p>
            </div>
          </div>
          <p class="content">"{{ testimonial.content }}"</p>
          <div class="stars">
            <span v-for="n in 5" :key="n">⭐</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Container principal */
.depoimentos-section {
  padding: 80px 20px;
  background-color: #ffffff;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 40px;
}

/* Grid responsivo */
.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Cartão do depoimento */
.testimonial-card {
  opacity: 0;
  background-color: #f8f8f8;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

/* Cabeçalho com avatar */
.testimonial-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  text-align: left;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
  border: 2px solid #0077cc;
}

.name {
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.role {
  color: #777;
  font-size: 0.9rem;
}

/* Conteúdo do depoimento */
.content {
  color: #555;
  font-style: italic;
  margin-bottom: 12px;
  text-align: left;
}

/* Estrelas */
.stars {
  text-align: left;
  font-size: 1.2rem;
  color: #facc15; /* amarelo-ouro */
}

/* Animação */
.fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
