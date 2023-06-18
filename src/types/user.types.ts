import { TApplyedJobs } from './jobs.types';

export type TUser = {
  applyedJobs: TApplyedJobs[];
  cv: [];
  lastApplyed: [];
  profile: TProfile;
  registerDate: string;
  resume: any; //TODO define type
  role: string;
  id: string;
};

export type TProfile = {
  about: string;
  background: string;
  email: string;
  fullName: string;
  pic: string;
  socials: { name: string; link: string }[];
};
