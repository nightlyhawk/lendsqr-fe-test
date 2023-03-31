import { Button } from "../../components/button/Button";
import { useFetch } from "../../components/useFetch";
import { Link, useLocation } from 'react-router-dom';


type IdProps = {
    id: number
}

type LocationProps = {
    state: {
        id : IdProps
      from: Location;
    };
  };

export const UserDetail = () => {
    const location = useLocation() as unknown as LocationProps;
    const state = location.state 
    const {data: user, error, loading} = useFetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${state.id}`
    );
    return (
        <div className="text-secondary">
            <Link to='/users'>Back to Users</Link>
            <h1>User Details</h1>
            <Button variant='btn-outline-error text-error' type="button" >BLACKLIST USER</Button>
            <Button variant="btn-outline-active text-active" type="button" >ACTIVATE USER</Button>
            <div>
                {error && <div>{ error }</div>}
                {loading && <div>loading...</div>}

                {user && <ul>
                    <li>
                    <img src={user.profile.avatar} alt="avatar" />
                <h2>{user.firstName}{user.lastName}</h2>
                <p>{user.accountNumber}</p>
                    </li>
                    <li><h3>User's Tier</h3></li>
                    <li>₦{user.accountBalance}</li>
                </ul>}
                
                <ul>
                    <li>General Details</li>
                    <li>Documents</li>
                    <li>Bank Details</li>
                    <li>Loans</li>
                    <li>Savings</li>
                    <li>App and System</li>
                </ul>
            </div>
        {user && <div>
            <div>
                <h3>Personal Information</h3>
                <div> <h4>FULL NAME</h4> <p>{user.profile.firstName} {user.profile.lastname}</p></div>
                <div><h4>PHONE NUMBER</h4> <p>{user.profile.phoneNumber}</p></div>
                <div><h4>EMAIL ADDRESS</h4> <p>{user.email}</p></div>
                <div><h4>BVN</h4> <p>{user.profile.bvn}</p></div>
                <div><h4>GENDER</h4> <p>{user.profile.gender}</p></div>
                <div><h4>MARITAL STATUS</h4> <p>Single</p></div>
                <div><h4>CHILDREN</h4> <p>None</p></div>
                <div><h4>TYPE OF RESIDENCE</h4> <p>Parents Apartment</p></div>
            </div>
            <div>
                <h3>Education and Employment</h3>
                <div><h4>LEVEL OF EDUCATION</h4> <p>{user.education.level}</p></div>
                <div><h4>EMPLOYMENT STATUS</h4> <p>{user.education.employmentStatus}</p></div>
                <div><h4>SECTOR OF EMPLOYMENT</h4> <p>{user.education.sector}</p></div>
                <div><h4>DURATION OF EMPLOYMENT</h4> <p>{user.education.duration}</p></div>
                <div><h4>OFFICE EMAIL</h4> <p>{user.education.officeEmail}</p></div>
                <div><h4>MONTHLY INCOME</h4> <p>{user.education.monthlyIncome}</p></div>
                <div><h4>LOAN REPAYMENT</h4> <p>{user.education.loanRepayment}</p></div>
            </div>
            <div>
                <h3>Socials</h3>
                <div><h4>TWITTER</h4> <p>{user.social.twitter}</p></div>
                <div><h4>FACEBOOK</h4> <p>{user.social.facebook}</p></div>
                <div><h4>INSTAGRAM</h4> <p>{user.social.instagram}</p></div>
            </div>
            <div>
                <h3>Guarantor</h3>
                <div> <h4>FULL NAME</h4> <p>{user.guarantor.dirstName} {user.guarantor.lastName}</p></div>
                <div><h4>PHONE NUMBER</h4> <p>{user.guarantor.phoneNumber}</p></div>
                <div><h4>EMAIL ADDRESS</h4> <p>{user.guarantor.email}</p></div>
                <div><h4>RELATIONSHIP</h4> <p></p></div>
                {/* <div> <h4>FULL NAME</h4> <p></p></div>
                <div><h4>PHONE NUMBER</h4> <p></p></div>
                <div><h4>EMAIL ADDRESS</h4> <p></p></div>
                <div><h4>RELATIONSHIP</h4> <p></p></div> */}
            </div>
        </div>}
        </div>
    )
}