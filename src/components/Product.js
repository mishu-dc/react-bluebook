
import React, {Component} from 'react';
import {DropdownButton, MenuItem, Button, Table} from 'react-bootstrap';



class Product extends Component{

    constructor(){
        super();

        this.state={
            title: 'All'
        };

        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(eventKey, event){
        this.setState({title:eventKey});
    }

    render(){
        const brands = this.props.brands;
        const products = this.props.products;

        return (
            
            <div className="container">
                <h3>Products</h3>

                <div className="row">
                    <div className="col-xs-8">
                        <DropdownButton 
                            default
                                title={this.state.title}
                                id="brands"
                                bsSize="medium"
                                onSelect={this.handleSelection}
                                >
                            {brands.map(
                                (brand, index)=>
                                    <MenuItem key={index} eventKey={brand}>{brand}</MenuItem>
                                )
                            }
                        </DropdownButton>
                        <Button bsStyle="primary" onClick={()=>this.props.onSearchClick(this.state.title)}> Search</Button>
                    </div>
                    <div className="col-xs-12">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;