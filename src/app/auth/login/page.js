"use client"
import {login} from "@/services/auth.js"
import React,{useState} from 'react'
const Login = () => {
  const [form,setForm] = useState({
    email:"",
    password:"",
  })
  function handleChange(e){
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setForm({
      ...form,[fieldName]:fieldValue,
    })
  }
  const handleSubmit = async (e) => {
    try {
         e.preventDefault();
         const response = await login({ email: form.email, password: form.password })
         console.log(response)
       } catch (err) {
         console.log(err);
         alert(err);
       }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder='email'></input>
        <input name="password" type="password" placeholder='password'></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login