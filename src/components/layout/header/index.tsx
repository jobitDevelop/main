import { Button, Stack, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { auth } from '../../../firebase.config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User as FirebaseUser } from 'firebase/auth';
import { TUser } from '../../../types/user.types';
import { AiOutlineUser } from 'react-icons/ai';

export const Header = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.user);
  return (
    <Stack
      bg='teal.900'
      direction='row'
      px='100px'
      py='30px'
      height={50}
      alignItems='center'
    >
      <Text fontSize='lg' onClick={() => navigate('/')} color='white'>
        JOBIT
      </Text>
      {user?.role === 'admin' && (
        <Text
          fontSize='lg'
          marginLeft={15}
          onClick={() => navigate('/add-job')}
        >
          Add job
        </Text>
      )}
      <Flex ml='auto' mr={30} alignItems='center'>
        {user?.id && (
          <>
            <Text color='white'>Login/Register</Text>
            <AiOutlineUser
              color='white'
              size='20'
              onClick={() => navigate(`/profile/${user.id}`)}
            />
          </>
        )}
        {auth.currentUser ? (
          <Button fontSize='lg' marginLeft={15} onClick={() => signOut(auth)}>
            Logout
          </Button>
        ) : (
          <Button
            fontSize='lg'
            marginLeft={15}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        )}
      </Flex>
    </Stack>
  );
};
