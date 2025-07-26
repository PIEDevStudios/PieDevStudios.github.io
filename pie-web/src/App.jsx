import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import './App.css'

const Home = lazy(() => import('./pages/Home.jsx'));
const Navigation = lazy(() => import('./components/Navigation.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const Games = lazy(() => import('./pages/Games.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const About = lazy(() => import('./pages/About.jsx'));

function App() {

  return (
    <Router basename='/'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Games' element={<Games />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
