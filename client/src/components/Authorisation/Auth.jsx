import React, {useState} from "react";
import "./index.css"
import {useCookies} from "react-cookie"


export default function Auth() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isLogIn, setIsLogIn] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword]  = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null);
  const [licenseKey, setLicenseKey] = useState(null);



  const viewLogin = (status) => {
    setError(null)
    setIsLogIn(status)
  }


  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()
    if (!isLogIn && password != confirmPassword){
      setError('Make sure passwords match');
      return
    }

    const response = await fetch(`http://localhost:8000/${endpoint}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password, license_key: licenseKey})
    });

    const data = await response.json()
    if(data.detail){
      setError(data.detail)
    }else {
      setCookie('Email',data.email)
      setCookie('AuthToken', data.token)
      setCookie('Role', data.role)

      window.location.reload()
    }
    
  }

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">{isLogIn ? "Please Log in" : "Please sign up"}</h2>
          <input 
          type="email" 
          placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}
          />

          <input 
          type="password" 
          placeholder="password"  
          onChange={(e) => setPassword(e.target.value)}
          />

          {!isLogIn && (
             <>
          <input 
          type="password" 
          placeholder="confirm password" 
          onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <input 
          type="text" 
          placeholder="license key (optional)"  
          onChange={(e) => setLicenseKey(e.target.value)}
        />
        </>
          )}

          <input 
          type="submit" 
          className="create " 
          onClick={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')}
          />

          {error && <p>{error}</p>}
        </form>

        <div className="auth-options">
          <button 
          onClick={() => viewLogin(false)}
          style={{
            backgroundColor: !isLogIn 
            ? 'rgb(255, 255, 255)' 
            : 'rgb(188, 188, 188)'
          }}
            
            >Sign Up
            </button>

          <button 
          onClick={() => viewLogin(true)} 
          style={{
            backgroundColor: isLogIn 
            ? 'rgb(255, 255, 255)' 
            : 'rgb(188, 188, 188)'
            }}>Login
            </button>
        </div>
      </div>
    </div>
  );
}
