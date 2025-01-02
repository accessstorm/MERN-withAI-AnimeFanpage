import React, { useState } from 'react';
import { Box, Container, Heading, Input, Button, VStack } from '@chakra-ui/react';

const CreatePage = () => {
  const [newTitan, setNewTitan] = useState({ name: '', power: '', image: '' });

  const handleAddTitan = () => {
    console.log(newTitan); // You can replace this with your backend logic
  };

  return (
    <Container maxW="container.sm">
      <VStack spacing={8}>
        <br></br>
        <br></br>
        <Heading as="h1" size="6xl" textAlign="center">
          Create new Titan
        </Heading>
        <Box w="full" p={6} rounded="lg" boxShadow="lg">
          <VStack spacing={4}>
            <Input
              placeholder="Name"
              name="name"
              value={newTitan.name}
              onChange={(e) => setNewTitan({ ...newTitan, name: e.target.value })}
            />
            <Input
              placeholder="Power"
              name="power"
              value={newTitan.power}
              onChange={(e) => setNewTitan({ ...newTitan, power: e.target.value })}
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newTitan.image}
              onChange={(e) => setNewTitan({ ...newTitan, image: e.target.value })}
            />
            <Button colorScheme="blue" onClick={handleAddTitan} w="full">
              Add Titan
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
