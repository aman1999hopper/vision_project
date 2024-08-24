import React from "react";

export default function Button({value}){
    return(
        //  This will represent the Apply button with some functionality
        <div className=" rounded-full px-8 py-2 w-fit bg-blue-600 text-white">
            {/* APPLY NOW! */}
            {value}
        </div>
    );
}