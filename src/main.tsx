import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import FluidSim from './pages/FluidSim'
import Missions from './pages/Missions'
import About from './pages/About'
import Basics from './pages/Basics'
import Science from './pages/Science'
import Gallery from './pages/Gallery'
import Insights from './pages/Insights'
import Resources from './pages/Resources'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="missions" element={<Missions />} />
          <Route path="fluid" element={<FluidSim />} />
          <Route path="basics" element={<Basics />} />
          <Route path="science" element={<Science />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="insights" element={<Insights />} />
          <Route path="resources" element={<Resources />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
