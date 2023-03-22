import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// focus:border-[#4444C7]

export function Header(){
    
    const [isSignIn, setIsSignIn] = useState(false);

    // Melhorar função
    function VerificaLogin(){
        setIsSignIn(true)
    }

    return(
        <header className="flex justify-between items-center bg-indigo-100 w-screen h-[15%] fixed mb-8">
            <div className="flex items-center">
                <img src="/icons-svg/Web/icons8-survey-50.png" className="pl-28 pr-4" alt="logo" />
                <p className="font-lexends font-medium">Nome do projeto</p>
            </div>

            {/* { setIsSignIn : (<></>) ?? (<></>) } */}

            <button className="px-20 h-12 w-25 flex gap-4 items-center rounded-md outline-none focus:outline-none" type="button">
                <img src="/icons/user30.png" className="outline-none" alt="usuario" />
                {/* Ou o icone ou escrito Login */}
                <Link to="/signin">
                    <p className="text-zinc-800 font-lexend hover:text-[#8D8DF3] hover:transition-all">Login</p>
                </Link>
            </button>
        </header>
    );
}