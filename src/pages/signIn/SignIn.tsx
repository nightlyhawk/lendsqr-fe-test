import { Login } from "../../components/forms/Login";
import logo from '../../assets/logo.svg';

export const SignIn = () => {
    return(
        <div className="signin">
            <img src={logo} alt="logo" />
            <div className='left-container'>
                
            </div>
            <div className='right-container'>
                <h1 className="text-primary">Welcome!</h1>
                <p className="text-primary">Enter details to login</p>
                <Login />
            </div>
        </div>
    )
}