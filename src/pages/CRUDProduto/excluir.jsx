import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";

function Excluir(){
    const [cod, setCod] = useState('');
    const [produto, setProduto] = useState({
        nome: '',
        cod: '',
        tamanho: '',
        info: '',
        imagem: ''
    });

    async function buscarProduto(e) {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3333/produto/${cod}`);
            console.log("Dados do produto:", response.data);
            
            if (response.data) {
                setProduto(response.data);
            } else {
                alert("Produto não encontrado."); 
            }
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            alert("Produto não encontrado.");
        }
    }

    async function excluirProduto(e) {
        e.preventDefault(); 
        try {
            if (!produto.cod) {
                alert("Informe o código do produto.");
                return;
            }

            await axios.delete(`http://localhost:3333/produto/${produto.cod}`);
            alert("Produto excluído com sucesso!");
            setProduto({
                nome: '',
                cod: '',
                tamanho: '',
                info: '',
                imagem: ''
            });
            setCod('');
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            alert("Erro ao excluir produto.");
        }
    }
    return(
        <div>
            <Menu/>
            <div id="main-container" className="container-fluid">
            <div className="row justify-content-center">
        
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
        <div className="crud" id="center">
            <nav>
                <ul>
                    <li><a href="/Cadastrarp">Cadastrar</a></li>
                    <li><a href="/Alterarp">Alterar</a></li>
                    <li><a href="/Excluirp" class="text-primary">Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="forms">
            <form action="" method="POST">
                <div>
                    <label htmlFor="cod">Codigo de barra:</label>
                    <input type="text" value={cod}
                    onChange={(e) => setCod(e.target.value)} />
                </div> 
                <div> <button onClick={buscarProduto} className="Excluir">Buscar</button></div> 
               
                 
            </form>
            <div><h2>Informações</h2></div>
            
            <form action="">
            <div>
                    <label htmlFor="Nome">Nome:</label>
                    <input type="text" value={produto.nome}  
                    readOnly />
                </div>
                <div>
                    <label htmlFor="cod">Codigo de barra:</label>
                    <input type="text" value={produto.cod} 
                     readOnly/>
                </div>
                <div>
                    <label htmlFor="tamanho">Tamanho:</label>
                    <input type="text" value={produto.tamanho} 
                     readOnly/>
                </div>
                <div>
                    <label htmlFor="info">Informação:</label>
                    <textarea name="info" id="obs" value={produto.info}  
                    readOnly></textarea>
                </div>
                <div>
                    <label htmlFor="imagem">Imagem:</label>
                    {produto.imagem && (
                    <img 
                    src={`data:image/jpeg;base64,${produto.imagem}`} 
                    alt="Produto" 
                    style={{ width: '100%', height: 'auto' }} 
                    />
                    )}
                </div>
                <div> <button onClick={excluirProduto} className="Excluir">Excluir</button></div>
               

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

export default Excluir