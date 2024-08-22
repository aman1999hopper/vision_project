import React from "react";

export default function Tabs({value}){
    return(
        // Defines the structure of the tabs component and provides access to the properties of the component ...
        <div className=" text-gray-500 rounded-full px-5 py-1 border w-fit hover:text-blue-500 hover:bg-sky-200 hover:font-bold">
            {value}
        </div>
    );
}