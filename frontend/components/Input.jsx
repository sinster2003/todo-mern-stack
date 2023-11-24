import { Flex, Input } from "@chakra-ui/react";

const InputComponent = ({ value, handleChange, handleTodo}) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Input
        type="text"
        value={value}
        placeholder="Add a Todo task"
        onChange={handleChange}
        backgroundColor="gray.600"
        color="teal.400"
        variant="filled"
        _placeholder={{ color: "teal.400" }}
        _hover={{backgroundColor: "none"}}
        size="md"
        width="auto"
        onKeyDown={handleTodo}
      />
    </Flex>
  );
};

export default InputComponent;
