import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";
import InputMask from 'react-text-mask';

function Alterar() {

    const [cpf, setCpf] = useState('');
    const [funcionario, setFuncionario] = useState({
        nome: '',
        email: '',
        senha: '',
        confSenha: '',
        cpf: '',
        dtNasc: '',
        imagem: null,
    });
    const [emailError, setEmailError] = useState('');
    const [inputImagem, setInputImagem] = useState(null);

    async function buscarFunc(e) {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3333/funcionario/${cpf}`);
            if (response.data) {
                setFuncionario(response.data);
            } else {
                alert("Funcionário não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao buscar funcionário:", error);
            alert("Funcionário não encontrado.");
        }
    }

    async function alterarFunc(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nome", funcionario.nome);
        formData.append("email", funcionario.email);
        formData.append("senha", funcionario.senha);
        formData.append("confSenha", funcionario.confSenha);
        formData.append("cpf", funcionario.cpf);
        formData.append("dtNasc", funcionario.dtNasc);
        if (inputImagem) {
            formData.append("imagem", inputImagem);
        }

        if (!validaEmail(funcionario.email)) {
            setEmailError('Por favor, insira um email válido.');
            return;
        } else {
            setEmailError('');
        }

        try {
            const response = await axios.put("http://localhost:3333/funcionario", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Funcionário alterado com sucesso!");
            setFuncionario({
                nome: '',
                email: '',
                senha: '',
                confSenha: '',
                cpf: '',
                dtNasc: '',
                imagem: null,
            });
            setCpf('');
            setInputImagem(null);
        } catch (error) {
            console.error("Erro ao alterar funcionário:", error);
            alert("Erro ao alterar funcionário.");
        }
    }

    const validaEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    return (
        <div>
            <Menu />
            <div id="main-container" className="container-fluid">
                <div className="row justify-content-center">


                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
                        <div className="crud" id="center">
                            <nav>
                                <ul>
                                    <li><a href="/Cadastrarl">Cadastrar</a></li>
                                    <li><a href="/Alterarl" style={{ color: '#9e2f42' }}>Alterar</a></li>
                                    <li><a href="/Excluirl">Excluir</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="forms">
                            <div><h2 className="rosa">Alterar funcionários</h2></div>

                            <form action="">
                                <div>
                                    <label htmlFor="cpf">CPF:</label>
                                    <InputMask type="text" value={cpf}
                                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                        onChange={(e) => setCpf(e.target.value)}
                                    />
                                </div>
                                <div> <button onClick={buscarFunc} className="Excluir">Buscar</button></div>
                            </form>

                            <form action="">
                                <div>
                                    <label htmlFor="nome">Nome:</label>
                                    <input type="text" value={funcionario.nome}
                                        onChange={(e) => setFuncionario({ ...funcionario, nome: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail:</label>
                                    <input type="text" value={funcionario.email}
                                        onChange={(e) => setFuncionario({ ...funcionario, email: e.target.value })}
                                    />
                                    {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                                </div>
                                <div>
                                    <label htmlFor="cpf">CPF:</label>
                                    <InputMask type="text" value={funcionario.cpf} disabled
                                        style={{ cursor: "not-allowed" }}
                                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                        onChange={(e) => setFuncionario({ ...funcionario, cpf: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dtNasc">Data nascimento:</label>
                                    <InputMask type="text" value={funcionario.dtNasc}
                                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                        onChange={(e) => setFuncionario({ ...funcionario, dtNasc: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="imagem">Nova Imagem:</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setInputImagem(e.target.files[0])}
                                        className="form-control"
                                    />
                                </div>
                                <div> <button onClick={alterarFunc} className="Alterar">Alterar</button></div>

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