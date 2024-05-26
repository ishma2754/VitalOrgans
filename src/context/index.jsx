import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    emergencyContact: "",
    gender: "",
    medicalConditions: "",
    bloodGroup: ""
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChangeHome = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmitHome = (e) => {
    e.preventDefault();
    setSubmittedData(formData); 
  };


  const [inputValues, setInputValues] = useState({
    bpSys: "",
    bpDys: "",
    pulseRate: "",
    totalCholesterol: "",
    hdlCholesterol: "",
    ldlCholesterol: "",
    bloodGlucoseFasting: "",
    bloodGlucosePP: "",
    creatinine: "",
    date: "",
  });

 

  const [chartSeries, setChartSeries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const bpSys = parseInt(inputValues.bpSys);
    const bpDys = parseInt(inputValues.bpDys);
    const pulseRate = parseInt(inputValues.pulseRate);
    const totalCholesterol = parseInt(inputValues.totalCholesterol);
    const hdlCholesterol = parseInt(inputValues.hdlCholesterol);
    const ldlCholesterol = parseInt(inputValues.ldlCholesterol);
    const bloodGlucoseFasting = parseInt(inputValues.bloodGlucoseFasting);
    const bloodGlucosePP = parseInt(inputValues.bloodGlucosePP);
    const creatinine = parseInt(inputValues.creatinine);

    let colorSys = "#00BFFF"; // Default color is blue for SYS
    let colorDys = "#00BFFF"; // Default color is blue for DYS

    // Check if values are out of range and set color accordingly
    if (bpSys < 90 || bpSys > 140) {
      colorSys = "#FF0000"; // Change color to red if SYS value is out of range
    }
    if (bpDys < 60 || bpDys > 90) {
      colorDys = "#FF0000"; // Change color to red if DYS value is out of range
    }

 

    const newChartData = {
      name: "Blood Pressure",
      data: [
        { x: "BP SYS", y: bpSys, color: colorSys },
        { x: "BP DYS", y: bpDys, color: colorDys },
        { x: "Pulse-Rate", y: pulseRate, color: colorDys },
        { x: "Total Chol", y: totalCholesterol, color: colorDys },
        { x: "hdl Chol", y: hdlCholesterol, color: colorDys },
        { x: "ldl Chol", y: ldlCholesterol, color: colorDys },
        { x: "Blood Glucose Fasting", y: bloodGlucoseFasting, color: colorDys },
        { x: "Blood Glucose PP", y: bloodGlucosePP, color: colorDys },
        { x: "Creatinine", y: creatinine, color: colorDys },
      ],
      date: inputValues.date,
    };

    console.log("Color SYS:", colorSys);
    console.log("Color DYS:", colorDys);

    setChartSeries((prevChartSeries) => [...prevChartSeries, newChartData]);
  };

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        handleChangeHome,
        handleSubmitHome,
        submittedData,
        setSubmittedData,
        inputValues,
        setInputValues,
        handleChange,
        handleSubmit,
        chartSeries,
        setChartSeries,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
