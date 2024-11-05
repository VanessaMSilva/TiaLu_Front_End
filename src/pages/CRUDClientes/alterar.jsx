import Menu from "./../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";

function Alterar(){

    const [cpf, setCpf] = useState('');
    const [cliente, setCliente] = useState({
        nome: '',
        cod: '',
        cpf: '',
        curso: '',
        cidade: '',
        uf: '',
        telefone: '',
        email: '',
        obs: ''
    });

    async function buscarCliente(e) {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3333/cliente/${cpf}`);
            console.log("Dados do cliente:", response.data);
            if (response.data){
                setCliente(response.data);
            } else {
                alert("Cliente não encontrado!")
            }
            
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
            alert("Cliente não encontrado.");
        }
    }
    

    async function alterCliente() {
        try {
            const response = await axios.put("http://localhost:3333/cliente", {
                nome: cliente.nome,
                cod: cliente.cod,
                cpf: cliente.cpf,
                curso: cliente.curso,
                cidade: cliente.cidade,
                uf: cliente.uf,
                telefone: cliente.telefone,
                email: cliente.email,
                obs: cliente.obs
            });
    
            alert("Cliente alterado com sucesso!");
        } catch (error) {
            console.error("Erro ao alterar cliente:", error);
            alert("Erro ao alterar cliente.");
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
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" value={cpf}
                    onChange={(e) => setCpf(e.target.value)} />
                </div>
                <button onClick={buscarCliente} className="Excluir">Buscar</button>

            </form>
            <form action="">
            <div>
                    <label htmlFor="Nome">Nome:</label>
                    <input type="text" value={cliente.nome} 
                    onChange={(e) => setCliente({...cliente, nome: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="Codigo">Codigo:</label>
                    <input type="text" value={cliente.cod} 
                    onChange={(e) => setCliente({...cliente, cod: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="cpf">CPF/CNPJ:</label>
                    <input type="text" value={cliente.cpf} 
                    onChange={(e) => setCliente({...cliente, cpf: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="Curso">Curso:</label>
                    <input type="text" value={cliente.curso} 
                    onChange={(e) => setCliente({...cliente, curso: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="Cidade">Cidade</label>
                    <input type="text" value={cliente.cidade} 
                    onChange={(e) => setCliente({...cliente, cidade: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="UF">UF</label>
                    <input type="text" value={cliente.uf} 
                    onChange={(e) => setCliente({...cliente, uf: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="Telefone">Telefone</label>
                    <input type="text" value={cliente.telefone} 
                    onChange={(e) => setCliente({...cliente, telefone: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" value={cliente.email} 
                    onChange={(e) => setCliente({...cliente, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="text">Observação</label>
                    <textarea name="observação" id="obs" value={cliente.obs}
                    onChange={(e) => setCliente({...cliente, obs: e.target.value})} ></textarea>
                </div>             
                
                <button onClick={alterCliente} className="Alterar">Alterar</button>
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

export default Alterar