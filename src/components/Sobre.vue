<script setup>
import { onMounted } from 'vue'
import lawyerProfile from '@/assets/images/lawyer-profile.png'


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.sobre-element').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <section id="sobre" class="sobre-section">
    <div class="sobre-container">
      <h2 class="sobre-title sobre-element">
        Sobre a Dra. Kamila Santos
      </h2>
      
      <div class="sobre-content">
        <div class="sobre-image sobre-element">
          <img 
            :src="lawyerProfile" 
            alt="Dra. Kamila Santos" 
            class="image"
          />
        </div>
        
        <div class="sobre-text sobre-element">
          <p>
            A Dra. Kamila Santos é uma advogada comprometida com a excelência jurídica e o atendimento personalizado. 
            Formada pela renomada Faculdade de Direito da Universidade Federal do Pará, possui vasta experiência nas 
            áreas de Direito de Família, Civil e do Consumidor.
          </p>
          
          <p>
            Com abordagem humanizada e foco na solução de conflitos, a Dra. Kamila busca sempre oferecer a melhor 
            estratégia jurídica para cada caso, priorizando o diálogo e a mediação quando possível.
          </p>
          
          <p>
            Membro ativa da OAB/PA e participante de diversos cursos de especialização, mantém-se constantemente 
            atualizada para oferecer o melhor atendimento aos seus clientes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sobre-section {
  padding: 80px 0;
  background-color: #ffffff;
}

.sobre-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

.sobre-title {
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  text-align: center;
  color: #0077cc;
  margin-bottom: 64px;
  opacity: 0;
}

@media (min-width: 768px) {
  .sobre-title {
    font-size: 2.5rem;
  }
}

.sobre-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .sobre-content {
    flex-direction: row;
    align-items: flex-start;
  }
}

.sobre-image {
  width: 100%;
  max-width: 256px;
  height: 256px;
  margin-bottom: 32px;
  opacity: 0;
}

@media (min-width: 768px) {
  .sobre-image {
    margin-bottom: 0;
  }
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  display: block;
  margin: 0 auto;
}

.sobre-text {
  flex: 1;
  padding-left: 0;
  opacity: 0;
}

@media (min-width: 768px) {
  .sobre-text {
    padding-left: 48px;
  }
}

.sobre-text p {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 24px;
  line-height: 1.7;
}

/* Fade-in animation */
.fade-in {
  opacity: 1 !important;
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
