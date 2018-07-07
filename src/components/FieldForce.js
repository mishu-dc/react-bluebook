
import React, {Component} from 'react';
import {DropdownButton, MenuItem, Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';
import TableView from './TableView';

class FieldForce extends Component{

    constructor(){
        super();
        this.state = {
            distributorId:-1,
            distributor:"All",
            code:'',
            name:'',
            page:1,
            size:10,
            columns:["Id", "Code", "Name"],
            elements:["id", "code", "name"],
            pageSizes:[10,20,30,40,50]
        }

        this.handleSelection = this.handleSelection.bind(this);
        this.loadFieldForces = this.loadFieldForces.bind(this);
    }

    handleSelection(eventKey){
        if(eventKey!==-1){
            this.setState(
            {
                distributorId:eventKey,
                distributor: this.props.distributors.results.filter(d=>d.id===eventKey)[0].name
            });
        }else{
            this.setState(
            {
                distributorId:-1,
                distributor: "All"
            });
        }        
    }

    loadFieldForces(tableState){
        this.setState({
            page:tableState.activePage,
            size: tableState.itemsPerPage
        },()=>{this.props.loadFieldForces(this.state)}
    );  
    }

    componentDidMount(){
        this.props.loadDistributors();
    }

    render(){

        let distributors = this.props.distributors.results!==undefined?this.props.distributors.results:[];
        const breadCrumbItems = [{ href: "/", name:"Home", isActive: false} , { href:"", name:"Field Force", isActive: true }];    
        const fieldforces = this.props.fieldforces.results!==undefined?this.props.fieldforces.results:[];
        const total = this.props.fieldforces.total!==undefined?this.props.fieldforces.total:0;

        distributors = [{ id:-1, code:"", name:"All"}, ...distributors];

        return (
            <Grid>
                    <Row className="show-grid">
                        <Col>
                            <BreadcrumbCreator items={breadCrumbItems}></BreadcrumbCreator>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={2}>
                                <DropdownButton default  title={this.state.distributor}  id="distributors" onSelect={this.handleSelection}>
                                        {
                                            distributors.map(
                                                (distributor, index)=>
                                                    <MenuItem key={index} eventKey={distributor.id}>{distributor.name}</MenuItem>
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
                            <Button bsStyle="primary" onClick={()=>this.props.loadFieldForces(this.state)}> Search</Button>           
                        </Col>
                    </Row>
                    
                    <Row className="div-separator">
                        <Col xs={12} md={12}>
                            <TableView {...this.state} total={total} items={fieldforces} loadData={this.loadFieldForces}></TableView>    
                        </Col>
                    </Row>
                </Grid>
        )
    }
}

export default FieldForce;