import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { Field } from "../components/fields";

// export function CNPJMask(){
//     // adicionar um slice no valor para poder partir o dado inteiro em um caracter de cada vez  
// }   

// CRIAR MASCARA PARA CNPJ, CELULAR/TELEFONE E CEP => DENTRO DA FUNÇÃO DE MASCARAR TAMBEM COLOCAR UM EVENTO QUE APAGUE LETRAS DO CAMPO
// APLICAR EXIGENCIAS OBRIGATORIOS NA SENHA (LETRA MAIUSCULA, MINUSCULA, NUMERO E CARACTER ESPECIAL)
// DIMINUIR CAMPOS DA TELA (DAR ALGUM JEITO DE O ZOOM DO NAVEGADOR SER PADRONIZADO COMO 100%)
// ARRUMAR OS INPUTS COLOCANDO NAME NELES

interface LinkProps {
    disable: boolean;
}

export function Cadastro( { disable } : LinkProps ){

    const [ isDisable, setIsDisable ] = useState(false);

    function enableClickToSubmit(){
        setIsDisable(true);
        // { !setIsDisable : disable === false ? disable }
    }

    return (
        <div className="flex flex-col items-center h-[100vh] w-[100vw]">
            <p className="text-indigo-500 font-lexend font-bold my-10 text-2xl">
                Cadastrar empresa
            </p>
            <form action="" method="post" className="max-w-[1280px] flex-wrap mb-8">
                <fieldset className="flex items-center justify-center" id="Empresa">
                    <Field id="cpnj" type="text" placeholder="CNPJ" required maxLenght={18} minLenght={14} pattern="[0-9]+" autoComplete="off" title="Digite um CNPJ válido" />
                    <Field id="companyName" type="text" placeholder="Empresa" required autoComplete="off" />
                    <Field id="branch" type="text" placeholder="Segmento" required autoComplete="off" />
                </fieldset>
                <fieldset className="flex items-center justify-center" id="Representante">
                    <Field id="corporateRepresentative" type="text" placeholder="Representante" required autoComplete="off" />
                    <Field id="" type="text" placeholder="Cargo" required autoComplete="off" />
                    <Field id="phone" type="tel" placeholder="Número de telefone" required minLenght={11} maxLenght={11} pattern="[0-9+]" autoComplete="off" />
                </fieldset>
                <fieldset className="flex justify-center" id="Local">
                    <Field id="cep" type="" placeholder="CEP" required pattern="[0-9]+$" minLenght={9} maxLenght={9} autoComplete="off" />
                    <Field id="street" type="text" placeholder="Rua" required autoComplete="off" />
                    <Field id="number" type="" placeholder="Número" required maxLenght={5} autoComplete="off" />
                </fieldset>
                <fieldset className="flex justify-center">
                    <Field id="city" type="" placeholder="Cidade" required autoComplete="off" />
                    <Field id="state" type="" placeholder="Estado" required autoComplete="off" />
                    <Field id="email" type="email" placeholder="Email" required autoComplete="off" />
                </fieldset>
                <fieldset className="flex justify-center" id="Auth">
                    <Field id="checkEmail" type="email" placeholder="Confirmar Email" required autoComplete="off" />
                    <Field id="password" type="password" placeholder="Senha" maxLenght={30} minLenght={8} required autoComplete="off" />
                    <Field id="checkPassword" type="password" placeholder="Confirmar senha" maxLenght={30} minLenght={8} required autoComplete="off" />
                </fieldset>
                <fieldset className="flex items-center justify-center mt-8" disabled>
                    <Link to="/questions" onClick={enableClickToSubmit} className="flex justify-center items-center h-12 w-40 border-[.4px] bg-indigo-100 text-indigo-500 font-bold  border-indigo-500 rounded-md focus:outline-none hover:bg-indigo-300 hover:text-indigo-800 hover:transition-colors">
                        Cadastrar
                    </Link>
                </fieldset>
            </form>
        </div>
    );
}