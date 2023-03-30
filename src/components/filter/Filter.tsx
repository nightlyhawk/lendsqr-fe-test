import { Button } from "../button/Button"
type FilterProps<T> = {
    users: T[]
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
            <select>
            {users && users.map((user) => {
                return (
                
                <option value="">{user.orgName}</option>
               
                )
            })}
            </select>
            <input type="text" name="" id="" />
            <input type="email" name="" id="" />
            <input type="date" name="" id="" />
            <input type="number" name="" id="" />
            <select>
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