<script setup lang="ts">

</script>
<template>
    <header class="main-header">
        <div class="header-container">
            <RouterLink to="/" class="header-logo-container">
                <!-- <img :src="logoImg" alt="Logo Eventos CNAT" class="header-logo" /> -->
            </RouterLink>
            <ul>
                <li><RouterLink to="/quemsomos">Quem Somos</RouterLink></li>
                <li><RouterLink to="/sejaumcolaborador">Seja um Colaborador</RouterLink></li>
                <li><RouterLink to="/projetos">Projetos</RouterLink></li>
                <li><RouterLink to="/destinos">Destinos</RouterLink></li>
            </ul>
        </div>
    </header>
</template>
<style scoped>
.main-header {
    background-image: url('@/assets/imagens/header_background1.svg');
    background-position: center;
    max-width: 100%;
    min-height: 100px;
    max-height: 100px;
    overflow: hidden;

}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    max-width: 1440px;
    min-height: 100px;
    max-height: 100px;
    margin: 0 auto;
}

nav {
    display: flex;
    justify-content: end;
    align-items: center;
    vertical-align: center;
}

ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
}

li a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #cccccc;
    cursor: pointer;
}
</style>