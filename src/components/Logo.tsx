
import React from 'react';

const Logo = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-20 h-20 text-4xl'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative group cursor-pointer`}>
      {/* Main logo container with glass effect */}
      <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-lg border border-slate-300/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
        <span className="font-bold text-slate-800 tracking-tight font-mono">
          SG
        </span>
        {/* Subtle tech accent */}
        <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-60"></div>
      </div>
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
    </div>
  );
};

export default Logo;
