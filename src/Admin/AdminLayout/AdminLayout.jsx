import React from 'react'
import './AdminLayout.css'
import Sidebar from '../Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <>
      <div className="admin-layout">
        <Sidebar />
        <div className='outlet-design'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}
