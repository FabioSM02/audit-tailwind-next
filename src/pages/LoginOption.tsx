import React from "react";
import { Link } from 'react-router-dom';

import { CardLogin } from "../components/cardLogin";

import buildImg from '../icons/building.svg';
import auditImg from '../icons/checking-boxes.svg';
// import auditImg from '../../public/icons/analytics.svg';

//export function formaLogin(){
    // Talvez seja necessario duas funções para redirecionamento, mas no dia 24/02/2023 as 23:37 eu acredito que não   
//}

export function LoginOption(){
    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <p className="flex h-[20vh] pb-12 items-center font-lexend text-2xl font-bold text-indigo-600">
                Entrar como:
            </p>
            <div className="flex justify-center items-center h-[60vh] gap-12">
                <Link to={""}>
                    <CardLogin  nameImg={auditImg} alt="Auditor(a)" title="Auditor(a)" />
                </Link>
                <Link to={"/signIn"}>
                    <CardLogin nameImg={buildImg} alt="Empresa" title="Empresa" />
                </Link>

                {/* FALTA FAZER ROTEAMENTO DESSA PAGINA */}

            </div>
        </div>
    );
}