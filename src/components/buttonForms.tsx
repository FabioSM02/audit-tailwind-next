import React from "react";
import { Link } from 'react-router-dom';

interface ButtonFormProps {
    title: string;
}

export function ButtonForms( { title } : ButtonFormProps){
    return (
        <button className="flex justify-center items-center h-12 w-40 border-[.4px] bg-indigo-100 text-indigo-500 font-bold  border-indigo-500 rounded-md focus:outline-none hover:bg-indigo-300 hover:text-indigo-800 hover:transition-colors">
            {title}
        </button>
    );
}