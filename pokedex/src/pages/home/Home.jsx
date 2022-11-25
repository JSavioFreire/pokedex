import Pokemon from "../../components/pokemon/Pokemon"

import { HomeS } from "./styleHome"

const Home = ({ data, qtd, setQtd }) => {


    return (
        <>
            <HomeS>
                <div className="all">
                    {data && data.results.map((pokemon) => (
                        <Pokemon key={pokemon.name} pokemon={pokemon} url={pokemon.url} />
                    ))}
                </div>
                {qtd == 905 ? <></> : <button onClick={() => setQtd(qtd + 100)}>Ver mais</button>}
            </HomeS>
        </>
    )
}

export default Home