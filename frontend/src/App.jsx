<<<<<<< HEAD
import "./App.css";
import Dashboard from './pages/Dashboard/Dashboard'
=======
import { useState } from 'react'
import styles from './App.module.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import {Link, Routes, Route} from 'react-router-dom'

>>>>>>> master
function App() {
  const [page, setPage] = useState('home')

  return (
    <>
<<<<<<< HEAD
      <Dashboard/>
=======
      <Routes>
        <Route index path="/home"element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
>>>>>>> master
    </>
  );
}

export default App;
