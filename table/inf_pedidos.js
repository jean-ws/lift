import * as consulta from '../consultas.js'

export function titulo1DaTabela(){
    let titulo = document.querySelector('#titulo')
    titulo.innerHTML = 'Informações do Pedido'
}

export function titulo2DaTabela(idDoPedido){
    let titulo = document.querySelector('#id_pedido')
    titulo.innerHTML = idDoPedido
}

export function headerDaTabela1(){

    let cliente = document.createElement('th')
    cliente.innerText = 'Dados do Cliente'
    cliente.setAttribute('colspan','0')

    let header = document.querySelector('#header')
    header.appendChild(cliente)
}

export function createTable1(cliente, dataDoPedido){
    let nome = document.createElement('td')
    nome.innerText = 'Nome: ' + cliente.nome
    
    let cpf = document.createElement('td')
    cpf.innerText = 'CPF: ' + cliente.cpf
    
    let email = document.createElement('td')
    email.innerText = 'Email: ' + cliente.email

    let data = document.createElement('td')
    data.innerText = 'Data: ' + dataDoPedido

    let linha = document.createElement('tr')
    linha.appendChild(nome)
    linha.appendChild(cpf)
    linha.appendChild(data)
    linha.appendChild(email)

    return linha
}