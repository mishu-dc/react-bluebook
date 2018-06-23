import React, {Component} from 'react';
import TreeView from './TreeView';
import {Grid, Row, Col} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';

class Market extends Component{

    componentDidMount(){
        this.setState({
            markets: this.props.loadMarkets()
        });
    }

    render(){

        let data = this.props.markets;

        const breadCrumbItems = [{ href: "/", name:"Home", isActive: false} , { href:"", name:"Market", isActive: true }];  

        return (
            <Grid>
                 <Row className="show-grid">
                    <Col>
                        <BreadcrumbCreator items={breadCrumbItems}></BreadcrumbCreator>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <TreeView data={data} />,
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Market;