import { MyTeamS } from "./StyleMyTeam"
import { PokemonsContext } from "../../context/PokemonsContext"
import { useContext } from "react"
import PokemonInTeam from "./pokemonInTeam/PokemonInTeam"


const MyTeam = () => {

    const { pokeTeamContext } = useContext(PokemonsContext)

    console.log(pokeTeamContext)
    return (
        <MyTeamS>
            <h1>Meu Time</h1>
            <div className="time">
                {pokeTeamContext.length == 0 ?
                    <>
                        <p>Não tem Pokemons no seu time :(</p>
                        <p>Para começar seu time cliquer em "Adicionar ao Time" no seus Pokemons favoritos.</p>
                    </>
                    :
                    pokeTeamContext.length <= 6 ?
                        pokeTeamContext.map((pokemonInTeam) => (
                            <PokemonInTeam key={pokemonInTeam.id} name={pokemonInTeam.name} image={pokemonInTeam['sprites'].other['official-artwork'].front_default}/>
                            ))
                    :
                            <>mais de 6 pokemons</>
                    

                    
                }

            </div>
        </MyTeamS>
    )
}

export default MyTeam