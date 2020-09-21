import React from 'react';
import './Project.css';

class Project extends React.Component {
    // state = {
    //     isSelected: false,
    // };

    // handleHover = () => {
    //     console.log("??");
    //     this.setState(prev => ({
    //         isSelected: !prev.isSelected,
    //     }));
    // }

    render(){
        const work = this.props.work;
        // const { isSelected } = this.state;

        var divStyle = {
            backgroundImage: "url(" + work.projectThumnail + ")"
        }

        return(
            <div className="projectPcs" style={divStyle}  >
                {/* <div className={`descriptionBack ${isSelected ? "transparentBack" : ""}`}  */}
                <div className="descriptionBack" 
                    // onMouseEnter={this.handleHover}
                    // onMouseLeave={this.handleHover}
                >
                    <p className="projectTitle" align="center">{work.title}<br/>{work.period}</p>
                </div>
                {/* <img className="projectThumnail" src={work.projectThumnail}/> */}
            </div>
        );
    }
}

export default Project;