import React, { ReactElement } from 'react';
import { Center, Box } from '@chakra-ui/react';
export const Content = ({ children }: { children: ReactElement }) => {
  return (
    <Box width='60%' p={5} mx='100px'>
      {children}
    </Box>
  );
};
