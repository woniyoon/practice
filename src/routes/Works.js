import React from 'react';
import Project from '../components/Project';
import './Works.css';
import sbWeb from '../images/sbWeb.png';
import socdocLogo  from '../images/socdocLogoT.png';

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

function getProject(){
    return worksDescription.map((work)=>{
        return (<Project key={work.id} work={work} />)
    });
}

function Works(){

    return (
        <main className="workContainer">
            {getProject()}
        </main>
    );
}

export default Works;