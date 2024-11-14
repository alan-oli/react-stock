
export default function loadProduct({params}) {

    const items = localStorage.getItem('estoque') ? JSON.parse(localStorage.getItem('estoque')) : null

    const { produtoId } = params

    const item = items.find(item => item.id == produtoId)

    if(!item) {
        throw new Response('404 Not Found!', {status: 404})
    }

    return item

}