import { Link } from 'react-router-dom'

export default function Header() {

    const handlerEnter = (ev) => {
        ev.target.style.opacity = '1'
    }

    const handlerLeave = (ev) => {
        ev.target.style.opacity = '.7'
    }

    return (

        <header>

            <Link to="/" style={{color: 'white', fontSize: '1.6rem'}}> <h3>React Stock</h3> </Link>

            <div>
                <Link className='link-header' to={"/"}
                    style={{color: 'white'}}
                    onMouseEnter={handlerEnter} 
                    onMouseLeave={handlerLeave}>
                        Inicio
                </Link>

                <Link className='link-header' to={"/items"}
                    style={{color: 'white'}}  
                    onMouseEnter={handlerEnter}
                    onMouseLeave={handlerLeave}
                    onClick={() => {
                        document.getElementById('link-todos-items').classList.add('selected-menu')
                    }}
                    >
                        Itens
                </Link>      
            </div>

        </header>

    )

}