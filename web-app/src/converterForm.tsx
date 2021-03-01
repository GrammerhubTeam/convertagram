import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  Button,
  NumberInput,
  NumberInputField,
  Select,
  VStack,
} from '@chakra-ui/react';

function ConverterForm() {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box maxWidth={700} pt={12} marginX="auto">
        <Box textAlign="center">
          <Heading>Convertagram</Heading>
        </Box>

        <Box width="auto" my={8} textAlign="left" spacing={5}>
          <form>
            <FormControl isRequired>
              <Select placeholder="Unit" mb={10}></Select>
              <Select placeholder="From" mb={10}></Select>
              <Select placeholder="To" mb={10}></Select>
            </FormControl>
            <FormControl mt={6}>
              <NumberInput mb={2}>
                <NumberInputField placeholder="Value" />
              </NumberInput>
              <NumberInput mb={5}>
                <NumberInputField placeholder="Round to" />
              </NumberInput>
            </FormControl>
            <Button
              colorScheme="teal"
              width="full"
              mt={4}
              mb={10}
              type="submit"
            >
              Convert
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default ConverterForm;
