import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import CertificateSection from './components/sections/CertificateSection';
import ConnectHub from './components/sections/ConnectHub';
import Coding from './components/sections/Coding';
import NotFound from './components/sections/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/sections/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="coding" element={<Coding />} />
          <Route path="contact" element={<Contact />} />
          <Route path="certificates" element={<CertificateSection />} />
          <Route path="connect" element={<ConnectHub />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
