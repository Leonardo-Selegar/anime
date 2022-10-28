import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AnimeList from './pages/AnimeList'
import Login from './pages/Login';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Routes>
            <Route exact path="/" element={ <Login /> } />
            <Route exact path="/animes" element={ <AnimeList /> } />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
