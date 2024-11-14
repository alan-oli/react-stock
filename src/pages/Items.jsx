import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ItemsContext from "../context/ItemsContext";


export default function Items() {
    const [clicked, setClicked] = useState('todos')
    const {items, setItems} = useContext(ItemsContext)

    const handleExcluir = (productId) => {

        const newArray = items.filter(item => item.id != productId)

        for (let i = 0; i < newArray.length; i++) {

            newArray[i].id = i + 1

        }

        setItems(newArray)

        localStorage.setItem("estoque", JSON.stringify(newArray))

    }

    return (
        <>
            <h1>Stock Items</h1>

            <div className="menu-stock">

                <Link id="link-todos-items" to={"/items"}
                className={clicked == 'todos' ? 'selected-menu' : ''}
                onClick={() => setClicked('todos')}
                >Todos os itens</Link>

                <Link to={"/items/add"}
                className={clicked == 'novo' ? 'selected-menu' : ''}
                onClick={() => setClicked('novo')}
                >Novo item</Link>

            </div>

            <hr className="hr-stock"/>

            <div className="all-container">
                <Outlet context={{setClick: setClicked, excluir: handleExcluir}}/>
            </div>

        </>
    )

}