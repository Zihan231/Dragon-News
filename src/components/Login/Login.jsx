import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const { handleSignIn, user, isLoading } = useContext(AuthContext);
  const [error, SetError] = useState("");
  const [isLogin, SetIsLogin] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const redirectTo = location.state?.from || '/';

  useEffect(() => {
    if (!isLoading && user && user.email) {
      navigate(redirectTo);
      return;
    }
  }, [user, navigate, isLoading,redirectTo])
  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className="flex justify-center items-center h-64">
          <HashLoader color="#050505" size={100} />
        </div>
      </div>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = (e.target.email.value).trim();
    const pass = (e.target.pass.value).trim();
    SetIsLogin(true);
    handleSignIn(email, pass).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate(redirectTo);
    })
      .catch(() => {
        SetError("Invalid Email or Password");
      }).finally(() => {
        SetIsLogin(false);
      }
      );
  }
  if (user == null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Login to your account to continue
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                name='email'
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                name='pass'
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input name='rememberMe' type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex justify-center items-center gap-2"
            >
              {isLogin ? (
                <HashLoader color="#fff" size={25} />
              ) : (
                "LogIn"
              )}
            </button>
            {/* 🧩 Error message box */}
            {error && (
              <div className="bg-red-100 text-red-700 border border-red-400 rounded-md p-2 text-center">
                {error}
              </div>
            )}
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-px w-1/4 bg-gray-300"></div>
            <span className="text-gray-500 mx-3">or</span>
            <div className="h-px w-1/4 bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{' '}
            <Link to='/auth/register' className="text-secondary font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
  }




};

export default Login;
