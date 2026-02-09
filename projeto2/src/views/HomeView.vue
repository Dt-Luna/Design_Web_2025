<script setup lang="ts">
import Header from '@/components/Header.vue';
import TheWelcome from '../components/TheWelcome.vue'
import CardDestinos from '@/components/CardDestinos.vue';
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
    nome: 'Parque Nacional Torres del Paine',
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
]
</script>
<template>
  <header>
    <Header></Header>
    <figure>
      <img src="@/assets/imagens/destaque.png" alt="Banner Home" class="banner-image" />
    </figure>
  </header>
  <main>
    <h2>Destinos Populares</h2>
    <CardDestinos v-for="destino in destinos" :key="destino.nome" :destino="destino" />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  max-width: 1440px;
  padding: 2rem 100px;
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
}
</style>