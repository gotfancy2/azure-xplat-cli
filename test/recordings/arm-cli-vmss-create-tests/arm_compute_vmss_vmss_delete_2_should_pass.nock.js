// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9802/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': '7819cf0f-495f-4e2b-ac41-da5e305faf7c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8860d745-1994-4489-9383-631f228ddfba',
  'x-ms-routing-request-id': 'WESTUS:20160415T210147Z:8860d745-1994-4489-9383-631f228ddfba',
  date: 'Fri, 15 Apr 2016 21:01:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9802/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': '7819cf0f-495f-4e2b-ac41-da5e305faf7c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8860d745-1994-4489-9383-631f228ddfba',
  'x-ms-routing-request-id': 'WESTUS:20160415T210147Z:8860d745-1994-4489-9383-631f228ddfba',
  date: 'Fri, 15 Apr 2016 21:01:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"7819cf0f-495f-4e2b-ac41-da5e305faf7c\",\r\n  \"startTime\": \"2016-04-15T21:01:47.2679604+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': '3e3c2b59-0a2b-4052-85e9-c4fda1f93fd6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '416b68d0-f2b5-43f1-98ee-208b00acf018',
  'x-ms-routing-request-id': 'WESTUS:20160415T210218Z:416b68d0-f2b5-43f1-98ee-208b00acf018',
  date: 'Fri, 15 Apr 2016 21:02:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"7819cf0f-495f-4e2b-ac41-da5e305faf7c\",\r\n  \"startTime\": \"2016-04-15T21:01:47.2679604+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': '3e3c2b59-0a2b-4052-85e9-c4fda1f93fd6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '416b68d0-f2b5-43f1-98ee-208b00acf018',
  'x-ms-routing-request-id': 'WESTUS:20160415T210218Z:416b68d0-f2b5-43f1-98ee-208b00acf018',
  date: 'Fri, 15 Apr 2016 21:02:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"7819cf0f-495f-4e2b-ac41-da5e305faf7c\",\r\n  \"startTime\": \"2016-04-15T21:01:47.2679604+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': 'de5db1ca-92a4-4652-87b1-ac62576ade53',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '2e9685df-5405-4f49-a5d4-a103c527fe3a',
  'x-ms-routing-request-id': 'WESTUS:20160415T210249Z:2e9685df-5405-4f49-a5d4-a103c527fe3a',
  date: 'Fri, 15 Apr 2016 21:02:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"7819cf0f-495f-4e2b-ac41-da5e305faf7c\",\r\n  \"startTime\": \"2016-04-15T21:01:47.2679604+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': 'de5db1ca-92a4-4652-87b1-ac62576ade53',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '2e9685df-5405-4f49-a5d4-a103c527fe3a',
  'x-ms-routing-request-id': 'WESTUS:20160415T210249Z:2e9685df-5405-4f49-a5d4-a103c527fe3a',
  date: 'Fri, 15 Apr 2016 21:02:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"7819cf0f-495f-4e2b-ac41-da5e305faf7c\",\r\n  \"startTime\": \"2016-04-15T21:01:47.2679604+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': 'b146c44d-a566-4e18-8893-0e9f11639b87',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '6a3cdd09-71cd-4c35-a24c-37c03ff9967e',
  'x-ms-routing-request-id': 'WESTUS:20160415T210320Z:6a3cdd09-71cd-4c35-a24c-37c03ff9967e',
  date: 'Fri, 15 Apr 2016 21:03:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"7819cf0f-495f-4e2b-ac41-da5e305faf7c\",\r\n  \"startTime\": \"2016-04-15T21:01:47.2679604+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': 'b146c44d-a566-4e18-8893-0e9f11639b87',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '6a3cdd09-71cd-4c35-a24c-37c03ff9967e',
  'x-ms-routing-request-id': 'WESTUS:20160415T210320Z:6a3cdd09-71cd-4c35-a24c-37c03ff9967e',
  date: 'Fri, 15 Apr 2016 21:03:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"7819cf0f-495f-4e2b-ac41-da5e305faf7c\",\r\n  \"startTime\": \"2016-04-15T21:01:47.2679604+00:00\",\r\n  \"endTime\": \"2016-04-15T21:03:30.3935575+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': '07692d99-4dc1-430d-aff4-f3cbc763072d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'a5ea72cb-722b-4208-9a3a-e2aa5fa32741',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160415T210351Z:a5ea72cb-722b-4208-9a3a-e2aa5fa32741',
  date: 'Fri, 15 Apr 2016 21:03:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7819cf0f-495f-4e2b-ac41-da5e305faf7c?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"7819cf0f-495f-4e2b-ac41-da5e305faf7c\",\r\n  \"startTime\": \"2016-04-15T21:01:47.2679604+00:00\",\r\n  \"endTime\": \"2016-04-15T21:03:30.3935575+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': '07692d99-4dc1-430d-aff4-f3cbc763072d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'a5ea72cb-722b-4208-9a3a-e2aa5fa32741',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160415T210351Z:a5ea72cb-722b-4208-9a3a-e2aa5fa32741',
  date: 'Fri, 15 Apr 2016 21:03:51 GMT',
  connection: 'close' });
 return result; }]];