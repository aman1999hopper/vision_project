import React from "react";

export default function Radiobutton({value}){
    return(
        // This div represents the container for the radio button 
        <div className="border pl-5 py-3 rounded w-[250px] border-gray-300">
            {/* This will use to align the radio and its label */}
            <div className="flex items-center gap-4">
                <input type="radio" />
                {/* This will represent the value of the radio button */}
                <div>{value}</div>   
            </div>
        </div>
    );
}