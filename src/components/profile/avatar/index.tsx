import { Avatar } from '@chakra-ui/react';
import React from 'react';

export const AvatarProfile = () => {
  return (
    <Avatar
      name='John Doe'
      src='https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'
      size='2xl' // Set the desired size for your avatar
      position='absolute' // Position the avatar absolutely
      bottom='-45%' // Adjust the top position to center the avatar vertically
      left='7%' // Adjust the left position to center the avatar horizontally
      transform='translate(-50%, -50%)' // Translate the avatar to center it precisely
      zIndex='1' // Set the avatar's z-index to ensure it appears above the cover image
    />
  );
};
