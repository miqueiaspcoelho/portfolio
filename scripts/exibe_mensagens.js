//função para 'puxar' os elementos do localStorage - será utilizada dentro da página mensagens
window.onload = function getItem() {
    let mensagensDiv = document.getElementById('mensagens');
    mensagensDiv.innerHTML = '';
    if (localStorage.DATABASE){
        database = JSON.parse(localStorage.getItem('DATABASE')); //o array irá receber o que tem armazenado no local storage, caso haja algo
    }
    for(var index in database){
        let newElement = document.createElement('div');//cria um elemento parágrafo
        let newElementText = document.createElement('p');
        newElementText.innerHTML = database[index];//cada novo elemento vai receber o valor do index do array
        newElementText.classList.add('box-message');
        newElement.appendChild(newElementText);
        mensagensDiv.append(newElement);
    }
}
