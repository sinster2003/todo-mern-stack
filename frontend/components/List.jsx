import {
  UnorderedList,
  ListItem,
  Text,
  Box,
  ListIcon,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { MdSettings, MdOutlineEdit, MdDelete } from "react-icons/md";

const List = ({ todo, handleDelete, handleUpdate }) => {

  return (
    <Box>
      {todo.length === 0 ? (
        <Text fontSize="lg" color="teal.400" fontWeight="md">
          Todo List is empty
        </Text>
      ) : (
        <UnorderedList color="gray.400" m="0" listStyleType="none">
          {todo.map((task) => (
            <ListItem
              key={task.id}
              py="2"
              minW={80}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack>
                <ListIcon as={MdSettings} color="teal.500" />
                <Text>{task.value}</Text>
              </HStack>  
              <HStack spacing={4}>
                <IconButton icon={<MdOutlineEdit />} color="teal.400" bg="gray.800" _hover={{bg: "gray.600", color:"teal.500"}} onClick={() => handleUpdate(task.id)}/>
                <IconButton icon={<MdDelete />} color="red.400" bg="gray.800" _hover={{bg: "gray.600", color:"red.500"}} onClick={() => handleDelete(task.id)}/>
              </HStack>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};

export default List;
