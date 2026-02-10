<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const dicasDiarias = [
  { titulo: 'Reduza o Plástico', texto: 'Troque garrafas descartáveis por uma reutilizável e evite canudos e sacolas plásticas.' },
  { titulo: 'Economize Energia', texto: 'Apague as luzes ao sair e prefira eletrodomésticos de baixo consumo.' },
  { titulo: 'Consumo Consciente', texto: 'Prefira produtos de empresas que comprovadamente respeitam o meio ambiente.' }
];

const dicasTurismo = [
  { titulo: 'Siga a Trilha', texto: 'Não saia dos caminhos demarcados para não compactar o solo ou destruir a flora local.' },
  { titulo: 'Lixo Zero', texto: 'Tudo o que você levar para a natureza deve voltar com você. Até lixo orgânico altera o ecossistema.' },
  { titulo: 'Respeite a Fauna', texto: 'Nunca alimente animais silvestres. Isso desregula o comportamento natural e a saúde deles.' }
];
</script>

<template>
  <div class="page">
    <header>
      <Header></Header>
    </header>

    <main>
      <section class="dicas-secao">
        <div class="container">
          <div class="intro-texto">
            <h2>Sustentabilidade em Casa</h2>
            <p>A preservação começa antes mesmo de sairmos de mochila nas costas. Veja como ajudar diariamente:</p>
          </div>
          
          <div class="grid-dicas">
            <div v-for="dica in dicasDiarias" :key="dica.titulo" class="card-dica">
              <div class="icon-check">✓</div>
              <h3>{{ dica.titulo }}</h3>
              <p>{{ dica.texto }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="regras-turismo">
        <div class="container">
          <div class="alerta-box">
            <h2>Ao Visitar Destinos Naturais</h2>
            <p class="subtitulo">O ecoturismo exige responsabilidade máxima. Lembre-se:</p>
            
            <div class="regras-lista">
              <div v-for="regra in dicasTurismo" :key="regra.titulo" class="regra-item">
                <div class="regra-header">
                  <span class="bullet"></span>
                  <h3>{{ regra.titulo }}</h3>
                </div>
                <p>{{ regra.texto }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="aviso-importante">
        <div class="container">
          <div class="aviso-card">
            <img src="@/assets/imagens/cataratas_do_iguacu.jpg" alt="Natureza" class="aviso-img" />
            <div class="aviso-conteudo">
              <h3>"Da natureza nada se tira além de fotos, nada se deixa além de pegadas, nada se leva além de lembranças."</h3>
              <p>Esta é a regra de ouro de todo viajante consciente. Respeite as comunidades locais e o tempo da natureza.</p>
            </div>
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

/* Banner Superior */
.banner-minimalista {
  background-color: var(--primary-color);
  color: var(--accent-color);
  padding: 80px 0;
  text-align: left;
}

.banner-minimalista h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.banner-minimalista p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;
}

/* Títulos das Seções */
h2 {
  font-size: 2.2rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  border-left: 5px solid var(--accent-color);
  padding-left: 15px;
}

/* Grid de Dicas Diárias */
.dicas-secao {
  margin: 80px 0;
}

.intro-texto p {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 40px;
}

.intro-texto {
  margin-bottom: 40px;
  max-width: 700px;
}

.grid-dicas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card-dica {
  background: #f4f4f4;
  padding: 30px;
  border-radius: 15px;
  transition: transform 0.3s;
}

.card-dica:hover {
  transform: translateY(-5px);
}

.icon-check {
  background: var(--accent-color);
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 15px;
}

/* Seção Regras (Fundo escuro/tema) */
.regras-turismo {
  background-color: var(--secondary-color);
  padding: 100px 0;
  color: white;
}

.alerta-box {
  background: rgba(255, 255, 255, 0.05);
  padding: 50px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.regras-lista {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 40px;
}

.regra-item h3 {
  color: var(--accent-color);
  margin-bottom: 10px;
}

.regra-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.bullet {
  width: 10px;
  height: 10px;
  background-color: var(--accent-color);
  border-radius: 50%;
}

/* Aviso Final */
.aviso-importante {
  margin: 100px 0;
}

.aviso-card {
  display: flex;
  align-items: center;
  gap: 40px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border-radius: 20px;
  overflow: hidden;
}

.aviso-img {
  width: 40%;
  height: 300px;
  object-fit: cover;
}

.aviso-conteudo {
  padding: 40px;
}

.aviso-conteudo h3 {
  font-style: italic;
  font-size: 1.5rem;
  color: #555;
  line-height: 1.4;
  margin-bottom: 20px;
}

/* Responsividade */
@media (max-width: 768px) {
  .aviso-card {
    flex-direction: column;
  }
  .aviso-img {
    width: 100%;
  }
  .container {
    padding: 0 20px;
  }
}
</style>