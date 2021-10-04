import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Alumni from './components/Alumni/Alumni';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/alumni'>
            <Alumni></Alumni>
          </Route>
          <Route exact path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
            <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
