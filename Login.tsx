
import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';

interface LoginProps {
  onViewChange: (view: 'home' | 'blog' | 'login') => void;
  initialMode?: 'login' | 'register';
}

const Login: React.FC<LoginProps> = ({ onViewChange, initialMode = 'login' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginTab, setIsLoginTab] = useState(initialMode === 'login');

  // Update internal state if initialMode prop changes (e.g., user clicks header while on login page)
  useEffect(() => {
    setIsLoginTab(initialMode === 'login');
  }, [initialMode]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-10 relative">
      {/* Close Button */}
      <button 
        onClick={() => onViewChange('home')}
        className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors z-50"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image Panel */}
        <div className="relative hidden lg:block h-[85vh]">
          <div className="w-full h-full rounded-[40px] overflow-hidden relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
              alt="Students in classroom" 
              className="w-full h-full object-cover"
            />
            {/* Soft gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-16 left-12 right-12 text-white">
              <h2 className="text-4xl font-bold mb-2 leading-tight">
                Lorem Ipsum is simply
              </h2>
              <p className="text-2xl text-white/90">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="max-w-md mx-auto w-full py-10">
          <div className="text-center mb-10">
            <h1 className="text-xl font-medium text-[#2F327D] mb-8">Welcome to lorem..!</h1>
            
            {/* Login/Register Toggle Switch */}
            <div className="inline-flex bg-[#49BBBD]/40 p-1 rounded-full mb-8 min-w-[300px]">
              <button 
                onClick={() => setIsLoginTab(true)}
                className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${isLoginTab ? 'bg-[#49BBBD] text-white shadow-lg' : 'text-white'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLoginTab(false)}
                className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${!isLoginTab ? 'bg-[#49BBBD] text-white shadow-lg' : 'text-white'}`}
              >
                Register
              </button>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-10 px-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Address - Only visible in Register mode */}
            {!isLoginTab && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#2F327D] ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your Email Address"
                  className="w-full px-6 py-4 rounded-full border border-[#49BBBD]/40 focus:border-[#49BBBD] outline-none transition-all text-sm placeholder:text-slate-300"
                />
              </div>
            )}

            {/* User Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#2F327D] ml-1">User name</label>
              <input 
                type="text" 
                placeholder="Enter your User name"
                className="w-full px-6 py-4 rounded-full border border-[#49BBBD]/40 focus:border-[#49BBBD] outline-none transition-all text-sm placeholder:text-slate-300"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#2F327D] ml-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your Password"
                  className="w-full px-6 py-4 rounded-full border border-[#49BBBD]/40 focus:border-[#49BBBD] outline-none transition-all text-sm placeholder:text-slate-300 pr-12"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password (Only relevant for Login) */}
            {isLoginTab && (
              <div className="flex items-center justify-between text-xs font-medium px-1 pt-2">
                <label className="flex items-center gap-2 cursor-pointer group text-slate-500">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#49BBBD] focus:ring-[#49BBBD]" />
                  <span>Remember me</span>
                </label>
                <button className="text-[#2F327D] hover:underline transition-all">
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button 
                type="submit"
                className="px-14 py-3.5 bg-[#49BBBD] text-white rounded-full font-bold shadow-lg shadow-[#49BBBD]/30 hover:scale-105 active:scale-95 transition-all"
              >
                {isLoginTab ? 'Login' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
