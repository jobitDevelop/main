import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db, auth } from '../../../firebase.config';
import React, { useState } from 'react';
import { TJobRow } from './JobRow.type';
import { Content } from 'components/content';

export const JobRow = ({ job }: TJobRow) => {
  const { position, jobDescription, id } = job;
  const [expand, setExpand] = useState(false);

  const handleApply = async (jobId: string) => {
    const userUid = auth.currentUser?.uid;
    if (userUid) {
      const userRef = doc(db, 'users', userUid);
      await updateDoc(userRef, {
        applyed: arrayUnion({ jobId, status: 'Pending', position }),
      });
    }
  };

  return (
    <Content>
      <Card
        overflow='hidden'
        variant='outline'
        borderLeft='5px solid #1D4044'
        borderLeftRadius='none'
        boxShadow='xl'
      >
        <Stack>
          <CardBody>
            <Heading size='md'>The perfect latte</Heading>

            <Text py='2'>
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </CardBody>

          <CardFooter justifyContent='end'>
            <Button border='none' onClick={() => setExpand(!expand)}>
              + Read {expand ? 'Less' : 'More'}
            </Button>
          </CardFooter>
        </Stack>
        {expand && (
          <Box px='30px'>
            <Text fontWeight={700} fontSize={20} py='10px'>
              Description
            </Text>
            <Text>{jobDescription}</Text>
            <Text fontWeight={700} fontSize={20} py='10px'>
              Requirements
            </Text>
            <Text>
              Technical Expertise: Proficiency in HTML, CSS, and JavaScript is
              essential, along with hands-on experience in frontend frameworks
              such as React and Angular. A solid understanding of responsive
              design principles and mobile optimization is also required.
              Problem-Solving Skills: We are seeking a developer who thrives on
              solving complex challenges and finding innovative solutions.
              Attention to detail, a keen eye for design, and the ability to
              optimize website performance are crucial for success in this role.
              Collaborative Team Player: Our ideal candidate is a strong
              communicator and enjoys working collaboratively with designers,
              backend developers, and other stakeholders. You should be
              comfortable translating design concepts into functional and
              visually appealing web applications. Continuous Learning: The
              frontend development landscape is constantly evolving, and we
              value candidates who demonstrate a passion for staying up-to-date
              with the latest trends and best practices. A commitment to
              continuous learning and the ability to adapt to new technologies
              is highly desirable
            </Text>
            <Flex justifyContent='end'>
              <Button
                onClick={() => handleApply(id)}
                my='20px'
                bg='teal.500'
                w='150px'
                color='white'
              >
                Apply
              </Button>
            </Flex>
          </Box>
        )}
      </Card>
      {/* <HStack spacing={4} my={4} w='full'>
        <Avatar src='./cityLogo.webp' />
        <Text>{position}</Text>
        <Flex ml='auto'>
         
        </Flex>
      </HStack> */}
    </Content>
  );
};
