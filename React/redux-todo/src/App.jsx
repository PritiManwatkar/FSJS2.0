import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todos from './components/Todos'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Todos/>
    </div>
  )
}

export default App
