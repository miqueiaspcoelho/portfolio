//array para salvar os dados
var database = [];

//função para adicionar elemento ao array
function addItem(){
    //verifica se já tem algo adicionado ao localstorage para recuperar e acrescentar
    if (localStorage.DATABASE){
        database = JSON.parse(localStorage.getItem('DATABASE')); //o array irá receber o que tem armazenado no local storage, caso haja algo
    }
    let newItem = document.getElementById('email_icon').value;
    database.push(newItem);//adiciona novo elemento ao array
    document.getElementById('email_icon').value ='';//limpa o campo email após o envio
    localStorage.DATABASE = JSON.stringify(database);//converte em json o array e salva no localStorage.DATABASE
    console.log(database);
}