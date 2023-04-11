import InvestmentOpportunityCard from "@/components/investment_opportunity_card"
import PortfolioContainer from "@/components/portfolio_container"
import PortfolioThumbnail from "@/components/portfolio_thumbnail"

import { SuccessfulCompanyByCategory } from "@/models/api_responses"

import { mockInvestmentOpportunitiesResponse, mockSuccessfulPortfolios } from "@/helpers/mock"

import { useState } from "react"

export default function Demo() {
    const [selectedCategory, setSelectedCategory] = useState("Web3")

    const successfulPortfolios = mockSuccessfulPortfolios()
    const portfolioInColCount = Math.ceil(successfulPortfolios.data.length/2)

    function buildPortfolioContainers(data: SuccessfulCompanyByCategory, array: SuccessfulCompanyByCategory[]) {
        let isLast = array.indexOf(data) === array.length - 1

        return (
            <PortfolioContainer 
                title={data.category}
                className={`lg:mb-8 ${isLast ? "grow" : ""}`}
                onCompactClicked={() => {setSelectedCategory(data.category)}}
                focused={selectedCategory === data.category}
                >
                {
                    data.successful_companies.map((successfulCompany) => {
                        return (
                            <PortfolioThumbnail
                                key={`port-thumbnail-${successfulCompany.id}`}
                                logo_url={successfulCompany.logo_url}
                                is_unicorn={successfulCompany.is_unicorn}
                                is_markup={successfulCompany.is_markup}
                                is_exit={successfulCompany.is_exit}
                                market_return={successfulCompany.market_return}
                                className="my-2 mx-2"
                                />
                        )
                    })
                }
            </PortfolioContainer>
        )
    }

    return (
        <>
            <div className="demo w-screen lg:px-2.5">
                {/* Investment Opportunities */}
                <div className="flex flex-col items-center w-full lg:mx-32">
                    <div className="demo-section-header mx-32 lg:mx-0 pt-10"> Investment Opportunities </div>
                    <div className="demo-section-text max-w-[768px] mx-32 lg:mx-0 mt-2 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>

                    <div className="flex flex-row overflow-x-auto w-full pl-16 lg:pl-0 lg:invt-op-card-container max-w-invt-op-card-container lg:grid lg:grid-flow-row lg:grid-cols-3">
                        {
                            mockInvestmentOpportunitiesResponse().investment_opportunities.map((investmentOpportunity) => {
                                return (
                                    <div key={`invt-op-${investmentOpportunity.id}`} className="flex flex-row justify-center items-center">
                                        <InvestmentOpportunityCard
                                            key={`invt-op-card-${investmentOpportunity.id}`}
                                            id={investmentOpportunity.id}
                                            name={investmentOpportunity.name}
                                            logo_url={investmentOpportunity.logo_url}
                                            cover_url={investmentOpportunity.cover_url}
                                            tag={investmentOpportunity.tag}
                                            description={investmentOpportunity.description}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Successful Portfolio */}
                <div className="w-full px-16">
                    <div className="demo-section-header mt-24 mb-8"> Successful Portfolio Companies </div>
                        {
                            <div className="flex flex-col lg:flex-row w-full items-stretch justify-center">
                                <div className="w-full lg:flex lg:flex-col lg:w-fit lg:mx-3">
                                    {
                                        successfulPortfolios.data.slice(
                                            0, portfolioInColCount
                                            ).map((datum, _, arr) => {
                                            return buildPortfolioContainers(datum, arr)
                                        })
                                    }
                                </div>
                                <div className="w-full lg:flex lg:flex-col lg:w-fit lg:mx-3">
                                    {
                                        successfulPortfolios.data.slice(
                                            portfolioInColCount, successfulPortfolios.data.length
                                            ).map((datum, _, arr) => {
                                            return buildPortfolioContainers(datum, arr)
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>
            </div>
        </>
    )
}