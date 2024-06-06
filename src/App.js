import './App.css'
import Home from './pages/home' 
import Formulaire from './pages/Formulaire'
import { BrowserRouter,Route,Routes } from 'react-router-dom'



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Formulaire" element={<Formulaire />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

