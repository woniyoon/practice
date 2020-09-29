import React from 'react';
import Project from '../components/Project';
import './Works.css';
import Modal from '../components/Modal';
import sbWeb from '../images/sbWeb.png';
import socdocLogo  from '../images/socdocLogoT.png';

class Works extends React.Component {
    state = {
        isSelected: false,
        projectId: null,
    };

    // handleHover = () => {
    //     console.log("??");
    //     this.setState(prev => ({
    //         isSelected: !prev.isSelected,
    //     }));
    // }

    clickProject(projectId){
        this.setState(prev => ({
            isSelected: true,
            projectId,
        }));
    }

    closeModal = () => {
        this.setState(prev => ({
            isSelected: false,
        }));
    }

    getProject = ()=>{
    
        return worksDescription.map((work)=>{
            return (
                <Project customClickEvent={this.clickProject.bind(this)} key={work.id} work={work} />
                // {
                //     isSelected ?  <Modal project={work} close={this.closeModal} /> : null
                // }
            )
        });
    }

    render() {
        const { isSelected, projectId } = this.state;

        return (
            <main className="workContainer">
                {this.getProject()}
                {isSelected ?  <Modal projectId={projectId} close={this.closeModal} /> : null}
            </main>
        );
    }

}

const worksDescription = [
    {id: "sb001",
    title: "스타벅스 웹사이트",
    period: "2020-06",
    projectThumnail: sbWeb},
    {id: "sc002",
    title: "속닥속닥",
    period: "2020-08",
    projectThumnail: socdocLogo},
];

export default Works;