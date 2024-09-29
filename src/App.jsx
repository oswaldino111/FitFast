import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import Dashboard from './dashboard/Dashboard';
import Propriedades from './perfil/PagePropriedades'
import noPage from './no-page/noPage';
import ForgotPassword from './sign-in/ForgotPassword';
import Cadastro from './cadastro/MainCadastro';
import Treinos from './treinos/MainTreinos';
import MeuTreino from './treinos/components/MeuTreino';
import Pagamentos from './pagamentos/pagamentos';
import Main from './main-page/main';
import TreinoIa from './treino-ia/TreinoIa';

export default function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<div className="container">Carregando...</div>}>
                <Routes>
                    <Route index element={<SignIn />} />
                    <Route path="/home" element={<Main />} />
                    <Route path="/dash" element={<Dashboard />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/treinos" element={<Treinos />} />
                    <Route path="/detalhes" element={<MeuTreino />} />
                    <Route path="/pagamentos" element={<Pagamentos />} />
                    <Route path="/caracteristicas" element={<Propriedades />} />
                    <Route path="/treino-ia" element={<TreinoIa />} />
                    <Route path="*" element={<noPage />} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
}