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

    constructor(){
        super();
        this.loadProducts = this.loadProducts.bind(this);

        this.state = {
            brands : ["All","Apple", "Dell", "Microsoft"],
            products : []
        }
    }

    loadProducts(brand){

        let products = [{"id":1,"code":"100","brand":"Apple","name":"iPhone 6"},{"id":2,"code":"200","brand":"Apple","name":"iPhone 7"},{"id":3,"code":"300","brand":"Apple","name":"iPhone 8"},{"id":4,"code":"400","brand":"Apple","name":"iPhone X"},{"id":5,"code":"500","brand":"Microsoft","name":"Windows 10"},{"id":6,"code":"600","brand":"Microsoft","name":"XBox One"},{"id":7,"code":"700","brand":"Dell","name":"Dell Printer"}];
        
        this.setState(
            {
                products:products.filter((p)=>(p.brand===brand) || brand==="All")
            }
        );
    }

    render(){
        
        return (
            <div className="App">
                <Navigation/>       
                <Switch>         
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Home" component={Home}></Route>
                    <Route exact path="/About" component={About}></Route>
                    <Route exact path="/Contact" component={Contact}></Route>
                    <Route exact path="/Brand" render={()=>
                        (
                            <Brand></Brand>
                        )
                    }></Route>
                    <Route exact path="/Product" render={()=>
                            <Product brands={this.state.brands} products={this.state.products} onSearchClick={this.loadProducts}></Product>
                        }>
                    </Route>
                    <Route exact path="/Distributor" component={Distributor}></Route>
                    <Route exact path="/Market" component={Market}></Route>
                    <Route exact path="/FieldForce" component={FieldForce}></Route>
                </Switch>
            </div>
        )
    }
}

export default App