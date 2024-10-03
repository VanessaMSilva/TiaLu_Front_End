import Menu from "./Menu";
function Sobre(){
    return(
        <div className="cut">
        <Menu/>
            <div id="main-container" className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
           
                        <div className="forms">
                        </div>
                    </div>
                    <div className="vertical-divider d-none d-md-block"></div>
                    <div id="tialupag" className="col-md-4 d-flex justify-content-center align-items-center">
                        <h1> Sobre<br/>da Tia Lu</h1>
                        <br/>
                        <h2>Farpas & Vendas</h2>
                    </div>
                
                
                </div>
            </div>
        </div>
    )
}

export default Sobre