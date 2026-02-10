<script setup lang="ts">
import { ref, computed } from 'vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

interface Voluntario {
  id: string
  nomeCompleto: string
  email: string
  telefone: string
  habilidades: string
  disponibilidade: string
  areaInteresse: string
  motivacao: string
  dataCadastro: string
}

const nomeCompleto = ref('')
const email = ref('')
const telefone = ref('')
const habilidades = ref('')
const disponibilidade = ref('')
const areaInteresse = ref('')
const motivacao = ref('')
const voluntarios = ref<Voluntario[]>([])
</script>

<template>
  <div class="page">
    <header>
      <Header />
    </header>


    <main class="main-content">
      <h1>Voluntariado</h1>

      <section class="form-section">
        <h2>Cadastro de Voluntário</h2>
        <p class="form-subtitle">Junte-se a nós e faça a diferença na comunidade</p>

        <div class="form-group">
          <label for="nomeCompleto">Nome Completo *</label>
          <input id="nomeCompleto" v-model="nomeCompleto" type="text" placeholder="Digite seu nome completo" />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="email">Email *</label>
            <input id="email" v-model="email" type="email" placeholder="seu.email@exemplo.com" />
          </div>

          <div class="form-group">
            <label for="telefone">Telefone *</label>
            <input id="telefone" v-model="telefone" type="tel" placeholder="(84) 99999-9999" />
          </div>
        </div>

        <div class="form-group">
          <label for="habilidades">Habilidades e Competências *</label>
          <textarea id="habilidades" v-model="habilidades" placeholder="Descreva suas habilidades e competências"
            rows="3"></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="disponibilidade">Disponibilidade de Tempo *</label>
            <select id="disponibilidade" v-model="disponibilidade">
              <option value="">Selecione sua disponibilidade</option>
              <option value="Fins de semana">Fins de semana</option>
              <option value="Dias de semana">Dias de semana</option>
              <option value="Disponibilidade flexível">Disponibilidade flexível</option>
              <option value="Poucas horas por semana">Poucas horas por semana</option>
              <option value="Período integral">Período integral</option>
            </select>
          </div>

          <div class="form-group">
            <label for="areaInteresse">Área de Interesse *</label>
            <select id="areaInteresse" v-model="areaInteresse">
              <option value="">Selecione uma área</option>
              <option value="Educação">Educação</option>
              <option value="Meio Ambiente">Meio Ambiente</option>
              <option value="Saúde">Saúde</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Social">Social</option>
              <option value="Outras">Outras</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="motivacao">Por que deseja ser voluntário?</label>
          <textarea id="motivacao" v-model="motivacao" placeholder="Conte-nos sua motivação para voluntariar"
            rows="3"></textarea>
        </div>

        <div class="submit-container">
          <button class="submit-btn">
            Cadastrar como Voluntário
          </button>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  max-width: 1440px;
  width: 100%;
  margin: 40px auto;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

h1 {
  color: var(--accent-color);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.form-section {
  width: 100%;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(10, 71, 46, 0.08);
}

.form-section h2 {
  margin-bottom: 8px;
  color: var(--primary-color);
  font-size: 1.8rem;
}

.form-subtitle {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 30px;
  font-style: italic;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-row .form-group {
  margin-bottom: 0;
}

.form-group label {
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--primary-color);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 12px 14px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: white;
}

.form-group textarea {
  resize: vertical;
  min-height: 90px;
}

.form-group select {
  cursor: pointer;
}

.form-group input:hover,
.form-group textarea:hover,
.form-group select:hover {
  border-color: var(--primary-color);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 4px rgba(10, 71, 46, 0.1);
}

.submit-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.submit-btn {
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a5f7a 100%);
  color: var(--accent-color);
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(10, 71, 46, 0.3);
}

.submit-btn:active {
  transform: translateY(0);
}

/* Estatísticas */
.stats-section {
  width: 100%;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(10, 71, 46, 0.08);
}

.stats-section h2 {
  margin-bottom: 30px;
  color: var(--primary-color);
  font-size: 1.8rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a5f7a 100%);
  color: var(--accent-color);
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(10, 71, 46, 0.2);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  opacity: 0.95;
}

/* Voluntários */
.voluntarios-section {
  width: 100%;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(10, 71, 46, 0.08);
}

.voluntarios-section h2 {
  margin-bottom: 30px;
  color: var(--primary-color);
  font-size: 1.8rem;
}

.voluntarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.voluntario-card {
  background: linear-gradient(to bottom, #f9fdfb, #ffffff);
  border: 2px solid #e8f4f0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.voluntario-card:hover {
  box-shadow: 0 8px 20px rgba(10, 71, 46, 0.15);
  transform: translateY(-4px);
  border-color: var(--primary-color);
}

.voluntario-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 12px;
}

.voluntario-card h3 {
  color: var(--primary-color);
  margin: 0;
  flex: 1;
  font-size: 1.2rem;
}

.area-badge {
  background: linear-gradient(135deg, var(--primary-color), #1a5f7a);
  color: var(--accent-color);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.voluntario-info {
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px 0;
  margin: 12px 0;
}

.voluntario-info p {
  margin: 8px 0;
  font-size: 0.9rem;
  color: #555;
}

.voluntario-details {
  margin: 16px 0;
  font-size: 0.9rem;
}

.voluntario-details p {
  margin: 8px 0;
  color: #666;
}

.voluntario-details p strong {
  color: var(--primary-color);
}

.detail-text {
  margin-left: 8px;
  color: #777;
  font-size: 0.85rem;
  line-height: 1.4;
}

.cadastro-data {
  font-size: 0.8rem;
  color: #999 !important;
  margin-top: 12px !important;
  text-align: right;
}

.remove-btn {
  width: 100%;
  background: linear-gradient(135deg, #fee2e2, #fecaca);
  border: 2px solid #fca5a5;
  color: #991b1b;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.remove-btn:hover {
  background: linear-gradient(135deg, #fecaca, #fca5a5);
  color: #7f1d1d;
  transform: translateY(-2px);
}

/* Estado Vazio */
.empty-state {
  width: 100%;
  background: white;
  padding: 80px 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(10, 71, 46, 0.08);
  text-align: center;
  color: #999;
}

.empty-state p {
  font-size: 1.1rem;
  margin: 12px 0;
}

.empty-state p:first-child {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.3rem;
}

footer {
  background-color: var(--primary-color);
  color: var(--accent-color);
  font-size: 14px;
  margin-top: auto;
}

/* Space before footer */
main section:last-child {
  margin-bottom: 3rem;
}

@media screen and (max-width: 1024px) {
  .main-content {
    padding: 0 60px;
  }

  .form-section {
    padding: 30px;
  }

  .form-row {
    grid-template-columns: 1fr 1fr;
  }

  .voluntarios-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media screen and (max-width: 768px) {
  .main-content {
    padding: 0 40px;
    margin: 30px auto;
  }

  h1 {
    font-size: 2rem;
  }

  .form-section {
    padding: 25px;
  }

  .form-section h2 {
    font-size: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
  }

  .stat-card {
    padding: 18px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .voluntarios-grid {
    grid-template-columns: 1fr;
  }

  .voluntario-card {
    padding: 18px;
  }

  .voluntario-details p strong {
    display: block;
    margin-top: 6px;
  }
}

@media screen and (max-width: 480px) {
  .main-content {
    padding: 0 20px;
    margin: 20px auto;
  }

  h1 {
    font-size: 1.5rem;
  }

  .form-section {
    padding: 20px;
  }

  .form-section h2 {
    font-size: 1.2rem;
  }

  .form-subtitle {
    font-size: 0.85rem;
    margin-bottom: 20px;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    padding: 10px 12px;
    font-size: 0.95rem;
  }

  .submit-btn {
    padding: 12px 24px;
    font-size: 0.9rem;
  }

  .stats-section h2,
  .voluntarios-section h2 {
    font-size: 1.3rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .voluntario-card {
    padding: 16px;
  }

  .voluntario-card h3 {
    font-size: 1.05rem;
  }

  .voluntario-info p {
    font-size: 0.85rem;
  }

  .empty-state {
    padding: 60px 20px;
  }

  .empty-state p {
    font-size: 1rem;
  }

  header ul {
    display: none;
  }
}
</style>