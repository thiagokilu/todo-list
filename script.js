let lista = document.querySelector('.lista')
let input = document.querySelector('.input')
let notas = JSON.parse(localStorage.getItem('notas')) || [];

function recuperarNota() {
    for(let i = 0; i < notas.length; i++) {
        divText = document.createElement('div')
        let buttomDelete = document.createElement('button')
        buttomDelete.setAttribute('class', 'fa-solid fa-trash apagar',)
        buttomDelete.addEventListener('click', apagarNota)
        
        divText.setAttribute('class', 'itemText')
        novaTask = document.createElement('li')
        const valorNota = notas[i]
        novaTask.setAttribute('class', 'item')
        novaTask.appendChild(divText)
        textoNota = document.createTextNode(valorNota.content)
        novaTask.appendChild(buttomDelete)
        divText.appendChild(textoNota);
        lista.appendChild(novaTask)   
    }

}
function criarNota() {
    divText = document.createElement('div')
    let buttomDelete = document.createElement('button')
    buttomDelete.setAttribute('class', 'fa-solid fa-trash apagar',)
    buttomDelete.addEventListener('click', apagarNota)
    
    divText.setAttribute('class', 'itemText')
    novaTask = document.createElement('li')
    const valorNota = document.createTextNode(input.value)
    novaTask.setAttribute('class', 'item')
    novaTask.appendChild(divText)
    novaTask.appendChild(buttomDelete)
    divText.appendChild(valorNota);
    lista.appendChild(novaTask)   
    }
    

function adicionarNota() {
    let novaNota = {
        id: crypto.randomUUID(),
        content: input.value
    };

    notas.push(novaNota);
    localStorage.setItem('notas', JSON.stringify(notas));
    criarNota()
    input.value = ''
}

function apagarNota(valorNota) {
    let itemToRemove = this.parentElement;
    lista.removeChild(itemToRemove);
    notas.splice(valorNota, 1)
    localStorage.setItem('notas', JSON.stringify(notas));
}

input.addEventListener('keyup', (event) => {
    if (event.code === 'Enter' || event.key === 'Enter') {
        adicionarNota();
    }
});

recuperarNota()