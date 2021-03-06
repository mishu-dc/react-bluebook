import React, {Component} from 'react';

class About extends Component{
    render(){
        return (
            <div className="container">
                <div className="list-group">
                    <a className="list-group-item active">
                        Blue Book is a ReactJs application. It has the following technologies:
                    </a>
                    <a className="list-group-item">
                        <h4>React Js Components</h4>
                        <p className="list-group-item-text">react 16.4.0</p>
                        <p className="list-group-item-text">react-dom 16.4.0</p>
                        <p className="list-group-item-text">react-bootstrap 0.32.1</p>
                        <p className="list-group-item-text">react-router 4.3.1</p>
                        <p className="list-group-item-text">react-router-bootstrap 0.24.4</p>
                        <p className="list-group-item-text">react-router-dom 4.3.1</p>
                        <p className="list-group-item-text">react-scripts 1.1.4</p>
                        <p className="list-group-item-text">prop-types 15.6.2</p>
                        <p className="list-group-item-text">react-js-pagination 3.0.2</p>
                        <p className="list-group-item-text">query-string 5.1.1</p>
                        <p className="list-group-item-text">universal-cookie 2.2.0</p>
                    </a>

                    <a className="list-group-item">
                        <h4>React Redux</h4>
                        <p className="list-group-item-text">redux 4.0.0</p>
                        <p className="list-group-item-text">redux-thunk 2.3.0</p>
                        <p className="list-group-item-text">react-redux 5.0.7</p>
                    </a>

                    <a className="list-group-item">
                        <h4>Web API</h4>
                    </a>
                </div>
            </div>
        )
    }
}

export default About;