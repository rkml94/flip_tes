import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import routes from '../../routes';

class DefaultLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      users :[],
      status:'',
      checkstatus: ''
    }
    
    }

 

  render() {
  
    return (
          <main className="main">
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/master/flip" />
              </Switch>
            </Container>
          </main>
    );
  }
}

export default DefaultLayout;
