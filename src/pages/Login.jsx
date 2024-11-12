import Menu from "./Menu";
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from 'axios';
import InputMask from 'react-text-mask';
import bcrypt from 'bcryptjs';

function Login({ setLogado }) {

    const [inputCPF, setInputCpf] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    const [funcionario, setFuncionario] = useState({
        nome: '',
        email: '',
        senha: '',
        confSenha: '',
        cpf: '',
        dtNasc: '',
        imagem: null,
    });
    const navigate = useNavigate()

    async function fazerLogin(e) {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3333/funcionario/${inputCPF}`);
            const funcionarioEncontrado = response.data;

            if (!funcionarioEncontrado) {
                alert("CPF não cadastrado no sistema!");
                return;
            }

            const senhaCorreta = await bcrypt.compare(inputSenha, funcionarioEncontrado.senha);

            if (senhaCorreta) {
                setLogado(true);
                localStorage.setItem('isLoggedIn', 'true');
                navigate("/Home");
            } else {
                alert("Senha incorreta!");
            }
        } catch (error) {
            console.error("Erro ao buscar funcionário:", error);
            alert("Ocorreu um erro ao tentar fazer login.");
        }
    }


    return (
        <div>
            <Menu />
            <div id="main-container" className="container-fluid">
                <div className="row justify-content-center">

                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
                        <div className="forms">
                            <div><h2 className="rosa">Login</h2></div>
                            <form action="">
                                <div>
                                    <label htmlFor="cpf">CPF:</label>
                                    <InputMask type="text" value={inputCPF}
                                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                        onChange={(e) => setInputCpf(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="senha">Senha:</label>
                                    <input type="password" value={inputSenha}
                                        onChange={(e) => setInputSenha(e.target.value)}
                                    />
                                </div>
                                <div> <button onClick={fazerLogin} className="Cadastro">Entrar</button></div>

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

export default Login