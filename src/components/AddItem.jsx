import { useContext } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import ItemsContext from "../context/ItemsContext"
import useDadosForm from "../Hooks/useDadosForm"

export default function AddItem() {

    const {setClick} = useOutletContext()
    const navigate = useNavigate()
    const {items, setItems} = useContext(ItemsContext)

    const [
        {nome: [name, setName]}, 
        {quantidade: [quantity, setQuantity]},
        {preco: [price, setPrice]},
        {categoria: [category, setCategory]},
        {descricao: [description, setDescription]}
    ] = useDadosForm()


    function handleSubmit(ev) {

        ev.preventDefault()
        setClick('todos')

        //YYYY-MM-DDTHH:mm:ss formato ISO de data

        const newItem = {
            id: items.length +1,
            name: name,
            quantity: quantity,
            price: price,
            category: category.toLowerCase(),
            description: description,
            created: new Date().toISOString().slice(0,19)
        }

        setItems(state => [...state, newItem])

        localStorage.setItem('estoque', JSON.stringify([...JSON.parse(localStorage.getItem("estoque")), newItem]))

        console.log(items)

        setName('')
        setQuantity(0)
        setPrice(0)
        setCategory('')
        setDescription('')
        navigate(-1)
    }

    return (
        
        <div className="add-item">

            <form onSubmit={handleSubmit}>

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