import React, { Component } from 'react';
import { InputGroup, Label,Input, Card, CardBody, CardHeader, Col, Row,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { array } from 'prop-types';

class Flip extends React.Component {
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
            id: flips.id,
            amount: flips.amount,
            unique_code: flips.unique_code,
            status: flips.status,
            bank_from: flips.sender_bank,
            account_num: flips.account_number,
            name_to: flips.beneficiary_name,
            bank_to: flips.beneficiary_bank,
            remark: flips.remark,
            created_at: flips.created_at,
            complete_at: flips.completed_at,
            fee: flips.fee,
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
export default Flip;