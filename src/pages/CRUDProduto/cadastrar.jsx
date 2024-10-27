import Menu from "../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";


function Cadastrar(){
    const [inputNome, setInputNome] = useState("");
    const [inputCod, setInputCod] = useState("");
    const [inputTamanho, setInputTamanho] = useState("");
    const [inputInfo, setInputInfo] = useState("");
    const [inputImagem, setInputImagem] = useState(null);

    async function verificarCodigoExistente(cod) {
        try {
            const response = await axios.get(`http://localhost:3333/produto/${cod}`);
            return response.data !== null; 
        } catch (error) {
            return false;   
        }
    }
    
    async function createProduto(event) {
        event.preventDefault();

        const codigoExistente = await verificarCodigoExistente(inputCod);
        if (codigoExistente) {
            alert("Erro: Este código já está cadastrado."); 
            return;
        }

        try {
            const formData = new FormData();
            formData.append("nome", inputNome);
            formData.append("cod", inputCod);
            formData.append("tamanho", inputTamanho);
            formData.append("info", inputInfo);
            if (inputImagem) {
                formData.append("imagem", inputImagem); 
            }

            const response = await axios.post("http://localhost:3333/produto", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            });

            
            setInputNome("");
            setInputCod("");
            setInputTamanho("");
            setInputInfo("");
            setInputImagem(null); 

            alert("Cadastro feito com sucesso!");
        } catch (error) {
            console.error("Erro:", error);
            alert("Ocorreu um erro ao cadastrar o produto. Tente novamente.");
        }
    }
    const handleImageChange = (event) => {
        if (event.target.files.length > 0) {
            setInputImagem(event.target.files[0]); 
        }
    };  

    return(
        <div>
            <Menu/>
            <div id="main-container" className="container-fluid">
            <div className="row justify-content-center">
       
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
         <div className="crud" id="center">
            <nav>
                <ul>
                    <li><a href="/Cadastrarp"  style={{color: '#9e2f42'}}>Cadastrar</a></li>
                    <li><a href="/Alterarp">Alterar</a></li>
                    <li><a href="/Excluirp">Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="forms">
            <form action="">
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" value={inputNome} 
                    onChange={(e) => setInputNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="cod">Codigo de barra:</label>
                    <input type="text" value={inputCod} 
                    onChange={(e) => setInputCod(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="tamanho">Tamanho:</label>
                    <input type="text" value={inputTamanho} 
                    onChange={(e) => setInputTamanho(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="info">Informação:</label>
                    <textarea name="info" id="obs" value={inputInfo}
                    onChange={(e) => setInputInfo(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor="imagem">Imagem:</label>
                    <input type="file" accept="image/*" 
                    onChange={handleImageChange} /> 
                </div>
                <div><button onClick={createProduto} className="Cadastro">Cadastrar</button></div>
                
            </form>
        </div>
    </div>
    <div className="vertical-divider d-none d-md-block"></div>
    <div id="tialupag" className="col-md-4 d-flex justify-content-center align-items-center">
        <img src={tia} alt="" />
    </div>
    
    </div>
    </div> 
    </div> 
    )
}

export default Cadastrar