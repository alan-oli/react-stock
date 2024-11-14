import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import  ItemsContext  from '../context/ItemsContext'
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import calculaInfos from "../script/calculaInfos";

export default function LayoutPage() {

    const itemsLoad = useLoaderData()
    const [items, setItems] = useState(() => {

        const storageItems = localStorage.getItem("estoque")

        return storageItems ? JSON.parse(storageItems) : itemsLoad

    })

    useEffect(() => {

        if (!localStorage.getItem("estoque")) {

            localStorage.setItem("estoque", JSON.stringify(itemsLoad))

        }

    }, [])

    const infos = calculaInfos(items)

    //YYYY-MM-DDTHH:mm:ss formato ISO de data

    function calculaDias(data) {

        return Math.round(((Date.now() - Date.parse(data)) / 86400000))

    }

    return (
        <ItemsContext.Provider value={{infos, calculaDias, items, setItems }}>

            <Header/>

            <main>
                <Outlet/>
            </main>

            <footer>
                <p>Made With React and React Router!</p>
            </footer>

        </ItemsContext.Provider>
    )

}