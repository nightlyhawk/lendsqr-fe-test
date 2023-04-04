import { useFetch } from "../../components/useFetch";
import { useCount } from "../../components/useCount";
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


export type UserProp = {
    user: user
};
interface user {
    "id": number
    "orgName": string
    "userName": string
    "email": string
    "phoneNumber": number
    "createdAt": string
    "firstName": string
    "lastName": string
    "accountNumber": number
    "accountBalance": number
    "lastActiveDate": number
   "profile": profile,
   "guarantor":guarantor
   "socials":socials
   "education":education
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
    "monthlyIncome":[number],
    "loanRepayment": number
}



export const Users = () => {
    const { data: users, loading, error } = useFetch(
       // "https://64298eeeebb1476fcc4be966.mockapi.io/api/v1/users"
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    const value = useCount(users);
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
            <div>
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
                    <Filter users={users} variant={filters} />
                </tr>
                {error && <div>{error}</div>}
                {loading && <div>Loading...</div>}
                {users && users.map(({ user: {id, orgName, userName, email, phoneNumber, createdAt} }: UserProp) => (
                    <tr key={id}>
                        <td>{orgName}</td>
                        <td>{userName}</td>
                        <td>{email}</td>
                        <td>{phoneNumber}</td>
                        <td>{createdAt}</td>
                        <td>{ }</td>
                        <img src={menu} alt="menu" onClick={handle2} />
                        <OverLay variant={ovl} id={id} />
                    </tr>
                ))}
            </table>
        </div>
    )
}