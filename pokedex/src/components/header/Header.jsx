import { HeaderS } from "./styleHeader"
import pokeball from '/pokeball.png'
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Header = () => {

  const [inputText, setInputText] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <HeaderS>
      <section>
        <img src={pokeball} />
        <form onSubmit={handleSearch}>
          <input
            className="text"
            type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Buscar Pokemon' />
          <input
            className="bt" type='submit' value='Buscar' />
        </form>
        <nav>
          <ul>
            <li><NavLink to='/'>Pokemons</NavLink></li>
            <li><NavLink to='/surpresa'>Surpreenda-me</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </HeaderS>
  )
}

export default Header