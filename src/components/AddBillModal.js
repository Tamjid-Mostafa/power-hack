import React, { useState } from 'react'
import CyanButton from './CyanButton';
export default function AddBillModal() {
    const [show, setShow] = useState(false)
  return (
    <div>
        
{/* <!-- Modal toggle --> */}
<label

onClick={() =>setShow(true)}
htmlFor="btn"><CyanButton id="btn"
>Add New Bill</CyanButton>
</label>


{/* <!-- Main modal --> */}
<div className={`fixed top-0 left-0 right-0 z-50 ${!show && "hidden"} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full backdrop-blur-sm flex justify-center items-center`}>
    <div className="relative w-full h-full max-w-md md:h-auto transition-all duration-300 ">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={() =>setShow(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg ariaHidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create a new bill</h3>
                <form className="space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required />
                    </div>
                    
                    <div>
                        <label for="phone_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                        <input type="number" name="phone_number" id="phone_number" placeholder="+880161112222" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label for="payable_amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payable amount</label>
                        <input type="text" name="payable_amount" id="payable_amount" placeholder="$" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Bill</button>
                </form>
            </div>
        </div>
    </div>
</div> 

    </div>
  )
}
