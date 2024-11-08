import React, { useState } from "react";
import Menu from "../Menu";
import tia from '../../assets/tialu.png'; 
import axios from "axios";

function Cadastrar() {
    const [formData, setFormData] = useState({
        nome_cliente: "",
        cpf: "",
        produto: "",
        quantidade: "",
        valor_total: "",
        data_venda: ""
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

        // Validação simples dos campos
        const camposFaltantes = [];
        for (let campo in formData) {
            if (!formData[campo]) camposFaltantes.push(campo);
        }
        
        if (camposFaltantes.length > 0) {
            return alert("O(s) campo(s) é (são) obrigatório(s): " + camposFaltantes.join(", "));
        }

        try {
            const response = await axios.post("http://localhost:3333/vendas", {
                nome_cliente: formData.nome_cliente,
                cpf: formData.cpf,
                produto: formData.produto,
                quantidade: parseInt(formData.quantidade, 10),
                valor_total: parseFloat(formData.valor_total),
                data_venda: new Date(formData.data_venda).toISOString() // Garantindo o formato correto
            });

            if (response.status === 201) {
                alert("Venda cadastrada com sucesso!");
                setFormData({ nome_cliente: "", cpf: "", produto: "", quantidade: "", valor_total: "", data_venda: "" });
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
                                        step="0.01"
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