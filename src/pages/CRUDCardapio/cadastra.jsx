import Menu from "./../Menu";
import tia from './../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto

const arrayTodos = [
    {name: "Galinhada", status: false, description: "Arroz amarelo"},
    {name: "Strogonof", status: false, description: "Com batata palha"},
];

function Cadastrar(){
    return(
        <div>
            <Menu/>
        <div className="supre"></div>
        <div className="blocos">
        <div className="crud" id="center">
            <nav>
                <ul>
                    <li><a href="/Cadastrarcar">Cadastrar</a></li>
                    <li><a href="/Alterarcar">Alterar</a></li>
                    <li><a href="/Excluircar">Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="forms">
            <form action="">
                <div>
                    <label htmlFor="Nome">Nome do prato:</label>
                    <br/>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Descricao">Descrição:</label>
                    <br/>
                    <textarea></textarea>
                </div>
                <div>
                    <label htmlFor="img">Foto:</label>
                    <br/>
                    <input type="file" />
                </div>
            
                <button className="Cadastro">Cadastrar</button>
            </form>
        </div>
    </div>
    <div className="blocos">
        <img src={tia} alt="" />
    </div>
    
    </div>
       
    )
}

export default Cadastrar