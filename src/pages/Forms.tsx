import React from 'react';

export function Forms(){
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='font-lexend font-bold text-xl p-12'>Questionário</p>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-base font-inter'>Tópico 01</p>
                <form action="" className='w-[80%] mt-10 border-red-500 border-[.2px]'>
                    <p>AAAAAAAAAAA</p>
                    <div className='flex justify-between '>
                        <input type="radio" name="atende" id="" />
                        <input type="radio" name="nao_aplica" id="" />
                    </div>
                </form>
            </div>
        </div>
    );
}