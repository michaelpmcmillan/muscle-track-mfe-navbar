import * as configcat from "configcat-js";

let logger = configcat.createConsoleLogger(3);

let configCatClient = configcat.createClientWithLazyLoad(
  "1HXYCL6f30-Igi34ZRr2Cg/tAzgJLw04E2UsZWxRQVbKg",
  {
    cacheTimeToLiveSeconds: 300,
    logger: logger,
  }
);

export const isEnabled = async (featureKey: string) => {
  return await configCatClient
    .getValueAsync(featureKey, false)
    .then((value) => value as boolean);
};
