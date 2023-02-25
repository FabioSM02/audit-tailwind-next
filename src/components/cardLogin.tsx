import React from "react";

interface CardLoginProps {
    nameImg: string;
    alt: string;
    title: string;
}

export function CardLogin( { nameImg, alt, title } : CardLoginProps ){
    return (
        <button className="flex flex-col justify-center items-center bg-indigo-300 font-inter font-bold text-indigo-600  text-2xl w-[35rem] h-[35rem] rounded-xl scale-100 hover:scale-110 hover:transition-all">
            <img src={nameImg} alt={alt} className="h-80 w-80" />
            {title}
        </button>
    );
}

// hover:bg-indigo-600