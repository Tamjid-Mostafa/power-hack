import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import hitToast from "../helpers/hitToast";
import CyanButton from "./CyanButton";
export default function AddBillModal({refetch}) {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [billInfo, setBillInfo] = useState("");
  /* Form */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const auth = useAuth();
  const { user } = auth;
  const handleAddBill = (data) => {
    setError("");
    const billingInfo = {
      name: user?.name,
      email: user?.email,
      phone: data.tel,
      amount: data.amount,
    };
    axios
      .post("http://localhost:5000/api/add-billing", billingInfo)
      .then((res) => {
        console.log(res);
        setBillInfo(res);
        refetch()
        hitToast(res.data ? "success" : "error", res.data.message);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
        hitToast("error", error.response.data);
      });
  };

  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <label onClick={() => setShow(true)} htmlFor="btn">
        <CyanButton id="btn">Add New Bill</CyanButton>
      </label>

      {/* <!-- Main modal --> */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 ${
          !show && "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full backdrop-blur-sm flex justify-center items-center`}
      >
        <div className="relative w-full h-full max-w-md md:h-auto transition-all duration-300 ">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setShow(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                ariaHidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Create a new bill
              </h3>
              <form
                onSubmit={handleSubmit(handleAddBill)}
                className="space-y-6"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    id=""
                    type="text"
                    placeholder="name@domain.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern:
                        /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/i,
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                  {errors.email && (
                    <p className="text-red-600" role="alert">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Full Name
                  </label>
                  <input
                    id=""
                    type="text"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Full name is required",
                    })}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                  {errors.name && (
                    <p className="text-red-600" role="alert">
                      {errors.name?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    for="phone_number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="01345678901"
                    {...register("tel", {
                      required: "Valid phone no. required",
                      maxLength: 11,
                      pattern: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/i,
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />

                  {errors.tel && (
                    <p className="text-red-600" role="alert">
                      {errors.tel?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    for="payable_amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Payable amount
                  </label>
                  <input
                    type="text"
                    placeholder="amount"
                    {...register("amount", { 
                      required: "Amount required",
                      pattern: /^[1-9]\d*$/i })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  {errors.amount && (
                    <p className="text-red-600" role="alert">
                      {errors.amount?.message}
                    </p>
                  )}
                </div>
                {error && <p className="text-red-600">{error}</p>}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add New Bill
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
