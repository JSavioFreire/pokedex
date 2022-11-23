import Pokemon from "../components/pokemon/Pokemon"

import { HomeS } from "./styleHome"

const Home = ({ data }) => {
    return (
        <HomeS>
            {data && data.results.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemon={pokemon} url={pokemon.url} />
            ))}
        </HomeS>
    )
}

export default Home