import { Spinner } from "@chakra-ui/react";

const SpinnerComponent = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.75s"
      emptyColor="gray.600"
      color="teal.400"
      size="xl"
    />
  );
};

export default SpinnerComponent;
