import React from 'react';
import { Badge } from '@chakra-ui/react';
import { statusTagMapper } from './StatusTag.data';
import { TStatusTagProps } from './StatusTag.types';

export const StatusTag = ({ status }: TStatusTagProps) => {
  return (
    <Badge
      variant='solid'
      //@ts-ignore
      colorScheme={statusTagMapper[status]}
      p='1'
      w={20}
      textAlign='center'
    >
      {status}
    </Badge>
  );
};
