const corpo = document.getElementById("corpo");
const statusDeInput = {};
var indiceParaEditar = 0;
var saveOrupdate = true;
var vetor = [];

function mostrar(campos, database) {

    if (localStorage.getItem(database)) {
        vetor = JSON.parse(localStorage.getItem(database));
        corpo.innerHTML = '';
    }

    vetor.forEach((item, index) => {

        let linha = document.createElement("tr");
        let key = document.createElement("td");
        key.textContent = index;
        linha.appendChild(key);

        campos.forEach(campo => {
            let celula = document.createElement("td");
            celula.textContent = item[campo];
            linha.appendChild(celula);
        });

        let edit = document.createElement("td");
        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Alterar";
        btnEditar.addEventListener("click", () => UPDATE(index, campos, database));
        edit.appendChild(btnEditar);

        let excluir = document.createElement("td");
        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Apagar";
        btnExcluir.addEventListener("click", () => DELET(index, campos, database));
        excluir.appendChild(btnExcluir);

        linha.appendChild(edit);
        linha.appendChild(excluir);
        corpo.appendChild(linha);
    });

}

function Escrita(id) {

    // Cria um array com o nome fornecido e o armazena no objeto
    statusDeInput[id] = [];

    const inserir = document.getElementById(id);
    let valor = inserir.value;
    let chavevalor = `${valor}`;
    statusDeInput[id] = chavevalor;

}
function SalvarForm(campos, database) {

    if (localStorage.getItem(database)) vetor = JSON.parse(localStorage.getItem(database));

    if (saveOrupdate == true) {
        vetor.push(statusDeInput);
    } else {
        vetor.splice(indiceParaEditar, 1, statusDeInput);
        saveOrupdate = true;
    }



    localStorage.setItem(database, JSON.stringify(vetor));
    for (let i = 0; i < campos.length; i++) {
        document.getElementById(campos[i]).value = '';
        Escrita(campos[i])
    }
    mostrar(campos, database);

}

function DELET(item, campos, database) {
    if (localStorage.getItem(database)) vetor = JSON.parse(localStorage.getItem(database));

    vetor.splice(item, 1);
    localStorage.setItem(database, JSON.stringify(vetor));
    mostrar(campos, database);
}
function UPDATE(index, campos, database) {

    if (localStorage.getItem(database)) vetor = JSON.parse(localStorage.getItem(database));

    saveOrupdate = false;
    indiceParaEditar = index;

    campos.forEach((campo) => {
        let valor = document.getElementById(campo);

        valor.value = vetor[index][campo];

        Escrita(campo);
    })

}

function SELECT(campo) {

    //  'campo'= (espaço do localstorage), (id do select) e (atributo do objeto).
    vetor = JSON.parse(localStorage.getItem(campo));
    let inputSelect = document.getElementById(campo);

    vetor.forEach((item) => {
        let linha = document.createElement("option");
        linha.innerText = item[campo];
        inputSelect.appendChild(linha);
    })

}

