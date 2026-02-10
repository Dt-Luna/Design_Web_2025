<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CardProjetos from '@/components/CardProjetos.vue'
const projetos = [
    {
        id: 1,
        titulo: 'Recuperação de Recifes de Coral',
        local: 'Nordeste do Brasil',
        resumo: 'Programa de restauração de corais através de viveiros e transplantes. Envolve comunidades locais e monitoramento científico.',
        impacto: 'Alta',
    },
    {
        id: 2,
        titulo: 'Proteção de Tartarugas Marinhas',
        local: 'Praias do Atlântico Sul',
        resumo: 'Apoio a desovas, patrulhas noturnas e educação ambiental para reduzir predação e captura incidental.',
        impacto: 'Média',
    },
    {
        id: 3,
        titulo: 'Limpeza de Litorais e Redução de Plástico',
        local: 'Costa Brasileira',
        resumo: 'Campanhas de recolhimento de lixo com mapeamento de pontos críticos e parcerias com cooperativas de reciclagem.',
        impacto: 'Alta',
    },
    {
        id: 4,
        titulo: 'Monitoramento de Mamíferos Marinhos',
        local: 'Zona costeira',
        resumo: 'Registro e proteção de rotas de migração, resgate de animais encalhados e pesquisa de causas de mortalidade.',
        impacto: 'Média',
    }
]
</script>

<template>
    <div class="page">
        <header>
            <Header></Header>
        </header>
        <main>
            <section class="projetos">
                <div class="container">
                    <h2>Projetos pela Vida Marinha</h2>
                    <div class="grid">
                        <article v-for="p in projetos" :key="p.id" class="card">
                            <CardProjetos :p="p" />
                        </article>
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
    flex: 1;
    overflow: hidden;
    width: 100%;
}

section {
    width: 100%;
    margin: 100px auto;
    box-sizing: border-box;
}

.container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 50px 100px;
    box-sizing: border-box;
}

h2 {
    width: 100%;
    text-align: left;
    font-size: 2.5rem;
    color: var(--accent-color);
    border-left: 4px solid var(--accent-color);
    padding-left: 0.75rem;
    margin-bottom: 2rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

@media (max-width: 992px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .container {
        padding: 50px 50px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 40px 30px;
    }

    h2 {
        font-size: 2rem;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .card {
        padding: 16px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 30px 20px;
    }

    h2 {
        font-size: 1.5rem;
    }

    .card {
        padding: 16px;
    }

    .card header h2 {
        font-size: 1rem;
    }
}
</style>
