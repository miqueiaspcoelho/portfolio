//função para 'puxar' os elementos do localStorage - será utilizada dentro da página mensagens
window.onload = function getItem() {
    let mensagensDiv = document.getElementById('mensagens');
    mensagensDiv.innerHTML = '';
    if (localStorage.DATABASE){
        database = JSON.parse(localStorage.getItem('DATABASE')); //o array irá receber o que tem armazenado no local storage, caso haja algo
    }
    for(var index in database){
        var newElement = document.createElement('div');//cria uma div
        var newElementText = document.createElement('p');//cria um elemento parágrafo para conter o texto
        var newElementButton = document.createElement('button')//cria botão que irá ser utilizado para apagar valor selecionado

        
        newElement.classList.add('box-message')//adiciona classe para cada div criada
        
        newElementButton.innerHTML=`<i class="fa-solid fa-trash"></i>`;//define como será o conteúdo de cada botão criado
        newElementButton.id=index;//atribui id para cada butão
        newElementButton.classList.add('button-delete');
        
        newElementText.innerHTML = database[index];//cada novo elemento vai receber o valor do index do array

        newElement.appendChild(newElementText);//adiciona o elemento parágrafo dentro da div
        newElement.appendChild(newElementButton);//adiciona o botão dentro da div

        mensagensDiv.append(newElement);//todo o conjunto é adicionado ao elemento pai

        //quando o butão é clicado ele dispara o evento, pegando o id do elemento e assim realizando a exclusão
        newElementButton.onclick = 
        function clearItenId(){
            var index_select = document.activeElement.id;
            var database = [];
            if (localStorage.DATABASE){
                database = JSON.parse(localStorage.getItem('DATABASE')); //o array irá receber o que tem armazenado no local storage, caso haja algo
            }

            database.splice(index_select,1);
            localStorage.DATABASE = JSON.stringify(database);//converte em json o array e salva no localStorage.DATABASE
            window.location.reload(true);

        }
    }
    
}

