interface PortfolioThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
    logo_url: string,
    is_unicorn?: boolean,
    is_markup?: boolean,
    is_exit?: boolean,
    market_return?: number | null,
}

export default function PortfolioThumbnail({
    logo_url,
    is_unicorn = false,
    is_markup = false,
    is_exit = false,
    market_return = null,
    className = "",
}: PortfolioThumbnailProps) {
    const containerClass = () => {
        if (is_exit && market_return != null) {
            return "port-thumbnail-with-exit-return"
        }
        
        if (is_markup || (is_exit && market_return == null)) {
            return "port-thumbnail-with-markup"
        }

        return ""
    }

    return (
        <div className={`relative ${containerClass()} ${className}`}>
            <img src={logo_url} className="port-thumbnail min-w-fit max-w-fit" alt="return_some_name_in_api" />

            { 
                is_unicorn && 
                    <div className="port-thumbnail-unicorn-tag absolute top-0 left-0 flex justify-center items-center w-full h-fit">
                        <img src="/unicorn_logo_18x18.svg" className="mx-1" alt="unicorn" />
                        Unicorn
                    </div> 
            }

            {
                is_markup &&
                    <div className="port-thumbnail-markup-tag absolute flex justify-center items-center rounded-full">
                        MARK UP
                    </div>
            }

            {
                is_exit &&
                    <div className="port-thumbnail-exit-tag absolute flex justify-center items-center rounded-full">
                        EXIT
                    </div>
            }

            {
                is_exit && market_return &&
                    <div className="port-thumbnail-exit-return-tag absolute flex flex-col justify-center items-center rounded-full">
                        <div> EXIT </div>
                        <div className="port-thumbnail-exit-return-tag-return"> {market_return}X </div>
                        <div> RETURN </div>
                    </div>
            }
        </div>
    )
}