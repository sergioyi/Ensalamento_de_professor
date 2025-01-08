const inserir = document.getElementById("cadastro_de_cursos");////input de cread
const exclusao = document.getElementById("exclusao_de_cursos");///input de delet
const atualiza = document.getElementById("update_de_cursos");////input de update
const id_atualiza = document.getElementById("id_update");///saber qual o item para editar


var vetor = [];
const corpo = document.getElementById("corpo");


function adicionar() {
  // 1 - devolver se tiver para o vetor
  // 2 - salva o valor do input
  // 3 - passa o novo valor ao final do vetor que é uma array
  // 4 - limpando o input
  // 5 - manda para a key valores o que estiver no vetor
  // 6 - limpar o "corpo" ou tbody toda vez que adicionar alguma coisa
  // 7 - mostar o que tiver CHAMANDO A FUNÇÃO MOSTRAR
  if (localStorage.valores) {
    vetor = JSON.parse(localStorage.getItem('valores')); 
  }
  let novoItem = (inserir.value);
  vetor.push(novoItem);
  inserir.value = "";
  localStorage.valores = JSON.stringify(vetor);
  //vetor = JSON.parse(localStorage.getItem("valores"));
  corpo.innerHTML = "";
  mostrar();
}
  botao.addEventListener("click", adicionar);


  function removeLine (){
  let novoItem = (exclusao.value);
   vetor.splice(novoItem,1);
    localStorage.valores = JSON.stringify(vetor);   
    linha.remove();
  }
  exclui.addEventListener("click", removeLine);


function update (){
  let IdnovoItem = (id_atualiza.value);///recebe o id que faz a seleção de alteração
  let novoItem = (atualiza.value);//chama o input de nome atualizado
   vetor.splice(IdnovoItem ,1, novoItem);
    localStorage.valores = JSON.stringify(vetor);   
    linha.remove();
  }
  alterei.addEventListener("click", update);

function mostrar(){
    if(localStorage.valores){//se tiver "valores" nolocalStorage execute o de baixo
        vetor = JSON.parse(localStorage.getItem('valores'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
    }
    for(var i in vetor){
      let linha = document.createElement("tr");
      let idItem = document.createElement("td");
      let cursoItem = document.createElement("td");
      let editItem = document.createElement("td");
      let deletItem = document.createElement("td");
      let editar = document.createElement("button");
      let removi = document.createElement("button");
      
      //dando o id as botões
      editar.id = "btetidar";
      removi.class = "btremover";
      
      //dando os valores
      cursoItem.innerText = vetor[i];
      idItem.innerText = i;
      editar.innerText = "Editar";
      removi.innerText = "Remover";
      //removi.onclick = removeLine;//atribuindo a função

      deletItem.appendChild(removi);
      editItem.appendChild(editar);
      linha.appendChild(idItem);
      linha.appendChild(cursoItem); 
      linha.appendChild(editItem);
      linha.appendChild(deletItem);
      corpo.appendChild(linha);//o corpo (no caso tbody) está recebendo a linha (no caso tr)
      const botoes = document.querySelectorAll('.btremover');
      botoes.forEach(function(botao) {
      botao.addEventListener('click', function() {
  });
});
    } //fim do for
  

}