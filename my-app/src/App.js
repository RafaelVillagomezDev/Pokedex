import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home/home'
import About from './pages/about/about'
import Error from './pages/error/error'
function App() {
  return (
    <div id="app" className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
