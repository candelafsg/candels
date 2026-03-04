
import './App.css'
import { Outlet } from 'react-router'
import { Footer } from './components/footer/Footer'

function App() {
 

  return (
    <>
     
    <Outlet />
    <Footer />
    </>
  )
}

export default App
