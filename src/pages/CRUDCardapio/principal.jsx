import Menu from "./../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import { AiOutlineAim, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

function Principal(){
    async function modifyStatusTodo(card) {
        const response = await axios.put("http://localhost:3333/cardapio", {
          id: card.id,
          status: !card.status,
        });
        getCardapio();
      }
    const Cardapio = ({cardapio}) => {   
        return (
            <div className="todos">
                {cardapio.map((card) => {
                    return (
                    <div  className="todo">
                        <input 
                            onClick = {() => modifyStatusTodo(card)}
                            style={{background: card.status ? "#A879E6" : "white"}}
                            className="checkbox"
                        ></input>
                        <p>{card.name}</p>
                        <p>Descrição: {card.description}</p>
                        <button onClick={() => handleWithEditButtonClick(card)} className="icon">
                            <AiOutlineEdit size={20} color="#64697b"></AiOutlineEdit>
                        </button>
                        <button onClick={() => deleteCardapio(card)} className="icon">
                            <AiOutlineDelete  size={20} color="#64697b"></AiOutlineDelete>
                        </button>
                    </div>
                    );
                })}
            </div>
        );
    };
    

    async function handleWithNewButton() {
        console.log("fasfas");
        setInputVisibility(!inputVisibility);
        getCardapio();
    }
    async function handleWithEditButtonClick(card) {
        setSelectedCardapio(card);
        setInputVisibility(true);
    }
    async function getCardapio() {
        const response = await axios.get("http://localhost:3333/cardapio");
        console.log(response);
        setCardapio(response.data);
    }

    async function editCardapio() {
        const response = await axios.put("http://localhost:3333/cardapio", {
          id: SelectedCardapio.id,
          name: inputValue,
          description: inputDescription,
        });
        setSelectedCardapio();
        setInputVisibility(false);
        getCardapio();
        setInputValue("");
      }

    async function createCardapio(){
        const response = await axios.post("http://localhost:3333/cardapio", {
            name: inputValue,
            description: inputDescription,
        });
        getCardapio();
        setInputVisibility(!inputVisibility);
        setInputValue("");
        setInputDescription("");
    }
    async function deleteCardapio(card){
        await axios.delete(`http://localhost:3333/cardapio/${card.id}`);
        getCardapio();
    }

    const [cardapio, setCardapio] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputVisibility, setInputVisibility] = useState(false);
    const [SelectedCardapio, setSelectedCardapio] = useState();
    
    useEffect(() => {
        getCardapio();
    }, []);

    return(
        <div>
            <Menu/>
            <div className="App">
                <header className="container">
                <div className="header">
                    <h2>Pratos do menu</h2>
                    <Cardapio cardapio={cardapio}></Cardapio>
                </div>
                    <input 
                        value={inputValue}
                        style={{display: inputVisibility? "block": "none"}}
                        onChange={(event) => {
                            setInputValue(event.target.value);
                        }
                        }
                    ></input>
                    <textarea className="inputName"  
                    value={inputDescription}
                        style={{display: inputVisibility? "block": "none"}}
                        onChange={(event) => {
                            setInputDescription(event.target.value);
                        }

                        }></textarea>
                    <button onClick={
                        inputVisibility 
                        ? SelectedCardapio
                        ? editCardapio
                        : createCardapio
                        : handleWithNewButton
                    } 
                        className="newTaskButton">
                        {inputVisibility? "Confirme": "+ Pratos"}
                    </button>
               
                </header>
            </div>
        </div>
    );
}

export default Principal