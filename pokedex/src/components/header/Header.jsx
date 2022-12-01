import { HeaderS } from "./styleHeader"
import pokeball from '/pokeball.png'
import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { PokemonsContext } from "../../context/PokemonsContext"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const { pokeTeamContext, setInputText } = useContext(PokemonsContext)
  const [val, setVal] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    setInputText(val)
    navigate('./search/')
    setVal('')
  }

  return (
    <HeaderS>
      <section>
        <img src={pokeball} />
        <form onSubmit={handleSearch}>
          <input
            className="text"
            type='text'
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder='Buscar Nome ou Número do Pokemon' />
          <input
            className="bt" type='submit' value='Buscar' />
        </form>
        <nav>
          <ul>
            <li><NavLink to='/'>Pokemons</NavLink></li>
            <li><NavLink to='/surpresa'>Surpreenda-me</NavLink></li>
            <li><NavLink to='/myteam'>
              Meu Time
              <div className="qtdMyTeam">
                <p>
                  {pokeTeamContext.length}
                </p>
              </div>
            </NavLink>

            </li>
          </ul>
        </nav>
      </section>
    </HeaderS>
  )
}

export default Header