import { useState } from "react";
import Chart from "react-apexcharts";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Input() {
  const { inputValues, handleChange, handleSubmit } = useContext(GlobalContext);

  return (
    <div>
      <div className=" mt-5 mx-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="">
          <input
            type="date"
            name="date"
            value={inputValues.date || ""}
            id="date"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-10 mx-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="bp-sys"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            BP SYS / mmHg
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="bpSys"
              value={inputValues.bpSys || ""}
              id="bp-sys"
              autoComplete="bp-sys"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="bp-dys"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            BP DYS / mmHg
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="bpDys"
              value={inputValues.bpDys || ""}
              id="bp-dys"
              autoComplete="bp-dys"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="pulse-rate"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Pulse Rate beats/min
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="pulseRate"
              value={inputValues.pulseRate || ""}
              id="pulse-rate"
              autoComplete="pulse-rate"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="total-cholesterol"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Total Cholesterol mg/dL
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="totalCholesterol"
              value={inputValues.totalCholesterol || ""}
              id="total-cholesterol"
              autoComplete="total-cholesterol"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="hdl-cholesterol"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            HDL Cholesterol mg/dL
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="hdlCholesterol"
              value={inputValues.hdlCholesterol || ""}
              id="hdl-cholesterol"
              autoComplete="hdl-cholesterol"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="ldl-cholesterol"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            LDL Cholesterol mg/dL
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="ldlCholesterol"
              value={inputValues.ldlCholesterol || ""}
              id="ldl-cholesterol"
              autoComplete="ldl-cholesterol"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="blood-glucose-fasting"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Blood Glucose(Fasting) mg/dL
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="bloodGlucoseFasting"
              id="blood-glucose-fasting"
              value={inputValues.bloodGlucoseFasting || ""}
              autoComplete="blood-glucose-fasting"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="blood-glucose-pp"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Blood Glucose(PP) mg/dL
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="bloodGlucosePP"
              value={inputValues.bloodGlucosePP || "" }
              id="blood-glucose-pp"
              autoComplete="blood-glucose-pp"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2 mb-4">
          <label
            htmlFor="creatinine"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Creatinine µmol/l
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="creatinine"
              value={inputValues.creatinine || ""}
              id="creatinine"
              autoComplete="creatinine"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
