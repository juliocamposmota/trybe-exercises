const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const estadoSelect = document.querySelector('#select-estados');

function inserirEstados() {
  for (let index = 0; index < estados.length; index += 1) {
    const estado = document.createElement('option');
    estado.setAttribute('value', estados[index]);
    estado.innerText = estados[index];
    estadoSelect.appendChild(estado);
  }
}

inserirEstados();

const dataInicio = document.querySelector('#input-data-inicio');

function dataMask() {
  let data = dataInicio.value;

  if (data.length === 2) {
    if (data <= 0 || data > 31) {
      alert('O dia deve estar entre 1 e 31.');
      dataInicio.value = '';
    } else {
      data = data + '/';
      dataInicio.value = data;
    }
  }

  if (data.length === 5) {
    if (data.slice(3) <= 0 || data.slice(3) > 12) {
      alert('O mês deve estar entre 1 e 12.');
      dataInicio.value = '';
    } else {
      data = data + '/';
      dataInicio.value = data;
    }
  }
}

dataInicio.addEventListener('keyup', dataMask);
