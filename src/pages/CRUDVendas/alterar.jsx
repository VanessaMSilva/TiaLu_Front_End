import React, { useState } from "react";
import Menu from "./../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import axios from "axios"; // Importa axios para requisições HTTP

function Alterar() {
    // Estado para armazenar os valores dos inputs e o CPF de busca
    const [cpfBusca, setCpfBusca] = useState("");
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        produtos: ""
    });
    const [carregado, setCarregado] = useState(false); // Indica se os dados foram carregados para edição

    // Função para atualizar o estado com os valores dos inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Função para atualizar o estado do CPF de busca
    const handleCpfBuscaChange = (event) => {
        setCpfBusca(event.target.value);
    };

    // Função para buscar os dados do cliente pelo CPF
    const handleBuscarCliente = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.get(`http://seu-endereco-de-api.com/vendas/${cpfBusca}`);
            if (response.status === 200) {
                setFormData(response.data); // Carrega os dados para edição
                setCarregado(true);
            } else {
                alert("Cliente não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
            alert("Ocorreu um erro. Tente novamente.");
        }
    };

    // Função para alterar os dados do cliente
    const handleAlterarCliente = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`http://seu-endereco-de-api.com/vendas/${cpfBusca}`, formData);
            if (response.status === 200) {
                alert("Dados alterados com sucesso!");
                setFormData({ nome: "", cpf: "", produtos: "" }); // Limpa o formulário após a alteração
                setCpfBusca(""); // Limpa o CPF de busca
                setCarregado(false);
            } else {
                alert("Erro ao alterar os dados.");
            }
        } catch (error) {
            console.error("Erro ao alterar os dados:", error);
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
                                    <li><a href="/Cadastrarv">Cadastrar</a></li>
                                    <li><a href="/Alterarv" style={{ color: '#9e2f42' }}>Alterar</a></li>
                                    <li><a href="/Excluirv">Excluir</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="forms">
                            <div><h2 className="rosa">Alterar vendas</h2></div>
                            <form onSubmit={handleBuscarCliente}>
                                <div>
                                    <label htmlFor="CPF">CPF Cliente:</label>
                                    <input
                                        type="text"
                                        name="cpfBusca"
                                        value={cpfBusca}
                                        onChange={handleCpfBuscaChange}
                                    />
                                </div>
                                <div><button type="submit" className="Excluir">Buscar</button></div>
                            </form>

                            {carregado && (
                                <>
                                    <div><h2 className="rosa">Informações</h2></div>
                                    <form onSubmit={handleAlterarCliente}>
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
                                        <div><button type="submit" className="Alterar">Alterar</button></div>
                                    </form>
                                </>
                            )}
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

export default Alterar;