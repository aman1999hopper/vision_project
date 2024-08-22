import React from "react";
import Tabs from "../components/tabs";
import Radiobutton from "../components/radio";
import Button from "../components/button";
import Card from "../components/card";

export default function Main() {
    return (
        //  This is the structure of the main screens which shows whe 
        <div className="p-1 rounded-lg bg-white">

            {/* Child div for applying section and holds the two tabs and diffrent values  */}
            <div className="flex md:gap-8 gap-3 items-center md:p-4 p-2">
                <div>Applying Form</div>
                <div className="hover:font-bold">
                    <Tabs value='Online' />
                </div>
                <div className="hover:font-bold">
                    <Tabs value='In Branch' />
                </div>
            </div>

            <div className="p-4">
                <div>How much to deposite?</div>
                <div className="flex justify-center mt-5 ">
                    <div className="flex gap-5">
                        {/* Currencey tabs defnes here  */}
                        <div><Tabs value='USD' /></div>
                        <div><Tabs value='HKD' /></div>
                        <div><Tabs value='RMB' /></div>
                    </div>
                </div>
                {/* This will holds the amount price and the edit svg  */}
                <div className="flex justify-center">
                    <div className="flex items-baseline gap-[60px] ">
                        <div className=" text-[40px] sm:text-[70px] text-blue-500">100,000</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* This represent the range value slider  */}
                <div>
                    <input id="custom-range" type="range" className="w-full h-1 rounded-lg appearance-none cursor-pointer dark:bg-gray-300" />
                </div>
            </div>

            <div className="flex justify-around p-5 lg:flex-nowrap flex-wrap">
                <div>
                    <div className="text-start p-2">Set up Time Deposite with</div>
                    <div className="flex gap-[40px] sm:flex-nowrap flex-wrap sm:justify-normal justify-center">
                        <div>
                            {/* This value define same as we provide value as argument and print this value of radio button */}
                            <Radiobutton value='New funds' />
                        </div>
                        <div>
                            <Radiobutton value='Existing funds' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-start p-2">Duration of Deposite</div>
                    <div className="flex gap-[40px] sm:flex-nowrap flex-wrap sm:justify-normal justify-center">
                        <div>
                            <Radiobutton value='6 months' />
                        </div>
                        <div>
                            <Radiobutton value='12 months' />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-gray-100 p-2">
                <div className="text-center pt-10">You will be rewarded with</div>
                <div className="sm:text-[50px] text-[30px] text-blue-500 flex justify-center items-center gap-5 pb-10">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-airplane-fill" viewBox="0 0 16 16">
                            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
                        </svg>
                    </div>
                    <div>40,000 Asia Miles</div>
                </div>
                {/* This is the apply Button which we can define in component and use here  */}
                <div className="flex justify-center"><Button /></div>
                <div className="text-center mt-10">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </div>
            </div>
        </div>
    );
}