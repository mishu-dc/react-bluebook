
import React, {Component} from 'react';
import {DropdownButton, MenuItem, Button, Table} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';



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

    FieldGroup({ id, label, help, ...props }) {
        return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
          </FormGroup>
        );
      }

    render(){
        const brands = this.props.brands;
        const products = this.props.products;

        return (
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <Form inline>
                                <FormGroup>
                                <DropdownButton default  title={this.state.brand}  id="brands"onSelect={this.handleSelection}>
                                        {
                                            brands.map(
                                                (brand, index)=>
                                                    <MenuItem key={index} eventKey={brand}>{brand}</MenuItem>
                                            )
                                        }
                                </DropdownButton>
                                {' '}
                                <FormControl type="text" value={this.state.code}  placeholder="Enter Code" onChange={(e)=>this.setState({code:e.target.value})}/>
                                {' '}
                                <FormControl type="text" value={this.state.name}  placeholder="Enter Name" onChange={(e)=> this.setState({name:e.target.value})}/>
                                {' '}
                                <Button bsStyle="primary" onClick={()=>this.props.onSearchClick(this.state)}> Search</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="show-grid">{'  '}</Row>
                    <Row className="show-grid">
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