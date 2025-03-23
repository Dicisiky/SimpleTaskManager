import { Form, ListGroup, Row, Col, Button } from "react-bootstrap";

interface Task {
  title: string;
  description: string;
}

interface TaskListProps {
  listTasks: Task[];
  removeTask: (index: number) => void;
}

function TaskList({ listTasks, removeTask }: TaskListProps) {
  return (
    <ListGroup className="m-3">
      {listTasks.map((task, index) => (
        <ListGroup.Item key={index}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Check />
            </Col>
            <Col>{task.title}</Col>
            <Col>{task.description}</Col>
            <Col xs="auto">
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeTask(index)}
              >
                ✖
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TaskList;
