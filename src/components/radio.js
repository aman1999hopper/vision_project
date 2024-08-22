import React from "react";

export default function Radiobutton({value}){
    return(
        <div className="border pl-5 py-3 rounded w-[250px] border-gray-300">
            <div className="flex items-center gap-4">
                <input type="radio" />
                <div>{value}</div>
            </div>
        </div>
    );
}