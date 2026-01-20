
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen lg:h-[140vh] w-full flex-col md:flex-row">
      {/* Left Section: Hero Image */}
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 h-full relative overflow-hidden bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXXR8fAIeVfWzex7xIWFvbaux0bVu01P-lyEFVI9-dcHlX1FZ4YFLueAZO9plz9TdXtYUjyzonddHWefxWQzYF_Yo4ttvIZz-kTgwUinFiLjCkxq0x0Wyr7gInEUo4QJBTt5L11mvoCYaJCxA_p2pXxHpRHtZZ8ItIqLfB1UwSq7mzQoQb-ZVGu0WAz3FOzdLAc86RopYUg8pCBVgAtzpfvjWmtZK890TXwa3Fju29PlIqLLixNHojGkgh4STDiFWDUbqlfzLLeg")'
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-12 left-12 z-10">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">NouRender</h1>
          </div>
          <p className="mt-4 text-white/90 text-lg max-w-md font-light italic">
            Connect with the world's finest artisans and bring your vision to life.
          </p>
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="h-fit flex-1 flex flex-col justify-center items-center bg-white dark:bg-background-dark px-6 py-12 md:px-20 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[440px] flex flex-col"
        >
          {/* Brand Mobile Logo */}
          <div className="md:hidden flex items-center gap-2 mb-10 text-midnight dark:text-white">
            <div className="size-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">NouRender</h2>
          </div>

          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-midnight dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back</h2>
            <p className="text-midnight/60 dark:text-gray-400 text-base font-normal leading-normal">Connect with the world's finest artisans.</p>
          </div>

          <form className="flex flex-col gap-6">
            {/* Email Field */}
            <div className="flex flex-col w-full">
              <label className="flex flex-col w-full">
                <p className="text-midnight dark:text-white text-sm font-semibold leading-normal pb-2 uppercase tracking-wider">Email Address</p>
                <input
                  className="form-input flex w-full rounded-lg text-midnight dark:text-white focus:outline-0 focus:ring-1 focus:ring-midnight border border-slate-300 dark:border-white/10 bg-transparent dark:bg-midnight/20 h-14 placeholder:text-slate-400 dark:placeholder:text-white/40 p-[15px] text-base font-normal transition-all"
                  placeholder="name@company.com"
                  type="email"
                />
              </label>
            </div>

            {/* Password Field */}
            <div className="flex flex-col w-full">
              <label className="flex flex-col w-full">
                <div className="flex justify-between items-end pb-2">
                  <p className="text-midnight dark:text-white text-sm font-semibold leading-normal uppercase tracking-wider">Password</p>
                  <a className="text-xs font-medium text-slate-500 dark:text-white/40 hover:text-midnight dark:hover:text-white transition-colors" href="#">Forgot password?</a>
                </div>
                <div className="relative flex w-full items-stretch rounded-lg">
                  <input
                    className="form-input flex w-full rounded-lg text-midnight dark:text-white focus:outline-0 focus:ring-1 focus:ring-midnight border border-slate-300 dark:border-white/10 bg-transparent dark:bg-midnight/20 h-14 placeholder:text-slate-400 dark:placeholder:text-white/40 p-[15px] pr-12 text-base font-normal transition-all"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40 hover:text-midnight dark:hover:text-white"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </label>
            </div>

            {/* Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-midnight dark:bg-white text-white dark:text-midnight text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all shadow-lg active:scale-[0.98]"
              type="button"
            >
              <span className="truncate">Sign In</span>
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-4">
              <div className="h-[1px] flex-1 bg-slate-300 dark:bg-white/10"></div>
              <span className="text-xs text-slate-500 dark:text-white/40 uppercase tracking-widest font-bold">Or</span>
              <div className="h-[1px] flex-1 bg-slate-300 dark:bg-white/10"></div>
            </div>

            {/* Google Login */}
            <button
              className="flex w-full items-center justify-center gap-3 rounded-lg h-14 px-4 border border-apres-ski/30 dark:border-white/10 bg-transparent hover:bg-white/50 dark:hover:bg-midnight/50 text-midnight dark:text-white text-sm font-semibold transition-all"
              type="button"
            >
              <svg className="size-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Sign in with Google
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-slate-500 dark:text-white/40 text-sm">
              Don't have an account?{' '}
              <a href="/signup" className="text-midnight dark:text-white font-bold hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-auto pt-10 text-[10px] text-slate-500 dark:text-white/30 uppercase tracking-widest flex gap-6">
          <a className="hover:text-midnight dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-midnight dark:hover:text-white transition-colors" href="#">Terms of Service</a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
