import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Switch,
} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineEnvironment } from 'react-icons/ai';

const FilterSection = () => {
  return (
    <HStack
      bg='#DDDDDD'
      py='80px'
      px='100px'
      display='flex'
      alignItems='center'
    >
      <Box w='lg'>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <AiOutlineSearch color='gray.300' />
          </InputLeftElement>
          <Input type='text' placeholder='Job Title' bg='white' />
        </InputGroup>
      </Box>
      <Box w='lg'>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <AiOutlineEnvironment color='gray.300' />
          </InputLeftElement>
          <Input type='text' placeholder='Location' bg='white' />
        </InputGroup>
      </Box>
      <Box w='lg'>
        <Select placeholder='Expiriance' bg='white'>
          <option value='option1'>Intern</option>
          <option value='option2'>Junior</option>
          <option value='option3'>Middle</option>
          <option value='option3'>Senior</option>
        </Select>
      </Box>
      <Box w='lg'>
        <Select placeholder='' bg='white'>
          <option value='option1'>All</option>
          <option value='option2'>Remote</option>
          <option value='option3'>On site</option>
          <option value='option4'>Hybrid</option>
        </Select>
      </Box>
      <Box w='xs' display='flex' justifyContent='center'>
        <Button w='lg' bg='teal.500' color='white'>
          Lets find a job
        </Button>
      </Box>
    </HStack>
  );
};
export default FilterSection;
