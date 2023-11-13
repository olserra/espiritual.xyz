import React, { ChangeEvent, useState } from "react";
import Button from "./Button";
import axios from "axios";

type Lead = {
  name: string;
  email: string;
  companyUrl: string;
  employees: string;
};

const RequestDemo = () => {
  const [formData, setFormData] = useState<Lead>({
    name: "",
    email: "",
    companyUrl: "",
    employees: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post("/api/leads", formData);
      console.log("Lead data stored successfully");
      setFormData({
        name: "",
        email: "",
        companyUrl: "",
        employees: "",
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error storing lead data:", error);
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
  };

  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Request a demo and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
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
              <div className="p-2 w-1/2">
                <div className="relative">
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="company"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Company website
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="companyUrl"
                    value={formData.companyUrl}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="employees"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Employees
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option disabled>Select number of employees</option>
                    <option value="0-10">0-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200-500">200-500</option>
                  </select>
                </div>
              </div>
              <div className="p-2 w-full text-white">
                {isSubmitted ? (
                  <p className="text-black">✔ Sent!</p>
                ) : (
                  <Button type="submit">Send</Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestDemo;
