export type TJob = {
  id: string;
  jobDescription: string;
  position: string;
  salary?: string;
  techStack: string;
};

export type TApplyedJobs = {
  jobId: string;
  status: string;
  position: string;
};
