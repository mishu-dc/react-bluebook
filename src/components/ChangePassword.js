import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Loading from './Loading';

class ChangePassword extends Component{

    constructor(){
        super();

        this.state = {
            isSuccess:false,
            message:'' 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.user!==undefined && this.props.user.isAuthenticated===false){
            this.props.history.push("/LogIn?redirect=ChangePassword");
            return;
        }
    }

    handleSubmit(event){
        event.preventDefault();

        const oldPassword = event.target.elements.oldPassword.value;
        const newPassword = event.target.elements.newPassword.value;
        const confirmPassword = event.target.elements.confirmPassword.value;

        let _this = this;
        
        this.props.changePassword( { "oldPassword": oldPassword, "newPassword": newPassword, "confirmPassword": confirmPassword }, this.props.user.user )
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
                                <Col componentClass={ControlLabel} sm={2}> Old Password </Col>
                                <Col sm={5}> <FormControl type="Password" placeholder="Old Password" id="oldPassword" name="oldPassword"/> </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}> New Password </Col>
                                <Col sm={5}> <FormControl type="Password" placeholder="New Password" id="newPassword" name="newPassword" /> </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}> Confirm Password </Col>
                                <Col sm={5}> <FormControl type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" /> </Col>
                            </FormGroup>                        
                            <FormGroup>
                                <Col smOffset={2} sm={1}>
                                    <Button type="submit">Update</Button>
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
                                <div><h3>Congratulation! your password has been changed successfully. </h3></div>
                            </Col>
                        </Row>
                </Grid>
            )
        }
    }
}

export default ChangePassword;