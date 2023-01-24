import { Outlet } from 'react-router-dom';
import { SiDiscord, SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';
import Contact from "../Components/Contact";

function Layout() {
    return (
        <>
            <div className='bg-blue-500 p-5 mb-10 flex'>
                <h1 className='text-white text-3xl max-sm:text-xl text-bold tracking-wide'>&gt;Alexander@Palosaari/Portfolio</h1>
                <h1 className='text-white text-3xl max-sm:text-xl text-bold tracking-wide animate-blink'>_</h1>
            </div>

            <Outlet />

            <div className="bg-blue-500 w-full pt-5 flex mt-10 justify-around max-sm:flex-col max-sm:pl-5">
                <Contact name="Email" icon={SiGmail} link="mailto:palosaaritobias@gmail.com" />
                <Contact name="Linkedin" icon={SiLinkedin} link="https://www.linkedin.com/in/alexander-palosaari-23a9b8237/" />
                <Contact name="Github" icon={SiGithub} link="https://github.com/Alexxpalo" />
                <Contact name="Discord" icon={SiDiscord} link="https://discord.com/users/alexpalo#3738" />
            </div>
            <p className='bg-blue-500 m-0 p-0 text-white text-center'>Copyright &#169; 2023 Alexander Palosaari</p>
        </>
    );
}

export default Layout;