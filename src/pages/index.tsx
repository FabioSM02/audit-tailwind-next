import React from "react";
import { Link } from 'react-router-dom';

import { Header } from "../components/header";
import { MembersPhoto } from "../components/membersPhoto";
import { Login } from "./Login";

import EnginneringTeamImg from '../icons/engineering_team.svg';
import Fabio from '../assets/Fabio.png';
import User from '../assets/user.png';

export function Index(){
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center">
                <main className="flex justify-between items-center mx-[10%] py-5 w-[80%] h-[85%]">
                    <img src={EnginneringTeamImg} alt="Ilustração" className="mt-40 w-[500px] h-[500px] max-h-screen max-w-screen" />
                    <p className="text-zinc-700 font-semibold text-justify w-[960px] mt-40 px-20">
                        Temos como objetivo fazer uma auditoria interna na empresa para que assim a empresa possa analisar o quão distante ela esta de conseguir a certificação da ISO 27002.
                    </p>
                </main>

                {/* <section className="flex flex-col justify-center items-center h-[85%]">
                    <p className="text-2xl pb-16">Conheça nossos planos</p>
                    <img src="" alt="animação" />
                    {/* <script src="https://cdn.lordicon.com/fudrjiwc.js"></script>
                        <lord-icon
                        src="https://cdn.lordicon.com/pimvysaa.json"
                        trigger="loop"
                        style="width:250px;height:250px">
                        </lord-icon>
                    <div className="flex max-w-[80%]">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section> */}

                <section className="flex flex-col justify-center items-center h-[85%] mb-20" id="Membros">
                    <p className="mb-8 font-bold font-lexend text-xl text-indigo-500">Nossa Equipe</p>

                {/* COLOCAR HOVER NAS FOTOS DOS INTEGRANTES DO GRUPO E MOSTRAR LINKEDIN E NOME */}

                    <div className="flex justify-between w-[860px]">
                        <MembersPhoto image={User} description="membro 01" />
                        <MembersPhoto image={User} description="membro 01" />
                        <MembersPhoto image={User} description="membro 01" />
                    </div>
                    <div className="flex justify-center gap-36 w-[860px]">
                        <MembersPhoto image={User} description="membro 01" />
                        <MembersPhoto image={User} description="membro 01" />
                    </div>
                </section>

                <footer className="bg-[#121111] h-16 w-[100%] py-16 flex flex-col items-center justify-center">
                    <p className="font-inter font-bold text-[#8D8DF3] pb-4">Desenvolvido por SEGMA6 - 2023</p>
                    <p className="font-inter font-semibold text-[#8D8DF3]">Fatec São Caetano do Sul</p>
                </footer>
            </div>
        </>
    );
}