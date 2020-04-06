import React, { Component } from 'react';
import { InputGroup, Label,Input, Card, CardBody, CardHeader, Col, Row,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { array } from 'prop-types';

class FlipSearchByName extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          flips: []
      }
    }
  
    componentDidMount() {
      this.serverRequest = axios.get(`https://nextar.flip.id/frontend-test`)

        .then(response => {
          if (response && response.data) {
            var obj = response.data;
            var result = Object.values(obj);
            this.setState({ flips: result });

          }
        })
        .catch(error => console.log(error));
    }


    render() {
      let { flips} = this.state;
      const data = {
        columns: [
          {
            label: 'Id',
            field: 'id',
            sort: 'asc',
            width: 80
          },
          {
            label: 'Amount',
            field: 'amount',
            sort: 'asc',
            width: 80
          },
          {
            label: 'Code',
            field: 'unique_code',
            sort: 'asc',
            width: 80
          },
          {
            label: 'Status',
            field: 'status',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Bank From',
            field: 'bank_from',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Account Number',
            field: 'account_num',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Nama Tujuan',
            field: 'name_to',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Bank To',
            field: 'bank_to',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Remark',
            field: 'remark',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Created time',
            field: 'created_at',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Complete Time',
            field: 'complete_at',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Fee',
            field: 'fee',
            sort: 'asc',
            width: 100
          }
        ],
        rows: flips.map(flips => {
          return {
            id: <div>{flips.id}</div>,
            amount: <div>{flips.amount}</div>,
            unique_code: <div>{flips.unique_code}</div>,
            status: <div>{flips.status}</div>,
            bank_from: <div>{flips.sender_bank}</div>,
            account_num: <div>{flips.account_number}</div>,
            name_to: flips.beneficiary_name,
            bank_to: <div>{flips.beneficiary_bank}</div>,
            remark: <div>{flips.remark}</div>,
            created_at: <div>{flips.created_at}</div>,
            complete_at: <div>{flips.completed_at}</div>,
            fee: <div>{flips.fee}</div>,
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
                    <i className="fa fa-facebook" /> Flip Test Front End
                  </strong>
                  </h4>
                  </CardHeader>
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
export default FlipSearchByName;