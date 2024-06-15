import { createContext, useState, useEffect } from "react";
import {useCookies} from "react-cookie"

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {


  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;



  const [inputValues, setInputValues] = useState(null);

  
  

  const getInputData = async () => {
     try {
       const response = await fetch(`${import.meta.env.VITE_APP_SERVERURL}/Input/${userEmail}`);
       const json = await response.json();
       setInputValues(json);
     } catch (err) {
       console.error(err);
     }
   };
 
   useEffect(() =>{
    if (authToken) {
     getInputData();
    }}, []);
 

  const [dataInput, setDataInput] = useState({
    user_email: cookies.Email,
    bloodglucosefasting: "",
    bloodglucosepp: "",
    bpdia: "",
    bpsys: "",
    creatinine: "",
    hdlcholesterol: "",
    ldlcholesterol: "",
    pulserate: "",
    totalcholesterol: "",
    date: "",
  });

 
 
  const postInputData = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_APP_SERVERURL}/Input/`, {
          method: "POST", 
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(dataInput)
        })
       if(response.status === 200){
        console.log('worked')
        getInputData()

       }
    } catch (err){
      console.error(err)
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataInput((dataInput) => ({
      ...dataInput,
      [name]: value,
    }));
    console.log(dataInput);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValues);
    await postInputData()

  };



  return (
    <GlobalContext.Provider
      value={{
        authToken,
        dataInput,
        setDataInput,
        inputValues,
        setInputValues,
        getInputData,
        postInputData,
        handleChange,
        handleSubmit,
        userEmail,
        cookies, 
        setCookie, 
        removeCookie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
