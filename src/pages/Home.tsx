import { Route, Routes } from 'react-router-dom';
import { Nav } from "../components/nav/Nav";
import { DashBoard } from "../components/dashboard/DashBoard";
import { Users } from './users/Users';
import { UserDetail } from './userDetails/UserDetails';




export const Home = () => {
    return (
        <div>
            <Nav/>
           <DashBoard/>
           <Routes>
              <Route path='/users' element={ <Users />} />
              <Route path='/details' element={ <UserDetail />} />
            </Routes>
        </div>
    )
}