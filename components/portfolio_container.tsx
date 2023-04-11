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
        <div className={`flex flex-col w-full ${className}`}>
            <div 
                className="port-container-title py-2 px-8"
                onClick={onCompactClicked}> {title} </div>
            <div className={
                `port-container-children ${focused ? "flex pt-4" : "h-0"} transition-spacing lg:flex flex-row overflow-x-auto lg:grid lg:grid-flow-row lg:grid-cols-3 px-6 lg:px-8 lg:pt-4 lg:h-fit lg:grow pb-10}`
            }>
                {
                    Children.map(children, (child) => {
                        return (
                            <div className="col-span-1 w-fit">
                                {child}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}