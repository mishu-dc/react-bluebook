import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Loading from './Loading';

class Register extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        const email = event.target.elements.registerEmail.value;
        const password = event.target.elements.registerPassword.value;
        const confirmPassword = event.target.elements.confirmPassword.value;

        let _this = this;
        
        this.props.userRegister( { "email": email, "password": password, "confirmPassword": confirmPassword } )
            .then(function(){
                _this.props.history.push("/LogIn");       
            }
        );
    }

    render(){
        return(
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
                            <Col sm={5}> <FormControl type="email" placeholder="Email" id="registerEmail" name="registerEmail"/> </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}> Password </Col>
                            <Col sm={5}> <FormControl type="password" placeholder="Password" id="registerPassword" name="registerPassword" /> </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}> Confirm Password </Col>
                            <Col sm={5}> <FormControl type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" /> </Col>
                        </FormGroup>                        
                        <FormGroup>
                            <Col smOffset={2} sm={1}>
                                <Button type="submit">Register</Button>
                            </Col>
                            <Col>
                                <Loading {...this.props}></Loading>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
            </Grid>
        )
    }
}

export default Register;

