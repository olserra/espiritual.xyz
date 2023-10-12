import React, { ChangeEvent, useState } from "react";
import Button from "./Button";
import axios from "axios";

type Lead = {
  email: string;
};

const RequestDemo = () => {
  const [formData, setFormData] = useState<Lead>({
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post("/api/leads", formData);
      console.log("Lead data stored successfully");
      setFormData({
        email: "",
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
    <div className="flex flex-col items-center justify-center px-5">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Welcome
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Join the waiting list to get early access
        </p>
      </div>
      <div className="flex flex-col items-center">
        <form className="flex flex-row" onSubmit={handleSubmit}>
          {!isSubmitted && (
            <input
              type="email"
              id="email"
              name="email"
              placeholder="smith@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="min-w-[200px] max-h-[40px] md:min-w-[300px] bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          )}
          <div className="pl-2 w-full text-white">
            {isSubmitted ? (
              <p className="text-black">✔ Joined!</p>
            ) : (
              <Button type="submit">Join</Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
