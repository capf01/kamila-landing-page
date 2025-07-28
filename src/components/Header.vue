<script setup>
defineProps({
  activeSection: String
})

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="header-content">
        <div class="logo">
          Dra. Kamila Santos
        </div>
        
        <nav class="nav-menu">
          <ul class="nav-list">
            <li>
              <button 
                @click="scrollTo('sobre')" 
                class="nav-link"
                :class="{ active: activeSection === 'sobre' }"
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                @click="scrollTo('atuacao')" 
                class="nav-link"
                :class="{ active: activeSection === 'atuacao' }"
              >
                Áreas de Atuação
              </button>
            </li>
            <li>
              <button 
                @click="scrollTo('depoimentos')" 
                class="nav-link"
                :class="{ active: activeSection === 'depoimentos' }"
              >
                Depoimentos
              </button>
            </li>
            <li>
              <button 
                @click="scrollTo('contato')" 
                class="nav-link"
                :class="{ active: activeSection === 'contato' }"
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        <button class="menu-icon">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  z-index: 1000;
}

.header-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px 24px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.75rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: #0077cc; /* Cor primária */
}

.nav-menu {
  display: none;
}

@media (min-width: 768px) {
  .nav-menu {
    display: block;
  }
}

.nav-list {
  display: flex;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  background: none;
  border: none;
  font-size: 1rem;
  color: #4b5563; /* cinza escuro */
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.3s, border-color 0.3s;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  color: #0077cc;
}

.nav-link.active {
  color: #0077cc;
  border-bottom-color: #0077cc;
}

.menu-icon {
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #4b5563;
}

@media (min-width: 768px) {
  .menu-icon {
    display: none;
  }
}
</style>
