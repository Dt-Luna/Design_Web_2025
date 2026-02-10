<script setup lang="ts">
import { defineComponent } from 'vue'
interface Projeto {
    titulo: string
    local: string
    resumo: string
    impacto: string
}
const props = defineProps<{
    p: Projeto
}>()
</script>
<template>
    <div class="card">    <header>
        <h2>{{ props.p.titulo }}</h2>
        <span class="local">{{ props.p.local }}</span>
    </header>
    <p class="resumo">{{ props.p.resumo }}</p>
    <footer class="card-footer">
        <span class="impacto">Impacto: <strong>{{ props.p.impacto }}</strong></span>
        <button class="ver-mais">Ver mais</button>
    </footer></div>

</template>
<style scoped>
.card {
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card header h2 {
    font-size: 1.125rem;
    margin: 0 0 6px 0;
    color: var(--primary-color);
    border: none;
    padding: 0;
}

.local {
    font-size: 0.9rem;
    color: #777;
}

.resumo {
    margin: 12px 0 18px 0;
    color: #333;
    flex: 1;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.ver-mais {
    background: var(--primary-color);
    color: var(--accent-color);
    border: none;
    padding: 8px 14px;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.ver-mais:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
}
</style>