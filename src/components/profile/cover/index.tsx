import React, { ReactElement } from 'react';
import { Box, Avatar } from '@chakra-ui/react';

export const Cover = ({ children }: { children: ReactElement }) => {
  return (
    <Box
      backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/009/255/476/small/abstract-memphis-geometric-background-layout-cover-design-vector.jpg')"
      backgroundSize='cover'
      backgroundPosition='center'
      height='200px' // Set the desired height for your cover image
      width='100%' // Set the desired width for your cover image
      position='relative' // Position the box relatively to position the avatar
    >
      {children}
    </Box>
  );
};
