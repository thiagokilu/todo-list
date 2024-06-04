let lista = document.querySelector('.lista');
let input = document.querySelector('.input');
let notas = JSON.parse(localStorage.getItem('notas')) || [];

function criarNotaElemento(nota) {
    const divText = document.createElement('div');
    divText.setAttribute('class', 'itemText');
    const valorNota = document.createTextNode(nota.content);
    divText.appendChild(valorNota);

    const buttomDelete = document.createElement('button');
    buttomDelete.textContent = 'x';
    buttomDelete.setAttribute('class', 'apagar');
    buttomDelete.addEventListener('click', function() {
        removerNotaElemento(nota);
    });

    const novaTask = document.createElement('li');
    novaTask.setAttribute('class', 'item');
    novaTask.appendChild(divText);
    novaTask.appendChild(buttomDelete);

    lista.appendChild(novaTask);
}

function removerNotaElemento(nota) {
    const index = notas.findIndex(x => x.id === nota.id);
    if (index !== -1) {
        notas.splice(index, 1);
        localStorage.setItem('notas', JSON.stringify(notas));
        lista.removeChild(nota.element);
    }
}

function adicionarNota() {
    const novaNota = {
        id: crypto.randomUUID(),
        content: input.value
    };

    notas.push(novaNota);
    localStorage.setItem('notas', JSON.stringify(notas));
    criarNotaElemento(novaNota);

    input.value = '';
}

if (notas.length > 0) {
    notas.forEach(nota => {
        criarNotaElemento(nota);
    });
} else {
    console.log('Não há notas armazenadas.');
}

input.addEventListener('keyup', (event) => {
    if (event.code === 'Enter' || event.key === 'Enter') {
        console.log(deu)
        adicionarNota();
    }
});