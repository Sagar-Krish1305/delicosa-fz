import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// src/index.js or src/App.js

import './index.css'; // Import Tailwind after Bootstrap

import { RouterProvider , Route  , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Layout from "./Components/Layout.jsx"
import {HomePage , OurProductsPage , MyCartPage} from "./Pages"
const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element=  {<Layout/>}>
       <Route path='' element={<HomePage/>}/>
       <Route path='products' element={<OurProductsPage/>}/>
       <Route path='cart' element={<MyCartPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router= {router} />
      {/* <App/> */}
  </React.StrictMode>,
)
