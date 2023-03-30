import { Link, useNavigate } from 'react-router-dom';
import view from './view.svg';
import ban from '../dashboard/user-times.svg';
import check from '../dashboard/user-check.svg';

type IdProps = {
    id: number
    variant: string |  React.MutableRefObject<undefined>
}


export const OverLay = ({id, variant}: IdProps) => {
    // const navigate = useNavigate();
    // const openprofile = ({id}) =>{
    //     navigate("/details", {
    //         state: id
    //     })
    //}
    return (
        <div className={ `${variant}`}>
            <Link to='/details' state={{id}}> <img src={view} alt="" /> View Details</Link>
            <p><img src={ban} alt="" />Blacklist Users</p>
            <p><img src={check} alt="" />Activate Users</p>
        </div>
    )
}