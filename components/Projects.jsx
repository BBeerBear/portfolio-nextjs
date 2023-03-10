import React from 'react';
import blogImg from '../public/assets/projects/blog.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import amazonImg from '../public/assets/projects/amazon.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Blog Website'
            backgroundImg={blogImg}
            projectUrl='https://bbeerbear.github.io/'
          />
          <ProjectItem
            title='Netflix Clone'
            backgroundImg={netflixImg}
            projectUrl='https://netflix-clone-5a773.web.app/'
          />
          <ProjectItem
            title='Amazon Clone'
            backgroundImg={amazonImg}
            projectUrl='https://clone-ec77e.web.app/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
