// Inicializa o contador
let contador = 0;

// Recupera a variável listaCursos do localStorage
let listaCursos = JSON.parse(localStorage.getItem('listaCursos')) || [];

// Função para remover uma linha
const removeLine = (evt) => {
    const btn = evt.target;
    const linha = btn.parentElement.parentElement;
    const idx =  

    // Remove a linha da tabela
    linha.remove();

    // Remove o item correspondente da listaCursos
    const indice = idx - 1;
    listaCursos.splice(indice, 1);

    // Atualiza o localStorage com a lista atualizada
    atualizarLocalStorage();
};

// Função para alterar uma linha
const alterarLine = (evt) => {
    let Cursos = prompt('Escreva o curso: ');


  //VER COMO RESOLVER ISSO

    const row = evt.target.parentElement.parentElement; // Acesse a linha corretamente
    row.querySelector('td:nth-child(2)').textContent = Cursos;

    // Atualize a listaCursos com os novos valores
    const indice = row.querySelector('td:nth-child(1)').textContent;
    listaCursos[indice - 1].Cursos = Cursos;

    // Atualiza o localStorage com a lista atualizada
    atualizarLocalStorage();
};

// Função para criar uma nova linha na tabela
const createNewLine = (Cursos) => {
    const nline = document.createElement('tr');
    const ncell1 = document.createElement('td');
    ncell1.innerText = contador;
    nline.appendChild(ncell1);
    const ncell2 = document.createElement('td');
    ncell2.innerText = Cursos;
    nline.appendChild(ncell2);
    const ncell5 = document.createElement('td');
    const btnAlterar = document.createElement('button');
    btnAlterar.innerHTML = 'Alterar';
    btnAlterar.onclick = alterarLine;
    ncell5.appendChild(btnAlterar);
    nline.appendChild(ncell5);
    const ncell6 = document.createElement('td');
    const btnRemove = document.createElement('button');
    btnRemove.innerHTML = 'Remover';
    btnRemove.onclick = removeLine;
    ncell6.appendChild(btnRemove);
    nline.appendChild(ncell6);

    contador++;
    return nline;
};

// Função para incluir um novo item
function aoIncluir(evt) {
    const objCursos = document.querySelector('#Cursos input');
    const objTableBody = document.querySelector('.tabela tbody');

    const objTurma = {
        Cursos: objCursos.value
    };

    // Adiciona o novo item à listaCursos
    listaCursos.push(objTurma);

    // Atualiza o localStorage com a lista atualizada
    atualizarLocalStorage();
    objTableBody.appendChild(createNewLine(objCursos.value));
}

// Função para atualizar o localStorage com a lista atualizada
function atualizarLocalStorage() {
    const strLista = JSON.stringify(listaCursos);
    localStorage.setItem('listaCursos', strLista);
}

// Função de inicialização
const init = () => {

    // Seleciona o botão de inserção e associa a função aoIncluir ao evento de clique
    const btnInsert = document.querySelector('.navbar button.btnInsert');
    btnInsert.onclick = aoIncluir;

    // Pega cada elemento da lista e inclui no HTML
    listaCursos.forEach(item => {
        const objTableBody = document.querySelector('.tabela tbody');
        objTableBody.appendChild(createNewLine(item.Cursos));
    });
};

// Chama a função de inicialização quando a página carregar
window.onload = init;

