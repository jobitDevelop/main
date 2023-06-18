import React from 'react';
import { Avatar, Badge, Flex, HStack, Text, Box } from '@chakra-ui/react';
import { StatusTag } from '../../statusTag';
import { TApplyedJobsProps } from './AppliedJobs';

export const AppliedJobs = ({ jobs }: TApplyedJobsProps) => {
  console.log(jobs);
  return (
    <>
      {jobs.map((job) => (
        <HStack
          my={4}
          w='full'
          bg={'white'}
          padding='2'
          boxShadow='lg'
          borderRadius={'12px'}
        >
          <Avatar src='./cityLogo.webp' />
          <Text>{job.position}</Text>
          <Flex ml='auto'>
            <StatusTag status={job.status} />
          </Flex>
        </HStack>
      ))}
    </>
  );
};
