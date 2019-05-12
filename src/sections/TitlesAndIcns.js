import React from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data';
import {SocialIcon} from 'react-social-icons';
import DownIcon from '../components/DownIcon';

class TitlesAndIcns extends React.Component{
  
    render(){
        
        return(
            <Fullpage className="first">
            <h1 className = "title">{data.title}</h1>
        
            <div>
              <h2>{data.subtitle}</h2>
            </div>
            <div className="icons-wrapper">
            {Object.keys(data.links).map(key =>{
              return(
                <div className="icon">
              <SocialIcon url= {data.links[key]}/>
                </div>
              )
            })}
            </div>
             </Fullpage>
             <DownIcon 
             icon={data.icons.down}
             />
        );
    }
  
}
export default TitlesAndIcns;