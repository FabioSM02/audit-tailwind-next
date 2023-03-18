import React from "react";
import { Link } from 'react-router-dom';

import { ButtonForms } from "../components/buttonForms";

export function Login(){
    return(
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center mt-[12vh] w-[450px] h-[500px] rounded-xl border-[.2px] border-indigo-500 bg-indigo-100 focus:border-red-500 focus:outline-none">
                <p className="mb-8 text-indigo-500 font-inter font-bold text-xl">Login</p>
                <form action="" method="get"  className="flex flex-col items-center justify-center">
                    <input 
                        type="cnpj" 
                        minLength={14}
                        maxLength={18}
                        className="bg-indigo-50 mb-4 w-64 h-9 px-2 text-violet-800 rounded-md border-[.2px] focus:border-indigo-500 focus:outline-none placeholder:text-indigo-600" 
                        name="cnpj" 
                        placeholder="CNPJ" 
                        id="id" 
                        required 
                        pattern="[0-9]+"
                        autoComplete="off"
                        title="Digite um CNPJ válido"
                    />
                    <input 
                        type="password" 
                        minLength={8} 
                        maxLength={30} 
                        className="bg-indigo-50 mb-16 w-64 h-9 px-2 text-violet-800 rounded-md border-[.2px] focus:border-indigo-500 focus:outline-none placeholder:text-indigo-600" 
                        name="senha" 
                        placeholder="Senha" 
                        id="senha" 
                        required 
                        autoComplete="off"
                    />

                    <ButtonForms title="Entrar" />

                    {/* <Link
                        // to={}
                        type="submit" 
                        className="flex items-center justify-center h-10 w-28 scale-100 text-indigo-100 font-inter font-bold bg-indigo-500 rounded hover:scale-125 hover:transition-transform hover:delay-75"
                    >
                        Entrar
                    </Link> */}
                </form>
            </div>
        </div>
    );
}