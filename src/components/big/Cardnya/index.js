import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'

const Cardnya = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col md={6}>
                    <Card className="text-center" style={card}>
                        <Card.Text style={c_text}>
                            With supporting text below as a natural lead-in to additional content.
                            With supporWe create beautiful, characterful, fun, and engaging animation for global brands, sports institutions, social networks, banks, start-ups, and everyone in between.
                        </Card.Text>
                        <Card.Text style={c_text}>
                            Below is a selection of our latest work from our animation portfolio.
                        </Card.Text>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Cardnya;

const card = {
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 0
};

const c_text = {
    textAlign: 'justify',
};



