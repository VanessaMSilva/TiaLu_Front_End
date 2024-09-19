import Menu from "./../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto


function Alterar(){
    return(
        <div>
            <Menu/>
        <div className="supre"></div>
        <div className="blocos">
        <div className="crud" id="center">
            <nav>
                <ul>
                    <li><a href="/Cadastrarc">Cadastrar</a></li>
                    <li><a href="/Alterarc">Alterar</a></li>
                    <li><a href="/Excluirc">Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="forms">
            <form action="">
                <div>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" />
                </div>
                <button className="Excluir">Buscar</button>

            </form>
            <form action="">
                <div>
                    <label htmlFor="Nome">Nome:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Codigo">Codigo:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="cpf">CPF/CNPJ:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Curso">Curso:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Cidade">Cidade</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="UF">UF</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Telefone">Telefone</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="email">Observação</label>
                    <textarea name="observação" id="obs"></textarea>
                </div>
                
                
                
                
                <button className="Alterar">Alterar</button>
            </form>
        </div>
    </div>
    <div className="blocos">
        <img src={tia} alt="" />
    </div>
    
    </div>
       
    )
}

export default Alterar