import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

import './styleCanva.css';

const Tech = () => {
  return (
    <div className='position-relative h-[50vh]'>
      <div className='heading-text-div'>
        <h1
          className='heading-text-tech'
        >I Develop Cutting-Edge Web Applications <br></br> Using Latest Technologies</h1>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
