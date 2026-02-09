<script setup lang="ts">

</script>
<template>
    <header class="main-header">
        <div class="header-waves-container">
            <RouterLink to="/" class="header-logo">
                <!-- <img src="logoImg" alt="Logo do projeto"/> -->
            </RouterLink>
        </div>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/quemsomos">
                        <p>Texto</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/contribuicoes">
                        <p>Texto</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/colaborador">
                        <p>Texto</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/programcao">
                        <p>Texto</p>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
.main-header {
    /* background-image: url('@/assets/images/header_background.svg'); */
    display: inline;
    max-width: 100%;
}
nav{
    background-color: #111C4C;
    display: block;
}
</style>