import { Avatar, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { JobRow } from './jobRow';
import { TJobRowsProps } from './JobRows.types';

export const JobRows = ({ jobs }: TJobRowsProps) => {
  return (
    <>
      {jobs.map((job) => (
        <JobRow job={job} />
      ))}
    </>
  );
};
