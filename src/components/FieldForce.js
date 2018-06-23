
import React, {Component} from 'react';
import {DropdownButton, MenuItem, Button, Table} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import BreadcrumbCreator from './BreadcrumbCreator';

class FieldForce extends Component{

    constructor(){
        super();
        this.state = {
            distributorId:-1,
            distributor:"All",
            code:'',
            name:''
        }

        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(eventKey, event){
        this.setState({distributorId:eventKey});
        this.setState({distributor: this.props.distributors.filter(d=>d.id===eventKey)[0].name});
    }

    componentDidMount(){
        this.props.loadDistributors(this.state);
    }

    render(){

        const distributors = this.props.distributors;
        const breadCrumbItems = [{ href: "/", name:"Home", isActive: false} , { href:"", name:"Field Force", isActive: true }];    
        const fieldforces = this.props.fieldforces;

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
                                                fieldforces.map((fieldforce, index)=>
                                                    <tr key={fieldforce.id}>
                                                        <td>{fieldforce.id}</td>
                                                        <td>{fieldforce.code}</td>
                                                        <td>{fieldforce.name}</td>
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

export default FieldForce;