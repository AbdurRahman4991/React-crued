import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import StudentInfo from './pages/StudentInfo.jsx'
import CreateStudent from './pages/CreateStudent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<Aboutus />} /> 
      <Route path='/contact' element={<Contactus />} /> 
      <Route path='/student' element={<StudentInfo />} />
      <Route path='/create/student' element={<CreateStudent />} />
    </Routes>
  </BrowserRouter>
)
