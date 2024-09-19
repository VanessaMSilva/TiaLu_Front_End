import Menu from "./../Menu";
import tia from '../../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto


function Excluir(){
    return(
        <div>
            <Menu/>
            <div id="main-container" className="container-fluid">
            <div className="row justify-content-center">
        <div className="crud" id="center">
            <nav>
                <ul>
                    <li><a href="/Cadastrarp">Cadastrar</a></li>
                    <li><a href="/Alterarp">Alterar</a></li>
                    <li><a href="/Excluirp">Excluir</a></li>
                </ul>
            </nav>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
        
        <div className="forms">
            <form action="" method="POST">
                <div>
                    <label htmlFor="Nome">Codigo de barra:</label>
                    <input type="text" />
                </div>                     
            </form>
            <h2>Informações</h2>
            <form action="">
                <div>
                    <label htmlFor="Nome">Nome Produto:</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label htmlFor="Nome">Tamanho:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Nome">Informações:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Nome">Imagem</label>
                    <input type="text" />
                </div>
                <button className="Excluir">Excluir</button>

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