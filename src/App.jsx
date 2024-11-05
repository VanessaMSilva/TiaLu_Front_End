import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Relatorio from "./pages/Relatorio";
import Horario from "./pages/Horarios";
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


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/Relatorio" element={<Relatorio/>}/>
        <Route path="/Horario" element={<Horario/>}/>

        <Route path="/Cadastrarp" element={<Cadastrarp/>}/>
        <Route path="/Alterarp" element={<Alterarp/>}/>
        <Route path="/Excluirp" element={<Excluirp/>}/>

        <Route path="/Cadastrarc" element={<Cadastrarc/>}/>
        <Route path="/Alterarc" element={<Alterarc/>}/>
        <Route path="/Excluirc" element={<Excluirc/>}/>

        <Route path="/Cadastrarv" element={<Cadastrarv/>}/>
        <Route path="/Alterarv" element={<Alterarv/>}/>
        <Route path="/Excluirv" element={<Excluirv/>}/>

        <Route path="/Principalcar" element={<Principalcar/>}/>
        <Route path="/Cardapio" element={<Cardapio/>}/>

      </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App
