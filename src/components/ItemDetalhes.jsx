import { Link, useLoaderData, useNavigate, useOutletContext} from "react-router-dom"

export default function ItemDetalhes() {

    const {excluir} = useOutletContext()
    
    const navigate = useNavigate()

    const  item  = useLoaderData()
    

    return (
        <div className="detalhe-container"> 

            <div className="detalhe1-item">

                <h1>{item.name}</h1>

                <div>

                    <Link to={"/items/update/"+item.id}>
                        <button>Atualizar</button>
                    </Link>

                    <button style={{backgroundColor: '#ff5359'}} 
                        onClick={() => {
                            excluir(item.id)
                            navigate(-1)
                        }}
                    >Excluir</button>
                </div>

            </div>

            <div className="detalhe2-item">
                <h3>Categoria: {item.category}</h3>
                <h3>Quantidade em estoque: {item.quantity}</h3>
                <h3>Preço: R$ {(item.price).toFixed(2)}</h3>
            </div>

            <h4>{item.description}</h4>

            <div className="detalhe3-item">
                <h3>Cadastrado em: {new Date(item.created).toDateString()}</h3>
                <h3>Atualizado em: {new Date(item.update ? item.update : item.created).toDateString()}</h3>
            </div>

            <Link>
                <button onClick={() => navigate(-1)}>Voltar</button>
            </Link>

        </div>
    )

}