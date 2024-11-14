import { useState } from "react";

export default function useDadosForm() {

    const [name, setName] = useState('')

    const [quantity, setQuantity] = useState(0)

    const [price, setPrice] = useState(0)

    const [category, setCategory] = useState('')

    const [description, setDescription] = useState('')


    return [
        {nome: [name, setName]}, 
        {quantidade: [quantity, setQuantity]},
        {preco: [price, setPrice]},
        {categoria: [category, setCategory]},
        {descricao: [description, setDescription]}
    ]
}


