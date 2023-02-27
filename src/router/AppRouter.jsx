import { Navigate,Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { EgresadosPage } from "../egresados";
import InicioPage from "../inicio/pages/InicioPage";


export default function AppRouter() {

    const authStatus = 'not-authenticated';

  return (
    <Routes>
        { 
           (authStatus === 'not-authenticated')
            ? <Route path="/auth/*" element={ < LoginPage /> }/>
            : <Route path="/egresados/*" element={ <EgresadosPage/> }/>
        }
        
        <Route path="/*" element={ <InicioPage/> }/>
    </Routes>
  )
}
