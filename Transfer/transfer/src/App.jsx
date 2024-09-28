import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchPanel from './components/SearchPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
          <div>
              <SearchPanel></SearchPanel>
              </div>

  )
}

export default App
