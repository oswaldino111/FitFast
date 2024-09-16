import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import Dashboard from './dashboard/Dashboard';
import noPage from './no-page/noPage';
import ForgotPassword from './sign-in/ForgotPassword';
import Cadastro from './cadastro/MainCadastro';
import Treinos from './treinos/MainTreinos';
import MeuTreino from './treinos/components/MeuTreino';

export default function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<div className="container">Carregando...</div>}>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route index element={<Dashboard />} />
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/treinos" element={<Treinos />} />
                    <Route path="/detalhes" element={<MeuTreino />} />
                    <Route path="*" element={<noPage />} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
}