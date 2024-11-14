const calculaInfos = (items) => {

    const totalEstoque = items.reduce((sum, cur) => sum + cur.quantity, 0)
    
    const totalCadastrado = items.length

    const itensAcabando = items.filter(item => item.quantity < 10).length

    const categorias = new Set(items.map(item => item.category))

    return {totalEstoque, totalCadastrado, itensAcabando, categorias}

}

export default calculaInfos