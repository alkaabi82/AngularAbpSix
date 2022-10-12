import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44329/',
  redirectUri: baseUrl,
  clientId: 'AbpSix_App',
  responseType: 'code',
  scope: 'offline_access AbpSix',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AbpSix',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44374',
      rootNamespace: 'AbpSix',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
