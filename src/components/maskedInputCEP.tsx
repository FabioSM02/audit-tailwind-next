import React from "react";
import InputMask from 'react-input-mask';

interface MaskedInputCEPProps {
    value: number | string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    required: boolean;
    disable?: boolean;
    title?: string;
    autoComplete: string;
}

export function MaskedInputCEP({ value, onChange, placeholder, required, disable, title, autoComplete } : MaskedInputCEPProps){
    return (
        <InputMask 
            mask="99999-999" 
            value={value} 
            onChange={onChange} 
            className="w-72 h-10 px-4 m-5 text-[16px] text-indigo-500 rounded-md bg-indigo-200 border-[.2px] focus:border-indigo-500 focus:outline-none placeholder:text-indigo-600"
            placeholder={placeholder}
            required={required}
            disabled={disable}
            title={title}
            autoComplete={autoComplete}
            name="cep"
            id="cep"
        />
    );
}