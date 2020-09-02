import * as SimpleCache from '@thetaproom/simple-cache';
import Strapi, { CacherConfig, DomainSettings, StorageLike } from "./sdk";

export default function(
  baseURL: string,
  cacherConfig: CacherConfig,
  domainConfig?: DomainSettings
) {
  const defaultConfig = {
    expiration: {
      amount: 15,
      unit: 'minutes'
    },
    key: 'customer-portal-settings',
    storage: localStorage,
  };

  const defaultDomainConfig = {
    id: "",
    token: undefined,
  }

  domainConfig = {
    ...domainConfig,
    ...defaultDomainConfig
  };

  const config = {...cacherConfig, ...defaultConfig, };
  const storeConfig: StorageLike = new SimpleCache(config);
  return new Strapi(baseURL, storeConfig, domainConfig);
}