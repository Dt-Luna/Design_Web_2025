<script setup lang="ts">
import Header from '@/components/Header.vue';
import TheWelcome from '../components/TheWelcome.vue'
import CardDestinos from '@/components/CardDestinos.vue';
import Carrossel from '@/components/Carrossel.vue'
import Footer from '@/components/Footer.vue';
// import { C } from 'vue-router/dist/options-CjwwR_07.cjs';
const destinos = [
  {
    nome: 'Machu Picchu',
    local: 'Peru',
    descricao: 'A antiga cidade inca nas montanhas dos Andes.',
    difficulty: 'Alta',
    ecoStatus: 'Eco-friendly',
    imagem: '@/assets/imagens/destino1.png',
  },
  {
    nome: 'Parque Nacional Torres',
    local: 'Chile',
    descricao: 'Paisagens deslumbrantes de montanhas, lagos e geleiras.',
    difficulty: 'Média',
    ecoStatus: 'Sustentável',
    imagem: '@/assets/imagens/torres_del_paine.jpg',
  },
  {
    nome: 'Ilha de Páscoa',
    local: 'Chile',
    descricao: 'Famosa por suas misteriosas estátuas moai.',
    difficulty: 'Baixa',
    ecoStatus: 'Eco-friendly',
    imagem: '@/assets/imagens/ilha_de_pascoa.jpg',
  },
  {
    nome: 'Salar de Uyuni',
    local: 'Bolívia',
    descricao: 'O maior deserto de sal do mundo, com paisagens surrealistas.',
    difficulty: 'Média',
    ecoStatus: 'Sustentável',
    imagem: '@/assets/imagens/salar_de_uyuni.jpg',
  },
  {
    nome: 'Cataratas do Iguaçu',
    local: 'Brasil/Argentina',
    descricao: 'Uma das maiores e mais impressionantes quedas d\'água do mundo.',
    difficulty: 'Baixa',
    ecoStatus: 'Eco-friendly',
    imagem: '@/assets/imagens/cataratas_do_iguacu.jpg',
  },
  {
    nome: 'Deserto do Atacama',
    local: 'Chile',
    descricao: 'O deserto mais seco do mundo, com paisagens lunares.',
    difficulty: 'Média',
    ecoStatus: 'Sustentável',
    imagem: '@/assets/imagens/deserto_do_atacama.jpg',
  }
]
</script>
<template>
  <div class="page">
    <header>
      <Header></Header>
      <figure>
        <img src="@/assets/imagens/destaque.png" alt="Banner Home" class="banner-image" />
      </figure>
    </header>
    <main>
      <section class="destinos-populares">
        <div class="container">
          <h2>Destinos Populares</h2>
          <Carrossel :component='CardDestinos' :destinos="destinos" />
        </div>
      </section>
      <section class="equipe">
        <div class="container">
          <h2>Nossa Equipe</h2>
          <div class="equipe-container">
            <div class="equipe-membros">
              <div class="membro">
                <img src="@/assets/imagens/images.jpg" alt="Membro 1" class="membro-imagem" />
                <h3>João Silva</h3>
                <p>Desenvolvedor Front-end</p>
              </div>
              <div class="membro">
                <img src="@/assets/imagens/images.jpg" alt="Membro 2" class="membro-imagem" />
                <h3>Maria Oliveira</h3>
                <p>Designer UX/UI</p>
              </div>
              <div class="membro">
                <img src="@/assets/imagens/images.jpg" alt="Membro 3" class="membro-imagem" />
                <h3>Carlos Santos</h3>
                <p>Desenvolvedor Back-end</p>
              </div>
            </div>

            <div class="equipe-CTA">
              <h3>Junte-se a nós!</h3>
              <p>Estamos sempre em busca de novos talentos para nossa equipe. Se você é apaixonado por viagens e
                tecnologia, entre em contato conosco!</p>
              <button class="join-button">Entre em Contato</button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>

</template>
<style scoped>
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  overflow: hidden;
  width: 100%;
}

section {
  width: 100%;
  /* max-width: 1440px; */
  margin: 100px auto;
  /* padding: 0 100px; */
  box-sizing: border-box;
}

.container{
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 100px;
  box-sizing: border-box;
}

.banner-image {
  width: 100%;
  height: 480px;
  display: block;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  border-top: 30px solid var(--primary-color);
  border-bottom: 30px solid var(--primary-color);
}

h2 {
  width: 100%;
  text-align: left;
  font-size: 2.5rem;
  color: var(--accent-color);
  border-left: 4px solid var(--accent-color);
  padding-left: 0.75rem;
}

.equipe {
  background-color: var(--secondary-color);
  width: 100%;
}

.equipe-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.equipe-CTA {
  max-width: 400px;
  color: aliceblue;
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 1.8rem;
  color: var(--accent-color);
}

.join-button {
  background-color: var(--primary-color);
  color: var(--accent-color);
  border: none;
  max-width: 250px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 40px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.join-button:hover {
  background-color: var(--accent-color);
  color: var(--primary-color);
}

.equipe-membros {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 5rem;
  margin: 0;
}

.membro {
  width: 150px;
  text-align: center;
  color: aliceblue;
}

.membro-imagem {
  width: 100%;
  height: 150px;
  object-position: center;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
}

@media (max-width: 992px) {
  .container {
    padding: 50px 50px;
  }

  .equipe-container {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 40px 30px;
  }

  h2 {
    font-size: 2rem;
  }

  .equipe-membros {
    justify-content: center;
    gap: 3rem;
  }

  .equipe-CTA {
    text-align: center;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 30px 20px;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .membro {
    width: 120px;
  }

  .banner-image {
    height: 300px;
  }
}</style>