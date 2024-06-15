import React from "react";
import { useState } from "react";

const Register = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');



  const validate = () => {
    let isValid = true;
    const errors = {};

    if (!name) {
      isValid = false;
      errors.name = 'Name is required';
    }

    if (!email) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = 'Email address is invalid';
    }

    if (!phone) {
      isValid = false;
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      isValid = false;
      errors.phone = 'Phone number is invalid';
    }

    if (!password) {
      isValid = false;
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      isValid = false;
      errors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      isValid = false;
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');

    
    if (validate()) {
      try {
       
        const response=await fetch('http://localhost:8080/api/register',{

         method: 'POST',
         headers:{
            'Content-Type': 'application/json',
         },
         body:JSON.stringify({
          name:  name,
          email: email,
          phone: phone,
          password: password,
        }),

         });

        if (response.status === 200) {
          setSuccess('Registration successful!');
          setName('');
          setEmail('');
          setPhone('');
          setPassword('');
          setConfirmPassword('');
        } else {
          setErrors({ api: 'Registration failed. Please try again.' });
        }
      } catch (error) {
        setErrors({ api: error.response?.data?.message || 'Registration failed. Please try again.' });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {errors.api && <p className="text-red-500 text-sm text-center">{errors.api}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
