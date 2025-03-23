import { Col, Container, Row } from "react-bootstrap";

function ListHeader() {
  return (
    <Container fluid className="p-1 ms-5 border-bottom">
      <Row>
        <Col className="ms-3">Task title</Col>
        <Col className="me-5">Task description</Col>
      </Row>
    </Container>
  );
}
export default ListHeader;
