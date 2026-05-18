import Dashboard from './pages/Dashboard/Dashboard'
import styles from './App.module.css'
import Home from './pages/Home/Home'
import {Link, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route index path="/home"element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
</>
)}
export default App;
