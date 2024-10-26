import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto


function Excluir(){
    return(
        <div>
            <Menu/>
            <div id="main-container" className="container-fluid">
            <div className="row justify-content-center">      
       
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
        <div className="crud" id="center">
            <nav>
                <ul>
                    <li><a href="/Cadastrarv">Cadastrar</a></li>
                    <li><a href="/Alterarv">Alterar</a></li>
                    <li><a href="/Excluirv"  class="text-primary">Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="forms">
            <form action="" method="POST">
                <div>
                    <label htmlFor="CPF">CPF Cliente:</label>
                    <input type="text" />
                </div>                     
                <div>  <button className="Excluir">Buscar</button></div>
            </form>
            <div><h2>Informações</h2></div>
            
            <form action="">
                <div>
                    <label htmlFor="Nome">Nome Cliente:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="CPF">CPF:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Produtos">Produtos:</label>
                    <input type="text" />
                </div>
                <div>  <button className="Excluir">Excluir</button></div>
                
                
                
                
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

export default Excluir