import React from 'react';
import {Container,Row, Col,Button,Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import weightImg from './assets/weightConvImg.svg';
import currencyImg from './assets/currencyConvImg.svg';
import lengthImg from './assets/lengthConvImg.svg';
import timeImg from './assets/timeConvImg.svg';
import tempImg from './assets/tempConvImg.svg';

export default function Home() {
    return(
        <Container fluid>
            <Row>
                <Col>
                    <h2>Welcome to Universal Converter</h2>
                </Col>
            </Row>
            <br />
        <Row>

          <Col>
            <br />
            <Card bg="dark" style={{ width: '18rem',borderRadius:"20px",margin:"auto" }}>
                <Card.Img variant="top" src={weightImg} style={{width:"70%",margin:"auto"}} />
                <Card.Body>
                    <Card.Title>Mass Converter</Card.Title>  
                    <Button variant="info" as={NavLink} activeClassName="active" to="/mass">RUN</Button>
                </Card.Body>
            </Card>
          </Col>

          <Col>
          <br/>
            <Card bg="dark" style={{ width: '18rem',borderRadius:"20px",margin:"auto"  }}>
                <Card.Img variant="top" src={currencyImg} style={{width:"70%",margin:"auto"}} />
                <Card.Body>
                    <Card.Title>Currency Converter</Card.Title>
                    <Button variant="info" as={NavLink} activeClassName="active" to="/currency">RUN</Button>
                </Card.Body>
            </Card>
          </Col>

          <Col>
          <br/>
            <Card bg="dark" style={{ width: '18rem',borderRadius:"20px",margin:"auto"  }}>
                <Card.Img variant="top" src={lengthImg} style={{width:"70%",margin:"auto"}} />
                <Card.Body>
                    <Card.Title>Length Converter</Card.Title>
                    <Button variant="info" as={NavLink} activeClassName="active" to="/length">RUN</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <br/>
              <Card bg="dark" style={{ width: '18rem',borderRadius:"20px",margin:"auto"  }}>
                  <Card.Img variant="top" src={timeImg} style={{width:"70%",margin:"auto"}} />
                  <Card.Body>
                      <Card.Title>Time Converter</Card.Title>
                      <Button variant="info" as={NavLink} activeClassName="active" to="/time">RUN</Button>
                  </Card.Body>
              </Card>
            </Col>

            <Col>
            <br/>
              <Card bg="dark" style={{ width: '18rem',borderRadius:"20px",margin:"auto"  }}>
                  <Card.Img variant="top" src={tempImg} style={{width:"70%",margin:"auto"}} />
                  <Card.Body>
                      <Card.Title>Temperature Converter</Card.Title>
                      <Button variant="info" as={NavLink} activeClassName="active" to="/temperature">RUN</Button>
                  </Card.Body>
              </Card>
            </Col>
        </Row>
        <br/>
      </Container>
    );
  }
  