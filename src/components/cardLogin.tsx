import React from "react";

interface CardLoginProps {
    nameImg: string;
    alt: string;
    title: string;
}

// #04D361

export function CardLogin( { nameImg, alt, title } : CardLoginProps ){
    return (
        <button className="flex flex-col justify-center items-center bg-indigo-200 font-inter font-bold text-indigo-600 text-2xl w-[30rem] h-[30rem] rounded-xl scale-100 outline-none hover:scale-110 hover:transition-all">
            <img src={nameImg} alt={alt} className="h-80 w-80" />
            {title}
        </button>
    );
}

// hover:bg-indigo-600