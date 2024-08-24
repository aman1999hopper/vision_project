import React from "react";
import Button from "../components/button";
import Section from "../components/section";

export default function Header(){
    return (
        <div className="flex flex-col md:flex-row justify-between items-center border-b-4 border-b-gray-200 p-4">
        {/* Logo Section */}
        <div className="text-md text-gray-800 text-base mb-4 md:mb-0">
            <span className="font-bold text-violet-500 text-4xl">G</span>humaloo
        </div>
    
        {/* Navigation Links Section */}
        <div className="font-semibold flex flex-col md:flex-row gap-4 md:gap-7 items-center mb-4 md:mb-0">
            <div><Section value="About" /></div>
            <div><Section value="Services" /></div>
            <div><Section value="Destinations" /></div>
            <div><Section value="Contact" /></div>
        </div>
    
        {/* Authentication Buttons Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="focus:ring-4 focus:outline-none focus:ring-blue-500">
                Login
            </div>
            <div className="px-8 py-2 w-full md:w-auto text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm text-center">
                Sign Up
            </div>
        </div>
    </div>
    

    )
}