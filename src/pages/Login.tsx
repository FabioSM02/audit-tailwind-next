import React, { Fragment } from "react";

export function Login(){
    return(
        <div className="flex flex-col items-center justify-center mt-[20vh] w-[450px] h-[500px] rounded-xl border-2 border-indigo-500 bg-indigo-100 focus:border-red-500 focus:outline-none">
            <p className="mb-8 text-indigo-500 font-inter font-bold text-xl">Login</p>
            <form action="" method="get"  className="flex flex-col items-center justify-center">
                <input type="email" className="mb-4 w-64 h-9 px-2 text-violet-800 rounded-md border-[.2px] focus:border-indigo-500 focus:outline-none" name="" placeholder="email" id="" />
                <input maxLength={30} type="password" className="mb-16 w-64 h-9 px-2 text-violet-800 rounded-md border-[.2px] focus:border-indigo-500 focus:outline-none" name="" placeholder="senha" id="" />

                <button type="submit" className="scale-100 text-indigo-100 font-inter font-bold bg-indigo-500 w-28 rounded flex items-center justify-center h-10 hover:scale-125 hover:transition-transform hover:delay-75">
                    Entrar
                </button>
            </form>
        </div>
    );
}