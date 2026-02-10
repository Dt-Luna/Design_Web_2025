<script setup lang="ts">
// import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'

const nome = ref('')
const email = ref('')
const telefone = ref('')

function enviarFormulario() {
  const dados = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
  }

  console.log('ENVIADO COM SUCESSO:', dados)
}
</script>

<template>
  <div class="page">
    <headerAdm />

    <main class="main-content">
      <h1>Adicionar Evento</h1>
    </main>

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

.form-section h2 {
  margin-bottom: 20px;
  color: #1b473a;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.datas-in-row {
  display: flex;
  flex-direction: row;
  gap: 100px;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.cat-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 10px;
}

.cat-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
}

.cat-icon-btn {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #f3f3f3;
  border: 1px solid #dcdcdc;
  border-radius: 8px;

  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 1px 2px #0001;
}

.cat-icon-btn:hover {
  background: #e7e7e7;
  border-color: #c9c9c9;
  box-shadow: 0 2px 4px #0002;
}

.arrow {
  font-size: 25px;
  color: #444;
  font-weight: bold;
  transform: translateY(-7px);
}

.cat-dropdown {
  margin-top: 5px;
  background: white;
  border: 1px solid #b6e8d2;
  border-radius: 8px;
  box-shadow: 0 2px 6px #0002;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 260px;
}

.cat-option {
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.cat-option:hover {
  background: #d8f7ea;
}

.cat-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
}
.cat-input {
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
}

.disabled {
  opacity: 0.4;
  pointer-events: none;
}

.tag {
  background: #c8f5de;
  padding: 6px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
}

.remove-tag {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #0a8f5a;
}
.remove-tag:hover {
  color: red;
}

.date-time-row {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
}
.lista-dias-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 20px;
  width: 100%;
}

.remove-day {
  border: none;
  color: #900;
  background-color: rgb(252, 232, 232);
  font-weight: bold;
  border-radius: 15px;
  padding: 4px 7px;
  cursor: pointer;
  transition: 0.2s;
}

.remove-day:hover {
  color: #ff8080;
}

.dia-item {
  background: #e6fff4;
  border: 1px solid #ddf5e9;
  padding: 12px 15px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 20px;

  box-shadow: 0 2px 6px #0001;
}

.dia-label {
  font-weight: 600;
  color: #066245;
  width: 120px;
}

.time-input {
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  min-width: 120px;
}
/*organizadores */
.organizadores-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 10px;
  width: 100%;
}
.organizador-field {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 10px;
}

.organizador-field input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
}

.remove-field {
  background: #ffe5e5;
  border: 1px solid #ffb3b3;
  color: #a00;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.2s;
}

.remove-field:hover {
  background: #ffd2d2;
  color: #700;
}

.add-field {
  align-self: flex-start;
  background: #c8f5de;
  border: 1px solid #9bd9b9;
  padding: 8px 16px;
  border-radius: 8px;
  color: #0b5c3e;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.add-field:hover {
  background: #b2f0d1;
  border-color: #89cdaa;
}

.submit-container {
  display: flex;
  justify-content: flex-end;
}
.submit-btn {
  background: #08472e;
  color: white;
  padding: 12px 30px;
  border-radius: 10px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
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