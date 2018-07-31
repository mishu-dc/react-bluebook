import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Form, Button, FormGroup, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';

class LogIn extends Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        console.log(this.props);
        this.props.verifyLogin({"userName": email, "password": password});
        if(this.props.user!=undefined && this.props.user.isAuthenticated===true){
            
        }
    }
    
    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Col smOffset={2} sm={5}>
                                <Col componentClass={ControlLabel} sm={10}> {this.props.user.message} </Col>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}> Email </Col>
                            <Col sm={5}> <FormControl type="email" placeholder="Email" id="email" name="email"/> </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}> Password </Col>
                            <Col sm={5}> <FormControl type="password" placeholder="Password" id="password" name="password" /> </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={5}>
                                <Checkbox id="rememberMe" name="rememberMe">Remember me</Checkbox>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup>
                            <Col smOffset={2} sm={5}>
                                <Button type="submit">Sign in</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
            </Grid>
        );
    }
}

export default LogIn;