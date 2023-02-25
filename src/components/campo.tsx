import React from 'react';

interface campoProps {
    teste: HTMLElement;
}

export function Campo(){
    return (
        <div className="mb-4">
            <label className="text-indigo-500 w-[80px] px-[2px] bg-[#1C1C1C] text-xs relative top-[-18px] left-[110px]">
                Nome da empresa
            </label>
            <input type="text" id="nomeempresa" name="nomeempresa" className="w-72 h-8 z-0 bg-transparent border-[.2px] border-blue-800 rounded-md focus:outline-none px-4" />
        </div>
    
        {/* <p className="text-indigo-500 h-[20px] px-2 bg-[#1C1C1C] text-xs relative top-[12px] left-[160px]">
            {placeholder}
        </p>
        <label className="text-indigo-500 h-[20px] px-2 bg-[#1C1C1C] text-xs relative top-[12px] left-[160px]">
            {placeholder}
        </label> */}
    
    );
}