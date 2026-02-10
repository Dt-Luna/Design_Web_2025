<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CardProjetos from '@/components/CardProjetos.vue'
import { ref, onMounted } from 'vue'

interface Projeto {
    id: number
    titulo: string
    local: string
    resumo: string
    impacto: string
}

const projetos = ref<Projeto[]>([])

const carregarProjetos = async () => {
    const dados = localStorage.getItem('projetos')
    if (dados) {
        projetos.value = JSON.parse(dados)
    } else {
        projetos.value = []
    }
}

onMounted(() => {
    carregarProjetos()
})

const textoProjeto = ref('')
const textoDescricao = ref('')
const textoLocal = ref('')
const textoImpacto = ref('')

const salvarProjeto = () => {
    const projetosArmazenados = JSON.parse(localStorage.getItem('projetos') || '[]')
    const novoProjeto: Projeto = {
        id: Date.now(),
        titulo: textoProjeto.value,
        local: textoLocal.value,
        resumo: textoDescricao.value,
        impacto: textoImpacto.value,
    }
    projetosArmazenados.push(novoProjeto)
    localStorage.setItem('projetos', JSON.stringify(projetosArmazenados))
    textoProjeto.value = ''
    textoDescricao.value = ''
    textoLocal.value = ''
    textoImpacto.value = ''
}
</script>
<template>
    <Header />
    <main class="container">
        <section class="form-section">
            <h2>Adicionar Novo Projeto</h2>
            <fieldset>
                <form action="">
                    <textarea v-model="textoProjeto" placeholder="Digite o nome do projeto" class="input-field"></textarea>
                    <textarea v-model="textoDescricao" placeholder="Digite a descrição do projeto" class="input-field"></textarea>
                    <textarea v-model="textoLocal" placeholder="Digite o local do projeto" class="input-field"></textarea>
                    <textarea v-model="textoImpacto" placeholder="Digite o impacto do projeto" class="input-field"></textarea>
                    <button @click.prevent="salvarProjeto" class="submit-btn">Adicionar Projeto</button>
                </form>
            </fieldset>
        </section>

        <section class="projects-section">
            <h2>Projetos Registrados</h2>
            <ol class="projects-list">
                <li v-for="p in projetos" :key="p.id" class="project-item">
                    <CardProjetos :p="p" />
                </li>
            </ol>
            <div v-if="projetos.length === 0" class="empty-state">
                <p>Nenhum projeto registrado ainda. Comece adicionando um!</p>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped>
main.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 60px 100px;
    min-height: calc(100vh - 260px);
}

.form-section {
    background: linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.08) 0%, rgba(var(--accent-color-rgb), 0.08) 100%);
    padding: 40px;
    border-radius: 16px;
    margin-bottom: 60px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.form-section h1 {
    color: var(--primary-color);
    margin-bottom: 30px;
    font-size: 2rem;
}

fieldset {
    border: none;
    padding: 0;
    margin: 0;
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.input-field {
    padding: 14px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
    min-height: 100px;
    transition: all 0.3s ease;
    background-color: #ffffff;
}

.input-field:hover {
    border-color: var(--primary-color);
    box-shadow: 0 2px 8px rgba(var(--primary-color-rgb), 0.1);
}

.input-field:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(var(--primary-color-rgb), 0.1);
}

.submit-btn {
    background: linear-gradient(135deg, var(--primary-color) 0%, #1a5f7a 100%);
    color: var(--accent-color);
    border: none;
    padding: 14px 32px;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(var(--primary-color-rgb), 0.3);
}

.submit-btn:active {
    transform: translateY(0);
}

h2 {
    color: var(--accent-color);
    margin-bottom: 30px;
    font-size: 1.8rem;
}

.projects-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
}

.project-item {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.empty-state {
    text-align: center;
    padding: 60px 20px;
    color: #999;
    font-size: 1.1rem;
}

@media (max-width: 1024px) {
    main.container {
        padding: 40px 60px;
    }

    .projects-list {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
}

@media (max-width: 768px) {
    main.container {
        padding: 30px 40px;
        min-height: calc(100vh - 240px);
    }

    .form-section {
        padding: 30px 20px;
        margin-bottom: 40px;
    }

    .form-section h1 {
        font-size: 1.6rem;
        margin-bottom: 20px;
    }

    .projects-section h2 {
        font-size: 1.4rem;
    }

    .input-field {
        min-height: 80px;
        padding: 12px;
    }

    .submit-btn {
        padding: 12px 24px;
        font-size: 1rem;
    }

    .projects-list {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 16px;
    }
}

@media (max-width: 480px) {
    main.container {
        padding: 20px;
        min-height: calc(100vh - 220px);
    }

    .form-section {
        padding: 20px;
        margin-bottom: 30px;
        border-radius: 12px;
    }

    .form-section h1 {
        font-size: 1.4rem;
        margin-bottom: 15px;
    }

    .projects-section h2 {
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

    .input-field {
        min-height: 70px;
        padding: 10px;
        font-size: 0.95rem;
    }

    .submit-btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }

    .projects-list {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .empty-state {
        padding: 40px 20px;
        font-size: 1rem;
    }
}
</style>