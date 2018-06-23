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
import Footer from './Footer';

import '../styles/app.css'

class App extends Component{

    constructor(){
        super();
        this.loadProducts = this.loadProducts.bind(this);
        this.loadBrands = this.loadBrands.bind(this);
        this.loadDistributors = this.loadDistributors.bind(this);
        this.loadMarkets = this.loadMarkets.bind(this);
        this.loadFieldForces = this.loadFieldForces.bind(this);

        this.state = {
            brands : [{"id":-1,"code":"-1","name":"All"}, {"id":1,"code":"100","name":"Apple"},{"id":2,"code":"200","name":"Microsoft"},{"id":3,"code":"300","name":"Dell"}],
            products : [],
            distributors : [],
            markets : [],
            fieldforces: []
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
        let distributors = [{"id":-1,"code":"-1","name":"All"}, {"id":1,"code":"100","name":"Dhaka"},{"id":2,"code":"200","name":"Chittagong"},{"id":3,"code":"300","name":"Comilla"}, {"id":4,"code":"300","name":"Sylhet"}];

        this.setState({
            distributors: distributors.filter(d=> (d.name.toLowerCase().startsWith(state.name.toLowerCase()) || state.name === "") 
                                            && (d.code.toLowerCase().startsWith(state.code.toLowerCase()) || state.code === ""))
        });
    }

    loadMarkets(){
        this.setState(
            {
                markets: [{text:"Dhaka",id:1,nodes:[{text:"Dhanmondi",id:2,nodes:[{id:3,text:"Road 15"},{id:4,text:"Road 32"}]},{id:5,text:"Kolabagan"}]},{id:6,text:"Chittagong"},{id:7,text:"Comilla"},{id:8,text:"Sylhet"},{id:9,text:"Borishal"}]
            }
        );
    }

    loadFieldForces(state){
       let fieldforces = [{id:1, distributorId:1, code: "100", name :"Faisal Ahmed"},{id:2, distributorId:2, code: "200", name :"Habibur Rahman"}, {id:3, distributorId:3, code: "300", name :"Shakib Ibn Daud"}];
       
       this.setState(
           {
                fieldforces: fieldforces.filter(f=>(f.distributorId===state.distributorId || state.distributorId===-1)
                                    && (f.code.toLocaleLowerCase().startsWith(state.code.toLocaleLowerCase()) || state.code === "")
                                    && (f.name.toLocaleLowerCase().startsWith(state.name.toLocaleLowerCase()) || state.name === ""))
           }
       );
    }

    render(){
        
        return (
            <div className="App">
                <Navigation/>       
                <div className="container-height">
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

                        <Route exact path="/Market" render={()=>
                                <Market markets={this.state.markets} loadMarkets = {this.loadMarkets}></Market>
                            }>
                        </Route>

                        <Route exact path="/FieldForce" render={()=>
                                <FieldForce {...this.state} loadDistributors={this.loadDistributors} onSearchClick={this.loadFieldForces}></FieldForce>
                            }>
                        </Route>
                    </Switch>
                </div>
                
                <Footer></Footer>            
            </div>
        )
    }
}

export default App