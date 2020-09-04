import Strapi, { DomainSettings, StoreConfig } from "./sdk";

export default function(
  baseURL: string,
  domainConfig: DomainSettings,
  storeConfig?: StoreConfig,
) {
  return new Strapi(baseURL, storeConfig, domainConfig);
}