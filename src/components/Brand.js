import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';
import TableView from './TableView';

class Brand extends Component{

    constructor(){
        super();
        this.state = {
            code:'',
            name:'',
            page:1,
            size:10,
            columns:["Id", "Code", "Name"],
            elements:["id", "code", "name"],
            pageSizes:[10,20,30,40,50]
        }

        this.loadBrands=this.loadBrands.bind(this);
    }

    loadBrands(tableState){
        this.setState({
                page:tableState.activePage,
                size: tableState.itemsPerPage
            },()=>{this.props.loadBrands(this.state)}
        );   
    }

    render(){
        const brands = this.props.brands.results!==undefined? this.props.brands.results.filter(b=> b.name!=="All"):[];
        const breadCrumbItems = [{ href: "/", name:"Home", isActive: false} , { href:"", name:"Brand", isActive: true }];
        const total = this.props.brands.total!==undefined?this.props.brands.total:0;

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
                            <Button bsStyle="primary" onClick={()=>this.props.loadBrands(this.state)}> Search</Button>           
                        </Col>
                    </Row>
                    
                    <Row className="div-separator">
                        <Col xs={12} md={12}>
                            <TableView {...this.state} total={total} items={brands} loadData={this.loadBrands}></TableView>    
                        </Col>
                    </Row>
                </Grid>
        );
    }
}

export default Brand;