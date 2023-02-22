import React from "react";
import { Link } from 'react-scroll'
import './styles.css'
function Navbar() {

    return (
        <div className="container">
            <nav>
                <Link spy={true} smooth={true} offset={50} duration={250} to="inicio">Início</Link>
                <Link spy={true} smooth={true} offset={50} duration={250} to="servicos">Serviços</Link>
                <Link spy={true} smooth={true} offset={50} duration={250} to="suporte">Suporte</Link>
                <Link spy={true} smooth={true} offset={50} duration={250} to="contato">Contato</Link>
            </nav>
        </div>
    );
}

export default Navbar;