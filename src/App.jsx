import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { SignUp } from './auth/sign-up'
import { SignIn } from './auth/sign-in'
import { Reset } from './auth/reset-password'
import { Forgot } from './auth/forgot-password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

     {/* <SignUp/> */}
     {/* <SignIn/> */}
     {/* <Reset/> */}
     <Forgot/>


     
      

      
    </>
  )
}

export default App
