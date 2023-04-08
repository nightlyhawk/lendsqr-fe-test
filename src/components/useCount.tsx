import { useState, useEffect, useReducer } from "react"
import { user } from "../pages/users/Users";
// type DataProps = {
//     data: [data]
//     propt: "userName" | "loanRepayment" | "accountBalance"
// }

// export interface data {
//     userName: string, 
//     loanRepayment: number, 
//     accountBalance: number,
// }

// type DataProps = {
//     userName: string, 
//     loanRepayment: number, 
//     accountBalance: number,
//     users: number
// }

// type ResultProps = {
//     users: number,
//     loans: number,
//     save: number,
// }

export const useCount = <T extends user>(data: T[]): { users: number; loans: number; save: number,} => {
    const [users, setUsers] = useState<number>(0)
    const [loans, setLoans] = useState<number>(0)
    const [save, setSave] = useState<number>(0)
    function updateCount(){
        if(data){
            console.log(data.length)
        for (let i=0; i < data?.length; i++) {
            if (data[i].userName) {
                setUsers(users + 1)
            }
            if (data[i].education.loanRepayment > 0.1) {
                setLoans(loans + 1)
            }
            if (data[i].accountBalance > 0.1) {
                setSave(save + 1)
            }
        }}
    }
    useEffect(() => {
        updateCount();
      }, [data]);
    return { users, loans, save}
}

// type CounterState = {
//     users: number
//     loans: number
//     saves: number
// }

// export const useCount = <T extends { userName: string, 
//     loanRepayment: number, 
//     accountBalance: number,
//    }>(data: T[]): T => {

// const initialUser = { users: 0 }
// const initialLoan = { loans: 0 }
// const initialSave = { saves: 0 }

// for (let i=0; i < data?.length; i++) {

// function reducer({user, loan, save}: CounterState): { users: any; loans?: undefined; saves?: undefined; save?: undefined } | { loans: any; users?: undefined; saves?: undefined; save?: undefined } | { saves: any; users?: undefined; loans?: undefined; save?: undefined } | { users: any; loans: any; save: any; saves?: undefined } {
//     switch () {
//         case data[i].userName:
//             return { users: user.users + 1 }
//         case data[i].loanRepayment > 0.1:
//             return { loans: loan.loans + 1 }
//         case data[i].accountBalance > 0.1:
//             return { saves: save.saves + 1 }
//         default:
//             return { users, loans, save}    
//     }
// }
// }
// }

// useEffect(() => {
//        const [user, dispatch] = useReducer(reducer, initialUser)
//        const [loan, dispatch] = useReducer(reducer, initialLoan)
//        const [save, dispatch] = useReducer(reducer, initialSave)
//            }, [data]);
//          return { user.users, loan.loans, save.saves}