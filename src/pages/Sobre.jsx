import Menu from "./Menu";
import React, {useState , useEffect } from 'react'
import api from './../api'
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto

function Sobre(){
    const [Mensagens , setMensagens ] = useState ([]);
    const [formData , setFormData ] = useState ({
      link: '',
      created_at : '',
      menuNav: ''
    });
  const fetchMensagens = async () => {
    const response = await api.get('/mensagens' )
    setMensagens (response.data)
  };
  useEffect (() => {
    fetchMensagens ();
  }, []);
  
  const handleInputChange = (event) => {
  const value = event. target.type === 'checkbox' ? event. target.checked : event. target.value;
  setFormData ({
  ...formData,
  [event. target.name]: value
  });
  };
  const handleFormSubmit = async (event) => {
  event. preventDefault ();
  await api.post('/menu/' , formData);
  fetchMensagens ();
  setFormData ({
    link: '',
    created_at : '',
    menuNav : true
  });
  };
    return(
        <div className="cut">
        <Menu/>
        <div id="main-container" className="container-fluid">
         
          <div className="row justify-content-center">   
          <div className="col-md-4 flex-column justify-content-center align-items-start">
               
                  <h1>Sobre da</h1>
                  <h1>tia lu</h1>
                  <h2>Farpas & Vendas</h2>
                  <h3>Concessões</h3>
                  <h4>Cantina da Tia Lu</h4>
                  <h5>Lanchonete</h5>
          </div>    
            <div className="col-md-5 d-flex flex-column justify-content-center align-items-start">
               <div id="sobre">
              {Mensagens. map ((Mensagem) => (
                < div  key ={Mensagem.id}>
                  < div className="labels"><strong>{Mensagem.menuNav }</strong>{Mensagem.link }</ div>
                </ div>
              ))}
            
          </div>
          </div>
         
                
          </div>
          </div>
        </div>
         
    )
}

export default Sobre