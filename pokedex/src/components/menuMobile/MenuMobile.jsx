import { MenuMobileS } from "./styleMenuMobile"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { PokemonsContext } from "../../context/PokemonsContext"
const MenuMobile = () => {

  const { isOpen, setOpen, pokeTeamContext } = useContext(PokemonsContext)

  return (
    <MenuMobileS >
      <div className={isOpen ? 'open' : 'close'}>
        <div className="menu">
          <nav>
            <ul>
              <li><NavLink onClick={() => setOpen(false)} to='/'>Pokemons</NavLink></li>
              <li><NavLink onClick={() => setOpen(false)} to='/surpresa'>Surpreenda-me</NavLink></li>
              <li><NavLink onClick={() => setOpen(false)} to='/myteam'>
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
        </div>
      </div>
    </MenuMobileS>
  )
}

export default MenuMobile