import Lista from "../components/Lista"

export default function ContainerListaHome({items, calculaDias}) {

    return (

        <div className="container-listas">

                <div className="recentes-container">

                    <div className="lista-titulo">
                        <h2>Items recentes</h2>
                        <h2>Ações</h2>
                    </div>
                        
                    {items.map(item => {
                        return (
                            calculaDias(item.created) <= 10 ? 
                            <Lista id={item.id} produto={item.name} key={item.id}/> :
                            null
                        )
                    })}
                        
                </div>

                <div className="acabando-container">

                    <div className="lista-titulo">
                        <h2>Items acabando</h2>
                        <h2>qtd.</h2>
                        <h2>Ações</h2>
                    </div>

                    {items.filter(item => item.quantity < 10).map(item => {

                        return (
                            <Lista key={item.id} 
                            produto={item.name} 
                            quantidade={item.quantity} 
                            id={item.id}
                            />
                        )

                    })}


                </div>

            </div>
    )

}