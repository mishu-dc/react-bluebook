
import React, {Component} from 'react';
import {DropdownButton, MenuItem, Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';
import TableView from './TableView';



class Product extends Component{

    constructor(){
        super();

        this.state={
            brand: 'All',
            brandId: -1,
            code:'',
            name:'',
            page:1,
            size:10,
            columns:["Id", "Code", "Brand", "Product"],
            elements:["id", "code", "brandName", "name"],
            pageSizes:[10,20,30,40,50]
        };

        this.handleSelection = this.handleSelection.bind(this);
        this.loadProducts = this.loadProducts.bind(this);
    }

    loadProducts(tableState){
        this.setState({
                page:tableState.activePage,
                size: tableState.itemsPerPage
            },()=>{this.props.loadProducts(this.state)}
        );        
    }

    handleSelection(eventKey){
        if(eventKey===-1){
            this.setState({brandId:-1, brand:"All"});
        }
        else{
            let brand = this.props.brands.results.filter(b=>b.id === eventKey);
            this.setState({brandId:eventKey, brand:brand[0].name});
        }
    }

    componentDidMount(){
        this.props.loadBrands();
    }

    render(){

        let brands = this.props.brands.results!==undefined?this.props.brands.results:[];
        const products = this.props.products.results!==undefined?this.props.products.results:[];
        const total = this.props.products.total!==undefined?this.props.products.total:0;

        brands = [{ id:-1, code:"", name:"All"}, ...brands];

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
                                                    <MenuItem key={index} eventKey={brand.id}>{brand.name}</MenuItem>
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
                        <Col xs={12} md={3}>
                            <Button bsStyle="primary" onClick={()=>this.props.loadProducts(this.state)}> Search</Button>           
                        </Col>
                    </Row>
                    
                    <Row className="div-separator">
                        <Col xs={12} md={12}>
                            <TableView {...this.state} total={total} items={products} loadData={this.loadProducts}></TableView>    
                        </Col>
                    </Row>
                </Grid>
            
        )
    }
}

export default Product;