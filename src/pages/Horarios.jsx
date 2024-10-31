import Menu from "./Menu";
import api from './../api'
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import { useState, useEffect } from 'react';


async function Horario(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    try {
        const response = await fetch("http://localhost:5173/horarios/");
        const data = await response.json();
        
        const horariosChegada050 = data.horariosChegada050;
        const horariosSaidaIntercampi = data.horariosSaidaIntercampi;

    } catch (error) {
        console.error("Erro ao buscar horários:", error);
    }

    return(
        <div className="cut">
            <Menu/>
            <div className="supre">
                <h2 className="center">Horário de pico</h2>
                <div className="forms">
                    <div className="horarios">
                    <div className="horarios-chegada">
                            <h3>Horários de Chegada do 050</h3>
                            <ul>
                                {horariosChegada050.map((horario, index) => (
                                    <li key={index}>{horario}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="horarios-saida">
                            <h3>Horários de Saída do Intercampi</h3>
                            <ul>
                                {horariosSaidaIntercampi.map((horario, index) => (
                                    <li key={index}>{horario}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="horario-atual">
                        <h3>Horário Atual:</h3>
                        <h3>{currentTime.toLocaleTimeString()}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Horario;