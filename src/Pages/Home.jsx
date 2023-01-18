import * as Icon from 'react-icons/di';
import ProjectCard from "../Components/ProjectCard";
import Skill from "../Components/Skill";

function Home() {
    return (
        <div className="mx-80">
            <div className="bg-white py-5 drop-shadow-xl">
                <h1 className="text-4xl ml-20 mt-5">Welcome.</h1>
                <p className="text-xl mx-10 mt-5">
                I am a motivated and passionate web software developer from Oulu.<br/><br/>
                My goal is to learn web development in a versatile way, both on the front-end and back-end.<br/>
                I have been independently learning website creation for 2 years now, and have acquired basic knowledge of creating websites.<br/>
                Now, while studying at OSAO to become a software developer, I have deepened my knowledge and learned new techniques and tools.<br/><br/>
                I want to continue studying and developing as a web software developer and strive to create high-quality and functional applications for both clients and myself.</p>
            </div>
            <div className="bg-white w-full p-3 flex flex-wrap justify-evenly gap-5">
                <Skill name="Javascript" icon={Icon.DiJavascript1} rating="8"/>
                <Skill name="ReactJS" icon={Icon.DiReact} rating="6"/>
                <Skill name="NodeJS" icon={Icon.DiNodejs} rating="5"/>
                <Skill name="PHP" icon={Icon.DiPhp} rating="7"/>
                <Skill name="CSS" icon={Icon.DiCss3} rating="7"/>
                <Skill name="HTML" icon={Icon.DiHtml5} rating="9"/>
            </div>
            <div className="bg-slate-200 w-full p-3 gap-y-3 flex flex-wrap justify-between">
                <ProjectCard name="WPHallinta (in development)" image="heikkilantila" />
                <ProjectCard name="Heikkilän tila (in development)" image="heikkilantila" />
                <ProjectCard name="Travelling line" image="travellingline" />
                <ProjectCard name="Snake game" image="snakegame" />
            </div>
        </div>
    );
}

export default Home;