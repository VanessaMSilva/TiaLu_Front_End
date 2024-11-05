import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";

function Excluir(){

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
            setCliente(response.data);
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
            alert("Cliente não encontrado.");
        }
    }

    async function excluirCliente(e) {
        e.preventDefault(); 
        try {
            const response = await axios.delete(`http://localhost:3333/cliente/${cliente.cpf}`);
            alert("Cliente excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir cliente:", error);
            alert("Erro ao excluir cliente.");
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
                    <li><a href="/Cadastrarc">Cadastrar</a></li>
                    <li><a href="/Alterarc">Alterar</a></li>
                    <li><a href="/Excluirc"  style={{color: '#9e2f42'}}>Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="forms">
        <div><h2 className="rosa">Excluir clientes</h2></div>
            <form action="" method="POST">
                <div>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" value={cpf}
                    onChange={(e) => setCpf(e.target.value)} />
                </div>  
                <div> <button onClick={buscarCliente} className="Excluir">Buscar</button></div> 
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
                    <label htmlFor="Cidade">Cidade:</label>
                    <input type="text" value={cliente.cidade} 
                    onChange={(e) => setCliente({...cliente, cidade: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="UF">UF:</label>
                    <input type="text" value={cliente.uf} 
                    onChange={(e) => setCliente({...cliente, uf: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="Telefone">Telefone:</label>
                    <input type="text" value={cliente.telefone} 
                    onChange={(e) => setCliente({...cliente, telefone: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" value={cliente.email} 
                    onChange={(e) => setCliente({...cliente, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="text">Observação:</label>
                    <textarea name="observação" id="obs" value={cliente.obs}
                    onChange={(e) => setCliente({...cliente, obs: e.target.value})} ></textarea>
                </div>  
                <div> <button onClick={excluirCliente} className="Excluir">Excluir</button></div>
               

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

export default Excluir