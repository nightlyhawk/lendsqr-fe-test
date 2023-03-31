import { Login } from "../../components/forms/Login";
import logo from '../../assets/logo.svg';

export const SignIn = () => {
    return(
        <div className="signin">
            <img src={logo} alt="logo" />
            <div className='left-container'>
                
            </div>
            <div className='right-container'>
                <h1 className="text-tertiary">Welcome!</h1>
                <h4 className="text-tertiary">Enter details to login</h4>
                <Login />
            </div>
        </div>
    )
}