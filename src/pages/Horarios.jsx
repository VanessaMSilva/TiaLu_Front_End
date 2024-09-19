import Menu from "./Menu";
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto


function Horario(){
    return(
        <div className="cut">
            <Menu/>
            <div className="supre">
                <h2 className="center">Horario de pico</h2>
                <div className="forms">
                </div>
            </div>
        </div>
       
    )
}

export default Horario