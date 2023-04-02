import React from "react";
import InputMask from 'react-input-mask';

interface MaskedInputCNPJProps {
    value: number | string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    required: boolean;
    title?: string;
    minLength: number;
    autoComplete: string;
}

export function MaskedInputCNPJ({ value, onChange, placeholder, required, title, minLength, autoComplete} : MaskedInputCNPJProps){    
    return (
        <InputMask 
            mask={"99.999.999/9999-99"}
            value={value} 
            onChange={onChange} 
            className="w-72 h-10 px-4 m-5 text-[16px] text-indigo-500 rounded-md bg-indigo-200 border-[.2px] focus:border-indigo-500 focus:outline-none placeholder:text-indigo-600"
            placeholder={placeholder}
            required={required}
            title={title}
            minLength={minLength}
            autoComplete={autoComplete}
            name="cnpj"
            id="cnpj"
        />
    );
}