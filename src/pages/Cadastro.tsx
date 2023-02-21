import React from "react";
import { Campo } from "../components/campo";
import { Field } from "../components/fields";

export function Cadastro(){
    return (
        <div className="flex flex-col items-center h-[100vh] w-[100vw]">
            <p className="text-indigo-500 font-lexend font-bold my-10 text-2xl">
                Cadastrar empresa
            </p>
            <form action="" method="get" className="max-w-[1280px] mb-8 border-[.2px] border-blue-600">
                <fieldset className="flex justify-center">
                    <Field id="companyName" type="text" placeholder="Nome da empresa" required disable />
                    <Field id="cpnj" type="" placeholder="CNPJ" required maxLenght={18} minLenght={14} />
                    <Field id="corporateRepresentative" type="text" placeholder="Nome do representante" required />
                </fieldset>
                <fieldset className="flex justify-center">
                    <Field id="" type="text" placeholder="Cargo" required />
                    <Field id="branch" type="text" placeholder="Ramo" required disable />
                    <Field id="" type="text" placeholder="Porte da empresa" required/>
                </fieldset>
                <fieldset className="flex justify-center">
                    <Field id="phone" type="" placeholder="Número de telefone" required />
                    <Field id="cep" type="" placeholder="CEP" required />
                    <Field id="street" type="" placeholder="Rua" required disable />
                </fieldset>
                <fieldset className="flex justify-center">
                    <Field id="number" type="" placeholder="Número" required />
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

                <fieldset className="flex flex-col items-center justify-center">
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