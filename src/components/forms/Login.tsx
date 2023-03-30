import { useState } from 'react';
import { Button } from '../button/Button';
import { useNavigate } from "react-router-dom";

type EventProps = {
    event: React.ChangeEvent<HTMLInputElement>
}

export const Login = () => {

    const [loginInfo, setLoginInfo] = useState(
        {email: "",
        password: ""}
    )
    const[error, setError] = useState("")
    const navigate = useNavigate();
    function logic() {
        if ( loginInfo.email! == "lendrsqr@gmail.com" && loginInfo.password! === "lendersquare"){
            setError("email or password incorrect")
        } else {navigate('/users')};
    }
    const handleChange = ({event}: EventProps) => {
        setLoginInfo({
            ...loginInfo, [event.target.name]: event.target.value
        })
    }
    return (
        <form>
            <input type="email" name="email" id="" value={loginInfo.email} onChange={(event) =>handleChange} required />
            <input type="password" name="password" id="" value={loginInfo.password} onChange={(event) =>handleChange} required />
            <Button variant='btn-tertiary' type='submit' event={logic} >Login</Button>
        </form>
    )
}