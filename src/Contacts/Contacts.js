import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { todo, update, del } from '../ToDoReducers'
import { useState } from "react";





function Contacts() {
    const navigate = useNavigate();
    const [todoTxt, setTodo] = useState()
    const [todoIndex, setIndex] = useState()
    const value = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()



    function ContactBtn() {
        navigate("/contactMaker")
    }
    function handleEdit(index) {
        navigate("/contactEditor/" + index)
    }
    return (
        <div>
            <div><div className="flex justify-center">
                <button onClick={ContactBtn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Contact
                </button>
            </div>
                <div className="bg-gray-100 min-h-screen py-3">


                    <div className="bg-white rounded-lg shadow-md">
                        {value.map((el, index) => {
                            return <div className="border-b border-gray-200 px-6 py-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <p className="text-black-400">{index + 1}.</p>
                                        <h2 className="text-lg m-2 font-medium text-gray-900">{el.name}</h2></div>
                                    <p className="text-gray-600">{el.mobile}</p>
                                    <div className="btngroup">
                                        <button onClick={() => {
                                            handleEdit(index)
                                        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 rounded">
                                            Details
                                        </button>
                                        <button onClick={() => { dispatch(del({ index })); }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </div>
                                </div>


                            </div>
                        })}
                        {value.length === 0 && <div class="bg-red-200 text-white-800 p-4" role="alert">
                            No Contact Found
                            Please add contact fron Create Contact button
                        </div>
                        }

                    </div>

                </div>

            </div>





        </div>

    )
}
export default Contacts