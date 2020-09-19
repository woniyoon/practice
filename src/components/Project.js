import React from 'react';
import './Project.css';

function Project(props){
    console.log(props.work);
    const work = props.work;
    return(
        <div className="projectPcs">
            <h5>{work.title}</h5>
            <h5>{work.period}</h5>
        </div>
    );
}

export default Project;