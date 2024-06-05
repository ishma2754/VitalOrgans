import { createContext, useState, useEffect } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState(null);



  //const [submittedData, setSubmittedData] = useState([]);

  const handleChangeHome = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitHome = (e) => {
    e.preventDefault();

    /*setFormData({
      name: "",
      age: "",
      emergencyContact: "",
      gender: "",
      bloodGroup: "",
      medicalConditions: "",
    });
    */
  
    //setSubmittedData(formData);
  };

  const [inputValues, setInputValues] = useState(null);

  const [chartSeries, setChartSeries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const userEmail = "ishma@test.com";
 

  const getInputData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/Input/${userEmail}`);
      const json = await response.json();
      setInputValues(json);
    } catch (err) {
      console.error(err);
    }
  };

  const getFormData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/${userEmail}`);
      const json = await response.json();
      setFormData(json)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => getInputData, []);

  useEffect(() => getFormData, []);
  console.log(inputValues);
  console.log(formData);






  const handleSubmit = (e) => {
    e.preventDefault();

    /*setInputValues({
      bpSys: "",
      bpDia: "",
      pulseRate: "",
      totalCholesterol: "",
      hdlCholesterol: "",
      ldlCholesterol: "",
      bloodGlucoseFasting: "",
      bloodGlucosePP: "",
      creatinine: "",
      date: "",
    });
    */

    const bpSys = parseInt(inputValues.bpSys);
    const bpDia = parseInt(inputValues.bpDia);
    const pulseRate = parseInt(inputValues.pulseRate);
    const totalCholesterol = parseInt(inputValues.totalCholesterol);
    const hdlCholesterol = parseInt(inputValues.hdlCholesterol);
    const ldlCholesterol = parseInt(inputValues.ldlCholesterol);
    const bloodGlucoseFasting = parseInt(inputValues.bloodGlucoseFasting);
    const bloodGlucosePP = parseInt(inputValues.bloodGlucosePP);
    const creatinine = parseInt(inputValues.creatinine);

    const newChartData = {
      data: [
        { x: "BP SYS", y: bpSys },
        { x: "BP DIA", y: bpDia },
        { x: "Pulse-Rate", y: pulseRate },
        { x: "Total Chol", y: totalCholesterol },
        { x: "hdl Chol", y: hdlCholesterol },
        { x: "ldl Chol", y: ldlCholesterol },
        { x: "Blood Glucose Fasting", y: bloodGlucoseFasting },
        { x: "Blood Glucose PP", y: bloodGlucosePP },
        { x: "Creatinine", y: creatinine },
      ],
      date: inputValues.date,
    };

    setChartSeries((prevChartSeries) => [...prevChartSeries, newChartData]);
  };

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        handleChangeHome,
        handleSubmitHome,
        //submittedData,
        //setSubmittedData,
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
