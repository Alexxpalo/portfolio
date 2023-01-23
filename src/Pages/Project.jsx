import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import * as SiIcon from "react-icons/si";


function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const Icon = Object.assign({},SiIcon);
    const [iconElements, setIconElements] = useState([]);

    //Set the project selected
    useEffect(() => {
        axios.get('data.json').then((response) => {
            setProject(response.data.projects.filter(project => project.id === id)[0]);
            setIconElements(response.data.projects.filter(project => project.id === id)[0].icons);
        });
    }, [id]);

    return (
        <div className='bg-white w-2/3 my-16 p-5 mx-auto flex flex-col items-center gap-3'>

            <div className='flex text-4xl max-sm:text-xl font-bold w-full justify-between text-blue-500'>
                <div className='flex items-center'>
                    <HiArrowNarrowLeft size={20} />
                    <h1><Link to="/">Back</Link></h1>
                </div>
                <div className='flex'>
                    <h1><a href={project.link} target="_blank" rel="noreferrer noopener">{project.name}</a></h1>
                    <BiLinkExternal size={20} />
                </div>
            </div>

            <p className='w-1/2 max-md:w-full'>{project.description}</p>

            <img className='' src={project.image && "../img/" + project.image + ".webp"} alt="project" />

            <div className='flex justify-around w-1/2 max-md:w-full max-md:justify-between'>
                <p className='text-slate-500'>Status: {project.status}.</p>
                <div className='flex flex-col text-slate-500'>
                    <p>Used technologies:</p>
                    <div className='flex justify-center'>
                        {iconElements &&
                            iconElements.map((icon) => {
                                return React.createElement(Icon[icon], { size: "40", key: icon });
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;