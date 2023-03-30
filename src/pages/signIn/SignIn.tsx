import { Login } from "../../components/forms/Login";
import './signIn.module.scss';
import logo from '../../assets/logo.svg';

export const SignIn = () => {
    return(
        <div>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <Login />
            </div>
        </div>
    )
}