import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const Card2 = () => {
    return (
        <div>
            <Container fluid>
                <Row xs={1} md={2} style={row}>
                    <Col style={col}>
                        <Card style={card}>
                            <Card.Img style={cardImg} />
                        </Card>
                    </Col>
                    <Col style={col1}>
                        <Card style={card1}>
                            <Card.Img style={cardImg} />
                        </Card>
                        <br />
                        <Card style={card1}>
                            <Card.Img style={cardImg} />
                        </Card>
                    </Col>
                </Row>
                <Row xs={1} md={2} style={row}>
                    <Col style={col1}>
                        <Card style={card1}>
                            <Card.Img style={cardImg} />
                        </Card>
                    </Col>
                    <Col style={col1}>
                        <Card style={card1}>
                            <Card.Img style={cardImg} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Card2;
const row = {
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
}
const card = {
    height: '525px',
    backgroundColor: '#d9d9d9',
    borderRadius: '20px',
}
const card1 = {
    height: '250px',
    backgroundColor: '#d9d9d9',
    borderRadius: '20px',
}
const cardImg = {
}
const col = {
    marginBottom: '50px'
}
const col1 = {
    marginBottom: '50px'

}
