import { useContext, useEffect, useState } from "react";
import { Link, useOutlet, useOutletContext } from "react-router-dom";
import ItemsContext from "../context/ItemsContext"

export default function AllItens() {

    const {items, setItems} = useContext(ItemsContext)
    const {excluir} = useOutletContext()

    useEffect(() => {

        const itens = localStorage.getItem('estoque') ? JSON.parse(localStorage.getItem('estoque')) : []

        setItems(itens)

    }, [])

    return (
        <div className="itens-container">

            <table border={'0'} >

                <thead className="lista-titulo">

                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Em Estoque</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>

                </thead>


                <tbody>

                    {items.map(item => {

                        return (

                            <tr key={item.id}>

                                <td className="id">{item.id}</td>
                                <td className="name">{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.category}</td>

                                <td style={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center'}}>

                                    <Link to={`${item.id}`}>
                                        <button style={{backgroundColor: '#5aa7ff'}}>Ver</button>
                                    </Link>

                                    <Link to={`update/${item.id}`}>
                                        <button>Atualizar</button>
                                    </Link>

                                    <button style={{backgroundColor: '#ff5359'}}
                                        onClick={() => excluir(item.id)}
                                    >Excluir</button>

                                </td>

                            </tr>
                        )

                    })}

                </tbody>

            </table>    

        </div>
    )

}