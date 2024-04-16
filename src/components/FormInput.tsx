import React, { ChangeEvent, useState } from "react";
import Button from "./Button";
import axios from "axios";

type Lead = {
  name: string; // New field
  email: string;
  company: string; // New field
  employees: string; // New field
};

export const FormInput: React.FC = () => {
  const [formData, setFormData] = useState<Lead>({
    name: "", // Initialize new fields
    email: "",
    company: "",
    employees: "", // Initialize new fields
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validation

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name) {
      // If name is empty, show error message or handle it accordingly
      console.error("Name field is required.");
      return;
    }

    // Basic email validation using regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setIsEmailValid(false);
      return;
    }

    try {
      await axios.post("/api/leads", formData);
      console.log("Lead data stored successfully");
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error storing lead data:", error);
    }

    try {
      await axios.post("/api/sendEmail", formData); // Send email
      console.log("Lead data stored successfully");
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setIsEmailValid(true); // Reset email validation when input changes
  };

  return (
    <div className="lg:py-8 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6">
      <div className="mx-auto max-w-screen-sm mt-12">
        <p className="pb-2 lg:pb-4 lg:py-0 text-sm md:text-lg text-gray-500">
          CONTACT US{" "}
        </p>
        <p className="pb-12 text-base lg:text-4xl font-bold lg:pb-14 text-gray-200">
          Drop a message
        </p>
      </div>
      <form
        className="flex flex-row justify-center items-center md:pb-12"
        onSubmit={handleSubmit}
      >
        <section className="text-gray-700 body-font relative w-full">
          <div className="container px-5 md:py-12 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-100 rounded border ${
                        isEmailValid
                          ? "border-gray-300 focus:border-indigo-500"
                          : "border-red-500"
                      } text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    {!isEmailValid && (
                      <p className="text-red-500 text-xs mt-1">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-400">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-400">
                      Number of employees
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="">Select</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101+">101+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-2 py-24 md:py-0 w-full text-white">
            {isSubmitted ? (
              <p className="text-gray-200">✔ We will get in touch</p>
            ) : (
              <Button type="submit">Send</Button>
            )}
          </div>
        </section>
      </form>
    </div>
  );
};
