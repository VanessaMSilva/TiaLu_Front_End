//import "./menu.css"
import { useEffect, useState } from "react";
import {Container, ContentMobile} from "./menu1";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import tia from '../assets/tialu.png';

export function Menu(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    const handleResize = () => {
        if(window.innerWidth > 1056 && !menuOpen){
            setMenuOpen(true)
        }

        if(window.innerWidth < 1056 && menuOpen){
            setMenuOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    
    }, [menuOpen])
    return(
        <Container>
            <ContentMobile onClick={toggleMenu}>
                {menuOpen ? <IoCloseSharp color="white"/> : <TiThMenu color="white"/> } 
            </ContentMobile>
            {menuOpen || window.innerWidth > 1056?  
                <div>
                    <a href="</>" id="logo">
                      <img src={tia} alt="" />
                    </a>
                <nav id="menunav">
                <ul>
                    <li><a href="/">Ínicio</a></li>
                    <li><a href="/Cadastrarp">Produto</a></li>
                    <li><a href="/Cadastrarc">Cliente</a></li>
                    <li><a href="/Cadastrarv">Venda</a></li>
                    <li><a href="/Relatorio">Relátorio</a></li>
                    <li><a href="/Horario">Horário picos</a></li>
                    <li><a href="/">Cardapio</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
                </nav>
                </div>
                : 
                <></>
            }
            
        </Container>
    );
}

export default Menu;