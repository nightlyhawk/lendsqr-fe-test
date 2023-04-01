import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { SignIn } from "./pages/signIn/SignIn";
import { Nav } from "./components/nav/Nav";
import { DashBoard } from "./components/dashboard/DashBoard";
import { Users } from "./pages/users/Users";
import { UserDetail } from "./pages/userDetails/UserDetails";
import { Home } from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignIn />} />
      <Route path="/users" element={<Home />}>
          <Route path="list" element={<Users />} />
          <Route path="details" element={<UserDetail />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
