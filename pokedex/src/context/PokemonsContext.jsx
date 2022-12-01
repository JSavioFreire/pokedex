import { createContext, useState } from "react";

export const PokemonsContext = createContext()

export const PokemonsContextProvider = ({ children }) => {

    const [pokeContext, setPokeContext] = useState()
    const [pokeTeamContext, setPokeTeamContext] = useState([])
    const [inputText, setInputText] = useState('')


    return (
        <PokemonsContext.Provider value={{ pokeContext, setPokeContext, pokeTeamContext, setPokeTeamContext, inputText, setInputText }}>
            {children}
        </PokemonsContext.Provider>
    )
}