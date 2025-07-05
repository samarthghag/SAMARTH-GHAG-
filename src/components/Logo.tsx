
import React from 'react';

const Logo = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-4xl'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg border border-gray-200`}>
      <span className="font-bold text-gray-900 tracking-tight">SG</span>
    </div>
  );
};

export default Logo;
