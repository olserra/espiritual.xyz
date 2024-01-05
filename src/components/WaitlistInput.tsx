import React, { ChangeEvent, useState } from "react";
import Button from "./Button";
import axios from "axios";

type Lead = {
  email: string;
};

const WaitlistInput = () => {
  const [formData, setFormData] = useState<Lead>({
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validation

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    setIsEmailValid(true); // Reset email validation when input changes
  };

  return (
    <form className="flex flex-row md:pb-12" onSubmit={handleSubmit}>
      {!isSubmitted && (
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="smith@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className={`min-w-[200px] max-h-[40px] md:min-w-[300px] bg-gray-100 rounded border ${
              !isEmailValid ? "border-red-500" : "border-gray-300"
            } focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
          />
          {!isEmailValid && (
            <p className="text-red-500 text-sm">
              Please enter a valid email address.
            </p>
          )}
        </div>
      )}
      <div className="pl-2 w-full text-white">
        {isSubmitted ? (
          <p className="text-gray-200">✔ Joined</p>
        ) : (
          <Button className="bg-black" type="submit">
            Join waitlist
          </Button>
        )}
      </div>
    </form>
  );
};

export default WaitlistInput;
