import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  Container,
  Stack,
} from "react-bootstrap";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState("");


  const onAddTask = () => {
    const task = newTask.trim();
    let id = Math.random();

    if (task) {
      setData([...data, { text: task, id, checked: false }]);
      setNewTask("");
    }
  };


  const onDeleteTask = (id) => {
    const result = window.confirm("Are you sure you want to delete this task?");
    if (result) {
      let newArr = data.filter((item) => item.id !== id);
      setData(newArr);
    }
  };


  const onCheckTask = (id) => {
    let checkArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setData(checkArr);
  };


  const onChangeInput = (e) => setNewTask(e.target.value);


  return (
    <Container className=" d-flex flex-column align-items-center">
      <h1 className="mb-5 mt-5 ">Todo list</h1>
      <InputGroup className="mb-5 w-50 " size="lg">
        <FormControl
          placeholder="Write your task"
          aria-label="Write your task"
          aria-describedby="basic-addon2"
          value={newTask}
          onChange={onChangeInput}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={onAddTask}
        >
          Add
        </Button>
      </InputGroup>
      <ListGroup className="w-50">
        {data.map(({ text, id, checked }) => (
          <ListGroup.Item key={id} action variant="light">
            <Stack direction="horizontal" gap={3}>
              <p className={checked ? "underlined" : "" }>{text}</p>
              <Button
                variant="outline-danger"
                id="button-addon2"
                className="ms-auto"
                onClick={() => onDeleteTask(id)}
              >
                x
              </Button>
              <Button
                
                variant={checked ? "success" : "outline-success" }
                id="button-addon2"
                onClick={() => onCheckTask(id)}
              >
                ✓
              </Button>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
