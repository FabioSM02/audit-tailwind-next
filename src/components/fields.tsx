import React from "react";

interface FieldProps {
    id: string; // rever
    placeholder: string;
    type: string;
    minLenght?: number;    
    maxLenght?: number;
    required: boolean;
    disable?: boolean;
}

export function Field( { id, placeholder, type, maxLenght, minLenght, required, disable } : FieldProps ){
    return (
        // <div className="flex">
        //     <label className="text-indigo-500 h-[20px] px-2 bg-[#1C1C1C] text-xs relative top-[12px] left-[160px]">
        //         {placeholder}
        //     </label>
            <input 
                id={id}
                type={type} 
                maxLength={maxLenght} 
                minLength={minLenght} 
                className="w-72 max-w-xs h-10 px-4 my-5 mx-5 text-[16px] rounded-md bg-transparent border-[.8px] border-indigo-900 focus:border-indigo-500 focus:outline-none" 
                placeholder={placeholder} 
                required={required}
                disabled={disable}
            />
        // </div>
    );
}