// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '1a66ce04-b633-4a0b-b2bc-a912ec8986a6',
    name: 'Monitoring vNext Test Environment Services 03',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/providers/microsoft.insights/logprofiles/default?api-version=2016-03-01', '*')
  .reply(400, "{\"Code\":\"InvalidStorageAccount\",\"Message\":\"The resource '/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourcegroups/default-storage-eastus/providers/microsoft.classicstorage/storageaccounts/testshoeboxeastus' doesn't belong to the subscription '1a66ce04-b633-4a0b-b2bc-a912ec8986a6'.\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '293',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '00000000-0000-0000-0000-000000000000',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '392f44bc-0eb4-4a82-b915-7ee0e5384ddf',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160321T205938Z:392f44bc-0eb4-4a82-b915-7ee0e5384ddf',
  date: 'Mon, 21 Mar 2016 20:59:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/providers/microsoft.insights/logprofiles/default?api-version=2016-03-01', '*')
  .reply(400, "{\"Code\":\"InvalidStorageAccount\",\"Message\":\"The resource '/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourcegroups/default-storage-eastus/providers/microsoft.classicstorage/storageaccounts/testshoeboxeastus' doesn't belong to the subscription '1a66ce04-b633-4a0b-b2bc-a912ec8986a6'.\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '293',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '00000000-0000-0000-0000-000000000000',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '392f44bc-0eb4-4a82-b915-7ee0e5384ddf',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160321T205938Z:392f44bc-0eb4-4a82-b915-7ee0e5384ddf',
  date: 'Mon, 21 Mar 2016 20:59:38 GMT',
  connection: 'close' });
 return result; }]];