import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as Icon from 'react-icons/di';
import ProjectCard from "../Components/ProjectCard";
import Skill from "../Components/Skill";

function Home() {
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('data.json').then((response) => {
            setProjects(response.data.projects);
            console.log(response.data.skills);
            setSkills(response.data.skills);
        });
    }, []);

    return (
        <div className="mx-80 flex flex-col gap-16">
            <div className="bg-white py-5 drop-shadow-xl">
                <h1 className="text-4xl ml-20 mt-5">whoami</h1>
                <p className="text-xl mx-10 mt-5">
                I am a motivated and passionate web software developer from Oulu.<br/><br/>
                My goal is to learn web development in a versatile way, both on the front-end and back-end.<br/>
                I have been independently learning website creation for 2 years now, and have acquired basic knowledge of creating websites.<br/>
                Now, while studying at OSAO to become a software developer, I have deepened my knowledge and learned new techniques and tools.<br/><br/>
                I want to continue studying and developing as a web software developer and strive to create high-quality and functional applications for both clients and myself.</p>
            </div>
            < Icon.DiReact />
            <div className="bg-white w-full p-3 flex flex-wrap justify-evenly gap-5 drop-shadow-lg">
                {
                    skills.map((skill) => {
                        console.log(skill.icon);
                        return <Skill key={skill.id} skill={skill} icon={Icon.DiPhp} />
                    })
                }
            </div>
            <div className="bg-slate-200 w-full gap-y-5 gap-x-1 flex flex-wrap justify-around">
                {
                    projects.map((project) => {
                        return <ProjectCard key={project.name} project={project}/>
                    })
                }
            </div>
        </div>
    );
}

export default Home;