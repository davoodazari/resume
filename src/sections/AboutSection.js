import React, {Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data';
import './AboutSection.css'
import DownIcon from '../components/Downicon';
class AboutSection extends React.Component{
  
    render(){
        
        return(
            <Fullpage className="second">
            <h3>{data.sections[0].title}</h3>
            <div className="paragraphs">
            {data.sections[0].Items.map(p=>{
              return <p>{p.content}</p>;
            })}
            </div>
            
            </Fullpage>
           
        );
        }
}
export default AboutSection