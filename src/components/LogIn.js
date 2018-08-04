import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import Loading from './Loading';
import queryString  from 'query-string';


class LogIn extends Component{

    constructor(props){
        super(props);
        this.props.userLogout();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        let _this = this;
        
        this.props.verifyLogin({"userName": email, "password": password})
            .then(function(){
                if(_this.props.user!==undefined && _this.props.user.isAuthenticated){
                    const parsed = queryString.parse(_this.props.location.search);
                    if(parsed.redirect!==undefined){
                        _this.props.history.push("/" + parsed.redirect);       
                    }else{
                        _this.props.history.push("/");   
                    }
                }
            }
        );
    }

    render(){      
        return (
            <Grid>
                <Row className="show-grid">
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Col smOffset={2} sm={5}>
                                <Col componentClass={ControlLabel} sm={10}  className="error"> {this.props.user.message} </Col>
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
                            <Col smOffset={2} sm={1}>
                                <Button type="submit">Sign in</Button>
                            </Col>
                            <Col>
                                <Loading {...this.props}></Loading>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
            </Grid>
        );
    }
}

export default LogIn;