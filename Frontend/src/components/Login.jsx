import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
function Login() {
  const location = useLocation();

  // Close modal on route change
  React.useEffect(() => {
    const modal = document.getElementById("my_modal_3");
    if (modal && modal.open) {
      modal.close();
    }
  }, [location.pathname]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="flex flex-col gap-4">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <div className="flex flex-col items-center mb-2">
              <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" />
                </svg>
              </div>
              <h3 className="font-extrabold text-2xl text-gray-800 dark:text-white mb-1">Login</h3>
              <p className="text-gray-500 dark:text-gray-300 text-center text-base max-w-xs">Sign in to your account to continue</p>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs text-red-500">This field is required</span>
              )}
            </div>
            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-xs text-red-500">This field is required</span>
              )}
            </div>
            {/* Button & Signup Link */}
            <div className="flex flex-col gap-2 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
                Login
              </button>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                Not registered?{' '}
                <Link
                  to="/signup"
                  className="underline text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
