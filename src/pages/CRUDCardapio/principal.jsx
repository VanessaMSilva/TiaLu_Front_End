import Menu from "./../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import { AiOutlineAim, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";



function Principal(){
 
    const Cardapio = ({cardapio}) => {   
        return (
            <div className="todos">
                {cardapio.map((card) => {
                    return (
                    <div  className="todo">
                        <p>{card.name}</p>
                        <p>Descrição: {card.description}</p>
                        <p>Data: {card.data}</p>
                        <button onClick={() => handleWithEditButtonClick(card)} className="icon">
                            <AiOutlineEdit size={20} color="#fff"></AiOutlineEdit>
                        </button>
                        <button onClick={() => deleteCardapio(card)} className="icon">
                            <AiOutlineDelete  size={20} color="#fff"></AiOutlineDelete>
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
    };
    async function handleWithEditButtonClick(card) {
        setSelectedCardapio(card);
        setInputVisibility(true);
        setInputValue(card.name);
        setInputDescription(card.description);
         // Converte a data para o formato YYYY-MM-DD
        const formattedDate = new Date(card.data).toISOString().split('T')[0];

        setInputData(formattedDate); // Define a data formatada no input
    };
    async function getCardapio() {
        const response = await axios.get("http://localhost:3333/cardapio");
        console.log(response);
        setCardapio(response.data);
        
    };
    // Função de validação dos campos obrigatórios
function validateFields() {
    if (!inputValue.trim()) {
        alert("O campo 'Nome do prato' é obrigatório.");
        return false;
    }
    if (!inputData.trim()) {
        alert("O campo 'Data' é obrigatório.");
        return false;
    }
    if (!inputDescription.trim()) {
        alert("O campo 'Descrição' é obrigatório.");
        return false;
    }
    return true;
}

// Função para criar cardápio com validação
async function createCardapio() {
    if (!validateFields()) return; // Impede o envio se houver erro na validação
    try {
        const formattedDate = new Date(inputData);
        const response = await axios.post("http://localhost:3333/cardapio", {
            name: inputValue,
            description: inputDescription,
            data: formattedDate.toISOString(),
        });
        getCardapio();
        setInputVisibility(!inputVisibility);
        setInputValue("");
        setInputDescription("");
        setInputData("");
    } catch (error) {
        if (error.response && error.response.status === 400) {
            alert(error.response.data.error);
        } else {
            console.error('Erro ao criar cardápio:', error.message);
        }
    }
}

// Função para editar cardápio com validação
async function editCardapio() {
    if (!validateFields()) return; // Impede o envio se houver erro na validação
    const formattedDate = new Date(inputData);
    try {
        const response = await axios.put("http://localhost:3333/cardapio", {
            id: SelectedCardapio.id,
            name: inputValue,
            description: inputDescription,
            data: formattedDate.toISOString(),
        });
        setSelectedCardapio();
        setInputVisibility(false);
        getCardapio();
        setInputValue("");
    } catch (error) {
        if (error.response && error.response.status === 400) {
            alert(error.response.data.error);
        } else {
            console.error('Erro ao alterar o cardápio:', error.message);
        }
    }
}

    async function deleteCardapio(card){
        await axios.delete(`http://localhost:3333/cardapio/${card.id}`);
        getCardapio();
    }

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
                    <div><h2 className="rosa">Criar ou adicionar pratos no menu</h2></div>
                        
                        <div>
                            <label htmlFor="nome">Nome do prato:</label>
                            <input 
                            value={inputValue}
                            placeholder="Nome do prato"
                            onChange={(event) => {
                                setInputValue(event.target.value);
                            }}
                        ></input>
                        </div>
                        
                        <div>
                            <label htmlFor="data">Data:</label>
                            <input  value={inputData} className="inputData" type="date"
                         onChange={(e) => setInputData(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição:</label>
                            <textarea className="inputName"  
                    value={inputDescription}
                       placeholder="Descrição"
                        onChange={(event) => {
                            setInputDescription(event.target.value);
                        }

                        }></textarea>
                        </div>
                        <div>  <button onClick={
                        inputVisibility 
                        ? SelectedCardapio
                        ? editCardapio
                        : createCardapio
                        : handleWithNewButton
                    } 
                        className="newTaskButton">
                        
                        {inputVisibility? "Confirme": "+ Pratos"}
                    </button></div>
                   
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

export default Principal