import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Input() {
  const { inputValues, handleChange, handleSubmit } = useContext(GlobalContext);


  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-3 mt-6">
        <input
          type="date"
          name="date"
          id="date"
          value={inputValues.date || ""}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="bpSys"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            BP SYS / mmHg
          </label>
          <input
            type="number"
            name="bpSys"
            id="bpSys"
            value={inputValues.bpSys || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="bpDys"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            BP DYS / mmHg
          </label>
          <input
            type="number"
            name="bpDys"
            id="bpDys"
            value={inputValues.bpDys || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="pulseRate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pulse Rate beats/min
          </label>
          <input
            type="number"
            name="pulseRate"
            id="pulseRate"
            value={inputValues.pulseRate || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="totalCholesterol"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Total Cholesterol mg/dL
          </label>
          <input
            type="number"
            name="totalCholesterol"
            id="totalCholesterol"
            value={inputValues.totalCholesterol || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="hdlCholesterol"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            HDL Cholesterol mg/dL
          </label>
          <input
            type="number"
            name="hdlCholesterol"
            id="hdlCholesterol"
            value={inputValues.hdlCholesterol || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="ldlCholesterol"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            LDL Cholesterol mg/dL
          </label>
          <input
            type="number"
            name="ldlCholesterol"
            id="ldlCholesterol"
            value={inputValues.ldlCholesterol || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="bloodGlucoseFasting"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blood Glucose(Fasting) mg/dL
          </label>
          <input
            type="number"
            name="bloodGlucoseFasting"
            id="bloodGlucoseFasting"
            value={inputValues.bloodGlucoseFasting || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="bloodGlucosePP"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blood Glucose(PP) mg/dL
          </label>
          <input
            type="number"
            name="bloodGlucosePP"
            id="bloodGlucosePP"
            value={inputValues.bloodGlucosePP || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="creatinine"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Creatinine µmol/l
          </label>
          <input
            type="number"
            name="creatinine"
            id="creatinine"
            value={inputValues.creatinine || ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
      </div>

      <button
        type="submit"
        onSubmit={handleSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
