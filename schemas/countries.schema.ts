import { CountryInterface } from "types";

const countriesSchema = {
  bsonType: "object",
  required: ["name", "urls"],
  properties: {
    _id: {},
    name: {
      bsonType: "string",
      description: "'name' is a required string",
    },
    updated: {},
    urls: {
      bsonType: "object",
      required: ["covidPage", "countryPage"],
      properties: {
        covidPage: {
          bsonType: "string",
          description: "'covidPage' is a required string",
        },
        countryPage: {
          bsonType: "string",
          description: "'countryPage' is a required string",
        },
      },
    },
    restrictionData: {
      bsonType: "object",
      required: ["mentions"],
      properties: {
        mentions: {
          bsonType: "array",
          items: {
            bsonType: ["string", "object"],
            required: ["type", "conditions"],
            properties: {
              type: {
                enum: ["QUARANTINE", "ISOLATION", "CLOSED_BORDER"],
                description:
                  "'type' is required and can only be one of the specified values",
              },
              conditions: {
                bsonType: "bool",
                description: "'conditions' is a required boolean",
              },
            },
          },
        },
      },
    },
  },
};

export { countriesSchema };
