type TotalsProps = {
    src: any
    alt?: string 
    label: string
    count: number
    tag: string
}







export const Totals = ({tag, alt, label, count, ...src}:TotalsProps) => {
    return (
        <div className={tag}>
            <img {...src} alt=""/>
            <p>{label}</p>
            <p>{count}</p>
        </div>
    )
}