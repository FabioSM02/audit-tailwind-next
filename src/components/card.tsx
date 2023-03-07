import React from "react";

interface CardProps {
    title: string;
    price: number;
}

// export function Card({ title, price } : CardProps){
export function Card(){
    return(
        <div className="flex flex-col justify-center items-center border-2 border-blue-300 rounded-lg max-w-[400px] px-12 mx-4 py-4 hover:border-[#3456ee] hover:transition-colors">
            <p className="text-[24px] font-inter text-zinc-200 font-bold hover:text-[#8D8DF3] hover:transition-colors">
                Comum
            </p>
            <div className="py-8">
                <p className="pb-4 text-sm font-inter">
                    Beneficios:
                </p>
                <p className="text-sm font-inter font-normal">
                    - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <br />
                <p className="text-sm font-inter font-normal">
                    - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <br />
                <p className="text-sm font-inter font-normal">
                    - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
                <p className="text-purple-700 scale-100 font-black text-xl border-2 border-spacing-12 border-purple-900 px-4 rounded-lg hover:border-purple-700 hover:transition-all hover:scale-125">
                $500
            </p>
        </div>
    );
}