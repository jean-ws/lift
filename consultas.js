export function fazGetRequest(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return JSON.parse(request.responseText)
}

export function getProduto(idProduto){
    let url = 'https://sistemalift1.com/lift_ps/api/Produtos/' + idProduto
    let produto = fazGetRequest(url)
    return produto
}

export function getItensPedido(pedido) {
    let url = 'https://sistemalift1.com/lift_ps/api/ItensPedido/' + pedido
    let itensPedidos = fazGetRequest(url)
    return itensPedidos
}

export function getCliente(idDoCliente){
    let url = 'https://sistemalift1.com/lift_ps/api/Clientes/' + idDoCliente
    let cliente = fazGetRequest(url)
    return cliente
}

export function getPedido(idDoPedido){
    let url = 'https://sistemalift1.com/lift_ps/api/Pedidos/' + idDoPedido
    let pedido = fazGetRequest(url)
    return pedido
}

export function somaItensPedido(pedido){
    let itensPedidos = getItensPedido(pedido)
    
    let totalPedido = 0

    itensPedidos.forEach(item => {
        let idProduto = item.produto
        let qtd = item.quantidade
        let preco = getProduto(idProduto).valor
        let totalProduto = qtd * preco 
        totalPedido += totalProduto
    })
    return totalPedido
}
