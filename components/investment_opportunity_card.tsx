interface InvestmentOpportunityCardProps {
    id: number,
    name: string,
    logo_url: string,
    cover_url: string,
    tag: string,
    description: string,
}

export default function InvestmentOpportunityCard({
    id,
    name,
    logo_url,
    cover_url,
    tag,
    description,
}: InvestmentOpportunityCardProps) {
    return (
        <div className="flex flex-col relative col-span-1 min-w-invt-op-cover max-w-invt-op-cover min-h-invt-op-cover max-h-invt-op-cover my-6 mr-2 lg:mx-2 shadow-lg">
            <div className="invt-op-card-logo absolute z-3">
                <img src={logo_url} alt={name} />
            </div>
            <div className="invt-op-card-tag py-3 px-3"> #{tag} </div>
            <div>
                <img src={cover_url} alt={name} />
            </div>
            <div className="px-3 mt-6 mb-2 flex-grow overflow-y-auto">
                <div className="invt-op-card-company-name pb-2">
                    {name}
                </div>
                <div className="invt-op-card-company-description">
                    {description}
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <button className="invt-op-card-invt-now-button w-[80%] mb-6 py-2"> Invest Now </button>
            </div>            
        </div>
    )
}