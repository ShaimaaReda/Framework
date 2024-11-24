import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'


function App() {
  // const router = createBrowserRouter([
  //   {path:"/", element:<Home/>},
  //   {path:"/about", element:<About/>},
  //   {path:"/contact", element:<Contact/>},
  //   {path:"/portfolio", element:<Portfolio/>},
  // ])
  const router = createBrowserRouter([
    { path:"/", 
      element :<Layout/> ,
      children:[
      {path:"home", element:<Home/>},
      {path:"about", element:<About/>},
      {path:"contact", element:<Contact/>},
      {path:"portfolio", element:<Portfolio/>},
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
