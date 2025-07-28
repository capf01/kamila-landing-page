<script setup>
const socialLinks = [
  { icon: 'fab fa-facebook-f', url: '#' },
  { icon: 'fab fa-instagram', url: '#' },
  { icon: 'fab fa-linkedin-in', url: '#' }
]
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Dra. Kamila Santos</h3>
          <p class="footer-text">Advogada especialista em Direito de Família, Civil e do Consumidor</p>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Redes Sociais</h4>
          <div class="social-icons">
            <a 
              v-for="(social, index) in socialLinks" 
              :key="index"
              :href="social.url" 
              target="_blank"
              class="social-icon"
              aria-label="Social media link"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Contato</h4>
          <p class="footer-contact"><i class="fas fa-phone-alt"></i> (92) 91156-8515</p>
          <p class="footer-contact"><i class="fas fa-envelope"></i> contato@kamilasantosadv.com.br</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 Kamila Santos - Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1f2937;
  color: #ffffff;
  padding: 60px 20px 40px;
  font-family: sans-serif;
}

.footer-container {
  max-width: 1080px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
  }
}

.footer-section {
  text-align: center;
  max-width: 300px;
}

.footer-title {
  font-size: 1.75rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin-bottom: 12px;
}

.footer-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.footer-text,
.footer-contact {
  color: #d1d5db;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.footer-contact i {
  margin-right: 8px;
  color: #9ca3af;
}

.social-icons {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.social-icon {
  width: 40px;
  height: 40px;
  background-color: #374151;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  color: white;
  font-size: 1rem;
}

.social-icon:hover {
  background-color: #0077cc;
}

.footer-bottom {
  border-top: 1px solid #374151;
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
}
</style>
