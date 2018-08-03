import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';
import TableView from './TableView';
import Loading from './Loading';

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

    componentDidMount(){
        if(this.props.user!==undefined && this.props.user.isAuthenticated===false){
            this.props.history.push("/LogIn?redirect=Brand");
        }
    }

    loadBrands(tableState){
        this.setState({
                page:tableState.activePage,
                size: tableState.itemsPerPage
            },()=>{this.props.fetchBrands(this.state)}
        );   
    }

    render(){
        const brands = this.props.brand!==undefined && this.props.brand.items!==undefined? this.props.brand.items.filter(b=> b.name!=="All"):[];
        const breadCrumbItems = [{ href: "/", name:"Home", isActive: false} , { href:"", name:"Brand", isActive: true }];
        const total = this.props.brand!==undefined && this.props.brand.total!==undefined?this.props.brand.total:0;

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
                        <Col xs={12} md={1}>
                            <Button bsStyle="primary" onClick={()=>this.props.fetchBrands(this.state)}> Search</Button>           
                        </Col>
                        <Col xs={12} md={1}>
                            <Loading {...this.props}></Loading>
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