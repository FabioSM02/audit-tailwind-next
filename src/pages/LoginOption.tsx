import React from "react";

import { CardLogin } from "../components/cardLogin";

import buildImg from '../../public/icons/building.svg';
import auditImg from '../../public/icons/checking-boxes.svg';
// import auditImg from '../../public/icons/analytics.svg';

export function formaLogin(){
    // Talvez seja necessario duas funções para redirecionamento, mas no dia 24/02/2023 as 23:37 eu acredito que não   
}

export function LoginOption(){
    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <p className="flex h-[20vh] items-center font-lexend text-2xl text-zinc-200">
                Entrar como:
            </p>
            <div className="flex justify-center items-center h-[70vh] gap-12">
                <CardLogin  nameImg={auditImg} alt="Auditor(a)" title="Auditor(a)" />
                <CardLogin nameImg={buildImg} alt="Empresa" title="Empresa" />

                {/* FALTA FAZER ROTEAMENTO DESSA PAGINA */}

            </div>
        </div>
    );
}