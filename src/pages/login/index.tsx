import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { auth } from '../../firebase.config';
import React from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast({
          title: 'Logged In',
          duration: 3000,
          position: 'top-right',
          variant: 'subtle',
          status: 'success',
        });
        navigate('/');
      })
      .catch(() => {
        toast({
          title: 'Invalid Email or Password',
          duration: 3000,
          position: 'top-right',
          variant: 'subtle',
          status: 'error',
        });
      });
  };
  return (
    <Box p={4} maxWidth='md' mx='auto'>
      <Stack spacing={4}>
        <FormControl id='email'>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>

        <FormControl id='password'>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>

        <Button type='button' colorScheme='blue' onClick={handleLogin}>
          Log In
        </Button>
      </Stack>
    </Box>
  );
};
