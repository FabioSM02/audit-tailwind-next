import React from "react";

interface FieldProps {
    id: string; // rever
    placeholder: string;
    type: string;
    minLenght?: number;    
    maxLenght?: number;
    required: boolean;
    disable?: boolean;
    pattern?: string;
}

export function Field( { id, placeholder, type, maxLenght, minLenght, required, disable, pattern } : FieldProps ){
    return (
        <div className="flex m-0 p-0">
            <input 
                id={id}
                type={type} 
                maxLength={maxLenght} 
                minLength={minLenght} 
                className="w-72 h-10 px-4 m-5 text-[16px] rounded-md bg-transparent border-[.2px] border-indigo-900 focus:border-indigo-500 focus:outline-none max-xl:max-w-xl" 
                placeholder={placeholder} 
                required={required}
                disabled={disable}
                pattern={pattern}
            />
        </div>
    );
}