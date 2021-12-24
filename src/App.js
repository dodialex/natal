import { Player } from '@lottiefiles/react-lottie-player';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Row style={row}>
          <Col>
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_oz5tpxdz.json"
              style={{ display: 'flex', height: '270px' }}
            >
            </Player>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
const row = {
}
