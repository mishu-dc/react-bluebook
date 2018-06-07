import React, {Component} from 'react';
import Navigation from './Navigation';

import '../styles/app.css'

class App extends Component{
    render(){
        return (
            <div className="App">
                <Navigation/>                
            </div>
        )
    }
}

export default App