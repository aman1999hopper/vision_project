import React from "react";
import Tabs from "../components/tabs";
import Radiobutton from "../components/radio";
import Button from "../components/button";
import MainImage from '../assets/img1.png'
import Text from "../components/Off-Text";

export default function Main() {
    return (
        //  This is the structure of the main screens which shows whe 
        <div className="p-1 rounded-lg bg-white mt-[25px]">

            <div className="flex flex-col md:flex-row justify-around items-center mt-10 md:mt-20 space-y-6 md:space-y-0">
                    <div>
                        <div className="text-center md:text-left font-bold text-4xl md:text-5xl lg:text-7xl px-4">
                            <span className="text-violet-400 ">It's a Big World</span>
                            <br />
                            Out There,
                            <br />
                            Go Explore
                            <br />                
                        </div>
                         <div className="p-10 "><Button value={"Get Started"} /></div>
                    </div>
                    
                <div className="flex justify-center md:justify-end px-4">
                    <img src={MainImage} alt="Main" className="w-full md:w-1/2 lg:w-auto max-w-xs md:max-w-md lg:max-w-lg"/>
                </div>
                <div>
                </div>
            </div>

            <div className=" text-center p-6 mt-8">
                <div className="text-sm font-semibold">
                   CATEGORY
                </div>
                <div className="text-3xl font-bold italic">We Offer Best Services</div>
            <div className="flex p-12 gap-14 flex-wrap md:flex-nowrap justify-center">
                    <div className="justify-center items-center text-center flex flex-wrap flex-col space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-wind fill-sky-600 items-center justify-center" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        <Text value="Calculated weather"/>
                        <div>Bulit Wicket longer admire do barton vanity itself do in it</div>
                    </div>
                    <div className="justify-center items-center text-center flex flex-wrap flex-col space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-airplane fill-red-400" viewBox="0 0 16 16">
                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599"/>
                        </svg>
                        <Text value="Best Flight"/>
                        <div>Best flight with world class facilityt</div>
                    </div>
                    <div className="justify-center items-center text-center flex flex-wrap flex-col space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cup-hot fill-green-600" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"/>
                            <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
                            </svg>
                        <Text value="Customized Dining"/>
                        <div>Enjoy the every movements with us in local events and customized dining</div>
                    </div>
                    <div className="justify-center items-center text-center flex flex-wrap flex-col space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gear-wide fill-slate-800" viewBox="0 0 16 16">
                            <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
                            </svg>
                        <Text value="Customized"/>
                        <div>Do it as you choice for the better experience</div>
                    </div>
                </div>
            </div>
                    

            {/* Child div for applying section and holds the two tabs and diffrent values  */}
            <div className="flex md:gap-8 gap-3 items-center md:p-4 p-2 mt-12 ">
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

            <div className="flex justify-around p-5 lg:flex-nowrap flex-wrap  shadow-sm">
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
                <div className="flex justify-center"><Button value="Apply Now!" /></div>
                <div className="text-center mt-10">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </div>
            </div>
        </div>
    );
}