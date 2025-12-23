
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252641] pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded-lg">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-[#252641] font-bold">T</div>
            </div>
            <span className="text-2xl font-bold tracking-tight">TOTC</span>
          </div>
          <div className="h-10 w-px bg-slate-700 hidden md:block"></div>
          <span className="text-slate-400 font-medium">Virtual Class for Zoom</span>
        </div>

        <div className="text-center mb-16">
          <h4 className="text-xl font-bold mb-6">Subscribe to get our Newsletter</h4>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 px-6 py-3 rounded-full bg-transparent border border-slate-700 text-white outline-none focus:border-primary transition-colors"
            />
            <button className="px-8 py-3 bg-primary rounded-full font-bold hover:bg-white hover:text-[#252641] transition-all">Subscribe</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-slate-400 mb-12 border-b border-slate-800 pb-12">
          <a href="#" className="hover:text-white">Careers</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>

        <p className="text-center text-xs text-slate-500">© 2024 Class Technologies Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
