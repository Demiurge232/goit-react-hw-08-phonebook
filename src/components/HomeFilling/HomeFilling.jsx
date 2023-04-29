import { Heading, Flex, Text } from '@chakra-ui/react';

export const HomeFilling = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading>Welcome to the Phonebook app</Heading>
      <Text>
        If you want to join the program, register or log in if you already have
        an account
      </Text>
    </Flex>
  );
};
export default HomeFilling;
