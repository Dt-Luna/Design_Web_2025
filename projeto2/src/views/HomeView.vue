<script setup lang="ts">
import Header from '@/components/Header.vue';
import TheWelcome from '../components/TheWelcome.vue'
import CardDestinos from '@/components/CardDestinos.vue';
import Carrossel from '@/components/Carrossel.vue'
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
      <h2>Destinos Populares</h2>
      <Carrossel :component='CardDestinos' :destinos="destinos" />
      <h2>Nossa Equipe</h2>
      <div class="equipe-container">
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
    </main>
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
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 1rem;
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
  font-size: 1.75rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  border-left: 4px solid var(--accent-color);
  padding-left: 0.75rem;
}

.equipe-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  background-color: var(--primary-color);
  position: relative;
  padding: 2rem 1rem;
  border-radius: 0 100px 0 0;
}
</style>