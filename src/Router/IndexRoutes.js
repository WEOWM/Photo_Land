import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Default from "../Layout/Default"
import Home from '../views/Home'


const IndexRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home/>} />
        
        </Route>
         
      </Routes>

    </div>
  )
}

export default IndexRoutes