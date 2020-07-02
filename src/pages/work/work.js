import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Timer from   '../../components/timer/timer'; 
import About from   '../../components/about/about'


export default function Work(){
    return(
      
      <div>
            <NavBar />
            <h1>Work</h1>
            <Timer minute={23} />
            <About />

 
        </div>
    );
}