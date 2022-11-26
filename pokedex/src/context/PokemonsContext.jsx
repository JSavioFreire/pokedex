import { createContext, useState } from "react";

export const PokemonsContext = createContext()

export const PokemonsContextProvider = ({ children }) => {

    const [pokeContext, setPokeContext] = useState()
    const [pokeTeamContext, setPokeTeamContext] = useState([])

    return (
        <PokemonsContext.Provider value={{ pokeContext, setPokeContext, pokeTeamContext, setPokeTeamContext }}>
            {children}
        </PokemonsContext.Provider>
    )
}