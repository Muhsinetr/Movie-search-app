import { Navigate, Route, Router, Routes} from 'react-router-dom'
import './App.css'
import { Body } from './componets/Body/Body'
import { Footer } from './componets/Footer/Footer'
import { Header } from './componets/Header/Header'
import { Login } from './componets/Login/Login'
import { useContext, useState } from 'react'
import { ProtectBody } from './componets/ProtectBody'

function App() {
  const [theme,setTheme] = useState(false);
  const handleTheme =()=>{
    setTheme(prev=>!prev);
}
  return (
    <div className='Full-canvas' data-theme = {theme && "dark"}>
    <Header  handleTheme={handleTheme}/>
    <Routes> 
    <Route element={<ProtectBody/>} >
      <Route path='/' exact element={<Body/>} />
    </Route>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}
export default App
