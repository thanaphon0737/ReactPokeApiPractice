import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import { BrowserRouter,Routes, Route } from "react-router";
import Contact from './Contact.jsx';
import PokemonDetail from './PokemonDetail.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="pokemon/:pokemonId" element={<PokemonDetail />} />
    </Routes>
    
  </BrowserRouter>
  </StrictMode>
)
