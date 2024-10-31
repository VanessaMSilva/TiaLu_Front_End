import Menu from "./Menu";
import api from './../api'
import tia from '../assets/tialu.png'; 
import React, { useState, useEffect } from 'react';

function Horario() {
    const [horariosChegada050, setHorariosChegada050] = useState([]);
    const [horariosSaidaIntercampi, setHorariosSaidaIntercampi] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Função para buscar os horários da API
    async function fetchHorarios() {
        try {
            const response = await fetch("http://localhost:8000/horarios/");
            const data = await response.json();

            setHorariosChegada050(data.horariosChegada050);
            setHorariosSaidaIntercampi(data.horariosSaidaIntercampi);
        } catch (error) {
            console.error("Erro ao buscar horários:", error);
        }
    }

    useEffect(() => {
        // Atualiza o horário atual a cada segundo
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
