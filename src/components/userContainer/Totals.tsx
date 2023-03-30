type TotalsProps = {
    src: string | undefined | React.FC<React.SVGProps<SVGSVGElement>>
    alt?: string | undefined
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