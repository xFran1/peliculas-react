import { usePelicula } from "./BuscadorContext";

function Buscador(){


    return (
        <div class=" justify-center flex">
            <input type="text" onChange={set} placeholder="Nombre pelicula"/>
            <button onClick={}>Buscar</button>
        </div>
    )

}

export default Buscador;