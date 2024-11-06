import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import React, { useState } from 'react';
import axios from "axios";
import InputMask from 'react-text-mask';

function Excluir() {

    const [cpf, setCpf] = useState('');
    const [funcionario, setFuncionario] = useState({
        nome: '',
        email: '',
        cpf: '',
        dtNasc: '',
        imagem: null,
    });

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

    async function excluirFunc(e) {
        e.preventDefault();
        try {
            if (!funcionario.cpf) {
                alert("Informe o CPF.")
                return;
            }
            
            await axios.delete(`http://localhost:3333/funcionario/${funcionario.cpf}`);
            alert("Funcionário excluído com sucesso!");
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
        } catch (error) {
            console.error("Erro ao alterar funcionário:", error);
            alert("Erro ao alterar funcionário.");
        }
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
                                    <li><a href="/Alterarl">Alterar</a></li>
                                    <li><a href="/Excluirl" style={{ color: '#9e2f42' }}>Excluir</a></li>
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
                                    <input type="text" value={funcionario.nome} disabled 
                                        style={{ cursor: "not-allowed" }}
                                    onChange={(e) => setFuncionario({ ...funcionario, nome: e.target.value })}

                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail:</label>
                                    <input type="text" value={funcionario.email} disabled 
                                        style={{ cursor: "not-allowed" }}
                                    onChange={(e) => setFuncionario({ ...funcionario, email: e.target.value })}
                                    />
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
                                    <InputMask type="text" value={funcionario.dtNasc} disabled 
                                        style={{ cursor: "not-allowed" }}
                                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                        onChange={(e) => setFuncionario({ ...funcionario, dtNasc: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="imagem">Imagem:</label>
                                    {funcionario.imagem && (
                                        <img
                                            src={`data:image/jpeg;base64,${funcionario.imagem}`}
                                            alt="Funcionario"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    )}
                                </div>
                                <div> <button onClick={excluirFunc} className="Excluir">Excluir</button></div>

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

export default Excluir