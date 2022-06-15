import * as consulta from './consultas.js'
import * as pedidos_lista from './table/lista_pedidos.js'

function mainListaPedidos() {
    
    let table = document.querySelector('#table')
    let listaDePedidos = consulta.fazGetRequest('https://sistemalift1.com/lift_ps/api/Pedidos')
    
    pedidos_lista.tituloDaTabela()
    pedidos_lista.headerDaTabela()
    
    let index = 0
    Object.keys(listaDePedidos).forEach(pedido => {
        let line = pedidos_lista.createLinesPedidos(listaDePedidos[index])
        table.appendChild(line)
        index += 1
    })
}

mainListaPedidos()