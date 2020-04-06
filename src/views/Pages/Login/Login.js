import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import { Hash } from 'crypto';
import axios from 'axios';
// import  { IPSERVICE, } from '../../config';
import { Formik } from 'formik';
// import logo from '../../../assets/img/brand/cb.png';
// import background from '../../../assets/img/brand/orders.png';
// import md5 from 'md5-hash';
// import MD5 from "crypto-js/md5";

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      defaultValue:{
      username: '',
      password: ''
      }
    }
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 4;
  }
  
  handleUsername(text){
    this.setState({username: text.target.value})
  }

  handlePassword(text){
    this.setState({password: text.target.value})
  }

  onFormSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    }
  // goHome(values){
  //   // var MD5 = require("crypto-js/md5");
  //   //console.log(MD5("cinema123").toString());

  // // var payload ='{"username":"'+values.username+'","password":"'+MD5(values.password).toString()+'" }';
  // // var payload ='{"username":"'+values.username+'","password":"'+values.password+'" }';
  // localStorage.setItem('username', values.username);
  // axios.post("http://dslog.mrkode.com/dslog-services/api/user/login",payload, {
  //   // fetch("http://"+IPSERVICE+PATH_SERVICE+"auth", {
  //   // this.serverRequest = axios.post("http://"+IPSERVICE+"/auth",payload, {
  //   // this.serverRequest = axios.post("http://"+IPSERVICE+"/auth",payload, {
  //   // mode: 'no-cors',
  //   // method: 'POST',
  //   headers : {
  //       Accept: 'application/json',
  //       'Access-Control-Allow-Origin':'*',
  //       'Content-Type': 'application/json'
  //       },
  //   // body: payload
  //   })
  //   .then((response) => {
  //   //console.log('1', response.data);
  //   if(response.data.sessionId !== null){
  //     // const userToken = response.headers.authorization.replace('Bearer', '');
  //     window.location.hash = "/";
  //     localStorage.setItem('sessionId', response.data.sessionId);
  //     localStorage.setItem('username', response.data.username);
  //     localStorage.setItem('userId', response.data.id);
  //     localStorage.setItem('group', response.data.userGroup);
  //     //console.log('masuk login')
  //     if(response.data.userGroup === 'manager'){
  //       var usernames = localStorage.getItem('username');
  //       window.location.hash = "/monitoring/orderToCode?theaterCode="+usernames;
  //     }else if(response.data.userGroup === 'admin'){
  //       var usernames = localStorage.getItem('username');
  //       window.location.hash = "/dashboard";
  //     }
  //     // localStorage.setItem('Bearer1', response.headers.authorization.replace('Bearer', ''));
  //     // alert('Selamat Datang di Applikasi Cinema Booking :)')
  //     }
  //       else{
  //         //console.log('tidak login')
  //       //console.log("Username does not exists");
  //       alert("Username does not exist");
  //       window.location.hash = "/";
  //       }
  //       })
  //       .catch(function (error) {
  //       // //console.log(error);
  //     });
  //   }
  goLogin(){
    window.location.hash = '/login';
    }

    // handleLogin(){
    //   if (localStorage.getItem('status') == 200){
    //     alert('Selamat Datang di Applikasi Cinema Booking :)')
    //   } else{
    //     alert('Username atau Password Tidak Sesuai.. Silahkan Coba Lagi..')
    //   }
    // }

  render() {
    return (
      <div className="app flex-row align-items-center">
        {/* <img src={background}  style={{width:"100%", height:'100%', position: 'absolute', zIndex:'0'}}/> */}
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
                <CardGroup style={{width:'50%', marginLeft:'27%',  backgroundColor:'transparent', border:'none'}}>
                <Card className="p-4" style={{ width: '44%', textAlign:'center', backgroundColor:'transparent', border:'none'}}>
                  <CardBody>
                  
                  </CardBody>
                </Card>
              
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

