import React, { Component } from 'react';
import { InputGroup, Label,Input, Card, CardBody, CardHeader, Col, Row,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

class City extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          city: [],
          install: [],
          rows: [],
          viewData: {
            name: '',
            code: '',
            areaCode: '',
            timeZone: ''
          },
          viewModal: false,
      }
    }
  
    componentDidMount() {
      this.serverRequest = axios.get(`http://mrkode.com/CCPService/webresources/city/findAll`)
        .then(response => {
          if (response && response.data) {
            this.setState({ city: response.data });
            
          }
          console.log('tes package log :', response.data);
        })
        .catch(error => console.log(error));
    }

    toggleView() {
      this.setState({
        viewModal: ! this.state.viewModal
      })
    }

    refresh() {
      this.serverRequest = axios.get(`http://mrkode.com/CCPService/webresources/city/findAll`, {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        }).then((response) => {
      // this.serverRequest = axios.get(`http://localhost/CCPService/webresources/user/findAll`).then((response) => {
      this.setState({
        city: response.data
    })
  })
}
    
    viewDatas(name, code, areaCode, timeZone) {
      this.setState({
        viewData: {name, code, areaCode, timeZone}, viewModal: ! this.state.viewModal
      });
    }

    updateCity(){
      // let {id, username, password, aktif, level, sessionId, userRealName, userGroup, email, lastUpdate, status} = this.state.editUserData;
      var formUser = [];
      formUser.push('name=' +this.state.viewData.name  );
      formUser.push('code='+ this.state.viewData.code );
      formUser.push('areaCode=' +this.state.viewData.areaCode );
      formUser.push('timeZone=' +this.state.viewData.timeZone );

      formUser = formUser.join('&');
      var config ={ headers: { "Content-Type": "application/x-www-form-urlencoded" } };
      fetch("http://mrkode.com/CCPService/webresources/city/save", {
      mode: 'no-cors',
      method: 'POST',
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formUser
    })
    this.refresh();
    this.componentDidMount();
    this.toggleView();
    }
  
    render() {
      let { city} = this.state;
      const data = {
        columns: [
          {
            label: 'Nama',
            field: 'name',
            sort: 'asc',
            width: 250
          },
          {
            label: 'Code',
            field: 'code',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Area Code',
            field: 'areaCode',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Time Zone',
            field: 'timeZone',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Action View',
            field: 'view',
            sort: 'asc',
            width: 100
          }
        ],
        rows: city.map(city => {
          return {
            name: city.name,
            code: city.code,
            areaCode: city.areaCode,
            timeZone: city.timeZone,
            view: 
           <Button size="sm" className="btn-twitter btn-brand mr-1 mb-1"onClick={this.viewDatas.bind(this, city.name, city.code, city.areaCode, city.timeZone)}><i className="fa fa-eye">
           </i><span>View</span></Button>
          }
        })
      }

      return (
        <div className="animated fadeIn">
         <Row>
        <Col>
            <Card>
              <CardHeader>
              <CardHeader>
              <h4>
                  <strong>
                    <i className="icon-location-pin" /> City
                  </strong>
                  </h4>
                  </CardHeader>
                <Modal isOpen={this.state.viewModal} toggle={this.toggleView.bind(this)}>
                    <ModalHeader toggle={this.toggleView.bind(this)}>View City</ModalHeader>
                    <ModalBody>
                    <div>
                      <InputGroup>
                      <Label md="3">Name</Label>
                        <Input md="9" type="text" id="name-input" name="name" placeholder="Enter Username" value={this.state.viewData.name} 
                        onChange={(e) => {
                          let {viewData} = this.state;
                          viewData.name = e.target.value;
                          this.setState({ viewData });
                        }}/>
                      </InputGroup>
                      <br />
                      <InputGroup>
                      <Label md="3">Code</Label>
                        <Input md="9" type="text" id="code-input" name="code" placeholder="Enter Code"  value={this.state.viewData.code} 
                        onChange={(e) => {
                          let {viewData} = this.state;
                          viewData.code = e.target.value;
                          this.setState({ viewData });
                        }}/>
                      </InputGroup>
                      <br />
                      <InputGroup>
                      <Label md="3">Area Code</Label>
                      <Input md="9"type="text" id="areaCode-input" name="areaCode" placeholder="Enter areaCode"  value={this.state.viewData.areaCode} 
                        onChange={(e) => {
                          let {viewData} = this.state;
                          viewData.areaCode = e.target.value;
                          this.setState({ viewData });
                        }}/>
                      </InputGroup>
                      <br/>
                      <InputGroup>
                      <Label md="3">Time Zone</Label>
                      <Input md="9"type="text" id="timeZone-input" name="timeZone" placeholder="Enter timeZone"  value={this.state.viewData.timeZone} 
                        onChange={(e) => {
                          let {viewData} = this.state;
                          viewData.timeZone = e.target.value;
                          this.setState({ viewData });
                        }}/>
                      </InputGroup>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="success" onClick={this.updateCity.bind(this)}>Update</Button>
                      <Button color="danger" onClick={this.toggleView.bind(this)}>Back</Button>
                    </ModalFooter>
                  </Modal>
        <MDBDataTable
            striped
            scrollX
            // bordered
            hover
            data={data}
          />
          </CardHeader>
          </Card>
          </Col>
          </Row>
      </div>
    );
  }
}
export default City;