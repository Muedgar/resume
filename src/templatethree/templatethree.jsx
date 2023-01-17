import React from 'react';
import Address from './components/address/address';
import Education from './components/education/education';
import Introduction from './components/introduction/introduction';
import Profile from './components/profile/profile';
import ProSkills from './components/proSkills/proskills';
import Reference from './components/references/reference';
import WorkExperience from './components/workExperience/workexperience';
import './templatethree.css';

export const TemplateThree = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="templatethreeContainer">
      <Profile />
      <div className="templatethreeSection">
       <div className="templatethreeLeftSection">
        <Address />
        <ProSkills />
       </div>
       <div className="templatethreeRightSection">
        <Introduction />
        <WorkExperience />
        <Education />
        <Reference />
       </div>
      </div>
    </div>
  );
})

export default TemplateThree;
