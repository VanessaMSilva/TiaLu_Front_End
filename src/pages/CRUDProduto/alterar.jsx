import Menu from "./../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";

function Alterar(){

        const [cod, setCod] = useState('');
        const [produto, setProduto] = useState({
            nome: '',
            cod: '',
            tamanho: '',
            info: '', 
            imagem: null, 
        });

        const [inputImagem, setInputImagem] = useState(null);

        async function buscarProduto(e) {
            e.preventDefault();
            try {
                const response = await axios.get(`http://localhost:3333/produto/${cod}`);
                console.log("Detalhes do produto:", response.data);
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
        
    
        async function alterProduto(e) {
            e.preventDefault();
            const formData = new FormData();
            formData.append("nome", produto.nome);
            formData.append("cod", produto.cod);
            formData.append("tamanho", produto.tamanho);
            formData.append("info", produto.info);
            if (inputImagem) {
                formData.append("imagem", inputImagem); // Adiciona a nova imagem se houver
            }
    
            try {
                const response = await axios.put("http://localhost:3333/produto", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
    
                alert("Produto alterado com sucesso!");
                setProduto({
                    nome: '',
                    cod: '',
                    tamanho: '',
                    info: '',
                    imagem: null,
                });
                setCod('');
                setInputImagem(null);
            } catch (error) {
                console.error("Erro ao alterar produto:", error);
                alert("Erro ao alterar produto.");
            }
        }
    
    
    return(
        <div>
            <Menu/>
            <div id="main-container" className="container-fluid">
               <div className="row justify-content-center">
                
               <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
               <div className="crud">
                <nav>
                 <ul>
                    <li><a href="/Cadastrarp">Cadastrar</a></li>
                    <li><a href="/Alterarp"  class="text-primary">Alterar</a></li>
                    <li><a href="/Excluirp">Excluir</a></li>
                 </ul>
                </nav>
               </div>
               <div className="forms">
                <form action="">
                    <div>
                        <label htmlFor="cod">Codigo de barra:</label>
                        <input type="text" value={cod}
                        onChange={(e) => setCod(e.target.value)}/>
                    </div>
                    <div> <button onClick={buscarProduto} className="Excluir">Buscar</button></div>
                   

                </form>
                <form action="">
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" value={produto.nome} 
                    onChange={(e) => setProduto({...produto, nome: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="cod">Código de barra:</label>
                    <input type="text" value={produto.cod} 
                    onChange={(e) => setProduto({...produto, cod: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="tamanho">Tamanho:</label>
                    <input type="text" value={produto.tamanho} 
                    onChange={(e) => setProduto({...produto, tamanho: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="info">Informação:</label>
                    <textarea value={produto.info}
                    onChange={(e) => setProduto({ ...produto, info: e.target.value })}></textarea>
                </div>
                <div>
                    <label htmlFor="imagem">Nova Imagem:</label>
                    <input type="file" accept="image/*"
                    onChange={(e) => setInputImagem(e.target.files[0])} />
                    
                </div>
                <div><button onClick={alterProduto} className="Alterar">Alterar</button></div>
                
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

export default Alterar