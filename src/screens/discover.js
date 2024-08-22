import React from "react";
import Card from "../components/card";
import Tabs from "../components/tabs";

export default function Discover() {
    return (
        <div className="bg-white p-4">
            <div className="text-center text-xl pt-10">Discover Anything but Average Destination</div>
            <div className="flex justify-between flex-wrap py-5">
                <div className="px-2 py-2"><span className="font-bold">16</span> Destinations within reach</div>
                <div className="px-2 py-2 border bottom-1 border-gray-600 rounded-full text-right
                    w-fit">Shorted by highest to lowest miles</div>
            </div>
            <div className="flex md:flex-nowrap flex-wrap gap-10">
                <div>
                    <Card name='Australia' price='40000' value='Perth'/>
                </div>
                <div>
                    <Card name='Dubai' price='50000' value='London'/>
                </div>
            </div>

            <div className="text-center text-blue-500 py-6">See More</div>

            <div className="flex justify-between flex-wrap py-5">
                <div className="px-2 py-2"><span className="font-bold">04</span> Destinations almost within reach</div>
            </div>
            <div className="flex md:flex-nowrap flex-wrap gap-10">
                <div>
                    <Card name='New Zealand' price='50000' value='Auckland' />
                </div>
                <div>
                    <Card name='Europe' price='60000' value='Paris' />
                </div>
            </div>

            <div className="text-center text-blue-500 py-6">See More</div>

        </div>
    );
}