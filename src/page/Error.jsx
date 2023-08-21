import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

function Error() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Alert variant="danger">
            <Alert.Heading>Oops! Something went wrong.</Alert.Heading>
            <p>
              We're sorry, but an error occurred while processing your request.
              Please try again later or contact our support team for assistance.
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Error;