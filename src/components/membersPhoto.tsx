import React from "react";

interface MembersPhotoProps {
    image: string;
    description?: string;
}

// export function MembersPhoto({ way }: MembersPhotoProps){
export function MembersPhoto({ image, description } : MembersPhotoProps){
    return(
        <div className="hover:bg-slate-800 hover:bg-opacity-25 rounded-[50%] z-20 block">
            <img src={image} alt={description} className="flex h-48 w-48 rounded-[50%] border-[4px] border-white" />
        </div>
    );
}