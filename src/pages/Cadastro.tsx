import React from "react";

import { Field } from "../components/fields";

export function Cadastro(){
    return (
        <div className="flex flex-col items-center h-[100vh] w-[100vw]">
            <p className="text-indigo-500 font-lexend font-bold my-10 text-2xl">
                Cadastrar empresa
            </p>
            <form action="" method="get" className="max-w-[1280px] flex-wrap mb-8">
                <fieldset className="flex items-center justify-center">
                    <Field id="companyName" type="text" placeholder="Empresa" required disable />
                    <Field id="cpnj" type="text" placeholder="CNPJ" required maxLenght={18} minLenght={14} pattern="00.000.000/0000-00" />
                    <Field id="corporateRepresentative" type="text" placeholder="Representante" required />
                </fieldset>
                <fieldset className="flex items-center justify-center">
                    <Field id="" type="text" placeholder="Cargo" required />
                    <Field id="branch" type="text" placeholder="Segmento" required />
                    <Field id="" type="text" placeholder="Porte da empresa" required/>
                </fieldset>
                <fieldset className="flex justify-center">
                    <Field id="phone" type="tel" placeholder="Número de telefone" required minLenght={11} maxLenght={11} pattern="" />
                    <Field id="cep" type="" placeholder="CEP" required pattern="00.000-000" minLenght={10} maxLenght={10} />
                    <Field id="street" type="" placeholder="Rua" required disable />
                </fieldset>
                <fieldset className="flex justify-center">
                    <Field id="number" type="" placeholder="Número" required maxLenght={5} />
                    <Field id="city" type="" placeholder="Cidade" required disable />
                    <Field id="state" type="" placeholder="Estado" required disable />
                </fieldset>
                <fieldset className="flex justify-center">
                    <Field id="email" type="email" placeholder="Email" required />
                    {/* <Field id="checkEmail" type="email" placeholder="Confirmar Email" required /> */}
                    <Field id="password" type="password" placeholder="Senha" maxLenght={30} minLenght={8} required />
                    <Field id="checkPassword" type="password" placeholder="Confirmar senha" maxLenght={30} minLenght={8} required />
                </fieldset>
                {/* <fieldset className="flex justify-center">
                    <Field id="checkPassword" type="password" placeholder="Confirmar senha" maxLenght={30} minLenght={8} required />
                </fieldset> */}

                <fieldset className="flex items-center justify-center">
                    <button className="flex justify-center items-center h-12 w-40 border-[.4px] bg-indigo-100 text-indigo-500 font-bold  border-indigo-500 rounded-md focus:outline-none hover:bg-indigo-300 hover:text-indigo-800 hover:transition-colors">
                        Cadastrar
                    </button>
                </fieldset>
            </form>

            {/* <Campo />
            <Campo /> */}
        </div>
    );
}