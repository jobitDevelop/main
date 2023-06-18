import React, { useEffect, useState } from 'react';
import { JobRows } from '../../components/jobRows';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase.config';
import FilterSection from 'components/filterSection';

export const JobsDashboard = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'jobs'), (docs) => {
      //@ts-ignore
      const documents = [];

      docs.forEach((doc) => {
        //@ts-ignore

        documents.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      //@ts-ignore

      setJobs(documents);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <FilterSection />
      {jobs && <JobRows jobs={jobs} />}
    </>
  );
};
