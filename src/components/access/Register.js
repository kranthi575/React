import React, { useState } from 'react';

const Register = () => {
  console.log("Registration page::");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      // Handle response, e.g., show a success message or redirect the user
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
