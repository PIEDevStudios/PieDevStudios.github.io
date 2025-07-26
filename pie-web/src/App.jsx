import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import './App.css'

const Home = lazy(() => import('./Components/Home.jsx'));
const Navigation = lazy(() => import('./Components/Navigation.jsx'));
const Footer = lazy(() => import('./Components/Footer.jsx'));
const Games = lazy(() => import('./Components/Games.jsx'));
const Blog = lazy(() => import('./Components/Blog.jsx'));
const About = lazy(() => import('./Components/About.jsx'));

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
