import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Hash } from 'crypto';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 6;
  }
  
  handleUsername(text){
    this.setState({username: text.target.value})
  }

  handlePassword(text){
    this.setState({password: text.target.value})
  }
  goHome(){
    var formUser = [];
    console.log('form user  :', formUser);
    formUser.push('username='+this.state.username  );
    formUser.push('password='+this.state.password );
   formUser = formUser.join('&');
   const data={
    "username":this.state.username,
    "password":this.state.password
    }
    localStorage.setItem('username', data.username);
    fetch("http://mrkode.com/CCPService/webresources/user/login", {
      mode: 'no-cors',
      method: 'POST',
      data: {
      data
    },
    headers : {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formUser
  }).then((response) => {
    // console.log('ini 1', response);
    // console.log('ini 2', response.headers.values);
    // console.log('ini 3', response.headers.keys);
    if(response.status === 200){
      console.log("Login successfull");
      window.location.hash = "/dashboard";
      localStorage.setItem('status', response.status);
      }else if(response.status === 400){
        console.log("Username password do not match");
        console.log('2');
        alert("username password do not match");
      window.location.hash = "/";
        }
        else{
        console.log("Username does not exists");
        alert("Username does not exist");
        window.location.hash = "/";
        }
        })
        .catch(function (error) {
        console.log(error);
      });
    }
  goLogin(){
    window.location.hash = '/login';
    }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4" style={{ width: '44%' }}>
                  <CardBody>
                    <Form>
                      <h1>Login Monitoring 21</h1>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="username" placeholder="Username" autoComplete="username" onChange={(text) => {this.handleUsername(text)}}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={(text) => {this.handlePassword(text)}}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" disabled={!this.validateForm()} className="px-4" onClick={() => {this.goHome()}}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>CINEMA XXI</h2>
                      <h4>Central Control Cinema Application</h4>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
