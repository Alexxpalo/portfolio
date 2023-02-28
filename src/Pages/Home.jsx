import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProjectCard from "../Components/ProjectCard";
import TechCard from "../Components/TechCard";

function Home() {
    const [techs, setTechs] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('data.json').then((response) => {
            setProjects(response.data.projects);
            setTechs(response.data.techs);
        });
    }, []);

    return (
        <div className="mx-80 max-xl:mx-20 max-md:mx-0 flex flex-col gap-16">

            <div className="bg-white pt-5 drop-shadow-xl">
                <h1 className="text-4xl ml-20 mt-5">whoami</h1>
                <div className="flex">
                    <p className="text-xl mx-10 max-md:mx-5 mt-5 pb-5">
                        I am a motivated and passionate web software developer from Oulu.<br /><br />
                        My goal is to learn web development in a versatile way, both on the front-end and back-end.<br />
                        I have been independently learning website creation for 2 years now, and have acquired basic knowledge of creating websites.<br />
                        Now, while studying at OSAO to become a software developer, I have deepened my knowledge and learned new techniques and tools.<br /><br />
                        I want to continue studying and developing as a web software developer and strive to create high-quality and functional applications for both clients and myself.<br /> <br />
                        I'm also participating in
                        <a className="text-blue-500" href="https://taitaja2023.fi/en/skills-categories/information-and-communication-technology/206-web-design/"> Taitaja2023 finals in May 2023.</a></p>
                    <div className="self-end">
                        <img src="./profilepic.webp" alt="me" width="100%" height="100%" />
                    </div>
                </div>
            </div>

            <div className="bg-slate-200 w-full gap-y-5 gap-x-1 flex flex-wrap max-sm:flex-col max-sm:items-center justify-around">
                {
                    projects.map((project) => {
                        return <ProjectCard key={project.name} project={project} />
                    })
                }
            </div>

            <div className="bg-white w-full flex flex-col">
                <p className="py-5 ml-auto mr-auto text-xl">Current techs in use</p>
                <div className="pb-10 max-sm:flex-col max-sm:gap-5 flex flex-wrap justify-evenly gap-5 drop-shadow-lg">
                    {
                        techs.map((tech) => {
                            return <TechCard key={tech.id} tech={tech} />
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Home;