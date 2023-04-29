import React, { useState } from "react";
import Contacts from "../Contacts/Contacts";
import Maps from "../Maps/Maps"
function Sidebar() {
    const [headerName, setHeaderName] = useState("CONTACTS");
    const [comp, setComp] = useState(<Contacts />);

    const handleHeaderClick = (param) => {
        if (param === "contacts") {
            setHeaderName("CONTACTS");
            setComp(<Contacts />);
        } else if (param === "map") {
            setHeaderName("CHARTS and MAPS");
            setComp(<Maps />);
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <header className="bg-gray-800 text-white h-20 flex items-center justify-center w-full">
                <h1 className="text-4xl p-4">{headerName}</h1>
            </header>
            <div className="flex-1 flex bg-gray-200 h-screen">
                <div className="h-full w-56 bg-gray-800 text-white flex flex-col">
                    <div className="my-1 flex-1 h-24">
                        <button
                            onClick={() => {
                                handleHeaderClick("contacts");
                            }}
                            className="text-gray-400 w-full hover:text-white h-full  justify-center bg-gray-700 focus:outline-none"
                        >
                            <h1 className="text-center">Contacts</h1>
                        </button>
                    </div>
                    <div className="my-1 flex-1 h-24">
                        <button
                            onClick={() => {
                                handleHeaderClick("map");
                            }}
                            className="text-gray-400 w-full hover:text-white h-full  justify-center bg-gray-700 focus:outline-none"
                        >
                            <h1 className="text-center">Charts and Maps</h1>
                        </button>
                    </div>
                </div>
                <div className="flex-1">{comp}</div>
            </div>
        </div>
    );
}

export default Sidebar;
