import React from 'react';
import './Project.css';

class Project extends React.Component {

    test = () => {
        console.log("요호~ ");
    }

    render(){
        const work = this.props.work;

        var divStyle = {
            backgroundImage: "url(" + work.projectThumnail + ")"
        }

        return(
            <div className="projectPcs" style={divStyle} onMouseEnter={this.test} >
                {/* <img className="projectThumnail" src={work.projectThumnail}/> */}
                <p className="projectTitle">{work.title}</p>
                <p className="projectPeriod">{work.period}</p>
            </div>
        );
    }
}

export default Project;