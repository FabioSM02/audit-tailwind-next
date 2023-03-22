import React from "react";
import { Link } from "react-router-dom";

// text-zinc-700
// text-[#525151]

export function Questions(){

    function handleClickNextQuestion(){
        // Mapear as 93 perguntas 
        // incrementar 1 ao indice para alterar a pergunta
        alert('clicou no next')
    }

    function handleClickPrevQuestions(){
        // decrementar 1 ao indice para alterar a pergunta
        alert('Clicou no Prev')
    }

    return (
        <div className="flex flex-col items-center h-[100vh] w-screen">
            <p className="text-2xl text-indigo-500 font-lexend font-bold py-16">
                Questionário
            </p>
            <form action="" method="post" className="w-[80vw] flex flex-col items-center">
                <fieldset className="h-36 pb-28">
                    <p className="flex justify-center font-inter text-zinc-600 font-bold text-base pb-12">
                        Tópico 5
                    </p>
                    <p className="font-inter text-zinc-600 font-bold text-base">
                        Política de Segurança da Informação
                    </p>
                </fieldset>
                <div className="flex justify-between w-[90%] pt-20">
                    <Link to="/results" className="bg-[#9C0C16] h-20 w-40 flex items-center justify-center rounded-md text-base font-bold text-slate-200 shadow-lg shadow-black outline-none hover:scale-[1.18] hover:transition-transform hover:outline-none">
                        Não se aplica
                    </Link>
                    <Link to="/results" className="bg-[#11B819] h-20 w-40 flex items-center justify-center rounded-md text-base font-bold text-slate-200 shadow-lg shadow-black outline-none hover:scale-[1.18] hover:transition-transform hover:outline-none">
                        Se aplica
                    </Link>
                </div>
                <div className="flex justify-between w-[90%] pt-20">
                    <button 
                        onClick={handleClickPrevQuestions}
                        className="bg-[#92BBF0] h-10 w-28 flex items-center justify-center rounded-md text-base font-bold text-slate-700 shadow-lg shadow-slate-500 outline-none"
                    >
                        Voltar
                    </button>
                    <button 
                        onClick={handleClickNextQuestion}
                        className="bg-[#92BBF0] h-10 w-28 flex items-center justify-center rounded-md text-base font-bold text-slate-700 shadow-lg shadow-slate-500 outline-none"
                    >
                        Próximo
                    </button>
                </div>
            </form>
        </div>
    );
}