import React, { Component } from 'react';
import Users from './Components/Users';
import UserForm from './Components/UsersForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'Bernard',
          email: 'bernard@domainname.com',
          gen: 24,
          id: 're4er56erf'
        },
        {
          name: 'Emmanuel',
          email: 'emmanuel@domainname.com',
          gen: 24,
          id: 'ythhk9087'
        },
        {
          name: 'Faisal',
          email: 'faisal@domainname.com',
          gen: 24,
          id: 'yti7i90ujj'
        },
        {
          name: 'Godwin',
          email: 'godwin@domainname.com',
          gen: 24
        },
        {
          name: 'Jeffrey',
          email: 'jeffrey@domainname.com',
          gen: 24
        },
        {
          name: 'Mandelson',
          email: 'mandelson@domainname.com',
          gen: 24
        },
        {
          name: 'Sampson',
          email: 'sampson@domainname.com',
          gen: 24
        },
        {
          name: 'Ugochukwu',
          email: 'ugochukwu@domainname.com',
          gen: 24
        },
      ]
    };
  }
  handleAddUser = (addNewUser) => {
    addNewUser.id = Math.floor(Math.random() * 10000)
    this.setState({
      items: [...this.state.items, addNewUser],
    });
    console.log(this.state.persons);
  }

  deleteUser = id => {
    const remainingUsers = this.state.items.filter((items) => items !== id)
    this.setState({
      items: remainingUsers
    })
  }

  render() {
    return (
      <Container
        className='main'>
        <Row>
          <Col
            xs={2}>
            <UserForm newUser={this.handleAddUser} />
          </Col>
          <Col>
            <Users items={this.state.items} deleteUser={this.deleteUser} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
