'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNav = ({children, href, className}) => {
  const pathName = usePathname()
  const isActive = pathName === href
  
  return (
    <li className='list-none'>
      <Link 
        href={href} 
        className={`inline-block border-2 font-semibold border-gray-300 rounded-lg px-4 py-2 shadow-sm transition-all duration-200
        ${className} ${isActive ? 'bg-green-400 border-green-500 text-white' : 'hover:bg-gray-50'}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default ActiveNav;