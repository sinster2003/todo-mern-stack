import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { InputComponent, List } from "../components";
import SpinnerComponent from "../components/Spinner";
import {
  addTodos,
  deleteTodos,
  getAllTodos,
  updateTodos,
} from "../services/todosData";

const App = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getAllTodos().then((result) => {
      setTodo(result);
    });
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleTodo = (e) => {
    if (e.keyCode === 13 && value !== "") {
      const newTodo = { value };

      if (isEdit) {
        const id = JSON.parse(localStorage.getItem("updatedID"));

        updateTodos(id, newTodo)
          .then((result) =>
            setTodo(
              todo.map((task) =>
                task.id === result.id ? { ...newTodo, id: result.id } : task
              )
            )
          )
          .then(() => {
            setValue("");
            setIsEdit(false);
            localStorage.clear();
          });
      } else {
        addTodos(newTodo).then((result) => {
          setTodo(todo.concat(result));
          setValue("");
          setIsEdit(false);
        });
      }
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodos(id).then(() => {
      setTodo(todo.filter((task) => task.id !== id));
    });
  };

  const handleUpdateTodo = (id) => {
    const findEditTodo = todo.find((task) => task.id === id);
    setValue(findEditTodo.value);
    setIsEdit(true);

    localStorage.setItem("updatedID", JSON.stringify(id));
  };

  return (
    <Box background="gray.700" m="auto" minH="100vh">
      <Flex
        direction="column"
        gap="10"
        minH="60vh"
        justifyContent="center"
        alignItems="center"
        pt="20"
      >
        <Heading color="teal.400">Todo</Heading>
        <InputComponent
          value={value}
          handleChange={handleChange}
          handleTodo={handleTodo}
        />
        {todo ? (
          <List
            todo={todo}
            handleDelete={handleDeleteTodo}
            handleUpdate={handleUpdateTodo}
          />
        ) : (
          <SpinnerComponent />
        )}
      </Flex>
    </Box>
  );
};

export default App;
