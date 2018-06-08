import React, {Component} from 'react';
import Navigation from './Navigation';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Brand from './Brand';
import Product from './Product';
import Distributor from './Distributor';
import Market from './Market';
import FieldForce from './FieldForce';




import '../styles/app.css'

class App extends Component{
    render(){
        return (
            <div className="App">
                <Navigation/>       
                <Switch>         
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Home" component={Home}></Route>
                    <Route exact path="/About" component={About}></Route>
                    <Route exact path="/Contact" component={Contact}></Route>
                    <Route exact path="/Brand" component={Brand}></Route>
                    <Route exact path="/Product" component={Product}></Route>
                    <Route exact path="/Distributor" component={Distributor}></Route>
                    <Route exact path="/Market" component={Market}></Route>
                    <Route exact path="/FieldForce" component={FieldForce}></Route>
                </Switch>
            </div>
        )
    }
}

export default App