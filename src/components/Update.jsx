import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import ItemsContext from "../context/ItemsContext"

export default function Update() {

    const item = useLoaderData()

    const [name, setName] = useState(item.name)
    const [quantity, setQuantity] = useState(item.quantity)
    const [price, setPrice] = useState(item.price)
    const [category, setCategory] = useState(item.category)
    const [description, setDescription] = useState(item.description)

    const {items, setItems} = useContext(ItemsContext)

    const {setClick} = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {

        setClick('')

    }, [])
    
    
    const handleUpdate = (ev) => {

        ev.preventDefault()

        const newItem = {
            id: item.id,
            name: name,
            quantity: quantity,
            price: price,
            category: category.toLowerCase(),
            description: description,
            created: item.created,
            update: new Date().toISOString().slice(0,19)
        }

        let newArray = [...items.filter(produto => produto.id != item.id), newItem]
        
        newArray.sort((a , b) => a.id - b.id)

        setItems(newArray)

        localStorage.setItem('estoque', JSON.stringify(newArray))
        
        alert('atualizou')
        setClick('todos')
        navigate(-1)
        

    }


    return (

        <div className="add-item">

            <p style={{fontSize: '1.5rem', marginBottom: '40px'}}>Atualizar item - {item.name}</p>

            <form onSubmit={handleUpdate}>

                <div className="inputs-form">

                    <div>
                        <label htmlFor="name">Nome</label>
                        <input required type="text" name="name" id="name" 
                            value={name} onChange={(ev) => setName(ev.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="quantity">Quantidade</label>
                        <input required type="number" min={0} name="quantity" id="quantity" 
                            value={quantity} onChange={(ev) => setQuantity(parseInt(ev.target.value))}
                        />
                    </div>

                    <div>
                        <label htmlFor="price">Preço</label>
                        <input step={0.01} required type="number" name="price" id="price" 
                            value={price} onChange={(ev) => setPrice(parseFloat(ev.target.value))}
                        />
                    </div>

                    <div>
                        <label htmlFor="category">Categoria</label>
                        <input required type="text" name="category" id="category" 
                            value={category} onChange={(ev) => setCategory(ev.target.value)}
                        />
                    </div>

                </div>

                <div className="text-area">
                    <label htmlFor="description">Descrição</label>
                    <textarea rows={8} name="description" id="description"
                        value={description} onChange={(ev) => setDescription(ev.target.value)}
                    ></textarea>
                </div>

                <button>Salvar</button>    

            </form>

        </div>

    )

}