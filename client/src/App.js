import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from "./components/menuBar";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Container>
        <MenuBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Container>
    </Router>
  );
}

export default App;
