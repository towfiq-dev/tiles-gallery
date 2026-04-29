'use client'

import ActiveNav from './ActiveNav';
import Image from 'next/image';
import NavLogo from '../../../assets/asset/user.png'

import Link from 'next/link';

const Navbar = () => {


    const links = (
        <>
            <ActiveNav href={'/'}>Home</ActiveNav>
            <ActiveNav href={'/allNavs/allTiles'}>All Tiles</ActiveNav>
            <ActiveNav href={'/allNavs/contact'}>Contact</ActiveNav>
            <ActiveNav href={'/allNavs/dashboard'}>Dashboard</ActiveNav>
        </>
    );

    if (isPending) {
        return (
            <div className="h-16 flex items-center justify-center bg-white shadow-sm border-b mt-4 rounded-xl">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <nav className="bg-white shadow-md rounded-xl px-4 md:px-8 mt-4 sticky top-0 z-50 border border-gray-100">
            <div className="flex justify-between items-center h-16">
                
                {/* Mobile Menu Button & Logo */}
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                    
                    <Link href="/" className="text-xl font-bold tracking-tighter text-blue-600">
                        MY<span className="text-gray-800">NEWS</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-2">
                    <ul className="flex items-center gap-4 list-none">
                        {links}
                    </ul>
                </div>

                {/* User Actions */}
                <div className="flex items-center gap-3 relative">
                    {user ? (
                        <div className="relative">
                            <button 
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center focus:outline-none"
                            >
                                <div className="w-10 h-10 rounded-full ring-2 ring-blue-500 ring-offset-2 overflow-hidden bg-gray-200">
                                    <Image 
                                        width={40} 
                                        height={40} 
                                        src={user.image || NavLogo} 
                                        alt={user.name || "User"} 
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </button>

                            {/* Profile Dropdown */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-3 w-60 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-[60]">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="font-bold text-gray-800 truncate">{user.name}</p>
                                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                    </div>
                                    <Link href="/allNavs/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My Profile</Link>
                                    <Link href="/allNavs/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</Link>
                                    <button 
                                        onClick={handleSignOut}
                                        className="w-full text-left px-4 py-2 text-sm text-red-500 font-semibold hover:bg-red-50 transition-colors"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link href="/auth/signin" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm">
                            Log In
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden pb-4 border-t border-gray-100 pt-4">
                    <ul className="flex flex-col gap-3 list-none">
                        {links}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;