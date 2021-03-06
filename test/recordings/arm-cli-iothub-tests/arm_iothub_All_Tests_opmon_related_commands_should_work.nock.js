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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_IOTHUB_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGeg=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1604',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '24ba7c5c-d51e-47e3-aeec-5cbbb7db84e2',
  'x-ms-correlation-request-id': '24ba7c5c-d51e-47e3-aeec-5cbbb7db84e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091452Z:24ba7c5c-d51e-47e3-aeec-5cbbb7db84e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGeg=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1604',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-request-id': 'daf05d72-7e90-4483-84e9-2c3340926130',
  'x-ms-correlation-request-id': 'daf05d72-7e90-4483-84e9-2c3340926130',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091453Z:daf05d72-7e90-4483-84e9-2c3340926130',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGeg=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"07QHDsmFx2QCTGprtaF+CGmAYj6dDSUXkj2QFeggQeA=\",\"secondaryKey\":\"nyUv2ryt5eht1A+775SbrxpwEh9SpCIeJzR7jdlMzZU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Qg8Wq30hp87sSAm77A0k6riphIc9NYKU97foIb91i4A=\",\"secondaryKey\":\"DPgT1hTeJxjAXQ7lFajoMi4qjhjXAy4dU3f4n8ooE7E=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"JFX6gu4se6qUPfTW12i9KSDf+YTr7Kl0XAzuXHduc+k=\",\"secondaryKey\":\"QEFM77HuwQOG2kq/mWXX18GSS0PkOMpSFaPk4aRAmjY=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"YTYKxTV88NAXTLBbTlXOGEI6Q7p7fSDrfALN0GN1DAc=\",\"secondaryKey\":\"ZOcvpKpGBP5GEvpDwNB/F21pJ94h+uUQ9eUCunRJI58=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"evXUR+lV/NllbDJKB47wBkvHT833+O5M5Gjxi/qEKh0=\",\"secondaryKey\":\"Ta9o29AEGgl3ag1LevrjqjDKB8kLl9XyiT1BeFnQHcA=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"Information\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2513',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/YmNmZWQ5NTktZWQyYS00MWU2LWE5ZmEtZDUyZDU4YzFiZjU5?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4997',
  'x-ms-request-id': '7fe72fe2-b523-4e06-8515-94ea4a935dd1',
  'x-ms-correlation-request-id': '7fe72fe2-b523-4e06-8515-94ea4a935dd1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091455Z:7fe72fe2-b523-4e06-8515-94ea4a935dd1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/YmNmZWQ5NTktZWQyYS00MWU2LWE5ZmEtZDUyZDU4YzFiZjU5?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14931',
  'x-ms-request-id': '36f93ea7-0817-41dc-9517-0b08d4d15944',
  'x-ms-correlation-request-id': '36f93ea7-0817-41dc-9517-0b08d4d15944',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091526Z:36f93ea7-0817-41dc-9517-0b08d4d15944',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:15:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/YmNmZWQ5NTktZWQyYS00MWU2LWE5ZmEtZDUyZDU4YzFiZjU5?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': '20de11bc-deb6-4403-a177-eb0e422d05d1',
  'x-ms-correlation-request-id': '20de11bc-deb6-4403-a177-eb0e422d05d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091557Z:20de11bc-deb6-4403-a177-eb0e422d05d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:15:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGgk=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"Information\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1611',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': '245b57b6-a986-4f18-9e38-7029027aba2c',
  'x-ms-correlation-request-id': '245b57b6-a986-4f18-9e38-7029027aba2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091558Z:245b57b6-a986-4f18-9e38-7029027aba2c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:15:58 GMT' });
 return result; }]];