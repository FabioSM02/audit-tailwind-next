import React from "react";

export function Login(){
    return(
        <div className="flex flex-col items-center justify-center w-[450px] h-[500px] rounded-xl border-2 border-indigo-500 bg-indigo-100 focus:border-red-500 focus:outline-none">
            <p className="mb-8 text-indigo-500 font-inter font-bold">Login</p>
            <form action="" method=""  className="flex flex-col items-center justify-center">
                <input type="email" className="mb-4 w-56 h-9 px-2 rounded-md border-[.2px] border-indigo-500 focus:border-red-600 focus:outline-none" name="" placeholder="id" id="" />
                <input type="password" className="mb-4 h-9 w-56 rounded-md focus:outline-none" name="" placeholder="" id="" />

                <button type="submit" className="text-indigo-500 font-inter font-bold bg-teal-500 w-28 rounded flex items-center justify-center h-10">
                    Entrar
                </button>
            </form>
        </div>
    );
}