import React, { useState } from 'react';

export function Header(){
    
    const [isSignIn, setIsSignIn] = useState(false);

    // Melhorar função
    function VerificaLogin(){
        setIsSignIn(true)
    }

    return(
        <header className="flex justify-between items-center w-screen h-[15%] bg-[#1C1C1C] fixed mb-8">
            <div className="flex ">
                <img src="/icons-svg/Web/icons8-survey-50.png" className="px-28" alt="logo" />
                <p className="">Nome do projeto</p>
            </div>

            {/* { setIsSignIn : (<></>) ?? (<></>) } */}

            <button className="px-20 h-12 w-25 flex gap-4 items-center rounded-md focus:ring-1 focus:border-2 focus:border-[#4444C7] focus:outline-none" type="button">
                <img src="/icons/user30.png" className="" alt="usuario" />
                {/* Ou o icone ou escrito Login */}
                <p className="text-zinc-300 hover:text-[#8D8DF3] hover:transition-all">Login</p>
            </button>
        </header>
    );
}