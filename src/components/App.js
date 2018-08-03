import React, { Component } from 'react';
import Navigation from './Navigation';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Brand from './Brand';
import Product from './Product';
import Distributor from './Distributor';
import Market from './Market';
import FieldForce from './FieldForce';
import Footer from './Footer';
import LogIn from './LogIn';
import Register from './Register';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as brandActions  from '../actions/brandActions';
import * as productActions from '../actions/productActions';
import * as distributorActions from '../actions/distributorActions';
import * as fieldforceActions from '../actions/fieldforceActions';
import * as marketActions from '../actions/marketActions';
import * as userActions from '../actions/userActions';

import '../styles/app.css';


function mapStateToProps(state){
    return {
        brand: state.brand,
        distributor : state.distributor,
        fieldforce: state.fieldforce,
        market: state.market,
        network: state.network,
        product: state.product,
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {
        ...brandActions,
        ...productActions,
        ...distributorActions,
        ...fieldforceActions,
        ...marketActions,
        ...userActions
    }, dispatch);
}

class App extends Component{

    render(){
        return (
            <div className="App">
                <Navigation {...this.props}/>       
                <div className="container-height">
                    <Switch>         
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/Home" component={Home} {...this.props}></Route>
                        <Route exact path="/About" component={About}></Route>
                        <Route exact path="/Contact" component={Contact}></Route>
                        <Route exact path="/LogOut" {...this.props} render={()=> this.props.userLogout()}></Route>
                        <Route exact path="/LogIn" render={()=><LogIn {...this.props}></LogIn>}></Route>
                        <Route exact path="/Register" render={()=><Register {...this.props}></Register>}></Route>

                        <Route exact path="/Brand" render={()=>
                                <Brand {...this.props}></Brand>
                            }>
                        </Route>

                        <Route exact path="/Product" render={()=>
                                <Product {...this.props}></Product>
                            }>
                        </Route>

                        <Route exact path="/Distributor" render={()=>
                                <Distributor {...this.props}></Distributor>
                            }>
                        </Route>

                        <Route exact path="/Market" render={()=>
                                <Market {...this.props}></Market>
                            }>
                        </Route>

                        <Route exact path="/FieldForce" render={()=>
                                <FieldForce {...this.props}></FieldForce>
                            }>
                        </Route>

                        <Route component={Home}></Route>

                    </Switch>
                </div>
                
                <Footer></Footer>            
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

