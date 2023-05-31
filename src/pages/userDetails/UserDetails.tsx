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
     {method: 'GET', url:`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/datas/${state}`}
     );
    console.log(data)
    return (
        <div className="text-secondary">
            <div><Link to='/users'>Back to users</Link>
            <h1>data Details</h1>
            <Button variant='btn-outline-error text-error' type="button" >BLACKLIST USER</Button>
            <Button variant="btn-outline-active text-active" type="button" >ACTIVATE USER</Button>
            </div>
           
                {error && <div>{error}</div>}
                {loading && <div>loading...</div>}

                {/* {data && Object.entries(data).map(([key, user]) => ( */}
                {data && 
                  <div>
                     <ul>
                    <li>
                        <img src={data.profile.avatar} alt="avatar" />
                        <h2>{data.firstName}{data.lastName}</h2>
                        <p>{data.accountNumber}</p>
                    </li>
                    <li><h3>User's Tier</h3></li>
                    <li>₦{data.accountBalance}</li>
                    </ul>
                
                <ul>
                    <li>General Details</li>
                    <li>Documents</li>
                    <li>Bank Details</li>
                    <li>Loans</li>
                    <li>Savings</li>
                    <li>App and System</li>
                </ul>
              
               
             
               <div>
                <h3>Personal Information</h3>
                <div> <h4>FULL NAME</h4> <p>{data.profile.firstName} {data.profile.lastName}</p></div>
                <div><h4>PHONE NUMBER</h4> <p>{data.profile.phoneNumber}</p></div>
                <div><h4>EMAIL ADDRESS</h4> <p>{data.email}</p></div>
                <div><h4>BVN</h4> <p>{data.profile.bvn}</p></div>
                <div><h4>GENDER</h4> <p>{data.profile.gender}</p></div>
                <div><h4>MARITAL STATUS</h4> <p>Single</p></div>
                <div><h4>CHILDREN</h4> <p>None</p></div>
                <div><h4>TYPE OF RESIDENCE</h4> <p>Parents Apartment</p></div>
               </div>
               <div>
                <h3>Education and Employment</h3>
                <div><h4>LEVEL OF EDUCATION</h4> <p>{data.education.level}</p></div>
                <div><h4>EMPLOYMENT STATUS</h4> <p>{data.education.employmentStatus}</p></div>
                <div><h4>SECTOR OF EMPLOYMENT</h4> <p>{data.education.sector}</p></div>
                <div><h4>DURATION OF EMPLOYMENT</h4> <p>{data.education.duration}</p></div>
                <div><h4>OFFICE EMAIL</h4> <p>{data.education.officeEmail}</p></div>
                <div><h4>MONTHLY INCOME</h4> <p>{data.education.monthlyIncome}</p></div>
                <div><h4>LOAN REPAYMENT</h4> <p>{data.education.loanRepayment}</p></div>
               </div>
               <div>
                <h3>Socials</h3>
                <div><h4>TWITTER</h4> <p>{data.socials.twitter}</p></div>
                <div><h4>FACEBOOK</h4> <p>{data.socials.facebook}</p></div>
                <div><h4>INSTAGRAM</h4> <p>{data.socials.instagram}</p></div>
               </div>
               <div>
                <h3>Guarantor</h3>
                <div> <h4>FULL NAME</h4> <p>{data.guarantor.firstName} {data.guarantor.lastName}</p></div>
                <div><h4>PHONE NUMBER</h4> <p>{data.guarantor.phoneNumber}</p></div>
                <div><h4>EMAIL ADDRESS</h4> <p></p></div>
                <div><h4>RELATIONSHIP</h4> <p></p></div>
               </div>
                  </div>}
 {/* ))} */}
           
        </div>

    )
}