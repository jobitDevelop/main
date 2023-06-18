import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { auth, db } from '../../firebase.config';
import moment from 'moment';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import React from 'react';

export const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const toast = useToast();
  const handleRegister = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const data = {
        profile: {
          fullName,
          email,
          pic: '',
          background: '',
          about: '',
          socials: [{ name: 'github', link: 'github.com/atarverd' }],
        },
        cv: [],
        resume: {
          skills: [],
          projects: [],
          certifications: [],
          jobHistory: [],
        },
        lastApplied: [],
        role: 'user',
        registerDate: moment().format('L'),
      };
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, data);

      toast({
        title: 'Logged In',
        duration: 3000,
        position: 'top-right',
        variant: 'subtle',
        status: 'success',
      });
      navigate('/');
    } catch (e) {
      toast({
        title: 'Something went wrong',
        duration: 3000,
        position: 'top-right',
        variant: 'subtle',
        status: 'error',
      });
    }
  };

  return (
    <Box p={4} maxWidth='md' mx='auto'>
      <Stack spacing={4}>
        <FormControl id='fullName'>
          <FormLabel>Full Name</FormLabel>
          <Input
            type='text'
            required
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </FormControl>

        <FormControl id='email'>
          <FormLabel>email</FormLabel>
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
        <Button type='button' colorScheme='blue' onClick={handleRegister}>
          Register
        </Button>
      </Stack>
    </Box>
  );
};
