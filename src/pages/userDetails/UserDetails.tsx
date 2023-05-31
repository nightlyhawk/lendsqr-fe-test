import { Button } from "../../components/button/Button";
import { useAxios } from "../../hooks/useAxios";
import { Link, useLocation, useParams } from 'react-router-dom';
import { user } from "../users/Users";



// type IdProps = {
//     id: number
//     data: data
// }

type LocationProps = {
    state: {
        user: user
        from: Location;
    };
};

export const UserDetail = () => {
    const location = useLocation() as unknown as LocationProps;
    const state = location.state
    //const data: dataProp

    const [ loading, data, error, request ] = useAxios<user>(
     {method: 'GET', url:`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${state}`}
     );
    console.log(data)
    return (
        <div className="text-secondary">
            <div><Link to='/users'>Back to users</Link>
            <h1>User Details</h1>
            <div className="btns">
            <Button variant='btn-outline-error text-error' type="button" >BLACKLIST USER</Button>
            <Button variant="btn-outline-active text-active" type="button" >ACTIVATE USER</Button>
            </div>
            </div>
           
                {error && <div>{error}</div>}
                {loading && <div>loading...</div>}

                {/* {data && Object.entries(data).map(([key, user]) => ( */}
                {data && 
                  <div>
                    <section className="Top">
                    <ul className="Top1">
                    <li>
                        <img src={data.profile.avatar} alt="avatar" />
                    </li>
                    <li className="left">    
                        <h2>{data.profile.firstName}{data.profile.lastName}</h2>
                        <p>{data.accountNumber}</p>
                    </li>
                    <li className="mid"><h3>User's Tier</h3></li>
                    <li className="right">
                    <h2>₦{data.accountBalance}</h2>
                    <p>{data.accountNumber}</p>
                    </li>
                    </ul>
                
                <ul className="Top2">
                    <li>General Details</li>
                    <li>Documents</li>
                    <li>Bank Details</li>
                    <li>Loans</li>
                    <li>Savings</li>
                    <li>App and System</li>
                </ul>
                    </section>
              
               
             
               <section className="bottom">
               <div className="btm">
                <h3>Personal Information</h3>
                <ul>
                <li> <h4>FULL NAME</h4> <p>{data.profile.firstName} {data.profile.lastName}</p></li>
                <li><h4>PHONE NUMBER</h4> <p>{data.profile.phoneNumber}</p></li>
                <li><h4>EMAIL ADDRESS</h4> <p>{data.email}</p></li>
                <li><h4>BVN</h4> <p>{data.profile.bvn}</p></li>
                <li><h4>GENDER</h4> <p>{data.profile.gender}</p></li>
                <li><h4>MARITAL STATUS</h4> <p>Single</p></li>
                <li><h4>CHILDREN</h4> <p>None</p></li>
                <li><h4>TYPE OF RESIDENCE</h4> <p>Parents Apartment</p></li>
                </ul>
               </div>
               <div className="btm">
                <h3>Education and Employment</h3>
                <ul>
                <li><h4>LEVEL OF EDUCATION</h4> <p>{data.education.level}</p></li>
                <li><h4>EMPLOYMENT STATUS</h4> <p>{data.education.employmentStatus}</p></li>
                <li><h4>SECTOR OF EMPLOYMENT</h4> <p>{data.education.sector}</p></li>
                <li><h4>DURATION OF EMPLOYMENT</h4> <p>{data.education.duration}</p></li>
                <li><h4>OFFICE EMAIL</h4> <p>{data.education.officeEmail}</p></li>
                <li><h4>MONTHLY INCOME</h4> <p>{data.education.monthlyIncome}</p></li>
                <li><h4>LOAN REPAYMENT</h4> <p>{data.education.loanRepayment}</p></li>
                </ul>
               </div>
               <div className="btm">
                <h3>Socials</h3>
               <ul>
               <li><h4>TWITTER</h4> <p>{data.socials.twitter}</p></li>
                <li><h4>FACEBOOK</h4> <p>{data.socials.facebook}</p></li>
                <li><h4>INSTAGRAM</h4> <p>{data.socials.instagram}</p></li>
               </ul>
               </div>
               <div className="btm">
                <h3>Guarantor</h3>
                <ul>
                <li> <h4>FULL NAME</h4> <p>{data.guarantor.firstName} {data.guarantor.lastName}</p></li>
                <li><h4>PHONE NUMBER</h4> <p>{data.guarantor.phoneNumber}</p></li>
                <li><h4>EMAIL ADDRESS</h4> <p></p></li>
                <li><h4>RELATIONSHIP</h4> <p></p></li>
                </ul>
               </div>
               </section>
                  </div>}
 {/* ))} */}
           
        </div>

    )
}