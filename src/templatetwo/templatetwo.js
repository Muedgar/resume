import React from 'react';
import './templatetwo.css';

import Profile from './components/profile/profile';
import Address from './components/address/address';
import Introduction from './components/introduction/introduction';
import WorkExperience from './components/workExperience/workexperience2';
import ProSkills from './components/proSkills/proskills';
import LanguageSkill from './components/languageSkills/language';
import Education from './components/education/education';
import Reference from './components/references/reference';


  export const TemplateTwo = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="templatetwo_app">
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
          <LanguageSkill />
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
});

export default TemplateTwo;
