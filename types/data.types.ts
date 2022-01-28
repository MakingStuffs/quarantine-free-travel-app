export type CombinedPageData = {
  country: string;
  coronaPage: string;
  countryPage: string;
};

export type PossibleCountriesData = {
  country: string;
  coronaPage: string;
  countryPage: string;
  restrictionData: {
    closedBorders: boolean;
    withConditions: boolean;
    mentionsQuarantine: boolean;
  };
};
