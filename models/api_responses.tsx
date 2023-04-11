export type InvestmentOpportunity = {
    id: number,
    name: string,
    logo_url: string,
    cover_url: string,
    tag: string,
    description: string,
}

export type ListInvestmentOpportunitiesResponse = {
    investment_opportunities: InvestmentOpportunity[]
}

export type SuccessfulCompany = {
    id: number,
    logo_url: string,
    is_unicorn: boolean,
    is_markup: boolean,
    is_exit: boolean,
    market_return: number | null,
}

export type SuccessfulCompanyByCategory = {
    category: string,
    successful_companies: SuccessfulCompany[],
}

export type ListSuccessfulCompaniesResponse = {
    data: SuccessfulCompanyByCategory[]
}