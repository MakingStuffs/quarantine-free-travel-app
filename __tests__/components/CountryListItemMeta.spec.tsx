import { render, screen } from "utils/testing";
import { CountryListItemMeta } from "components";
import { CountryInterface } from "types";

const data: CountryInterface = {
  _id: "61f6f0b29f717e2bf65c9ce3" as any,
  name: "bangladesh",
  urls: {
    covidPage:
      "https://www.gov.uk/foreign-travel-advice/bangladesh/entry-requirements#entry-rules-in-response-to-coronavirus-covid-19",
    countryPage: "https://www.gov.uk/foreign-travel-advice/bangladesh",
  },
  updated: 1644052676183,
  restrictionData: {
    mentions: [
      {
        type: "QUARANTINE",
        conditions: true,
        matches: [
          ".\n\nQuarantine requirements\n\nBangladesh operates a number of quarantine regimes depending on passengers’ circumstances:\n\n\n  Passengers arriving from the majority of countries, including the UK, but excluding those territories named in the paragraphs below, are exempt from quarantine provided they can offer evidence of having completed a WHO approved vaccination course at least 14 day prior to their arrival in Bangladesh.",
          "\n  Passengers who have visited, or transited Botswana, Eswatini, Ghana, Lesotho, Namibia, South Africa and Zimbabwe, within the preceding 14 days of 4 December, are required to complete mandatory 14 day quarantine at a government nominated quarantine hotel upon arrival in Bangladesh, regardless of vaccination status\n  Passengers whose journey originates from, or who have visited within the preceding 15 days of 4 December, Armenia, Bulgaria, Estonia, Georgia, Latvia, Lithuania, Moldova, Mongolia, the Palestinian Occupied Territories, Romania, Serbia, Slovenia and Ukraine are also required to quarantine.",
          ". Those that are unable to provide this evidence are required to complete a period of quarantine at a government nominated quarantine hotel.",
          ". You should note that transiting the countries in this paragraph, without exiting the airport, does not qualify as a visit\n  Children under 18 are able to follow the same quarantine regime that applies to those family members they are travelling with, regardless of their vaccination status\n  Passengers that are subject to mandatory quarantine hotel stay should confirm their stay prior to travel.",
          "\n  In all circumstances, people staying in a government approved hotel, government facility or hospital will need to cover the costs of those stays and any necessary COVID-19 tests\n  In all circumstances, anyone displaying COVID-19 symptoms on arrival will be transferred to a designated government hospital where their quarantine period will be assessed and determined.\n\n\n",
          ". However, those that can offer evidence of having completed a WHO approved vaccination course at least 14 days prior to their arrival in Bangladesh, are able to quarantine at home for seven days.",
          ". This quarantine can be completed by testing negative for COVID-19 on the seventh day.",
        ],
      },
    ],
  },
};

describe("<CountryListItemMeta />", () => {
  it("renders", () => {});
});
