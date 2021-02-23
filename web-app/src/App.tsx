import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Heading, FormControl, Button, NumberInput, NumberInputField, Select, VStack } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App"  maxWidth={700} marginX="auto">
      <Box textAlign="center">
        <Heading>Convertagram</Heading>
      </Box>
      
        <Box width="auto" py={4} mr={12} spacing={5}>
            <form>
                <FormControl isRequired>
                    <Select placeholder="Unit" mb={10}></Select>
                    <Select placeholder="From" mb={10}></Select>
                    <Select placeholder="To" mb={10}></Select>
                    <NumberInput mb={10}>
                        <NumberInputField placeholder="Value" />
                    </NumberInput>
                </FormControl>
                <FormControl>
                    <NumberInput mb={10}>
                        <NumberInputField placeholder="Round to" />
                    </NumberInput>
                </FormControl >
                <Button mb={10}>Convert</Button>
            </form>
        </Box>
      
    </Box>
  );
}

export default App;
