"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomAlert from "@/components/customAlert";

import loginbg from "../../assets/loginbg.jpg"
// import { getCookie,setCookie } from "@/utils/utils";

const Admin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const [showCustomAlert, setCustomAlert] = useState(false);
  const [modalText, setModalText] = useState("");

  const closeAlert = () => {
    setCustomAlert(false);
  };


  const postData = async () => {
    const { email, password } = user
    setModalText("Login!");

    setCustomAlert(true);
  };

  return (
    <>
      <div
        className="dark:bg-gray-900 flex items-center justify-center min-h-screen"
        style={{ 
          backgroundImage: `url(${loginbg.src})`,
          backgroundSize : 'cover',
          backgroundRepeat : 'no-repeat'
        }}
      >
        <div className="w-full max-w-md bg-white shadow-sm border-gray-100 border-4 rounded-xl dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account!
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-small text-gray-900 dark:text-white"
                >
                  Enter your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  required
                  onChange={handleInputs}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-small text-gray-900 dark:text-white"
                >
                  Enter your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={handleInputs}
                />
              </div>
              <button
                onClick={postData}
                type="button"
                className="w-full text-white bg-blue-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-small rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>

       {/* Custom Alert Component */}
       <CustomAlert show={showCustomAlert} modalText={modalText} onClose={closeAlert} />
    </>
  );
};

export default Admin;