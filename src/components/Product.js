
import React, {Component} from 'react';
import {DropdownButton, MenuItem, Button, Table} from 'react-bootstrap';



class Product extends Component{

    constructor(){
        super();
        this.searchProducts = this.searchProducts.bind(this);
    }

    searchProducts(){
        console.log("button clicked");
    }

    render(){
        const brands = ["Apple", "Dell", "Microsoft"];
        const products = [
            {
                "id":1,
                "code":"100",
                "brand":"Apple",
                "name":"iPhone 6"
            },
            {
                "id":2,
                "code":"200",
                "brand":"Apple",
                "name":"iPhone 7"
            },
            {
                "id":3,
                "code":"300",
                "brand":"Apple",
                "name":"iPhone 8"
            },
            {
                "id":4,
                "code":"400",
                "brand":"Apple",
                "name":"iPhone X"
            },
            {
                "id":5,
                "code":"500",
                "brand":"Microsoft",
                "name":"Windows 10"
            },
            {
                "id":6,
                "code":"600",
                "brand":"Microsoft",
                "name":"XBox One"
            },
            {
                "id":7,
                "code":"700",
                "brand":"Dell",
                "name":"Dell Printer"
            },
        ];

        return (
            
            <div className="container">
                <h2>Product</h2>
                <DropdownButton 
                       default
                        title='Select a brand'
                        id="brands"
                        >
                       {brands.map(
                           (brand, index)=>
                             <MenuItem key={index}>{brand}</MenuItem>
                         )
                       }
                </DropdownButton>
                <Button bsStyle="primary" onClick={this.searchProducts}>Search</Button>

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

        )
    }
}

export default Product;