
import React, {Component} from 'react';
import {DropdownButton, MenuItem, Button, Table} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';



class Product extends Component{

    constructor(){
        super();

        this.state={
            brand: 'All',
            code:'',
            name:''
        };

        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(eventKey, event){
        this.setState({brand:eventKey});
    }

    render(){
        const brands = this.props.brands;
        const products = this.props.products;
        const breadCrumbItems = [{ href: "/", name:"Home", isActive: false} , { href:"", name:"Product", isActive: true }];

        return (
                <Grid>
                    <Row className="show-grid">
                        <Col>
                            <BreadcrumbCreator items={breadCrumbItems}></BreadcrumbCreator>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={2}>
                                <DropdownButton default  title={this.state.brand}  id="brands" onSelect={this.handleSelection}>
                                        {
                                            brands.map(
                                                (brand, index)=>
                                                    <MenuItem key={index} eventKey={brand.name}>{brand.name}</MenuItem>
                                            )
                                        }
                                </DropdownButton>
                        </Col>
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
                                                    <th>Brand</th>
                                                    <th>Product</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                products.map((product, index)=>
                                                    <tr key={product.id}>
                                                        <td>{product.id}</td>
                                                        <td>{product.code}</td>
                                                        <td>{product.brand}</td>
                                                        <td>{product.name}</td>
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

export default Product;