import { FooterS } from "./styleFooter"
import { useFetch } from "../../hook/useFetch"
import { AiFillGithub } from 'react-icons/ai';
import { CgPokemon } from 'react-icons/cg'

const Footer = ({ urlMoreName }) => {

    const { data } = useFetch(urlMoreName + 'eevee')

    return (
        <FooterS>
            <div className="links">
                <a href="https://github.com/JSavioFreire/pokedex" target='_blank' className="link" >
                    <AiFillGithub />
                    <p>Código Completo</p>
                </a>
                <a href="https://pokeapi.co/" target='_blank' className="link" >
                    <CgPokemon />
                    <p>API Utilizada</p>
                </a>
            </div>
            <div>
                <p>Desenvolvido por Sávio Freire</p>
            </div>
            <div>
                {data && <img src={data['sprites']['versions']['generation-v']['black-white']['animated'].front_default} />}
            </div>
        </FooterS>
    )
}

export default Footer