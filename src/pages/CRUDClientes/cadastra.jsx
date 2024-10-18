import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";

function Cadastrar(){

    const [inputNome, setInputNome] = useState("");
    const [inputCod, setInputCod] = useState("");
    const [inputCpf, setInputCpf] = useState("");
    const [inputCurso, setInputCurso] = useState("");
    const [inputCidade, setInputCidade] = useState("");
    const [inputUf, setInputUf] = useState("");
    const [inputTel, setInputTel] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputObs, setInputObs] = useState("");

    async function createCliente(event) {
        try{
            event.preventDefault();
            const response = await axios.post("http://localhost:3333/cliente", {
            nome: inputNome,
            cod:  parseInt(inputCod, 10),
            cpf: inputCpf,
            curso: inputCurso,
            cidade: inputCidade,
            uf: inputUf,
            telefone: inputTel,
            email: inputEmail,
            obs: inputObs,
        });

        setInputNome("");
        setInputCod("");
        setInputCpf("");
        setInputCurso("");
        setInputCidade("");
        setInputUf("");
        setInputTel("");
        setInputEmail("");
        setInputObs("");

        alert("Cadastro feito com sucesso!");

        } catch (error) {
            console.error("Error:", error);

            alert("Ocorreu um erro ao cadastrar o cliente. Tente novamente.");
        }
    }

    return(
        <div>
            <Menu/>
            <div id="main-container" className="container-fluid">
            <div className="row justify-content-center">
       
        <div className="crud" id="center">
            <nav>
                <ul>
                    <li><a href="/Cadastrarc">Cadastrar</a></li>
                    <li><a href="/Alterarc">Alterar</a></li>
                    <li><a href="/Excluirc">Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">

        <div className="forms">
            <form action="">
                <div>
                    <label htmlFor="Nome">Nome:</label>
                    <input type="text" value={inputNome} 
                    onChange={(e) => setInputNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Codigo">Codigo:</label>
                    <input type="text" value={inputCod} 
                    onChange={(e) => setInputCod(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="cpf">CPF/CNPJ:</label>
                    <input type="text" value={inputCpf} 
                    onChange={(e) => setInputCpf(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Curso">Curso:</label>
                    <input type="text" value={inputCurso} 
                    onChange={(e) => setInputCurso(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Cidade">Cidade</label>
                    <input type="text" value={inputCidade} 
                    onChange={(e) => setInputCidade(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="UF">UF</label>
                    <input type="text" value={inputUf} 
                    onChange={(e) => setInputUf(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Telefone">Telefone</label>
                    <input type="text" value={inputTel} 
                    onChange={(e) => setInputTel(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" value={inputEmail} 
                    onChange={(e) => setInputEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="text">Observação</label>
                    <textarea name="observação" id="obs" value={inputObs}
                    onChange={(e) => setInputObs(e.target.value)} ></textarea>
                </div>
                
                <button onClick={createCliente} className="Cadastro">Cadastrar</button>
            </form>
        </div>
    </div>
    <div className="vertical-divider d-none d-md-block"></div>
                <div id="tialupag" className="col-md-4 d-flex justify-content-center align-items-center">
        <img src={tia} alt="" />
    </div>
    
    </div>
    </div></div>
    )
}

export default Cadastrar