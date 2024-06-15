import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [userEmail,setuserEmail]=useState();
    const [userPassword,setuserPassword]=useState();
    const [error,setError]=useState(null);
    const navigate=useNavigate();

    const handleLoginSubmit=async (event)=>{

        event.preventDefault();
         const response=await fetch('http://localhost:8080/login',{

         method: 'POST',
         headers:{
            'Content-Type': 'application/json',
         },
         body:JSON.stringify({userName:userEmail,userPassword:userPassword}),

         });

         const data= await response.text();
         console.log(data);
         if(data == "Valid user"){
            navigate('/');
         }else{
            setError(data);
            alert("Invalid credentials!!")
         }
    }

   



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(event)=>{setuserEmail(event.target.value)}}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={userPassword}
              onChange={(event)=>setuserPassword(event.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className="text-center text-gray-600 mt-4">Or</p>
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 mt-2"
            type="button"
          >
            Login with Google
          </button>
        <Link to="/register">
          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 mt-4"
            type="button"
            >
            Register
          </button>
        </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
