import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import './App.css'

const Home = lazy(() => import('./components/Home.jsx'));
const Navigation = lazy(() => import('./components/Navigation.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const Games = lazy(() => import('./components/Games.jsx'));
const Blog = lazy(() => import('./components/Blog.jsx'));
const About = lazy(() => import('./components/About.jsx'));

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
