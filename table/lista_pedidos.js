import * as consulta from '../consultas.js'
import * as principal from '../main.js'

export function tituloDaTabela(){
    let titulo = document.querySelector('#titulo')
    titulo.innerHTML = 'Lista de Pedidos'
}

export function headerDaTabela(){
    
    let codigo = document.createElement('th')
    codigo.innerText = 'Pedido'

    let cliente = document.createElement('th')
    cliente.innerText = 'Cliente'

    let data = document.createElement('th')
    data.innerText = 'Data'

    let valor = document.createElement('th')
    valor.innerText = 'Valor'

    let header = document.querySelector('#header')
    header.appendChild(codigo)
    header.appendChild(cliente)
    header.appendChild(data)
    header.appendChild(valor)

}

export function createLinePedidos(pedido){
    let linha = document.createElement('tr')

    let tdIdPedido = document.createElement('td')
    let tdNomeCliente = document.createElement('td')
    let tdData = document.createElement('td')
    let tdValor = document.createElement('td')

    tdIdPedido.innerHTML = pedido.id 
    tdNomeCliente.innerHTML = consulta.getCliente(pedido.cliente).nome
    tdData.innerHTML = pedido.data 
    tdValor.innerHTML = 'R$ ' + consulta.totalItensPedido(tdIdPedido.innerText).toLocaleString('pt-BR', {minimumFractionDigits: 2})

    linha.appendChild(tdIdPedido)
    linha.appendChild(tdNomeCliente)
    linha.appendChild(tdData)
    linha.appendChild(tdValor)

    //tdIdPedido.setAttribute('class','idPedido')
    tdIdPedido.onclick=function(){principal.mainInfoPedidos(this.innerText)}

    return linha
}