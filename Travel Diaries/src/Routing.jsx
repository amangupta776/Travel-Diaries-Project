import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
function Routing() {
  return (
<BrowserRouter>
<Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default Routing