import Menu from "./Menu";
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Home() {

    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const login = () => {
        navigate('/Cadastrarl');
    };


    return (
        <div className="cut">
            <Menu />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#9e2f42',
              }}>
                {isLoggedIn ? (
                    <div>
                        <button onClick={logout}>Sair</button>
                    </div>
                ) : (
                    <p>.</p>
                )}
            </div>
            <div id="main-container" className="container-fluid">
                <div className="row justify-content-center">

                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <h1>Seja Bem-vindo(a) à Tia Lu</h1>
                        <h2>Farpas & Vendas</h2>
                        <button onClick={login}>Cadastrar funcionario</button>
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