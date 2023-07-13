import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ReflectedXssVulnerable from './components/reflected-xss';
import DomBasedXss from './components/dom-xss';
import StoredXss from './components/stored-xss';

function App() {
  return (
    <BrowserRouter>
      <div class="container">
        <ul>
          <li> 
            <Link to="/reflected-xss">Reflected XSS</Link>
          </li>
          <li> 
            <Link to="/stored-xss">Stored XSS</Link>
          </li>
          <li> 
            <Link to="/dom-xss">Dom Based XSS</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/reflected-xss' element={<ReflectedXssVulnerable />}></Route>
          <Route exact path='/stored-xss' element={<StoredXss />}></Route>
          <Route exact path='/dom-xss' element={<DomBasedXss />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
