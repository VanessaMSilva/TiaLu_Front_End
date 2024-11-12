import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { AuthProvider } from './AuthContext';

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Relatorio from "./pages/Relatorio";
import Horario from "./pages/Horarios";
import Login from "./pages/Login";
//Importa as pastas de CRUD de produto
import Cadastrarp from "./pages/CRUDProduto/cadastrar";
import Alterarp from "./pages/CRUDProduto/alterar";
import Excluirp from "./pages/CRUDProduto/excluir";
//Importa as pastas de CRUD de clientes
import Cadastrarc from "./pages/CRUDClientes/cadastra";
import Alterarc from "./pages/CRUDClientes/alterar";
import Excluirc from "./pages/CRUDClientes/excluir";
//Importa as pastas de CRUD de vendas
import Cadastrarv from "./pages/CRUDVendas/cadastrar";
import Alterarv from "./pages/CRUDVendas/alterar";
import Excluirv from "./pages/CRUDVendas/excluir";
//Importa as pastas de CRUD de cardapio
import Principalcar from "./pages/CRUDCardapio/principal";
import Cardapio from "./pages/CRUDCardapio/cardapio";
//Importa as pastas de CRUD de login
import Cadastrarl from "./pages/CRUDLogin/cadastrar";
import Alterarl from "./pages/CRUDLogin/alterar";
import Excluirl from "./pages/CRUDLogin/excluir";

function App() {

  //verfificar autenticação login
  const [logado, setLogado] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={logado ? <Navigate to="/Home" /> : <Login setLogado={setLogado} />}
            />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/Horario" element={<Horario />} />

            {logado && (
              <>
                <Route path="/Home" element={<Home />} />
                <Route path="/Relatorio" element={<Relatorio />} />
                <Route path="/Cadastrarp" element={<Cadastrarp />} />
                <Route path="/Alterarp" element={<Alterarp />} />
                <Route path="/Excluirp" element={<Excluirp />} />
                <Route path="/Cadastrarc" element={<Cadastrarc />} />
                <Route path="/Alterarc" element={<Alterarc />} />
                <Route path="/Excluirc" element={<Excluirc />} />
                <Route path="/Cadastrarv" element={<Cadastrarv />} />
                <Route path="/Alterarv" element={<Alterarv />} />
                <Route path="/Excluirv" element={<Excluirv />} />
                <Route path="/Principalcar" element={<Principalcar />} />
                <Route path="/Cadastrarl" element={<Cadastrarl />} />
                <Route path="/Alterarl" element={<Alterarl />} />
                <Route path="/Excluirl" element={<Excluirl />} />
                <Route path="/Cardapio" element={<Cardapio />} />
              </>
            )}

            <Route path="*" element={
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center'
              }}>
                <h4>
                  Acesso restrito. Clique <Link to="/">aqui</Link> para efetuar o login!
                </h4>
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
