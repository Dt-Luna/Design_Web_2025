<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

// Não precisamos de lógica complexa aqui, apenas apresentação de conteúdo estático.
</script>

<template>
  <div class="page">
    <header>
      <Header></Header>
      <figure>
        <img src="@/assets/imagens/destaque.png" alt="Banner Home" class="banner-image" />
        <div class="hero-text">
          <h1>Quem Somos</h1>
        </div>
      </figure>
    </header>

    <main>
      <section class="sobre-nos">
        <div class="container content-grid">
          <div class="texto-historia">
            <h2>Nossa História</h2>
            <p>
              Fundada em 2024, a <strong>EcoTravel</strong> nasceu de um sonho compartilhado: explorar o mundo sem destruí-lo.
              Começamos como um pequeno grupo de amigos apaixonados por trilhas nos Andes e rapidamente percebemos que o turismo
              poderia ser uma força para o bem.
            </p>
            <p>
              Hoje, somos referência em <strong>ecoturismo consciente</strong>. Acreditamos que viajar é mais do que visitar lugares;
              é respeitar culturas locais, preservar a biodiversidade e criar memórias que transformam a alma.
            </p>
          </div>
          <div class="imagem-historia">
             <img src="@/assets/imagens/destino1.png" alt="Nossa equipe na trilha" />
          </div>
        </div>
      </section>

      <section class="pilares">
        <div class="container">
          <h2>Nossos Pilares</h2>
          <div class="cards-pilares">
            <div class="card">
              <h3>Sustentabilidade</h3>
              <p>Cada roteiro é planejado para minimizar a pegada de carbono e eliminar o uso de plásticos descartáveis.</p>
            </div>
            <div class="card">
              <h3>Comunidade</h3>
              <p>Trabalhamos diretamente com guias locais e hospedagens familiares, fortalecendo a economia regional.</p>
            </div>
            <div class="card">
              <h3>Aventura Real</h3>
              <p>Fugimos do óbvio. Nossas expedições levam você a lugares intocados, com segurança e respeito.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-final">
        <div class="container">
          <h3>Pronto para sua próxima aventura ecológica?</h3>
          <button class="join-button">Ver Roteiros Disponíveis</button>
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
  width: 100%;
  flex: 1; /* Garante que o main ocupe o espaço disponível empurrando o footer */
}

section {
  width: 100%;
  margin: 80px auto;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;
}

/* Estilos do Banner Hero Específico */
.hero-banner {
  position: relative;
  margin: 0;
}

.banner-image {
  width: 100%;
  height: 400px;
  display: block;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  border-top: 30px solid var(--primary-color);
  border-bottom: 30px solid var(--primary-color);
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: aliceblue;
  width: 100%;
}

.hero-text h1 {
  font-size: 3.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
}

/* Tipografia Comum */
h2 {
  width: 100%;
  text-align: left;
  font-size: 2.5rem;
  color: var(--accent-color);
  border-left: 4px solid var(--accent-color);
  padding-left: 0.75rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ffffff; /* Ajuste conforme sua cor de texto padrão */
}

/* Layout Grid para História */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.imagem-historia img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 10px 10px 0px var(--secondary-color); /* Efeito visual simples */
}

/* Seção Pilares (Fundo colorido) */
.pilares {
  background-color: var(--secondary-color);
  padding: 80px 0;
  margin-bottom: 0; /* Cola no CTA ou Footer se preferir */
}

.pilares h2 {
  color: aliceblue; /* Contraste com fundo escuro/colorido */
  border-color: aliceblue;
}

.cards-pilares {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 300px;
  background: rgba(255, 255, 255, 0.1); /* Fundo vidro/translúcido */
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: aliceblue;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.card h3 {
  color: aliceblue; /* Força branco nos cards */
}

.card p {
  color: #e0e0e0;
}

/* CTA Final */
.cta-final {
  text-align: center;
  padding: 60px 0;
  background-color: #f9f9f9; /* Fundo claro para contraste */
  margin: 0;
}

.cta-final h3 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Botão reutilizado do seu código */
.join-button {
  background-color: var(--primary-color);
  color: var(--accent-color);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 40px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-weight: bold;
}

.join-button:hover {
  background-color: var(--accent-color);
  color: var(--primary-color);
}

/* Responsividade Básica */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 20px;
  }
}
</style>