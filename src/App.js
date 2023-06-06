import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Users from './Components/Users';
import UsersForm from './Components/UsersForm';

const App = () => {
  const [users, setUsers] = useState([
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
  ]);

  const addNewUser = (user) => {
    user.id = Math.floor(Math.random() * 10000);
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    const remainingUsers = users.filter((user) => user.id !== id);
    setUsers(remainingUsers);
  };

  const editUser = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={2}>
            <UsersForm addUser={addNewUser} />
          </Col>
          <Col xs={12} sm={10}>
            <Users usersData={users} deleteUser={deleteUser} editUser={editUser} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;


