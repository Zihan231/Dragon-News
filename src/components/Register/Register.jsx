import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import {AuthContext} from '../../context/AuthContext/AuthContext.js'
const Register = () => {

  const navigate = useNavigate();
  const {createUser, SetUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    // const name = (e.target.name.value || null).trim();
    const email = (e.target.email.value || null).trim();
    // const photoUrl = (e.target.photoUrl.value || null).trim();
    const password = (e.target.pass.value || null).trim();
    // const isChecked = (e.target.term.checked);
    createUser(email, password)
      .then(result => {
        const User = result.user;
        SetUser(User);
        navigate('/');
      }).catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
    })
    // console.log(name, email, photoUrl, password, isChecked);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account ✨
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join us and start your journey today
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              name='name'
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"

            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
            <input
              name='photoUrl'
              type="text"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"

            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              name='email'
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"

            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              name='pass'
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"

            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center text-sm">
            <input name='term' type="checkbox" id='terms' className="mr-2" />
            <label htmlFor='terms'>
              I agree to the{" "}
              <a href="#" className="text-pink-500 font-semibold hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="h-px w-1/4 bg-gray-300"></div>
          <span className="text-gray-500 mx-3">or</span>
          <div className="h-px w-1/4 bg-gray-300"></div>
        </div>

        {/* Google Register */}
        <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>

        {/* Already have account */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to='/auth/login' className="text-secondary font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
