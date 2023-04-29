import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { useState } from "react";
import { useSelector } from 'react-redux';
import { todo, update } from "../src/ToDoReducers";




function ContactEdit() {
    const { name } = useParams()

    const navigate = useNavigate()
    const [value, setValue] = useState({});
    const dispatch = useDispatch();
    const data = useSelector(state => todo(state));;


    function updateContact(e) {
        e.preventDefault()
        console.log(value)
        dispatch(update({ index: name, text: value }))

        navigate("/")

    }
    return (<div className="h-screen flex flex-col">
        <header className="bg-gray-800 text-white h-20 flex items-center justify-center w-full">
            <h1 className="text-4xl p-4">CONTACTS</h1>
        </header>
        <div className="flex-1 flex bg-gray-200 h-screen">
            <div className="h-full w-56 bg-gray-800 text-white flex flex-col">
                <div className="my-1 flex-1 h-24">
                    <button

                        className="text-gray-400 w-full hover:text-white h-full  justify-center bg-gray-700 focus:outline-none"
                    >
                        <h1 className="text-center">Contacts</h1>
                    </button>
                </div>
                <div className="my-1 flex-1 h-24">
                    <button

                        className="text-gray-400 w-full hover:text-white h-full  justify-center bg-gray-700 focus:outline-none"
                    >
                        <h1 className="text-center">Charts and Maps</h1>
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                        <h2 className="text-2xl font-bold mb-6">Updating  Contact</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Contact Name
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="sameer"
                                value={value.name || data[name].name}


                                onInput={(e) => {
                                    setValue({ ...value, name: e.target.value })
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile">
                                Mobile Number
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={value.mobile || data[name].mobile}
                                onInput={(e) => {
                                    setValue({ ...value, mobile: e.target.value })
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                                type="text"
                                id="email"
                                name="email"
                                value={value.email || data[name].email}
                                onInput={(e) => {

                                    setValue({ ...value, email: e.target.value })
                                }}
                            />
                        </div>
                        <div className="text-center">
                            <button onClick={updateContact} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full">
                                update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default ContactEdit;
