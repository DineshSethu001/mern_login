import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
