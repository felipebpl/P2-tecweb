
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './components/pages/Home';
import Filmes from './components/pages/Filmes';
import SignUp from './components/pages/SignUp';
import Assistidos from './components/pages/Assistidos';
import Series from './components/pages/Series';
 

function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/filmes' exact component={Filmes}/>
        <Route path='/series' exact component={Series}/>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/minha-lista' exact component={Assistidos}/>
      </Switch>
    </Router>
      </> 
    
  );
}

export default App;
      