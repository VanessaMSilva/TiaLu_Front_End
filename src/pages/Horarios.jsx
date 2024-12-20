import Menu from "./Menu";
import React, { useState, useEffect } from 'react';

function Horario() {
    const [horariosChegada050, setHorariosChegada050] = useState([]);
    const [horariosSaidaIntercampi, setHorariosSaidaIntercampi] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Função para buscar os horários da API
    async function fetchHorarios() {
        try {
            const response = await fetch(" http://127.0.0.1:8000/Horario/");
            const data = await response.json();

            setHorariosChegada050(data.horariosChegada050);
            setHorariosSaidaIntercampi(data.horariosSaidaIntercampi);
        } catch (error) {
            console.error("Erro ao buscar horários:", error);
        }
    }

    useEffect(() => {
        // Atualiza o horário atual
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        fetchHorarios();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="cut">
            <Menu />
            <div className="supre">
                <div className="header">
                    <h2>Horário de pico</h2> 
                </div>
                <div className="forms">
                    <div className="horarios">
                        <div className="horarios-chegada">
                            <div className="header">
                            <h3>Horários de Chegada do 050</h3>
                        </div>
                            <h3></h3>
                            <ul>
                                {horariosChegada050.map((horario, index) => (
                                    <li key={index}>{horario}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="horarios-saida">
                        <div className="header">
                            <h3>Horários de Saída do Intercampi</h3>
                        </div>
                            <ul>
                                {horariosSaidaIntercampi.map((horario, index) => (
                                    <li key={index}>{horario}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="horario-atual">
                    <div className="header">
                    <h3>Horário Atual:</h3>
                        </div>
                        
                        <h3>{currentTime.toLocaleTimeString()}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Horario;
