import React from 'react';
import './templatefour.css';

import Profile from './components/profile/profile';
import Address from './components/address/address';
import Introduction from './components/introduction/introduction';
import WorkExperience from './components/workExperience/workexperience';
import ProSkills from './components/proSkills/proskills';
import Education from './components/education/education';
import Reference from './components/references/reference';

export const TemplateFour = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="templatefour_app">
      <Profile />
      <div className='templatetwo_section_two'>
        <Introduction />
        <Address />
      </div>
     {/* WorkExperience, LanguageSkill */}
     <div className='templatetwo_section_three'>
        <WorkExperience />
        <div className='templatetwo_section_three_sub_section'>
          <ProSkills />
        </div>
      </div>
      <div className='templatetwo_section_four'>
      <Education />
      </div>
      <div className='templatetwo_section_four'>
      <Reference />
      </div>
    </div>
  );
})

export default TemplateFour;
