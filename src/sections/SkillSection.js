import React, {Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data';
import './AboutSection.css'
import SkillCard from '../components/SkillCard'
class SkillSection extends React.Component{
  
    render(){
        
        return(
            <Fullpage className="third">
            <h3>{data.sections[1].title}</h3>
            {data.sections[1].items.map(eachSkill =>{
                return(
                   <SkillCard skill={eachSkill}/>
                );
            })}
            
       
             </Fullpage>
        )
    }
  
}
export default SkillSection;