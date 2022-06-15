import * as consulta from './consultas.js'
import * as pedidos_lista from './table/lista_pedidos.js'
import * as info_tables from './table/inf_pedidos.js'

function mainListaPedidos() {
    
    let table = document.querySelector('#table')
    let listaDePedidos = consulta.fazGetRequest('https://sistemalift1.com/lift_ps/api/Pedidos')
    
    pedidos_lista.tituloDaTabela()
    pedidos_lista.headerDaTabela()
    
    let index = 0
    Object.keys(listaDePedidos).forEach(pedido => {
        let line = pedidos_lista.createLinePedidos(listaDePedidos[index])
        table.appendChild(line)
        index += 1
    })
}

function mainInfoPedidos(idDoPedido) {
    
    let table = document.querySelector('#table')
    let table2 = document.querySelector('#table2')
    
    let pedido = consulta.getPedido(idDoPedido)
    let cliente = consulta.getCliente(pedido.id)
    let dataDoPedido = pedido.data

    info_tables.titulo1DaTabela()
    info_tables.titulo2DaTabela(idDoPedido)
    info_tables.headerDaTabela1()

    table.appendChild(info_tables.createTable1(cliente, dataDoPedido))

}

let idDoPedido = 2
mainInfoPedidos(idDoPedido)