import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Users extends Component {
    deleteUser = (e) => {
        e.preventDefault();
        this.props.deleteUser(this.props.items.id);
    }
    render() {
        return (
            <Container>
                <Row>
                    <h1 className='users'>Users</h1>
                    {this.props.items.map((item) => (

                        <Col xs={4} key={item.id} deleteUser={this.props.deleteUser} className='box'>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Name: {item.name}</Card.Title>
                                    <Card.Text>
                                        Email: {item.email}
                                    </Card.Text>
                                    <Card.Text>
                                        Gen: {item.gen}
                                    </Card.Text>
                                    <div className='userModification'>
                                        <Button variant="primary" className='userButton'>Edit</Button>
                                        <Button variant="primary" className='userButton' onClick={() => this.props.deleteUser(item)}>Delete</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Users;
