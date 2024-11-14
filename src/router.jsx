import {createBrowserRouter} from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import Home from './pages/Home'
import Items from './pages/Items'
import loadItems from './loaders/loadItems'
import AllItens from './components/AllItens'
import AddItem from './components/AddItem'
import ItemDetalhes from './components/ItemDetalhes'
import loadProduct from './loaders/loadProduct'
import Update from './components/Update'


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        loader: loadItems,
        children: [
            {
                index: true,
                element: <Home />
            },{
                path: "/items",
                element: <Items />,
                children: [
                    {
                        index: true, 
                        element: <AllItens />
                    },
                    {
                        path: "/items/add",
                        element: <AddItem />
                    }, {
                        path: "/items/:produtoId",
                        element: <ItemDetalhes />,
                        loader: loadProduct
                    }, {
                        path: "/items/update/:produtoId",
                        element: <Update />,
                        loader: loadProduct
                    }
                ]
            }
        ]
    }
])

export default router