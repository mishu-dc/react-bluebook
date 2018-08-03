import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    
    render(){
        if(this.props.user===undefined || this.props.user.isAuthenticated===true){
            return (
                <div className="container">
                    <div className="jumbotron">
                        <h1>Blue Book</h1>
                        <p className="lead">ReactJs App developed using ReactJs, React Bootstrap, React Router and Redux</p>                        
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Getting started</h2>
                            <p>
                                Either <Link to="/Register">Register</Link> or <Link to="/LogIn">Login</Link> to explore!
                            </p>
                            <p><a className="btn btn-default" href="/About">Learn more &raquo;</a></p>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="container">
                    <div className="jumbotron">
                        <h1>Blue Book</h1>
                        <p className="lead">ReactJs App developed using ReactJs, React Bootstrap, React Router and Redux</p>                        
                    </div>
                </div>
            )
        }
    }
}

export default Home;