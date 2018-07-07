import React, {Component} from 'react';
import {Table, DropdownButton, MenuItem} from 'react-bootstrap';
import Pagination from "react-js-pagination";
import {Grid, Row, Col} from 'react-bootstrap';

class TableView extends Component{

    constructor(props){
        super(props);

        this.state={
            activePage:props.page,
            itemsPerPage:props.size
        };

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    handlePageChange(number){
        this.setState({activePage:number}, ()=>{this.loadData()});
    }

    handleSizeChange(eventKey){
        this.setState({itemsPerPage:eventKey, activePage:1},  ()=>{this.loadData()});
    }

    loadData(){
        this.props.loadData(this.state);
    }

    render(){
        return (
            <div>
                <Grid>
                    <Row className="show-grid fixed-height">
                        <Col>
                            <Table striped bordered condensed hover>
                                    <thead>
                                        <tr>
                                            {
                                                this.props.columns.map((name, index)=>
                                                    <th key={index}>{name}</th>
                                                )
                                            }
                                        </tr>
                                    </thead>                                   
                                    <tbody>
                                    
                                        { this.props.items.map((item, index)=>
                                            <tr key={index}>
                                                {
                                                    this.props.elements.map((element, colIndex)=>
                                                        <td key={colIndex}>{item[element]}</td>
                                                    )}
                                            </tr>
                                        )}
                                        
                                    </tbody>                                   
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8} className="no-padding"> 
                            <DropdownButton default  title={this.state.itemsPerPage}  id="size" onSelect={this.handleSizeChange}>
                                {
                                    this.props.pageSizes.map(
                                        (size, index)=>
                                            <MenuItem key={index} eventKey={size}>{size}</MenuItem>
                                    )
                                }
                            </DropdownButton>
                        </Col>
                        <Col xs={12} md={4} className="right-align no-padding">
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemsPerPage}
                                totalItemsCount={this.props.total}
                                onChange={this.handlePageChange}
                                />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default TableView;