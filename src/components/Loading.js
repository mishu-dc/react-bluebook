import React, {Component} from 'react';

import {Image} from 'react-bootstrap';

import loadingbar from '../images/loading-circle.gif';

class Loading extends Component{
    render(){
        return (
            <Image  src={loadingbar} responsive className={this.props.network!==undefined && this.props.network.isFetching?"":"hide"}/>
        )
    }
}

export default Loading;