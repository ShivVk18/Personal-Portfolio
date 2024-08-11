import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    FirstName: "",
    SecondName: "",
    Email: "",
    textArea: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    emailjs
      .sendForm("service_z9jlt19", "template_fwvcah6", form.current, {
        publicKey: "twJMSOg_uLOokFOOg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <div
      name="Contact"
      className="bg-white dark:bg-black py-8 sm:py-12 md:py-16 w-full min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-3xl sm:text-4xl text-center mb-6 sm:mb-10 text-gray-800 dark:text-white">
          Contact Me
        </h1>
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
          <form
            onSubmit={onSubmitHandler}
            ref={form}
            className="bg-gray-50 dark:bg-gray-900 shadow-2xl rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-3xl"
          >
            <div className="mb-4 sm:mb-6">
              <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                Your Name*
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="w-full px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 dark:text-white text-sm sm:text-base"
                  type="text"
                  placeholder="First Name"
                  required
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 dark:text-white text-sm sm:text-base"
                  placeholder="Last Name"
                  required
                  name="SecondName"
                  value={formData.SecondName}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-4 sm:mb-6">
              <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                Your Email*
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 dark:text-white text-sm sm:text-base"
                required
                name="Email"
                value={formData.Email}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                Message
              </label>
              <textarea
                name="textArea"
                placeholder="Enter your message"
                className="w-full px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 h-24 sm:h-32 resize-none dark:text-white text-sm sm:text-base"
                value={formData.textArea}
                onChange={changeHandler}
              ></textarea>
            </div>
            <div className="mt-4 sm:mt-6 flex justify-center">
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
