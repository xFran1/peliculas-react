import { createContext,useContext,useState } from "react";

const buscadorContext = createContext(undefined);

export const BuscadorProvider = ({ children }) => {

    const [pelicula,setPelicula] = useState(undefined);

    return(
        <buscadorContext.Provider
            value={{

                pelicula,
                setPelicula

            }}>
                {children}
        </buscadorContext.Provider>
    )

}

export const usePelicula = () => useContext(buscadorContext);