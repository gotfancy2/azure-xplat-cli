// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"xingwu-pool1test\",\"startTime\":\"2016-04-29T19:00:00Z\",\"endTime\":\"2016-04-29T19:30:00Z\",\"vmSize\":\"standard_d1\",\"totalCoreHours\":0.49999999999999994,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    },{\r\n      \"poolId\":\"xplattestpool\",\"startTime\":\"2016-04-29T19:00:00Z\",\"endTime\":\"2016-04-29T19:30:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":1.5000000000000007,\"dataIngressGiB\":4.5006163418293E-05,\"dataEgressGiB\":1.328345388174057E-05\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '21884b13-e6c1-43aa-b0c0-7fa2e912ab4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'ae11a37b-e873-45bb-a114-c947eb120202',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Apr 2016 22:50:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"xingwu-pool1test\",\"startTime\":\"2016-04-29T19:00:00Z\",\"endTime\":\"2016-04-29T19:30:00Z\",\"vmSize\":\"standard_d1\",\"totalCoreHours\":0.49999999999999994,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    },{\r\n      \"poolId\":\"xplattestpool\",\"startTime\":\"2016-04-29T19:00:00Z\",\"endTime\":\"2016-04-29T19:30:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":1.5000000000000007,\"dataIngressGiB\":4.5006163418293E-05,\"dataEgressGiB\":1.328345388174057E-05\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '21884b13-e6c1-43aa-b0c0-7fa2e912ab4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'ae11a37b-e873-45bb-a114-c947eb120202',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Apr 2016 22:50:02 GMT',
  connection: 'close' });
 return result; }]];