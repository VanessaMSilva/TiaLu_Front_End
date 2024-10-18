import Menu from "./Menu";
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto


function Home(){
    return(
        <div className="cut">
            <Menu/>
            <div id="main-container" className="container-fluid">
                <div className="row justify-content-center">
                
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
                        <h1>Seja Bem-vindo(a) à Tia Lu</h1>
                        <h2>Farpas & Vendas</h2>
                        <button>Cadastrar funcionario</button>
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

export default Home