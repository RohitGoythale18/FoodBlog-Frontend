import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    return (
        <>
            <section className="bg-gray-300 max-w-[20%] max-h-[100vh] relative">
                <div className="flex items-center py-2 mt-2">
                    <img src="/OIG.png" id="logo" alt="Logo" className="h-16 w-16" />
                    <svg id="portal-name" width="200" height="50" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
                        <text id="portal-name-svg-text" x="0" y="35" style={{ fontSize: '1.8rem', fontWeight: 'bold', fill: 'black' }}>FoodMania</text>
                    </svg>
                </div>

                <div className="flex flex-col mx-2 my-5">
                    <NavLink
                        to="/dashboard"
                        className="text-2xl p-3 ml-3 tab-name text-gray-700 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/dashboard/manage-sweets"
                        className="text-2xl p-3 ml-3 tab-name text-gray-700 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Sweets
                    </NavLink>
                    <NavLink
                        to="/dashboard/manage-spices"
                        className="text-2xl p-3 ml-3 tab-name text-gray-700 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Spices
                    </NavLink>
                    <NavLink
                        to="/dashboard/manage-soups"
                        className="text-2xl p-3 ml-3 tab-name text-gray-700 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Soups
                    </NavLink>
                    <NavLink
                        to="/dashboard/manage-feedback"
                        className="text-2xl p-3 ml-3 tab-name text-gray-700 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Feedback
                    </NavLink>
                </div>

                <button
                    className='absolute bottom-0 w-[100%] text-xl mb-0'
                    id='logout-btn'>
                    Logout
                </button>
            </section>
        </>
    )
}
