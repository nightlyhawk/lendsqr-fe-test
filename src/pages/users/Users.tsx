import { useAxios } from "../../hooks/useAxios";
import { useCount } from "../../hooks/useCount";
import { useState } from 'react';
import { Totals } from "../../components/userContainer/Totals";
import userN from '../../components/userContainer/users.svg';
import active from '../../components/userContainer/active-users.svg';
import loans from '../../components/userContainer/users-loans.svg';
import savings from '../../components/userContainer/users-save.svg';
import filter from './filter.svg';
import { Filter } from "../../components/filter/Filter";
import { OverLay } from "../../components/overlay/OverLay";
import menu from './menu.svg';
import { useSlider } from "../../components/slider";


export type UserProp = {
    user: user
};
export interface user {
   "id": number,
   "orgName": string,
   "userName": string,
   "email": string,
   "phoneNumber": number,
   "createdAt": any,
   "firstName": string,
   "lastName": string,
   "accountNumber": number,
   "accountBalance": number,
   "lastActiveDate": number,
   "profile": profile,
   "guarantor":guarantor,
   "socials":socials,
   "education":education,
};

interface MyType{
    [index: number]: []
}

interface profile {
    "firstName":string,
    "lastName":string,
    "phoneNumber":number,
    "avatar": any,
    "gender":"Male" | "Female",
    "bvn":number,
    "address": string,
    "currency":"NGN"
}

interface guarantor {
    "firstName":string,
    "lastName":string,
    "phoneNumber":number,
    "gender":string,
    "address":string
}

interface socials {
    "facebook":string,
    "instagram":string,
    "twitter":string
}

interface education {
    "level":string,
    "employmentStatus":"Employed" | "Unemployed",
    "sector":string,
    "duration":any,
    "officeEmail":string,
    "monthlyIncome":any,
    "loanRepayment": number
}



export const Users = () => {
    const [ loading, data, error, request ] = useAxios<user[]>(
        {method: 'GET', url:"https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"} 
    );
    const pagination = useSlider(data);
    const value = useCount(data);
    const [filters, setFilters] = useState("filter-off");
    const [ovl, setOvl] = useState("overlay-off");
    function handle1() {
        if (filters === "filter-off") {
            setFilters("filter-on")
        } else {
            setFilters("filter-off")
        }
    }
    function handle2() {
        if (filters === "overlay-off") {
            setOvl("overlay-on")
        } else {
            setOvl("overlay-off")
        }
    }
   


    return (
        <div className="text-secondary">
            <h1>Users</h1>
            <div className="containTotal">
            <Totals src={userN} label='USERS' count={value.users}></Totals>
            <Totals src={active} label='ACTIVE USERS' count={value.users}></Totals>
            <Totals src={loans} label='USERS WITH LOANS' count={value.loans}></Totals>
            <Totals src={savings} label='USERS WITH SAVINGS' count={value.save}></Totals>
            </div>
            <table>
                <tr>
                    <th>ORGANIZATION <img src={filter} alt="filter" onClick={handle1}/></th>
                    <th>USERNAME <img src={filter} alt="filter" onClick={handle1}/> </th>
                    <th>EMAIL <img src={filter} alt="filter" onClick={handle1}/> </th>
                    <th>PHONE NUMBER <img src={filter} alt="filter" onClick={handle1}/> </th>
                    <th>DATE JOINED<img src={filter} alt="filter" onClick={handle1}/></th>
                    <th>STATUS<img src={filter} alt="filter" onClick={handle1}/></th>
                    <Filter users={data} variant={filters} />
                </tr>
                {error && <div>{error}</div>}
                {loading && <div>Loading...</div>}
                {pagination && pagination.records.map((user) => (
                    <tr key={user.id}>
                        <td>{user.orgName}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.createdAt}</td>
                        <td></td>
                        <img src={menu} alt="menu" onClick={handle2} />
                        <OverLay variant={ovl} id={user.id} />
                    </tr>
                ))}
            </table>
            <nav>
                <ul className="pagination">
                    <li className="page-link">
                        <a href="#" 
                        onClick={pagination?.prePage}>&lt;</a>
                    </li>
                    {
                        pagination?.numbers.map((n, i) => (
                            <li className={`page-item ${pagination?.currentPage === n? 'pactive' :''}`} key={i}>
                                <a href="#"
                                onClick={() => pagination?.changeCPage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li className="page-link">
                        <a href="#" 
                        onClick={pagination?.nexPage}>&gt;</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}