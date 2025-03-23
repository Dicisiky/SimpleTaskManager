import { useState } from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";

interface Task {
  title: string;
  description: string;
}
interface TaskFormProps {
  addTask: (task: Task) => void;
}

function TaskForm({ addTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title) {
      addTask({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Container fluid className="p-4">
      <Row className="align-items-center">
        <Col>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={3}>
                <Form.Control
                  placeholder="Task title"
                  className="w-100"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Task description"
                  className="w-100"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Col>
              <Col md="auto">
                <Button type="submit" variant="primary" className="w-100">
                  Add task
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default TaskForm;
