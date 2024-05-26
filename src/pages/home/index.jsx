import React, { useContext, useState } from "react";

import { UserCircleIcon } from "@heroicons/react/outline";
import { GlobalContext } from "../../context";

export default function Home() {
  const {
    formData,
    setFormData,
    handleChangeHome,
    handleSubmitHome,
    submittedData,
    setSubmittedData,
  } = useContext(GlobalContext);

  return (
    <div>
      <div className="flex justify-center mt-8">
        <UserCircleIcon className="h-20 w-20 text-gray-600" />
      </div>

      <form className="max-w-md mx-auto mt-8">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Name "
              value={formData.name || ""}
              onChange={handleChangeHome}
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="age"
              id="age"
              value={formData.age || ""}
              onChange={handleChangeHome}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Age"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="emergencyContact"
              id="emergencyContact"
              value={formData.emergencyContact || ""}
              onChange={handleChangeHome}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Emergency Contact Number"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="gender"
              id="gender"
              value={formData.gender || ""}
              onChange={handleChangeHome}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Gender"
              required
            />
          </div>
        </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="bloodGroup"
                id="bloodGroup"
                value={formData.bloodGroup || ""}
                onChange={handleChangeHome}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="BloodGroup"
                required
              />
            </div>
          </div>
        
      </form>

      <div className="max-w-sm mx-auto sm:mb-10">
        <textarea
          id="medical-conditions"
          rows="4"
          value={formData.medicalConditions || ""}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              medicalConditions: e.target.value,
            }))
          }
          className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Medical Conditions"
        ></textarea>
      </div>

      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
          onClick={handleSubmitHome}
        >
          Submit
        </button>
      </div>

      <div className="max-w-md mx-auto mt-8  border border-gray-300 rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Form Data</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(submittedData).map(([key, value]) => (
            <div key={key}>
              <div className="font-semibold">{key}</div>
              <div>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
