// import logo from './favicon.svg';
import React, { useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './App.css';
import AppRouter from './Router';
import Loading from './Loading';

function App () {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    AOS.init();
    AOS.refresh();
  }, []);

  return <> {isLoaded ? <AppRouter /> : <Loading />}</>;
}

export default App;


/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/