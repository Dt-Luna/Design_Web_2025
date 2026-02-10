<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Footer from '@/components/Footer.vue'

interface Projeto {
  id: string
  nome: string
  descricao: string
  categoria: string
  dataIniciao: string
  dataConclusao: string
}

const nome = ref('')
const descricao = ref('')
const categoria = ref('')
const dataInicio = ref('')
const dataConclusao = ref('')
const projetos = ref<Projeto[]>([])

const STORAGE_KEY = 'projetos_cadastrados'

// Carrega projetos do localStorage ao montar o componente
onMounted(() => {
  carregarProjetos()
})

// Carrega projetos do localStorage
function carregarProjetos() {
  const dados = localStorage.getItem(STORAGE_KEY)
  if (dados) {
    try {
      projetos.value = JSON.parse(dados)
    } catch (e) {
      console.error('Erro ao carregar projetos:', e)
      projetos.value = []
    }
  }
}

// Salva projetos no localStorage
function salvarProjetos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projetos.value))
}

// Adiciona novo projeto
function adicionarProjeto() {
  if (!nome.value || !descricao.value || !categoria.value) {
    alert('Por favor preencha todos os campos obrigatórios')
    return
  }

  const novoProjeto: Projeto = {
    id: Date.now().toString(),
    nome: nome.value,
    descricao: descricao.value,
    categoria: categoria.value,
    dataIniciao: dataInicio.value,
    dataConclusao: dataConclusao.value,
  }

  projetos.value.push(novoProjeto)
  salvarProjetos()

  // Limpa formulário
  nome.value = ''
  descricao.value = ''
  categoria.value = ''
  dataInicio.value = ''
  dataConclusao.value = ''

  console.log('Projeto adicionado com sucesso!')
}

// Remove projeto
function removerProjeto(id: string) {
  projetos.value = projetos.value.filter((p) => p.id !== id)
  salvarProjetos()
}

// Conta projetos por categoria
const projetosPorCategoria = computed(() => {
  const categorias: { [key: string]: number } = {}
  projetos.value.forEach((p) => {
    categorias[p.categoria] = (categorias[p.categoria] || 0) + 1
  })
  return categorias
})
</script>

<template>
  <div class="page">
    <headerAdm />

    <main class="main-content">
      <h1>Adicionar Projeto</h1>

      <!-- Formulário -->
      <section class="form-section">
        <h2>Novo Projeto</h2>

        <div class="form-group">
          <label for="nome">Nome do Projeto *</label>
          <input 
            id="nome"
            v-model="nome" 
            type="text" 
            placeholder="Digite o nome do projeto"
          />
        </div>

        <div class="form-group">
          <label for="descricao">Descrição *</label>
          <textarea 
            id="descricao"
            v-model="descricao" 
            placeholder="Digite a descrição do projeto"
            rows="4"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="categoria">Categoria *</label>
          <select id="categoria" v-model="categoria">
            <option value="">Selecione uma categoria</option>
            <option value="Educação">Educação</option>
            <option value="Meio Ambiente">Meio Ambiente</option>
            <option value="Saúde">Saúde</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Social">Social</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <div class="datas-in-row">
          <div class="form-group">
            <label for="dataInicio">Data de Início</label>
            <input 
              id="dataInicio"
              v-model="dataInicio" 
              type="date"
            />
          </div>

          <div class="form-group">
            <label for="dataConclusao">Data de Conclusão</label>
            <input 
              id="dataConclusao"
              v-model="dataConclusao" 
              type="date"
            />
          </div>
        </div>

        <div class="submit-container">
          <button class="submit-btn" @click="adicionarProjeto">
            Adicionar Projeto
          </button>
        </div>
      </section>

      <!-- Estatísticas -->
      <section v-if="projetos.length > 0" class="stats-section">
        <h2>Estatísticas</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">{{ projetos.length }}</span>
            <span class="stat-label">Projetos Cadastrados</span>
          </div>
          <div v-for="(count, categoria) in projetosPorCategoria" :key="categoria" class="stat-card">
            <span class="stat-number">{{ count }}</span>
            <span class="stat-label">{{ categoria }}</span>
          </div>
        </div>
      </section>

      <!-- Lista de Projetos -->
      <section v-if="projetos.length > 0" class="projetos-section">
        <h2>Projetos Cadastrados</h2>
        <div class="projetos-grid">
          <div v-for="projeto in projetos" :key="projeto.id" class="projeto-card">
            <div class="projeto-header">
              <h3>{{ projeto.nome }}</h3>
              <span class="categoria-badge">{{ projeto.categoria }}</span>
            </div>
            <p class="projeto-descricao">{{ projeto.descricao }}</p>
            <div class="projeto-datas">
              <span v-if="projeto.dataIniciao" class="data">
                📅 Início: {{ projeto.dataIniciao }}
              </span>
              <span v-if="projeto.dataConclusao" class="data">
                📅 Conclusão: {{ projeto.dataConclusao }}
              </span>
            </div>
            <button class="remove-btn" @click="removerProjeto(projeto.id)">
              Remover
            </button>
          </div>
        </div>
      </section>

      <!-- Mensagem vazia -->
      <section v-else class="empty-state">
        <p>Nenhum projeto cadastrado ainda.</p>
        <p>Adicione um novo projeto usando o formulário acima!</p>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.page {
  background: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  max-width: 1440px;
  width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

h1 {
  color: #0a4635;
}

.form-section {
  width: 100%;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0002;
}

.form-section h2,
.stats-section h2,
.projetos-section h2 {
  margin-bottom: 20px;
  color: #1b473a;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.form-group label {
  margin-bottom: 8px;
  font-weight: 600;
  color: #1b473a;
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group select {
  cursor: pointer;
  background-color: white;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #0a8f5a;
  box-shadow: 0 0 0 3px rgba(10, 143, 90, 0.1);
}

.datas-in-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.datas-in-row .form-group {
  flex: 1;
}

.submit-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.submit-btn {
  background: #08472e;
  color: white;
  padding: 12px 30px;
  border-radius: 10px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 600;
}

.submit-btn:hover {
  background: #06351f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(8, 71, 46, 0.3);
}

/* Estatísticas */
.stats-section {
  width: 100%;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0002;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.stat-card {
  background: linear-gradient(135deg, #0a8f5a 0%, #066245 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(10, 143, 90, 0.2);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Projetos */
.projetos-section {
  width: 100%;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0002;
}

.projetos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.projeto-card {
  background: linear-gradient(to bottom, #f9f9f9, #ffffff);
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
}

.projeto-card:hover {
  box-shadow: 0 4px 16px rgba(10, 143, 90, 0.15);
  transform: translateY(-4px);
}

.projeto-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
  gap: 10px;
}

.projeto-card h3 {
  color: #1b473a;
  margin: 0;
  flex: 1;
}

.categoria-badge {
  background: #c8f5de;
  color: #0a8f5a;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.projeto-descricao {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.projeto-datas {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px 0;
  font-size: 0.9rem;
  color: #555;
}

.projeto-datas .data {
  display: flex;
  align-items: center;
  gap: 6px;
}

.remove-btn {
  width: 100%;
  background: #ffe5e5;
  border: 1px solid #ffb3b3;
  color: #a00;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 600;
}

.remove-btn:hover {
  background: #ffd2d2;
  color: #700;
}

/* Estado Vazio */
.empty-state {
  width: 100%;
  background: white;
  padding: 60px 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0002;
  text-align: center;
  color: #999;
}

.empty-state p {
  font-size: 1.1rem;
  margin: 10px 0;
}

.empty-state p:first-child {
  color: #666;
  font-weight: 600;
}

footer {
  background-color: #02402e;
  color: #ffffff;
  font-size: 14px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-content {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 40px 20px 30px;
  gap: 20px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px 4px;
}

.footer-logo {
  width: 220px;
}

.logo-if {
  width: 220px;
}

.footer-right {
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 6px;
}

.footer-right p {
  margin: 10px 4px;
  font-size: 20px;
}

.social {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 8px;
}

.social img {
  width: 38px;
  cursor: pointer;
  transition: 0.2s;
}

.social img:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.copy {
  text-align: center;
  font-size: 12px;
  padding: 15px 20px;
  background-color: #012118;
  width: 100%;
  opacity: 0.85;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

legend {
  font-weight: 600;
  margin-bottom: 16px;
  color: #1b473a;
}

/* Space before footer */
main section:last-child {
  margin-bottom: 6rem;
}

@media screen and (max-width: 750px) {
  .datas-in-row {
    flex-direction: column;
    gap: 10px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .projetos-grid {
    grid-template-columns: 1fr;
  }

  header ul {
    display: none;
  }

  .main-header {
    min-height: 60px;
    max-height: 60px;
  }

  .header-container {
    padding: 0;
  }

  .header-logo-container {
    position: static;
    transform: none;
    justify-content: left;
    padding: 10px 8px;
  }

  .header-logo {
    top: 50px;
    left: 10px;
    width: 50%;
    max-width: 80px;
  }
}
</style>