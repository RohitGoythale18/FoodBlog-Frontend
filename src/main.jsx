import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import HomeLayout from './HomeLayout';
import Sweets from './Components/Sweets/Sweets'
import Spices from './Components/Spices/Spices'
import Soups from './Components/Soups/Soups'
import ContactUs from './Components/ContactUs/ContactUs';
import Home from './Components/Home/Home';

import Admin from './Admin/Admin';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import Dashboard from './Admin/Dashboard/Dashboard';
import ManageSweets from './Admin/ManageSweets/ManageSweets';
import ManageSpices from './Admin/ManageSpices/ManageSpices';
import ManageSoups from './Admin/ManageSoups/ManageSoups';
import Feedback from './Admin/Feedback/Feedback';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomeLayout />}>
        <Route path='sweets' element={<Sweets />} />
        <Route path='spices' element={<Spices />} />
        <Route path='soups' element={<Soups />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='/' element={<Home />} />
      </Route>

      <Route path='/admin' element={<Admin />} />
      <Route path='dashboard' element={<AdminLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/manage-sweets' element={<ManageSweets />} />
        <Route path='/dashboard/manage-spices' element={<ManageSpices />} />
        <Route path='/dashboard/manage-soups' element={<ManageSoups />} />
        <Route path='/dashboard/manage-feedback' element={<Feedback />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >
)
