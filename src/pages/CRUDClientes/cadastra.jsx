import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto


function Cadastrar(){
    return(
        <div>
            <Menu/>
            <div id="main-container" className="container-fluid">
            <div className="row justify-content-center">
       
        <div className="crud" id="center">
            <nav>
                <ul>
                    <li><a href="/Cadastrarc">Cadastrar</a></li>
                    <li><a href="/Alterarc">Alterar</a></li>
                    <li><a href="/Excluirc">Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">

        <div className="forms">
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
                
                
                
                <button className="Cadastro">Cadastrar</button>
            </form>
        </div>
    </div>
    <div className="vertical-divider d-none d-md-block"></div>
                <div id="tialupag" className="col-md-4 d-flex justify-content-center align-items-center">
        <img src={tia} alt="" />
    </div>
    
    </div>
    </div></div>
    )
}

export default Cadastrar