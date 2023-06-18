import { Box, Text, HStack, SkeletonText } from '@chakra-ui/react';
import React from 'react';
import { TUser } from 'types/user.types';
import { AppliedJobs } from './appliedJobs';
import { AvatarProfile } from './avatar';
import { Cover } from './cover';
import { ProfileInfoSection } from './infoSection';

export const Profile = ({ data }: { data: TUser }) => {
  const { applyedJobs: applyed, profile } = data;
  console.log(data, 'data');
  return (
    <>
      <Cover>
        <AvatarProfile />
      </Cover>
      <ProfileInfoSection />
      <HStack my={5}>
        <Box flex={'0 0 50%'}>
          <Text>My Status</Text>
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </Box>
        </Box>
        <Box flex={'0 0 50%'}>
          <Text>Last Applied</Text>
          <Box maxH='200px' overflow='auto' p={2}>
            <AppliedJobs jobs={applyed} />
          </Box>
        </Box>
      </HStack>
      <HStack my={5}>
        <Box flex={'0 0 50%'}>
          <Text>Tools</Text>
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </Box>
        </Box>
        <Box flex={'0 0 50%'}>
          <Text>Last Applied</Text>
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </Box>
        </Box>
      </HStack>
      <HStack my={5}>
        <Box flex={'0 0 50%'}>
          <Text>Job History</Text>
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </Box>
        </Box>
      </HStack>
    </>
  );
};
