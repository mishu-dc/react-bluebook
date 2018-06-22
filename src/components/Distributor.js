import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';

class Distributor extends Component{

    constructor(){
        super();
        this.state = {
            code: '',
            name: ''
        }
    }

    render(){
        let distributors = this.props.distributors;
        let breadCrumbItems = [{ href: "/", name:"Home", isActive: false} , { href:"", name:"Distributor", isActive: true }];

        return (
                <Grid>
                    <Row className="show-grid">
                        <Col>
                            <BreadcrumbCreator items={breadCrumbItems}></BreadcrumbCreator>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={2}>
                            <FormControl type="text" value={this.state.code}  placeholder="Enter Code" onChange={(e)=>this.setState({code:e.target.value})}/>           
                        </Col>
                        <Col xs={12} md={2}>
                            <FormControl type="text" value={this.state.name}  placeholder="Enter Name" onChange={(e)=> this.setState({name:e.target.value})}/>            
                        </Col>
                        <Col xs={12} md={2}>
                            <Button bsStyle="primary" onClick={()=>this.props.onSearchClick(this.state)}> Search</Button>           
                        </Col>
                    </Row>
                    
                    <Row className="div-separator">
                        <Col xs={12} md={12}>
                            <Table striped bordered condensed hover>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                distributors.map((distributor, index)=>
                                                    <tr key={distributor.id}>
                                                        <td>{distributor.id}</td>
                                                        <td>{distributor.code}</td>
                                                        <td>{distributor.name}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                    </Table>  
                        </Col>
                    </Row>
                </Grid>
        )
    }
}

export default Distributor;