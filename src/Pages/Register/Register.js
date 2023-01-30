import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setAuthToken } from "../../api/auth";
import CyanButton from "../../components/CyanButton";

import hitToast from "../../helpers/hitToast";

import styles from "../../style";

const Register = () => {
  let [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  /* Form */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleRegister = (data) => {
    setLoginError("");
    if (!validate(email)) {
      hitToast("error", "Valid email is required: user@email.domain");
      return;
    } else {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password
      };
      console.log(userInfo);
      axios
        .post("http://localhost:5000/api/registration", userInfo)
        .then((res) => {
          const user = res.data.user;
          navigate(from, { replace: true });
          setAuthToken(user);
          console.log(user);
          hitToast(
            res.data ? "success" : "error",
            res.data.message
          );
        })
        .catch((error) => {
          console.log(error);
          setLoginError(error.response.data);
          hitToast("error", error.response.data);
        });
    }
  };

  const validate = (email) => {
    if (
      email.match(
        /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
      ) == null
    ) {
      return false;
    } else if (email.trim() === "") {
      return false;
    }
    return true;
  };
  return (
    <div>
      {" "}
      <section className={`${styles.flexCenter} ${styles.boxWidth}`}>
        <div className="mx-auto h-full sm:w-max">
          <div className="m-auto  py-12">
            <div className="mt-12 rounded-3xl border  dark:border-gray-700 mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                Register
              </h3>

              <form
                onSubmit={handleSubmit(handleRegister)}
                action=""
                className="mt-10 space-y-8 dark:text-white"
              >
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="text"
                    placeholder="Your Name"                    {...register("name", {
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

                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="email"
                    placeholder="name@domain.com"
                    {...register("email", {required: "Email is required", pattern: /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/i})}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                  {errors.email && (
                    <p className="text-red-600" role="alert">
                      {errors.email?.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id=""
                      type="Your password"
                      placeholder="Password"                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-400"
                    />
                    {errors.password && (
                      <p className="text-red-600" role="alert">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  {loginError && <p className="text-red-600">{loginError}</p>}
                  <button type="reset" className="-mr-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Already have an account?{" "}
                      <Link className="text-secondary" to="/log-in">
                        Log In
                      </Link>
                    </span>
                  </button>
                </div>
                <div className="w-full">
                  <CyanButton className="">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Sign Up
                    </span>
                  </CyanButton>
                </div>
              </form>
            </div>
            <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
              <div className="space-x-4 text-center">
                <span>Power Hack</span>
                <Link
                  to={"#"}
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Contact
                </Link>
                <Link
                  to={"#"}
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Privacy & Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
