const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const estadoSelect = document.querySelector('#select-estados');
const botaoSalvar = document.querySelector('#button-salvar');
const botaoLimpar = document.querySelector('#button-reset');
const personalContainer = document.querySelector('.personal-container');
const nameInput = document.querySelector('#input-name');
const nameLabel = document.querySelector('#name-label');
const emailInput = document.querySelector('#input-email');
const emailLabel = document.querySelector('#email-label');
const cpfInput = document.querySelector('#input-cpf');
const cpfLabel = document.querySelector('#cpf-label');
const addressInput = document.querySelector('#input-endereco');
const addressLabel = document.querySelector('#address-label');
const cityInput = document.querySelector('#input-cidade');
const cityLabel = document.querySelector('#city-label');
const stateLabel = document.querySelector('#state-label');
const resumoTextarea = document.querySelector('#textarea-cv-resume');
const resumoLabel = document.querySelector('#resumo-label');
const cargoInput = document.querySelector('#input-cargo');
const cargoLabel = document.querySelector('#cargo-label');
const descricaoInput = document.querySelector('#input-descricao-cargo');
const descricaoLabel = document.querySelector('#descricao-label');
const dataInicioInput = document.querySelector('#datepicker');
const dataInicioLabel = document.querySelector('#data-inicio-label');
const curriculo = document.querySelector('#curriculo');

let picker = new Pikaday({ field: document.getElementById('datepicker') });

function inserirEstados() {
  for (let index = 0; index < estados.length; index += 1) {
    const estado = document.createElement('option');
    estado.setAttribute('value', estados[index]);
    estado.innerText = estados[index];
    estadoSelect.appendChild(estado);
  }
}

function createPersonalResume() {
  let nameValue = document.createElement('p');
  let emailValue = document.createElement('p');
  let cpfValue = document.createElement('p');
  let addressValue = document.createElement('p');
  let cityValue = document.createElement('p');
  let stateValue = document.createElement('p');

  nameValue.innerText = nameInput.value;
  nameValue.classList.add('fs-6');
  nameLabel.insertAdjacentElement('afterend', nameValue);
  emailValue.innerText = emailInput.value;
  emailLabel.insertAdjacentElement('afterend', emailValue);
  cpfValue.innerText = cpfInput.value;
  cpfLabel.insertAdjacentElement('afterend', cpfValue);
  addressValue.innerText = addressInput.value;
  addressLabel.insertAdjacentElement('afterend', addressValue);
  cityValue.innerText = cityInput.value;
  cityLabel.insertAdjacentElement('afterend', cityValue);
  stateValue.innerText = estadoSelect.value;
  stateLabel.insertAdjacentElement('afterend', stateValue);
}

function createProfessionalResume() {
  let resumoValue = document.createElement('p');
  let cargoValue = document.createElement('p');
  let descricaoValue = document.createElement('p');
  let dataInicioValue = document.createElement('p');

  resumoValue.innerText = resumoTextarea.value;
  resumoLabel.insertAdjacentElement('afterend', resumoValue);
  cargoValue.innerText = cargoInput.value;
  cargoLabel.insertAdjacentElement('afterend', cargoValue);
  descricaoValue.innerText = descricaoInput.value;
  descricaoLabel.insertAdjacentElement('afterend', descricaoValue);
  dataInicioValue.innerText = dataInicioInput.value;
  dataInicioLabel.insertAdjacentElement('afterend', dataInicioValue);
}

function changeCurriculoDisplay() {
  curriculo.style.display = 'block';
}

function prevenirEnvio(event) {
  event.preventDefault();
  createPersonalResume();
  createProfessionalResume();
  changeCurriculoDisplay();
}

function limparCurriculo() {
  const respostas = document.querySelectorAll('#curriculo p');

  for (let index = 0; index < respostas.length; index += 1) {
    respostas[index].remove();
  }

  curriculo.style.display = 'none';
}

inserirEstados();
botaoSalvar.addEventListener('click', prevenirEnvio);
botaoLimpar.addEventListener('click', limparCurriculo);
