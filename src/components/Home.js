import React, {Component} from 'react';

class Home extends Component{
    
    render(){
        return (
            <div className="container">
                <div class="jumbotron">
                    <h1>Blue Book</h1>
                    <p class="lead">ReactJs App developed using ReactJs, React Bootstrap, React Router and Redux</p>
                    
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <h2>Getting started</h2>
                        <p>
                            Either <a href="/Account/Register">Register</a> or <a href="/Account/LogIn">LogIn</a> to explore!
                        </p>
                        <p><a class="btn btn-default" href="/About">Learn more &raquo;</a></p>
                    </div>
                    <div class="col-md-4">
                        
                    </div>
                    <div class="col-md-4">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;