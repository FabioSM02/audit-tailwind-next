import React from "react";
import InputMask from "react-input-mask";

interface MaskedInputPhoneNumberProps {
    value: number | string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    required: boolean;
    disable?: boolean;
    title?: string;
    autoComplete: string;
}

export function MaskedInputPhoneNumber({ value, onChange, placeholder, required, disable, title, autoComplete } : MaskedInputPhoneNumberProps){
    return (
        <InputMask
            mask="(99) 99999-9999"
            value={value}
            onChange={onChange}
            className="w-72 h-10 px-4 m-5 text-[16px] text-indigo-500 rounded-md bg-indigo-200 border-[.2px] focus:border-indigo-500 focus:outline-none placeholder:text-indigo-600"
            placeholder={placeholder}
            required={required}
            disabled={disable}
            title={title}
            autoComplete={autoComplete}
            name="phone"
            id="phone"
        />
    );
}