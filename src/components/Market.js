import React, {Component} from 'react';
import TreeView from './TreeView';
import {Grid, Row, Col} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';

class Market extends Component{

    componentDidMount(){
        if(this.props.user!==undefined && this.props.user.isAuthenticated===false){
            this.props.history.push("/LogIn?redirect=Market");
            return;
        }
        this.props.fetchMarkets();
    }

    render(){

        let data = this.props.market!==undefined && this.props.market.items !== undefined? this.props.market.items:[];

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