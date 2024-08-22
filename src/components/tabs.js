import React from "react";

export default function Tabs({value}){
    return(
        <div className=" text-gray-500 rounded-full px-5 py-1 border w-fit hover:text-blue-500 hover:bg-sky-200 hover:font-bold">
            {value}
        </div>
    );
}