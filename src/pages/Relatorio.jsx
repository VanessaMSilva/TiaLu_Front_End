import Menu from "./Menu";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto


function Relatorio(){

    const [devedores, setDevedores] = useState([]);
    const [pesquisaCPF, setPesquisaCPF] = useState("");
    const [resultadoBusca, setResultadoBusca] = useState(null);

    useEffect(() => {
        
        async function fetchDevedores() {
            try {
                const response = await axios.get("http://localhost:3333/vendas"); 
                console.log(response.data);
        
                const vendas = response.data;
        
                const devedoresCalculados = vendas.reduce((cod, venda) => {
                    const chaveCliente = venda.cpf; 
        
                    if (!cod[chaveCliente]) {
                        cod[chaveCliente] = {
                            nome: venda.nome_cliente,
                            cpf: chaveCliente, 
                            valorDevido: 0,
                        };
                    }
        
                    cod[chaveCliente].valorDevido += venda.valor_total;
        
                    return cod;
                }, {});
        
                const devedoresArray = Object.values(devedoresCalculados);
                devedoresArray.sort((a, b) => b.valorDevido - a.valorDevido);
                console.log(devedoresArray); 
        
                setDevedores(devedoresArray);
            } catch (error) {
                console.error("Erro ao buscar os devedores: ", error);
            }
        }
        fetchDevedores();
    }, []);

    const handleInputChange = (event) => {
        setPesquisaCPF(event.target.value);
    };

    const clienteBusca = () => {
        try{
            const resultado = devedores.find((devedor) => devedor.cpf === pesquisaCPF);
            setResultadoBusca(resultado || { mensagem: "Nenhum devedor encontrado com este CPF." });
        } catch (error) {
            console.error("Erro ao buscar devedor:", error);
            setResultadoBusca({ mensagem: "Ocorreu um erro ao buscar o devedor. Tente novamente." });
        }
    };


    return(
        <div className="cut">
            <Menu/>
            <div className="supre">
            
                            
                <div className="header">
                <h2>Relatorio devedores</h2> 
            </div>
                              
                          
                     
                
                <div className="forms">
                <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor Devido</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devedores.map((devedor, index) => (
                                <tr key={index}>
                                    <td>{devedor.nome}</td>
                                    <td>R${devedor.valorDevido}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="forms">
                    <input type="text" placeholder="Pesquise pelo CPF" value={pesquisaCPF} onChange={handleInputChange}/>
                    <button onClick={clienteBusca} className="buscar">Buscar</button>

                    {resultadoBusca && (
                        <div className="resultado-busca">
                            <label>Nome: {resultadoBusca.nome || "Não encontrado"}</label>
                                
                            <label>Valor: R${resultadoBusca.valorDevido || 0}</label>
                        </div>
                    )}
                </div>
            </div>
        </div>
       
    )
}

export default Relatorio