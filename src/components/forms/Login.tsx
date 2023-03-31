import { useState } from 'react';
import { Button } from '../button/Button';
import { useNavigate } from "react-router-dom";

type EventProps = {
    event: React.FormEvent<HTMLInputElement>
}

export const Login = () => {

    const [loginInfo, setLoginInfo] = useState(
    {   email: "",
        password: ""
    }
    )
    const[error, setError] = useState("")
    const navigate = useNavigate();
    function logic() {
        if ( loginInfo.email! == "lendrsqr@gmail.com" && loginInfo.password! === "lendersquare"){
            setError("email or password incorrect")
        } else {navigate('/users')};
    }
    const handleChange = ({event}: EventProps) => {
        const target = event.target as HTMLInputElement;
        setLoginInfo({
            ...loginInfo, [target.name]: target.value
        })
    }
    return (
        <form onSubmit={logic}>
        {error && <div className='text-error' >{error}</div>}
            <input type="email" name="email" value={loginInfo.email} placeholder="Email" onChange={(event) =>handleChange} required />
            <input type="password" name="password" value={loginInfo.password} placeholder="password" onChange={(event) =>handleChange} required />
            <p className='text-tertiary' >FORGOT PASSWORD</p>
            <Button variant='btn-tertiary text-white'  type='submit' >LOG IN</Button>
        </form>
    )
}