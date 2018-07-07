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
            domain:'http://localhost:59821/',
            brands : [],
            products : [],
            distributors : [],
            markets : [],
            fieldforces: []
        }
    }
    

    isValid(item){
        if(item===undefined) return false;
        if(item.length===0) return false;
        return true;
    }

    loadProducts(state){
        let url = this.state.domain + "/api/products?";

        if(state!==undefined){
            if(this.isValid(state.code)){
                url += "code=" + state.code + "&";
            }

            if(this.isValid(state.name)){
                url += "name=" + state.name + "&";
            }

            if(this.isValid(state.brandId)){
                url += "brandId=" + state.brandId + "&";
            }

            if(this.isValid(state.page)){
                url += "page=" + state.page + "&";;
            }

            if(this.isValid(state.size)){
                url += "size=" + state.size + "&";;
            }
        }
        
        fetch(url)
            .then(res => res.json())
            .then((response) => {
                        this.setState({
                            products: response
                        });
                    },
                    (error) => {
                        console.log(error);
                    }
            );
    }

    loadBrands(state){
        let url = this.state.domain + "/api/brands?";

        if(state!==undefined){
            if(this.isValid(state.code)){
                url += "code=" + state.code + "&";
            }

            if(this.isValid(state.name)){
                url += "name=" + state.name + "&";
            }

            if(this.isValid(state.page)){
                url += "page=" + state.page + "&";;
            }

            if(this.isValid(state.size)){
                url += "size=" + state.size + "&";;
            }
        }
        
        fetch(url)
            .then(res => res.json())
            .then((response) => {
                        this.setState({
                            brands: response
                        });
                    },
                    (error) => {
                        console.log(error);
                    }
            );
    }  
    

    loadDistributors(state){
        let url = this.state.domain + "/api/distributors?";

        if(state!==undefined){          
            if(this.isValid(state.code)){
                url += "code=" + state.code + "&";
            }

            if(this.isValid(state.name)){
                url += "name=" + state.name + "&";
            }

            if(this.isValid(state.page)){
                url += "page=" + state.page + "&";;
            }

            if(this.isValid(state.size)){
                url += "size=" + state.size + "&";;
            }
        }
        
        fetch(url)
            .then(res => res.json())
            .then((response) => {
                        this.setState({
                            distributors: response
                        });
                    },
                    (error) => {
                        console.log(error);
                    }
            );
    }

    loadMarkets(){
        this.setState(
            {
                markets: [{name:"Dhaka",id:1,chields:[{name:"Dhanmondi",id:2,chields:[{id:3,name:"Road 15"},{id:4,name:"Road 32"}]},{id:5,name:"Kolabagan"}]},{id:6,name:"Chittagong"},{id:7,name:"Comilla"},{id:8,name:"Sylhet"},{id:9,name:"Borishal"}]
            }
        );
    }

    loadFieldForces(state){
        let url = this.state.domain + "/api/fieldforces?";

        if(state!==undefined){          
            if(this.isValid(state.code)){
                url += "code=" + state.code + "&";
            }

            if(this.isValid(state.name)){
                url += "name=" + state.name + "&";
            }

            if(this.isValid(state.distributorId)){
                url += "distributorId=" + state.distributorId + "&";
            }

            if(this.isValid(state.page)){
                url += "page=" + state.page + "&";;
            }

            if(this.isValid(state.size)){
                url += "size=" + state.size + "&";;
            }
        }
        
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                        this.setState({
                            fieldforces: result
                        });
                    },
                    (error) => {
                        console.log(error);
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
                                <Brand brands = {this.state.brands} brands={this.state.brands} loadBrands = {this.loadBrands}></Brand>
                            }>
                        </Route>

                        <Route exact path="/Product" render={()=>
                                <Product brands={this.state.brands} products={this.state.products} loadProducts={this.loadProducts} loadBrands={this.loadBrands}></Product>
                            }>
                        </Route>

                        <Route exact path="/Distributor" render={()=>
                                <Distributor distributors={this.state.distributors} loadDistributors = {this.loadDistributors}></Distributor>
                            }>
                        </Route>

                        <Route exact path="/Market" render={()=>
                                <Market markets={this.state.markets} loadMarkets = {this.loadMarkets}></Market>
                            }>
                        </Route>

                        <Route exact path="/FieldForce" render={()=>
                                <FieldForce {...this.state} loadDistributors={this.loadDistributors} loadFieldForces={this.loadFieldForces}></FieldForce>
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