import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Robert's Shop</Col>
          <Col className='text-center'>
            <Row >One</Row>
            <Row >Two</Row>
            <Row>Three</Row>
          </Col>
          <Col>
            <Row >One</Row>
            <Row >Two</Row>
            <Row >Three</Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
