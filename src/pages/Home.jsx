import ItemsInfos from "../components/ItemsInfos"
import ContainerListaHome from "../components/ContainerListaHome"
import { useContext } from "react"
import ItemsContext from "../context/ItemsContext"

export default function Home() {

    const { calculaDias, items, infos } = useContext(ItemsContext)
    

    return(

        <>
            <h1>DashBoard</h1>

            <div className="containerDash">

                <ItemsInfos 
                    title="Diversidade de itens" 
                    info={infos.categorias.size} 
                />

                <ItemsInfos 
                    title="Inventário total" 
                    info={infos.totalEstoque} 
                />

                <ItemsInfos 
                    title="Itens recentes" 
                    info={items.reduce((sum, curr) => 
                        calculaDias(curr.created) <= 10 ? sum + 1 : sum
                        ,0)}
                />

                <ItemsInfos 
                    title="Itens acabando" 
                    info={infos.itensAcabando} 
                />

            </div>

            <hr />
            
            <ContainerListaHome items={items} calculaDias={calculaDias} />
        </>
    )

}