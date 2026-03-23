import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<h1>hello</h1>} />
    </Routes>
  )
}

export default App
