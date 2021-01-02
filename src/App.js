import Header from "./components/Header";
import Nav from "./components/Nav";
import Measures from "./components/Measures"
import FetchContent from "./components/FetchContent";
import MoreInfo from "./components/MoreInfo";
import CoutryData from "./components/CoutryData";
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={ FetchContent} />
          <Route   path="/measures" component={ Measures} />
          <Route exact path="/more" component={ MoreInfo} />
          <Route  path="/more/:id" component={ CoutryData } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
