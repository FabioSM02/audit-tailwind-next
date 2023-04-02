import React, { useState } from "react";

import { ButtonForms } from "../components/buttonForms";
import { MaskedInputCNPJ } from "../components/maskedInputCNPJ";

export function Login(){

    const [isDisabled, setIsDisable] = useState(true);
    const [cnpj, setCNPJ] = useState('');
    const [password, setPassword] = useState('');

    function enableAndDisableButton(){
        (setCNPJ !== null && setPassword !== null ? setIsDisable(false) : setIsDisable(true))
    }

    return(
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center mt-[12vh] w-[450px] h-[500px] rounded-xl border-[.2px] border-indigo-500 bg-indigo-100 focus:border-red-500 focus:outline-none">
                <p className="mb-8 text-indigo-500 font-inter font-bold text-xl">Login</p>
                <form action="" method="get"  className="flex flex-col items-center justify-center">
                <MaskedInputCNPJ 
                    value={cnpj} 
                    onChange={(e) =>  setCNPJ(e.target.value)} 
                    placeholder="CNPJ" 
                    minLength={18} 
                    autoComplete="off" 
                    required 
                    title="Digite um CNPJ válido" 
                />
                    {/* <input 
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
                    /> */}
                    <input 
                        type="password" 
                        minLength={8} 
                        maxLength={30} 
                        className="bg-indigo-200 mb-16 w-72 h-10 px-2 text-violet-800 rounded-md border-[.2px] focus:border-indigo-500 focus:outline-none placeholder:text-indigo-600" 
                        name="senha" 
                        placeholder="Senha" 
                        id="senha" 
                        required 
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={enableAndDisableButton}
                    />

                    { isDisabled !== true 
                        ? (<ButtonForms disabled={false} title="Entrar" />) 
                        : (<ButtonForms disabled={true} title="Entrar" />)
                    }
                </form>
            </div>
        </div>
    );
}