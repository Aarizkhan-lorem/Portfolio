import React, { useState } from "react";
import { Element } from "react-scroll";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
  });

  const [result, setResult] = useState("");

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const buttonClickHandler = async (event) => {
    event.preventDefault();

    setResult("Sending....");

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("access_key", "8c811df9-37f2-442a-8273-1a0187e3a580");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          state: "",
        });
      } else {
        setResult(
          data.message || "An error occurred while submitting the form."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <Element name="form">
      <div className="mt-20 w-full md:max-w-[70%] mx-auto p-8">
        <div className="uppercase text-center text-3xl text-blue-800">
          Project request
        </div>

        <div className="mt-7">
          <form className="flex flex-col gap-2" onSubmit={buttonClickHandler}>
            <label
              htmlFor="firstName"
              className="text-md font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <input
              type="text"
              placeholder="Pranay"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              required
            />

            <label
              htmlFor="lastName"
              className="text-md font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <input
              type="text"
              placeholder="Gupta"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              required
            />

            <label
              htmlFor="email"
              className="text-md font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="pgupta@duck.com"
              name="email"
              id="email"
              value={formData.email}
              onChange={changeHandler}
              className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              required
            />

            <label
              htmlFor="state"
              className="text-md font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <input
              type="text"
              placeholder="West Bengal"
              name="state"
              id="state"
              value={formData.state}
              onChange={changeHandler}
              className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              required
            />

            <div className="my-3">
              <button
                type="submit"
                className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded"
              >
                Save
              </button>
            </div>

            {result && <div className="mt-4 text-center text-sm">{result}</div>}
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Form;
