import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';
import TableView from './TableView';

class Distributor extends Component{

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

        this.loadDistributors = this.loadDistributors.bind(this);
    }

    loadDistributors(tableState){
        this.setState({
                page:tableState.activePage,
                size: tableState.itemsPerPage
            },()=>{this.props.loadDistributors(this.state)}
        );   
    }

    render(){
        let distributors = this.props.distributors.results!==undefined?this.props.distributors.results:[];
        let total = this.props.distributors.total!==undefined?this.props.distributors.total:0;
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
                            <Button bsStyle="primary" onClick={()=>this.props.loadDistributors(this.state)}> Search</Button>           
                        </Col>
                    </Row>
                    
                    <Row className="div-separator">
                        <Col xs={12} md={12}>
                            <TableView {...this.state} total={total} items={distributors} loadData={this.loadDistributors}></TableView>    
                        </Col>
                    </Row>
                </Grid>
        )
    }
}

export default Distributor;