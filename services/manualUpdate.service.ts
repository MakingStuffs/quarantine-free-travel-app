import { getCombinedPages } from "./updateCombinedUrlJson.service";
import { checkQuarantineStatus } from "./checkQuarantineStatus.service";
import { getCoronaPages } from "./updateCoronaPageJson.service";
import { getCountryPages } from "./updateCountryPagesJson.service";
// at 8am everyday
export const manualUpdate = async () => {
  console.log("Refreshing data");
  try {
    await getCountryPages();
    await getCoronaPages();
    getCombinedPages();
    await checkQuarantineStatus();
  } catch (e) {
    console.log(e);
  }
};
