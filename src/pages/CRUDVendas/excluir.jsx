import React, { useState } from "react";
import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import axios from "axios";

function Excluir() {
    const [cpfBusca, setCpfBusca] = useState("");
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        produtos: ""
    });
    const [carregado, setCarregado] = useState(false); // Indica se os dados foram carregados para exclusão

    // Função para atualizar o estado com o CPF de busca
    const handleCpfBuscaChange = (event) => {
        setCpfBusca(event.target.value);
    };

    // Função para buscar os dados do cliente pelo CPF
    const handleBuscarCliente = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`http://seu-endereco-de-api.com/vendas/${cpfBusca}`);
            if (response.status === 200) {
                setFormData(response.data); // Carrega os dados para exibição
                setCarregado(true);
            } else {
                alert("Cliente não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
            alert("Ocorreu um erro. Tente novamente.");
        }
    };

    // Função para excluir o cliente
    const handleExcluirCliente = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.delete(`http://localhost:3333/vendas/${cpfBusca}`);
            if (response.status === 200) {
                alert("Venda excluída com sucesso!");
                setFormData({ nome: "", cpf: "", produtos: "" }); // Limpa o formulário após a exclusão
                setCpfBusca(""); // Limpa o CPF de busca
                setCarregado(false);
            } else {
                alert("Erro ao excluir a venda.");
            }
        } catch (error) {
            console.error("Erro ao excluir a venda:", error);
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
                                    <li><a href="/Alterarv">Alterar</a></li>
                                    <li><a href="/Excluirv" style={{ color: '#9e2f42' }}>Excluir</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="forms">
                            <div><h2 className="rosa">Excluir vendas</h2></div>
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
                                    <form onSubmit={handleExcluirCliente}>
                                        <div>
                                            <label htmlFor="nome">Nome Cliente:</label>
                                            <input
                                                type="text"
                                                name="nome"
                                                value={formData.nome}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cpf">CPF:</label>
                                            <input
                                                type="text"
                                                name="cpf"
                                                value={formData.cpf}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="produtos">Produtos:</label>
                                            <input
                                                type="text"
                                                name="produtos"
                                                value={formData.produtos}
                                                readOnly
                                            />
                                        </div>
                                        <div><button type="submit" className="Excluir">Excluir</button></div>
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

export default Excluir;