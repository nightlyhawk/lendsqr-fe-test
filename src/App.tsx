import { Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/signIn/SignIn';
import { Home } from './pages/Home';

function App() {
  return (

    <div className="App">
           <Routes>
              <Route path='/' element={ <SignIn />} />
              <Route path='/home' element={ <Home />} />
            </Routes>
    </div>
  );
}

export default App;
