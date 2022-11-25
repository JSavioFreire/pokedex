import { createContext, useState } from "react";

export const PokemonsContext = createContext()

export const PokemonsContextProvider = ({ children }) => {

    const [pokeContext, setPokeContext] = useState()

    return (
        <PokemonsContext.Provider value={{ pokeContext, setPokeContext }}>
            {children}
        </PokemonsContext.Provider>
    )
}