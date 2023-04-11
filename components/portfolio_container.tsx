import { Children, MouseEventHandler } from "react"

interface PortfolioContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    children?: React.ReactNode,
    focused?: boolean,
    onCompactClicked?: MouseEventHandler<HTMLDivElement>,
}

export default function PortfolioContainer(
    { 
        title,
        children, 
        className = "",
        focused = false,
        onCompactClicked = () => {},
    }: PortfolioContainerProps
) {
    return (
        <div key={`port-container-${title}`} className={`flex flex-col w-full ${className}`}>
            <div 
                className="port-container-title py-2 px-8"
                onClick={onCompactClicked}> {title} </div>
            <div className={
                `port-container-children flex flex-row overflow-x-auto px-6 transition-spacing ${focused ? "flex pt-4" : "h-0"} lg:grid lg:grid-flow-row lg:grid-cols-3 lg:px-8 lg:py-4 lg:grow lg:h-fit }`
            }>
                {
                    Children.map(children, (child, i) => {
                        return (
                            <div key={`port-container-child-${title}-${i}`} className="col-span-1 w-fit">
                                {child}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}