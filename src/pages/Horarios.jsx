import Menu from "./Menu";
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import { useState, useEffect } from 'react';

function Horario(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const horariosChegada050 = ['08:00', '12:00', '16:00']; // Exemplo de horários, puxar do scraping
    const horariosSaidaIntercampi = ['09:00', '13:00', '17:00']; // Exemplo de horários, puxar do scraping

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