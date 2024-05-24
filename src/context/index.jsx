import { createContext, useState } from "react";


export const GlobalContext = createContext(null);


export default function GlobalState({children}){

  const [formData, setFormData] = useState({
    bpSys: "",
    bpDys: "",
    pulseRate: "",
    totalCholesterol:"",
    hdlCholesterol: "",
    ldlCholesterol:"",
    bloodGlucoseFasting: "",
    bloodGlucosePP: "",
    creatinine: ""
  });
  const [selectedDate, setSelectedDate] = useState(null);

  function updateData (newFormData, newDate){
    setFormData (newFormData);
    setSelectedDate(newDate);
  }

  
  return <GlobalContext.Provider value={{formData, setFormData, selectedDate,setSelectedDate, updateData }}>{children}</GlobalContext.Provider>
}