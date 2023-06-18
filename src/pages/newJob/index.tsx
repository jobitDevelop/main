import { ChangeEvent, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react';
import { doc, addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase.config';
import React from 'react';

function NewJob() {
  const [formData, setFormData] = useState({
    position: '',
    jobDescription: '',
    techStack: '',
    salary: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Add data to the collection
      const docRef = await addDoc(collection(db, 'jobs'), { ...formData });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <VStack spacing={4} align='stretch'>
      <FormControl id='position'>
        <FormLabel>Position</FormLabel>
        <Input
          type='text'
          name='position'
          value={formData.position}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id='jobDescription'>
        <FormLabel>Job Description</FormLabel>
        <Textarea
          name='jobDescription'
          value={formData.jobDescription}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id='techStack'>
        <FormLabel>Tech Stack</FormLabel>
        <Input
          type='text'
          name='techStack'
          value={formData.techStack}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id='salary'>
        <FormLabel>Salary</FormLabel>
        <Input
          type='text'
          name='salary'
          value={formData.salary}
          onChange={handleChange}
        />
      </FormControl>
      <Button type='button' onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  );
}

export default NewJob;
