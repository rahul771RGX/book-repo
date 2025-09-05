import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
  .post(`${API_BASE_URL}/user/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center relative">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
        >
          ✕
        </Link>
        <div className="flex flex-col items-center mb-4">
          <div className="bg-purple-100 dark:bg-slate-700 p-3 rounded-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" />
            </svg>
          </div>
          <h3 className="font-extrabold text-2xl text-gray-800 dark:text-white mb-1">Signup</h3>
          <p className="text-gray-500 dark:text-gray-300 text-center text-base max-w-xs">Create your account to get started</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="w-full flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="fullname" className="text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 dark:bg-slate-900 dark:text-white"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-xs text-red-500">This field is required</span>
            )}
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 dark:bg-slate-900 dark:text-white"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 dark:bg-slate-900 dark:text-white"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">This field is required</span>
            )}
          </div>
          {/* Button & Login Link */}
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors">
              Signup
            </button>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Have an account?{' '}
              <button
                type="button"
                className="underline text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
