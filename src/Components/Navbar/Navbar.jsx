import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <nav className="bg-gray-300">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center text-xl">
                        <div className="flex items-center">
                            <img src="/OIG.png" id="logo" alt="Logo" className="h-16 w-16 mr-2" />
                            <svg id="portal-name" width="200" height="50" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
                                <text id="portal-name-svg-text" x="10" y="35" className="text-3xl font-bold">FoodMania</text>
                            </svg>
                        </div>
                        <div className="hidden md:flex space-x-10">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "tab-name text-blue-500" : "tab-name text-gray-700 hover:text-blue-500"}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/sweets"
                                className={({ isActive }) => isActive ? "tab-name text-blue-500" : "tab-name text-gray-700 hover:text-blue-500"}
                            >
                                Sweets
                            </NavLink>
                            <NavLink
                                to="/spices"
                                className={({ isActive }) => isActive ? "tab-name text-blue-500" : "tab-name text-gray-700 hover:text-blue-500"}
                            >
                                Spices
                            </NavLink>
                            <NavLink
                                to="/soups"
                                className={({ isActive }) => isActive ? "tab-name text-blue-500" : "tab-name text-gray-700 hover:text-blue-500"}
                            >
                                Soups
                            </NavLink>
                        </div>
                        <div className="hidden md:flex space-x-5 items-center">
                            <NavLink
                                to="/contact-us"
                                className={({ isActive }) => isActive ? "tab-name text-blue-500" : "tab-name text-gray-700 hover:text-blue-500"}
                            >
                                Contact Us
                            </NavLink>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "tab-name text-blue-500" : "tab-name text-gray-700 hover:text-blue-500"}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="/admin"
                                className={({ isActive }) => isActive ? "tab-name text-blue-500" : "tab-name text-gray-700 hover:text-blue-500 text-2xl"}
                            >
                                <FaUserCircle />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
