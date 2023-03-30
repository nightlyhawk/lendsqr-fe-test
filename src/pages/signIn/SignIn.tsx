import { Login } from "../../components/forms/Login";
import './signIn.module.scss';
import logo from '../../assets/logo.svg';

export const SignIn = () => {
    return(
        <div className="signin">
            <div className='left-container'>
                <img src={logo} alt="logo" />
            </div>
            <div className='right-container'>
                <Login />
            </div>
        </div>
    )
}