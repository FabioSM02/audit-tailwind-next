import React from "react";
import { Link } from 'react-router-dom';

interface ButtonFormProps {
    title: string;
    disabled: boolean;
}

export function ButtonForms( { title, disabled } : ButtonFormProps){
    return (
        <Link to="/questions">
            <button disabled={disabled} className="flex justify-center items-center h-12 w-40 border-[.4px] bg-indigo-100 text-indigo-500 font-bold outline-none border-indigo-500 rounded-md hover:bg-indigo-300 hover:text-indigo-800 hover:transition-colors">
                {title}
            </button>
        </Link>
    );
}