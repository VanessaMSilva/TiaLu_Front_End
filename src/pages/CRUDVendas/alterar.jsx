import React, { useState } from "react";
import Menu from "./../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import axios from "axios"; // Importa axios para requisições HTTP

function Alterar() {
    // Estado para armazenar os valores dos inputs e o ID de busca
    const [idBusca, setIdBusca] = useState(""); // Mudança: busca pelo ID da venda
    const [formData, setFormData] = useState({
        nome_cliente: "",
        cpf: "",
        produto: "",
        quantidade: "",
        valor_total: "",
        data_venda: ""
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

    // Função para atualizar o estado do ID de busca
    const handleIdBuscaChange = (event) => {
        setIdBusca(event.target.value);
    };

    // Função para buscar os dados da venda pelo ID
    const handleBuscarVenda = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.get(`http://localhost:3333/vendas/${idBusca}`);
            if (response.status === 200) {
                const venda = response.data[0]; // Assuming the response is an array
                setFormData({
                    nome_cliente: venda.nome_cliente,
                    cpf: venda.cpf,
                    produto: venda.produto,
                    quantidade: venda.quantidade,
                    valor_total: venda.valor_total,
                    data_venda: venda.data_venda
                });
                setCarregado(true);
            } else {
                alert("Venda não encontrada.");
            }
        } catch (error) {
            console.error("Erro ao buscar venda:", error);
            alert("Ocorreu um erro. Tente novamente.");
        }
    };

    // Função para alterar os dados da venda
    const handleAlterarVenda = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`http://localhost:3333/vendas/${idBusca}`, formData);
            if (response.status === 200) {
                alert("Venda alterada com sucesso!");
                setFormData({ nome_cliente: "", cpf: "", produto: "", quantidade: "", valor_total: "", data_venda: "" }); // Limpa o formulário após a alteração
                setIdBusca(""); // Limpa o ID de busca
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
                            <form onSubmit={handleBuscarVenda}>
                                <div>
                                    <label htmlFor="idBusca">ID da Venda:</label>
                                    <input
                                        type="text"
                                        name="idBusca"
                                        value={idBusca}
                                        onChange={handleIdBuscaChange}
                                    />
                                </div>
                                <div><button type="submit" className="Excluir">Buscar</button></div>
                            </form>

                            {carregado && (
                                <>
                                    <div><h2 className="rosa">Informações</h2></div>
                                    <form onSubmit={handleAlterarVenda}>
                                        <div>
                                            <label htmlFor="nome_cliente">Nome Cliente:</label>
                                            <input
                                                type="text"
                                                name="nome_cliente"
                                                value={formData.nome_cliente}
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
                                            <label htmlFor="produto">Produto:</label>
                                            <input
                                                type="text"
                                                name="produto"
                                                value={formData.produto}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="quantidade">Quantidade:</label>
                                            <input
                                                type="number"
                                                name="quantidade"
                                                value={formData.quantidade}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="valor_total">Valor Total:</label>
                                            <input
                                                type="number"
                                                name="valor_total"
                                                value={formData.valor_total}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="data_venda">Data da Venda:</label>
                                            <input
                                                type="date"
                                                name="data_venda"
                                                value={formData.data_venda}
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