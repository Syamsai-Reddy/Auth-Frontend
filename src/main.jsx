import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import Layout from "./components/Layout.jsx"


import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'

// const router = createBrowserRouter([
//   {
    
//       path:"/",
//       element:<Layout/>,
//       children:[
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"user/:userid",
//           element:<User/>
//         },
//         {
//           loader:{githubloaders},
//           path:"github",
//           element:<Github/>
//         }
//       ]
    
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
    
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)