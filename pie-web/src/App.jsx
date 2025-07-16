import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css'

const Home = lazy(() => import('./Components/Home.jsx'));

function App() {

  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
