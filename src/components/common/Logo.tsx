'use client';
import React from 'react';

export default function Logo({ className = '', light = false }: { className?: string; light?: boolean }) {
  const logoSrc = light ? '/logo-light.png' : '/logo.png';
  
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Tvam Key Software Logo"
        className="h-10 w-auto object-contain shrink-0"
      />
    </div>
  );
}
