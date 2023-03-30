import { useState, useEffect } from "react"

type DataProps<T> = {
    data: T[]
    propt: "userName" | "loanRepayment" | "accountBalance"
}

export const useCount = <T extends {userName: string, loanRepayment: number, accountBalance: number}>({data}: DataProps<T>) => {
    const [users, setUsers] = useState(0)
    const [loans, setLoans] = useState(0)
    const [save, setSave] = useState(0)
    function updateCount(){
        for (let i=0; i < data.length; i++) {
            if (data[i].userName) {
                setUsers(users + 1)
            }
            if (data[i].loanRepayment > 0.1) {
                setLoans(loans + 1)
            }
            if (data[i].accountBalance > 0.1) {
                setSave(save + 1)
            }
        }
    }
    useEffect(() => {
        updateCount();
      }, [data]);
    return { users, loans, save}
}
