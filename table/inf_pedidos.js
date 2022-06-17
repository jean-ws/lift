import * as consulta from '../consultas.js'

export function titulo1DaTabela(){
    let titulo = document.querySelector('#titulo')
    titulo.innerHTML = 'Informações do Pedido'
}

export function titulo2DaTabela(idDoPedido){
    let titulo = document.querySelector('#id_pedido')
    titulo.innerHTML = 'ID do Pedido: ' + idDoPedido
}

export function headerDaTabela1(){

    let th = document.createElement('th')
    th.innerText = 'Dados do Cliente'
    th.setAttribute('colspan','4')

    let header = document.querySelector('#header')
    header.innerHTML = ''
    header.appendChild(th)
}

export function criaTituloDaTabela2(){
    let titulo = document.querySelector('#titulo2')
    titulo.innerHTML = 'Itens do Pedido'
}

export function headerDaTabela2(){

    let codigo = document.createElement('th')
    codigo.innerText = 'Código'
    let produto = document.createElement('th')
    produto.innerText = 'Produto'
    let quantidade = document.createElement('th')
    quantidade.innerText = 'Quantidade'
    let valor = document.createElement('th')
    valor.innerText = 'Valor'

    let header = document.querySelector('#header2')
    header.appendChild(codigo)
    header.appendChild(produto)
    header.appendChild(quantidade)
    header.appendChild(valor)
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
    linha.setAttribute('id', 'dadoscliente')

    linha.appendChild(nome)
    linha.appendChild(cpf)
    linha.appendChild(data)
    linha.appendChild(email)

    return linha
}

export function createTable2(item){
    let linha = document.createElement('tr')

    let codigo = document.createElement('td')
    codigo.innerText = item.produto

    let nomeProduto = document.createElement('td')
    nomeProduto.innerText = consulta.getProduto(item.produto).nome
    
    let quantidade = document.createElement('td')
    quantidade.innerText = item.quantidade
    
    let valor = document.createElement('td')
    let valor_total_produto = (consulta.getProduto(item.produto).valor) * item.quantidade
    valor.innerText = 'R$ ' + valor_total_produto.toLocaleString('pt-BR', {minimumFractionDigits: 2})


    linha.appendChild(codigo)
    linha.appendChild(nomeProduto)
    linha.appendChild(quantidade)
    linha.appendChild(valor)

    return linha
}

export function totalDoPedido(idDoPedido){
    let valor = consulta.totalItensPedido(idDoPedido)
    let total = document.querySelector('#total')
    total.innerText = 'Total: R$ ' + valor
}