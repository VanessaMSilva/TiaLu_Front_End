import Menu from "../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import { AiOutlineAim, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Cardapio(){
    const navigate = useNavigate(); // Hook para navegação

    const handleRedirect = () => {
        navigate("/Principalcar"); // Redireciona para a página desejada
    };
    const Cardapio = ({cardapio}) => {   
        return (
            <div className="todos">
                {cardapio.map((card) => {
                    return (
                    <div  className="todo">
                        <p>{card.name}</p>
                        <p>Descrição: {card.description}</p>
                        <p>Data: {new Date(card.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
                    </div>
                    );
                })}
            </div>
        );
    };
    async function getCardapioDoDia() {
        try {
            const response = await axios.get("http://localhost:3333/cardapio/dia");
            setCardapioDoDia(response.data);
        } catch (error) {
            alert("Erro ao carregar o cardápio do dia.");
        }
    }

    useEffect(() => {
        getCardapioDoDia();
    }, []);

    async function getCardapio() {
        try {
            const response = await axios.get("http://localhost:3333/cardapio");
            setCardapio(response.data);
        } catch (error) {
            alert("Erro ao carregar os pratos do cardápio.");
        }
    };
    

    const [cardapioDoDia, setCardapioDoDia] = useState([]);

    const [cardapio, setCardapio] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputData, setInputData] = useState("");
    const [inputVisibility, setInputVisibility] = useState(false);
    const [SelectedCardapio, setSelectedCardapio] = useState();
    
    useEffect(() => {
        getCardapio();
    }, []);

    return(
        <div>
            <Menu/>
            <div id="main-container" className="container-fluid">
                <div className="row justify-content-center">
                
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
                    <div className="forms">
                    <div>
                        <div className="header"><h2>Cardápio do Dia</h2></div>
            
            {cardapioDoDia.length > 0 ? (
                <div className="todos">
                    {cardapioDoDia.map((card) => (
                        <div className="todo" key={card.id}>
                            <p>{card.name}</p>
                            <p>Descrição: {card.description}</p>
                            <p>Data: {new Date(card.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p> 
                        </div>
                    
                    ))}
                </div>
            ) : (
                <p>Nenhum prato encontrado para hoje.</p>
            )}
            <div><button onClick={handleRedirect}>+ Cardápio</button>
            </div>
        </div>
                    </div>
                    </div>
                    <div className="vertical-divider d-none d-md-block"></div>
                        <div id="tialupag" className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="App">
                            <header className="container">
                                <div className="header">
                                <h2>Pratos do menu</h2> 
                                </div>
                                <Cardapio cardapio={cardapio}></Cardapio>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
            
                
               
           
        </div>
    );
}

export default Cardapio