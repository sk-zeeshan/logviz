"use client";
import CustomAlert from "@/components/customAlert";
import Link from "next/link";
import React, { useState } from "react";
import webbgimg from "../../assets/web-bg-img.jpg"

const Contact = () => {
  const [user, setUser] = useState({
    email: "",
    message: "",
  });

  const [showCustomAlert, setCustomAlert] = useState(false);
  const [modalText, setModalText] = useState("");

  const closeAlert = () => {
    setCustomAlert(false);
  };

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendFeedback = async () => {
    const { email, message } = user;

    setModalText("Feedback!");

    setCustomAlert(true);
  };

  return (
    <>
      <div
        className="text-gray-600 items-center flex w-full min-h-screen justify-center"
        style={{ 
          backgroundImage: `url(${webbgimg.src})`,
          backgroundSize : 'cover',
          backgroundRepeat : 'no-repeat'
        }}
      >
        <div className="px-7 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-gray-200 rounded-lg overflow-hidden md:mr-5 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12683.736399387004!2d72.87363172764191!3d19.068248437449448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e8bc1aaaab%3A0xac34c468956ca492!2seSec%20Forte%20-%20Cert%20In%20Empanelled%20Cyber%20Security%20Company%20%7C%20VAPT%20%7C%20DevSecOps!5e0!3m2!1sen!2sin!4v1725960283313!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                Plot C, 59, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  WEB PAGE
                </h2>
                <Link href="https://www.esecforte.com/">
                <span className="text-indigo-500 leading-relaxed">
                esecforte.com
                </span>
                
                </Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">022 2522 7470</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6 py-6 shadow-md rounded-lg bg-white flex flex-col md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-xl md:text-2xl mb-2 font-semibold">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
            We Value Your Feedback
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleInputs}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleInputs}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={sendFeedback}
              className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Send
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Alert Component */}
      <CustomAlert show={showCustomAlert} modalText={modalText} onClose={closeAlert} />
    </>
  );
};

export default Contact;