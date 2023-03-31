import { Login } from "../../components/forms/Login";
import logo from '../../assets/logo.svg';

export const SignIn = () => {
    return(
        <div className="signin">
            <div className='left-container'>
                <img src={logo} alt="logo" />
            </div>
            <div className='right-container'>
                <h1>Welcome!</h1>
                <h4>Enter details to login</h4>
                <Login />
            </div>
        </div>
    )
}