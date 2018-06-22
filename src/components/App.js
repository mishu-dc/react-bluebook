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
        this.loadBrands = this.loadBrands.bind(this);
        this.loadDistributors = this.loadDistributors.bind(this);

        this.state = {
            brands : [{"id":-1,"code":"-1","name":"All"}, {"id":1,"code":"100","name":"Apple"},{"id":2,"code":"200","name":"Microsoft"},{"id":3,"code":"300","name":"Dell"}],
            products : [],
            distributors : []
        }
    }

    loadProducts(state){
        let products = [{"id":1,"code":"100","brand":"Apple","name":"iPhone 6"},{"id":2,"code":"200","brand":"Apple","name":"iPhone 7"},{"id":3,"code":"300","brand":"Apple","name":"iPhone 8"},{"id":4,"code":"400","brand":"Apple","name":"iPhone X"},{"id":5,"code":"500","brand":"Microsoft","name":"Windows 10"},{"id":6,"code":"600","brand":"Microsoft","name":"XBox One"},{"id":7,"code":"700","brand":"Dell","name":"Dell Printer"}];
        
        this.setState(
            {
                products:products.filter(p=>(p.brand===state.brand || state.brand==="All") 
                                            && (p.code.toLocaleLowerCase().startsWith(state.code.toLocaleLowerCase()) || state.code==="")
                                            && (p.name.toLocaleLowerCase().startsWith(state.name.toLocaleLowerCase()) || state.name==="")
                                        )
            }
        );
    }

    loadBrands(state){
        let brands = [{"id":1,"code":"100","name":"Apple"},{"id":2,"code":"200","name":"Microsoft"},{"id":3,"code":"300","name":"Dell"}];

        this.setState(
            {
                brands: brands.filter(b=>b.name!=="All"
                                         && (b.name.toLocaleLowerCase().startsWith(state.name.toLocaleLowerCase()) || state.name === "")
                                         && (b.code.toLocaleLowerCase().startsWith(state.code.toLocaleLowerCase()) || state.code === ""))
            }
        );
    }   

    loadDistributors(state){
        let distributors = [{"id":1,"code":"100","name":"Dhaka"},{"id":2,"code":"200","name":"Chittagong"},{"id":3,"code":"300","name":"Comolla"}, {"id":4,"code":"300","name":"Sylhet"}];

        this.setState({
            distributors: distributors.filter(d=> (d.name.toLowerCase().startsWith(state.name.toLowerCase()) || state.name === "") 
                                            && (d.code.toLowerCase().startsWith(state.code.toLowerCase()) || state.code === ""))
        });
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
                            <Brand brands = {this.state.brands} onSearchClick = {this.loadBrands}></Brand>
                        }>
                    </Route>

                    <Route exact path="/Product" render={()=>
                            <Product brands={this.state.brands} products={this.state.products} onSearchClick={this.loadProducts}></Product>
                        }>
                    </Route>

                    <Route exact path="/Distributor" render={()=>
                            <Distributor distributors={this.state.distributors} onSearchClick = {this.loadDistributors}></Distributor>
                        }>
                    </Route>

                    <Route exact path="/Market" component={Market}></Route>
                    <Route exact path="/FieldForce" component={FieldForce}></Route>
                </Switch>
            </div>
        )
    }
}

export default App