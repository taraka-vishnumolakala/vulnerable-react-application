import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ReflectedXssVulnerable from './components/reflected-xss';
import DomBasedXss from './components/dom-xss';
import StoredXss from './components/stored-xss';
import HomePageContent from './components/home-page';
import ReactAndXSS from './components/react-and-xss';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/reflected-xss" element={<ReflectedXssVulnerable />} />
          <Route path="/stored-xss" element={<StoredXss />} />
          <Route path="/dom-xss" element={<DomBasedXss />} />
          <Route path="/react-and-xss" element={<ReactAndXSS />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
