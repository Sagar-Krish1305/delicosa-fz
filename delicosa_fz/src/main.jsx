import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider , Route  , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Layout from "./Components/Layout.jsx"
import {HomePage , OurProductsPage} from "./Pages"
const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element=  {<Layout/>}>
       <Route path='' element={<HomePage/>}/>
       <Route path='products' element={<OurProductsPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router= {router} />
  </React.StrictMode>,
)
