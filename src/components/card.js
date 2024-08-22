import React from "react";
import Tabs from "./tabs";

export default function Card({name , price , value}){
    return(
        <div className="border rounded-xl">
            <div>
                <img className="rounded-tr-xl rounded-tl-xl" src="https://plus.unsplash.com/premium_photo-1661764174171-c29f85bd8a37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="flex justify-between sm:px-10 px-3 py-5">
                <div className="font-bold" >{name}</div>
                <div><span className="text-green-500 font-bold">{price}</span> miles (Return Economy)</div>
            </div>
            <div className="px-10 py-2"><Tabs value={value}/></div>
        </div>
    );
}