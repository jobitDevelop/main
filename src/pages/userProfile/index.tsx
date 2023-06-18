import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Profile } from '../../components/profile';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
export const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      //@ts-ignore
      const userRef = doc(db, 'users', id);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        //@ts-ignore
        setProfile(userSnap.data());
      }
    };
    getUser();
  }, []);
  return <>{profile && <Profile data={profile} />}</>;
};
