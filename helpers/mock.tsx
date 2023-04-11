import {
    InvestmentOpportunity,
    SuccessfulCompany,
    SuccessfulCompanyByCategory,
    ListInvestmentOpportunitiesResponse,
    ListSuccessfulCompaniesResponse,
} from "@/models/api_responses"

export function mockInvestmentOpportunitiesResponse(): ListInvestmentOpportunitiesResponse {
    let response: ListInvestmentOpportunitiesResponse = {
        investment_opportunities: []
    }

    for (let i = 0; i < 4; i++) {
        let r: InvestmentOpportunity = {
            id: i,
            name: "Company Name " + i,
            logo_url: "https://picsum.photos/48",
            cover_url: "https://picsum.photos/390/240",
            tag: "Web3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }
    
        response.investment_opportunities.push(r)
    }

    return response
}

export function mockSuccessfulPortfolios() {
    let response: ListSuccessfulCompaniesResponse = {
        data: []
    }

    let mock_config = {
        Web3: 7,
        ESGxTech: 3,
        FinTech: 5,
        Industry4: 4,
    }

    for (const category in mock_config) {
        let r: SuccessfulCompanyByCategory = {
            category: category,
            successful_companies: []
        }

        for (let i = 0; i < mock_config[category as keyof typeof mock_config]; i++) {
            let sc: SuccessfulCompany = {
                id: i,
                logo_url: "https://picsum.photos/120",
                is_unicorn: i % 3 === 0,
                is_markup: i % 4 === 0,
                is_exit: i === 0 && (category === "Web3" || category === "ESGxTech"),
                market_return: i === 0 && category === "Web3" ? 19 : null,
            }
            
            r.successful_companies.push(sc)
        }

        response.data.push(r)
    }

    return response
}
