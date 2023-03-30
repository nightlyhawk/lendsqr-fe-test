type TotalsProps = {
    src: any
    alt?: string 
    label: string
    count: number
}







export const Totals = ({alt, label, count, ...src}:TotalsProps) => {
    return (
        <div className="totals">
            <img {...src} alt=""/>
            <p>{label}</p>
            <p>{count}</p>
        </div>
    )
}