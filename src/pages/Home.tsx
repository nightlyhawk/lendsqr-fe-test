import { Outlet } from 'react-router-dom';
import { DashBoard } from '../components/dashboard/DashBoard';
import { Nav } from '../components/nav/Nav';





export const Home = () => {
    return (
     <section>
        <Nav />
        <div className='thebody'>
        <DashBoard />
        <main>
            <Outlet />
           
        </main>
        </div>
     </section>
    )
}