import { ChakraProvider } from '@chakra-ui/react';
import { JobsDashboard } from './pages/jobsDashboard';
import { Layout } from './components/layout';
import { Content } from './components/content';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import NewJob from './pages/newJob';
import { Register } from './pages/register';
import { Profile } from './components/profile';
import { UserProfile } from './pages/userProfile';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from './redux/slice/user.slice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';
import { db } from './firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        dispatch(signIn({ ...userSnap.data(), id: user.uid }));
      } else {
      }
    });
  }, []);
  return (
    <ChakraProvider>
      <Layout />
      {/* <Content> */}
      <Routes>
        <Route path='/' element={<JobsDashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-job' element={<NewJob />} />
        <Route path='/profile/:id' element={<UserProfile />} />
      </Routes>
      {/* </Content> */}
    </ChakraProvider>
  );
}

export default App;
