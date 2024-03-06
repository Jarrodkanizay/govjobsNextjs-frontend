import JobPostForm from '@/components/JobPostForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Quick Job Post Technology Form', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'The fastest, easiest way to post a job. Fill out the form and your job will be live in 32 seconds.',
  keywords: 'Post Government Jobs, Post a Job GovJobs',
};

const PostJobPage = () => {
  return <JobPostForm partner="" />; //Leave this blank for AcademicJobs
};
export default PostJobPage;
