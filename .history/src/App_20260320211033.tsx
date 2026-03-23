import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/new" element={<h1>new</h1>} />
      <Route path="/" element={<h1>hello</h1>} />
      <Route path="*" element={} />
    </Routes>
  )
}

export default App
