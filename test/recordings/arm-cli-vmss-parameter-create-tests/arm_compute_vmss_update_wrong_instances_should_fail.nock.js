// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-03-30', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidParameter\",\r\n    \"target\": \"upgradePolicies.instanceIds\",\r\n    \"message\": \"The provided instanceId 999 is not an active Virtual Machine Scale Set VM instanceId.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '25f147af-fb41-4f84-8f13-22185db6836c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'e5eccda8-ceed-40c8-a91a-aa0a08852997',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170946Z:e5eccda8-ceed-40c8-a91a-aa0a08852997',
  date: 'Tue, 17 May 2016 17:09:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-03-30', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidParameter\",\r\n    \"target\": \"upgradePolicies.instanceIds\",\r\n    \"message\": \"The provided instanceId 999 is not an active Virtual Machine Scale Set VM instanceId.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '25f147af-fb41-4f84-8f13-22185db6836c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'e5eccda8-ceed-40c8-a91a-aa0a08852997',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170946Z:e5eccda8-ceed-40c8-a91a-aa0a08852997',
  date: 'Tue, 17 May 2016 17:09:45 GMT',
  connection: 'close' });
 return result; }]];