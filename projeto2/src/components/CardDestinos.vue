<script setup lang="ts">
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import 'swiper/css'
 
interface Destino {
  nome: string
  local: string
  descricao: string
  difficulty: string
  ecoStatus: string
  imagem: string
}

const props = defineProps<{ destino: Destino }>()
console.log(props.destino.imagem)

</script>
<template>
  <div class="card-container">
    <div class="card-header">
      <img :src="props.destino.imagem" :alt="props.destino.nome" class="card-image" />
      <span class="eco-badge">{{ props.destino.ecoStatus }}</span>
    </div>
    
    <div class="card-body">
      <div class="card-title-row">
        <h3>{{ props.destino.nome }}</h3>
        <span class="location">
          <i class="icon-pin"></i> {{ props.destino.local }}
        </span>
      </div>
      
      <p class="description">{{ props.destino.descricao }}</p>
      
      <div class="card-footer">
        <div class="info-group">
          <span class="label">Dificuldade</span>
          <span class="value">{{ props.destino.difficulty }}</span>
        </div>
        <button class="btn-explore">Explorar</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Variáveis de cor para facilitar a manutenção */
:root {
  --ocean-blue: #0077b6;
  --coral-pink: #ff7f50;
  --sand-light: #f8f9fa;
  --text-dark: #2c3e50;
  --text-gray: #6c757d;
}

.card-container {
  width: 100%;
  max-width: 350px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

/* Header e Imagem */
.card-header {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-container:hover .card-image {
  transform: scale(1.1);
}

.eco-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 119, 182, 0.85); /* Ocean Blue com transparência */
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  backdrop-filter: blur(4px);
}

/* Corpo do Card */
.card-body {
  padding: 20px;
}

.card-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.card-title-row h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #1a2b3c;
}

.location {
  font-size: 0.85rem;
  color: #0077b6;
  font-weight: 500;
}

.description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a 2 linhas de texto */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Footer e Botão */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 15px;
}

.info-group {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #aaa;
  letter-spacing: 1px;
}

.value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #444;
}

.btn-explore {
  background-color: #ff7f50; /* Coral */
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-explore:hover {
  background-color: #e66a44;
}
</style>