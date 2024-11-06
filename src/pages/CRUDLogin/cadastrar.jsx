import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";
import InputMask from 'react-text-mask';

function Cadastrar() {

    const [inputNome, setInputNome] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    const [inputSenhac, setInputSenhac] = useState("");
    const [inputCpf, setInputCpf] = useState("");
    const [inputDtNasc, setInputDtNasc] = useState("");
    const [inputImagem, setInputImagem] = useState(null);
    const [emailError, setEmailError] = useState('');

    async function verificarcpfExistente(cpf) {
        try {
            const response = await axios.get(`http://localhost:3333/funcionario/${cpf}`);
            return response.data !== null;
        } catch (error) {
            return false;
        }
    }

    async function createFunc(event) {
        event.preventDefault();

        const cpfExistente = await verificarcpfExistente(inputCpf);
        if (cpfExistente) {
            alert("Erro: Este cpf já está cadastrado.");
            return;
        }

        if (inputSenha != inputSenhac) {
            alert("As senhas não coincidem.");
            return;
        }

        if (!validaEmail(inputEmail)) {
            setEmailError('Por favor, insira um email válido.');
            return;
        } else {
            setEmailError('');
        }

        try {
            const formData = new FormData();
            formData.append("nome", inputNome);
            formData.append("email", inputEmail);
            formData.append("senha", inputSenha);
            formData.append("confSenha", inputSenhac);
            formData.append("cpf", inputCpf);
            formData.append("dtNasc", inputDtNasc);
            if (inputImagem) {
                formData.append("imagem", inputImagem);
            } else {
                alert("Por favor, selecione uma imagem.");
                return;
            }

            const response = await axios.post("http://localhost:3333/funcionario", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setInputNome("");
            setInputEmail("");
            setInputSenha("");
            setInputSenhac("");
            setInputCpf("");
            setInputDtNasc("");
            setInputImagem(null);

            alert("Cadastro feito com sucesso!");
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao cadastrar funcionário");
        }
    }

    const validaEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    const handleImageChange = (event) => {
        if (event.target.files.length > 0) {
            setInputImagem(event.target.files[0]);
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
                                    <li><a href="/Cadastrarl" style={{ color: '#9e2f42' }}>Cadastrar</a></li>
                                    <li><a href="/Alterarl">Alterar</a></li>
                                    <li><a href="/Excluirl">Excluir</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="forms">
                            <div><h2 className="rosa">Adicionar funcionários</h2></div>
                            <form action="">
                                <div>
                                    <label htmlFor="nome">Nome:</label>
                                    <input type="text" value={inputNome}
                                        onChange={(e) => setInputNome(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail:</label>
                                    <input type="text" value={inputEmail}
                                        onChange={(e) => setInputEmail(e.target.value)}
                                    />
                                    {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                                </div>
                                <div>
                                    <label htmlFor="senha">Senha:</label>
                                    <input type="password" value={inputSenha}
                                        onChange={(e) => setInputSenha(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confSenha">Confirmar senha:</label>
                                    <input type="password" value={inputSenhac}
                                        onChange={(e) => setInputSenhac(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cpf">CPF:</label>
                                    <InputMask type="text" value={inputCpf}
                                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                        onChange={(e) => setInputCpf(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dtNasc">Data nascimento:</label>
                                    <InputMask type="text" value={inputDtNasc}
                                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                        onChange={(e) => setInputDtNasc(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="imagem">Imagem:</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="form-control"
                                    />
                                </div>
                                <div> <button onClick={createFunc} className="Cadastro">Cadastrar</button></div>

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

export default Cadastrar