import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
        <div className='bg-blue-500 p-5 mb-10 flex'>
        <h1 className='text-white text-3xl text-bold tracking-wide'>&gt;Alexander Palosaari</h1>
        <h1 className='text-white text-3xl text-bold tracking-wide animate-blink'>_</h1>
        </div>
        <Outlet />
        </>
    );
}

export default Layout;