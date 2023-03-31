import { Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/signIn/SignIn';
import { Nav } from "./components/nav/Nav";
import { DashBoard } from "./components/dashboard/DashBoard";
import { Users } from './pages/users/Users';
import { UserDetail } from './pages/userDetails/UserDetails';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route element={<Nav />} >
          <Route element={<DashBoard />} >
            <Route path='/users' element={<Users />} />
            <Route path='/details' element={<UserDetail />} />
          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
