export interface Service {
  titleKey: string
  descKey: string
}

export interface JobCategory {
  key: string
  labelKey: string
}

export interface CountryDeployment {
  countryKey: string
  descKey: string
  sectorsKey: string
}

export interface Benefit {
  labelKey: string
}

export const homeServices: Service[] = [
  {
    titleKey: 'home.servicesOverseas',
    descKey: 'home.servicesOverseasDesc',
  },
  {
    titleKey: 'home.servicesSourcecing',
    descKey: 'home.servicesSourcingDesc',
  },
  {
    titleKey: 'home.servicesContract',
    descKey: 'home.servicesContractDesc',
  },
  {
    titleKey: 'home.servicesCompliance',
    descKey: 'home.servicesComplianceDesc',
  },
]

export const activeJobCategories: JobCategory[] = [
  { key: 'caregiver', labelKey: 'jobOrders.caregiver' },
  { key: 'domesticWorker', labelKey: 'jobOrders.domesticWorker' },
  { key: 'spaTherapist', labelKey: 'jobOrders.spaTherapist' },
  { key: 'healthcareWorker', labelKey: 'jobOrders.healthcareWorker' },
]

export const deploymentCountries: CountryDeployment[] = [
  {
    countryKey: 'countries.japan',
    descKey: 'countries.japanDesc',
    sectorsKey: 'countries.japanSectors',
  },
  {
    countryKey: 'countries.middleEast',
    descKey: 'countries.middleEastDesc',
    sectorsKey: 'countries.middleEastSectors',
  },
  {
    countryKey: 'countries.southeast',
    descKey: 'countries.southeastDesc',
    sectorsKey: 'countries.southeastSectors',
  },
]

export const homeBenefits: Benefit[] = [
  { labelKey: 'home.benefit1' },
  { labelKey: 'home.benefit2' },
  { labelKey: 'home.benefit3' },
  { labelKey: 'home.benefit4' },
  { labelKey: 'home.benefit5' },
  { labelKey: 'home.benefit6' },
]
