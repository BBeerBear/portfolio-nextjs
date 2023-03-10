import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='py-4 uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            // I am not your normal developer
          </p>
          <p className='py-2 text-gray-600'>
            Master of Engineering – Electrical and Computer Engineering Sep 2022
            - 2024(Expected) Concordia University, Montreal, Quebec, CA • CGPA
            4.00/4.30 • Member of the Institute for Co-operative Education •
            Relevant Courses: Software Engineering, Telecommunication Networks,
            Computer Architecture and Design, Distributed Software Systems
          </p>
          <p className='py-2 text-gray-600'>
            Bachelor of Computer Science Sep 2017 - Jun 2021 Shanghai
            Polytechnic University, Shanghai, CN • GPA 3.63/4.00 • Relevant
            Courses: JAVA Programming, Operating System, Data Structure and
            Algorithm, Object-Oriented Programming, Program Design and Practice,
            Embedded Software Development Technology
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center'>
            <img
              src='https://media.licdn.com/dms/image/C4E2DAQFynjZACZ-tzQ/profile-treasury-image-shrink_800_800/0/1674261739955?e=1678867200&v=beta&t=t-KKMLEgZSLdLDyYQEj682wTU27cAC8pjEhQUUc7sNw'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
