import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Users from './Components/Users';
import UsersForm from './Components/UsersForm';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    users: [
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
    ] 
  }}
  addNewUser=(user) => {
    user.id=Math.floor(Math.random()*10000)
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser=(id)=> {
    let remainingUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: remainingUsers
    })
  }
  editUser = (id, newInfo) => {
    this.setState({
      users: this.state.users.map(user => (user.id === id)? newInfo : user)
    })
  }
  render() {
  return (
    <>
    <Container>
      <Row>
      <Col
             xs={2}>
              <UsersForm addUser={this.addNewUser}/>
           </Col>
           <Col xs={10}>
           <Users usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
           </Col>
      </Row>
    </Container>
    </>
  )
}
}

export default App

