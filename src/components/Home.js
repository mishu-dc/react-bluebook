import React, {Component} from 'react';

class Home extends Component{
    
    render(){
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
                            Either <a href="/Account/Register">Register</a> or <a href="/Account/LogIn">LogIn</a> to explore!
                        </p>
                        <p><a className="btn btn-default" href="/About">Learn more &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;