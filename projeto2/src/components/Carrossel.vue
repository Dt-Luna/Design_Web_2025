<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { Swiper as SwiperClass } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar, Mousewheel, FreeMode, Navigation } from 'swiper/modules'
import 'swiper/css'
import CardDestinos from './CardDestinos.vue'
import 'swiper/css/scrollbar'
import { t } from 'vue-router/dist/index-Cu9B0wDz.mjs'

/* ---------- modules Swiper ---------- */
const modules = [Scrollbar, Mousewheel, FreeMode, Navigation]

/* ---------- props ---------- */
const props = defineProps({
  destinos: { type: Array, required: true },
  component: { type: Object, required: true },
})

/* ---------- emits ---------- */
const emit = defineEmits(['select'])
/* ---------- device ---------- */
type Device = 'desktop' | 'tablet' | 'mobile'
const device = ref<Device>('desktop')

function updateDevice() {
  const w = window.innerWidth
  if (w >= 1200) device.value = 'desktop'
  else if (w >= 768) device.value = 'tablet'
  else device.value = 'mobile'
}

onMounted(() => {
  updateDevice()
  window.addEventListener('resize', updateDevice)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateDevice)
})

const totalPages = computed(() => {
  const remaining = props.destinos.length - Math.floor(slidesPerView.value)
  return Math.max(1, Math.ceil(remaining) + 1)
})
/* ---------- config central ---------- */
const DEVICE_CONFIG = {
  desktop: {
    slidesPerView: 3,
    spaceBetween: 8,
  },
  tablet: {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  mobile: {
    slidesPerView: 1,
    spaceBetween: 12,
  },
} as const

/* ---------- layout derivado ---------- */
const layoutConfig = computed(() => DEVICE_CONFIG[device.value])
const slidesPerView = computed(() => layoutConfig.value.slidesPerView)
const spaceBetween = computed(() => layoutConfig.value.spaceBetween)

/* ---------- índice de slides ---------- */
const currentIndex = ref(0)
const swiperInstance = ref<SwiperClass | null>(null)

function onSlideChange(swiper: SwiperClass) {
  currentIndex.value = swiper.activeIndex
  swiperInstance.value = swiper
}

async function goToSlide(index: number) {
  await nextTick()
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index, 500)
  }
}

function onSwiper(swiper: SwiperClass) {
  swiperInstance.value = swiper
}

/* ---------- Swiper config ---------- */
const swiperConfig = computed(() => {
  return {
    modules,
    spaceBetween: spaceBetween.value,
    loop: false,
    grabCursor: true,
    mousewheel: { forceToAxis: true },
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 1,
      momentumVelocityRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
    },
    freeModeSticky: false,
    on: {
      slideChange: onSlideChange,
    },
  }
})

</script>

<template>
  <div class="carrossel-wrapper">
    <div class="viewport-container">
      <swiper
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :loop="false"
        :grab-cursor="true"
        :mousewheel="{ forceToAxis: true }"
        :free-mode="{ enabled: true, momentum: true }"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
        class="swiper"
      >
        <swiper-slide v-for="(destino, i) in destinos" :key="i">
          <component
            :is="component"
            :destino="destino"
            :style="{ cursor: 'pointer' }"
            @click="emit('select', destino)"
          />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Scrollbar com índices clicáveis para ambos carrosséis -->
    <div class="carousel-scrollbar">
      <button
        v-for="i in totalPages"
        :key="i"
        class="scrollbar-index"
        :class="{ active: currentIndex === i - 1 }"
        @click="goToSlide(i - 1)"
        :aria-label="`Ir para card ${i}`"
        :title="`Card ${i} de ${totalPages}`"
      />
    </div>

    <!-- Índice em pontos apenas para carrossel de destaques -->
  </div>
</template>

<style scoped>
.carrossel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

/* ===== VIEWPORT CONTAINER - Alinhado com margens da página ===== */
.viewport-container {
  width: 100%;
  max-width: 1440px;
  /* padding: 0 100px; */
  box-sizing: border-box;
  overflow-x: hidden;
}

/* ===== SWIPER BASE ===== */
:deep(.swiper) {
  width: 100%;
  overflow: hidden;
  border-radius: 0;
  padding: 1rem 0;
  box-sizing: border-box;
}

:deep(.swiper-wrapper) {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
  justify-content: justify;
  align-items: center;
}

/* ===== CARROSSEL ===== */
.swiper {
  width: 100%;
  box-sizing: border-box;
}

/* ===== PAGINATION DOTS ===== */
.carousel-pagination {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.pagination-dot:hover {
  border-color: #999;
  transform: scale(1.2);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.pagination-dot.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  box-shadow: 0 0 12px rgba(11, 81, 63, 0.4);
}

/* ===== SCROLLBAR COM ÍNDICES CLICÁVEIS ===== */
.carousel-scrollbar {
  width: 100%;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 10px;
}

.carousel-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.carousel-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.carousel-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(11, 81, 63, 0.3);
  border-radius: 10px;
}

.scrollbar-index {
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  padding: 0;
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  background-color: rgba(11, 81, 63, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}    

.scrollbar-index:hover {
  background-color: rgba(11, 81, 63, 0.3);
  border-color: var(--accent-color);
  transform: scale(1.2);
}

.scrollbar-index.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  box-shadow: 0 2px 8px rgba(11, 81, 63, 0.4);
  transform: scale(1.3);
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 767px) {
  .carrossel-wrapper {
    gap: 1rem;
  }

  :deep(.swiper) {
    padding: 1rem 0;
  }

  .pagination-dot {
    width: 8px;
    height: 8px;
  }

  .carousel-scrollbar{
    display: none;
  }
}
  

/* Garante que clique e arraste funciona em toda a área */
:deep(.swiper) {
  cursor: grab;
}

:deep(.swiper.swiper-grabbing) {
  cursor: grabbing;
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
  /* justify-content: left; */
  align-items: left;
  margin-right: 5px;
}
</style>