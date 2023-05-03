import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Users extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1 className='users'>Users</h1>
                    {this.props.items.map((item, index) => (
                        <Col xs={4} key={index} className='box'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Name: {item.name}</Card.Title>
                                    <Card.Text>
                                        Email: {item.email}
                                    </Card.Text>
                                    <Card.Text>
                                        Gen: {item.gen}
                                    </Card.Text>
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
