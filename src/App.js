import logo from './logo.svg';
import './App.css';
import Headersection from './components/Headersection';
import Hostingsection from './components/Hostingsection';
import Nigeriansection from './components/Nigeriansection';
import Websitesection from './components/Websitesection';
import Footersection from './components/Footersection';
import Lemonsection from './components/Lemonsection';
import Storiessection from './components/Storiessection';
import Preloader from './components/Preloader';
import Backtop from './components/Backtop';

function App() {
  return (
    <div>
      <Preloader/>
      <Headersection />
      <Hostingsection />
      <Lemonsection/>
      <Storiessection/>
      <Nigeriansection/>
      <Websitesection/>
      <Footersection/>
      <Backtop/>
    </div>
  );
}

export default App;
