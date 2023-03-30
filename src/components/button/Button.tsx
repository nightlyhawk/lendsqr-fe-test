
type ButtonProps<T> = {
    variant: string
    type: "button" | "reset" | "submit" | undefined 
    event?: React.MouseEventHandler<T> | undefined;
    children: React.ReactNode
}
    

export const Button = <T extends HTMLButtonElement>({children, event, variant, ...type}: ButtonProps<T>) => {
    return (
    <button className={ `${variant}`}{...type} onClick={event}>
    {children}
    </button>
  )
}