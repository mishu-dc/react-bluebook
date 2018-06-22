import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';

class Brand extends Component{

    constructor(){
        super();
        this.state = {
            code:'',
            name:''
        }
    }

    render(){
        const brands = this.props.brands.filter(b=> b.name!=="All");
        const breadCrumbItems = [{ href: "/", name:"Home", isActive: false} , { href:"", name:"Brand", isActive: true }];

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
                                                brands.map((brand, index)=>
                                                    <tr key={brand.id}>
                                                        <td>{brand.id}</td>
                                                        <td>{brand.code}</td>
                                                        <td>{brand.name}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                    </Table>  
                        </Col>
                    </Row>
                </Grid>
        );
    }
}

export default Brand;