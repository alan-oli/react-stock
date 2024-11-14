import { Link } from "react-router-dom";

export default function Lista({produto, quantidade, id}) {
    
    return (
        <>
            <div>
                <h3>{produto}</h3>
                {quantidade ? <h3>{quantidade}</h3>: null}

                <Link to={`items/${id}`}>
                    <button>Ver</button>
                </Link>

            </div>
        </>
    )

}