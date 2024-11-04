import React, { useState } from "react";
import Menu from "../Menu";
import tia from '../../assets/tialu.png'; 
import axios from "axios";

function Cadastrar() {
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        produtos: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCadastrarVenda = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:3333/vendas", formData);
            if (response.status === 201) {
                alert("Venda cadastrada com sucesso!");
                setFormData({ nome: "", cpf: "", produtos: "" });
            } else {
                alert("Erro ao cadastrar a venda.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar a venda:", error);
            alert("Ocorreu um erro. Tente novamente.");
        }
    };

    return (
        <div>
            <Menu />
            <div id="main-container" className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
                        <div className="crud" id="center">
                            <nav>
                                <ul>
                                    <li><a href="/Cadastrarv" style={{ color: '#9e2f42' }}>Cadastrar</a></li>
                                    <li><a href="/Alterarv">Alterar</a></li>
                                    <li><a href="/Excluirv">Excluir</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="forms">
                            <div><h2 className="rosa">Adicionar vendas</h2></div>
                            <form onSubmit={handleCadastrarVenda}>
                                <div>
                                    <label htmlFor="nome">Nome Cliente:</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cpf">CPF:</label>
                                    <input
                                        type="text"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="produtos">Produtos:</label>
                                    <input
                                        type="text"
                                        name="produtos"
                                        value={formData.produtos}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="Cadastro">Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="vertical-divider d-none d-md-block"></div>
                    <div id="tialupag" className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={tia} alt="Logo Tia Lu" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;
