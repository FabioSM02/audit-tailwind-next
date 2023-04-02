import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { Field } from "../components/fields";   
import { MaskedInputCNPJ } from "../components/maskedInputCNPJ";
import { MaskedInputCEP } from '../components/maskedInputCEP';
import { MaskedInputPhoneNumber } from "../components/maskedInputPhone";
import { MaskedInputUF } from "../components/MaskedInputUF";

// CRIAR MASCARA PARA CNPJ, CELULAR/TELEFONE E CEP => DENTRO DA FUNÇÃO DE MASCARAR TAMBEM COLOCAR UM EVENTO QUE APAGUE LETRAS DO CAMPO
// APLICAR EXIGENCIAS OBRIGATORIOS NA SENHA (LETRA MAIUSCULA, MINUSCULA, NUMERO E CARACTER ESPECIAL)
// DIMINUIR CAMPOS DA TELA (DAR ALGUM JEITO DE O ZOOM DO NAVEGADOR SER PADRONIZADO COMO 100%)
// ARRUMAR OS INPUTS COLOCANDO NAME NELES

export function Cadastro(){
    const [cnpj, setCNPJ] = useState('');
    const [cep, setCEP] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [uf, setUF] = useState('');

    return (
        <div className="flex flex-col items-center h-[100vh] w-[100vw]">
            <p className="text-indigo-500 font-lexend font-bold my-10 text-2xl">
                Cadastrar empresa
            </p>
            <form action="" method="post" className="max-w-[1280px] flex-wrap mb-8">
                <fieldset className="flex items-center justify-center" id="Empresa">
                    <MaskedInputCNPJ value={cnpj} onChange={(e) =>  setCNPJ(e.target.value)} placeholder="CNPJ" autoComplete="off" required title="Digite um CNPJ válido" />
                    <Field id="companyName" type="text" placeholder="Empresa" required autoComplete="off" />
                    <Field id="branch" type="text" placeholder="Segmento" required autoComplete="off" />
                </fieldset>
                <fieldset className="flex items-center justify-center" id="Representante">
                    <Field id="corporateRepresentative" type="text" placeholder="Representante" required autoComplete="off" />
                    <Field id="" type="text" placeholder="Cargo" required autoComplete="off" />
                    <MaskedInputPhoneNumber value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Número de celular" autoComplete="off" required title="Digite um número de celular válido" />
                </fieldset>
                <fieldset className="flex justify-center" id="Local">
                    <MaskedInputCEP value={cep} onChange={(e) => setCEP(e.target.value)} placeholder="CEP" autoComplete="off" required title="Digite um CEP válido" />
                    <Field id="street" type="text" placeholder="Rua" required autoComplete="off" />
                    <Field id="number" type="" placeholder="Número" required maxLenght={5} autoComplete="off" />
                </fieldset>
                <fieldset className="flex justify-center">
                    <Field id="city" type="" placeholder="Cidade" required autoComplete="off" />
                    {/* <Field id="uf" type="" placeholder="UF" required autoComplete="off" pattern="^[a-zA-Z][a-zA-Z-_\.]" minLenght={2} maxLenght={2} /> */}
                    <MaskedInputUF value={uf} onChange={(e) => setUF(e.target.value)} placeholder="UF" required title="Digite a sigla do Estado" autoComplete="off" />
                    <Field id="email" type="email" placeholder="Email" required autoComplete="off" />
                </fieldset>
                <fieldset className="flex justify-center" id="Auth">
                    <Field id="checkEmail" type="email" placeholder="Confirmar Email" required autoComplete="off" />
                    <Field id="password" type="password" placeholder="Senha" minLenght={8} maxLenght={30} required autoComplete="off" />
                    <Field id="checkPassword" type="password" placeholder="Confirmar senha" minLenght={8} maxLenght={30} required autoComplete="off" />
                </fieldset>
                <fieldset className="flex items-center justify-center mt-8">
                    <Link to="/questions">
                        <button className="flex justify-center items-center h-12 w-40 border-[.4px] bg-indigo-100 text-indigo-500 font-bold  border-indigo-500 rounded-md focus:outline-none hover:bg-indigo-300 hover:text-indigo-800 hover:transition-colors">
                            Cadastrar
                        </button>
                    </Link>
                </fieldset>
            </form>
        </div>
    );
}