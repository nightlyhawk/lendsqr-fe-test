import { Button } from "../button/Button"
type FilterProps<T> = {
    users: T[] | undefined
    variant: string |  React.MutableRefObject<undefined>
}

export const Filter = <T extends {orgName: string}>({users, variant}: FilterProps<T>) => {
        //    function match(){
        //     for (let index = 0; index < users.length; index++) {
        //         if(users === {}){}
                
        //     }
        //    }

    
    return (
      <div className={ `${variant}`} >
          <form>
            <label htmlFor="organization">Organization</label>
            <select id="organization" placeholder="select">
            {users && users.map((user) => {
                return (
                
                <option value="">{user.orgName}</option>
               
                )
            })}
            </select>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="User" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
            <label htmlFor="date">Date</label>
            <input type="date" name="date" placeholder="Date" />
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="number" name="phonenumber" placeholder="Phone Number"/>
            <label htmlFor="status">Status</label>
            <select id="status" placeholder="select" >
                <option value="">Active</option>
                <option value="">Inactive</option>
                <option value="">Pending</option>
                <option value="">BlackListed</option>
            </select>
        </form>
        <div>
            <Button variant="btn-outlined-tertiary" type="submit">Filter</Button>
            <Button variant="btn-outlined-secondary" type="button">Reset</Button>
        </div>
      </div>
    )
}