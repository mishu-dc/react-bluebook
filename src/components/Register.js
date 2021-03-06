import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loading from './Loading';

class Register extends Component{
    constructor(props){
        super(props);

        this.state = {
            isSuccess:false,
            message:''  
        };

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
                if(_this.props.network!==undefined){
                    if(_this.props.network.status==='err'){
                        _this.setState({isSuccess:false, message:_this.props.network.errorMessage });
                    }
                    else{
                        _this.setState({isSuccess:true});
                    }
                }                
            }
        );
    }

    render(){
        if(!this.state.isSuccess){
            return(
                <Grid>
                    <Row className="show-grid">
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Col smOffset={2} sm={6}>
                                    <Col componentClass={ControlLabel} sm={10} className="error"> <span>  {this.state.message}  </span></Col>
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
        else{
            return (
                <Grid>
                        <Row className="show-grid">
                            <Col smOffset={2} sm={8}>
                                <div><h3>Congratulation! user accout has been created successfully. Please click {<Link to="/LogIn">here</Link>} to login.</h3></div>
                            </Col>
                        </Row>
                </Grid>
            )
        }
    }
    
}

export default Register;

