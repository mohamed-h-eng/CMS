// import { useState } from 'react'
import './App.css'
// import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'

function App() {
  // const [page, setPage] = useState('home')

  return (
    <>
      {/* <header className="app-header">
        <button
          className={page === 'home' ? 'active' : ''}
          type="button"
          onClick={() => setPage('home')}
        >
          Home
        </button>
        <button
          className={page === 'dashboard' ? 'active' : ''}
          type="button"
          onClick={() => setPage('dashboard')}
        >
          Dashboard
        </button>
      </header>

      {page === 'dashboard' ? <Dashboard /> : <Home />} */}
      <Home />
    </>
  );
}

export default App;
