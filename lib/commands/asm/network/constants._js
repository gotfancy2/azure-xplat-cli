/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  vpnGateway: {
    type: ['StaticRouting', 'DynamicRouting'],
    sku: ['Default', 'HighPerformance']
  },

  appGateway: {
    settings: {
      protocol: ['Http'],
      port: [0, 65535],
      affinity: ['Disabled', 'Enabled']
    },
    ip: {
      type: ['Private']
    }
  },

  route: {
    nextHopType: ['VPNGateway', 'VirtualAppliance']
  },

  toRange: function (array) {
    return '[' + array[0] + '-' + array[1] + ']';
  },

  applicationGatewaySizes: ['Small', 'Medium', 'Large', 'ExtraLarge', 'A8'],
  defaultApplicationGatewaySize: 'Small',
  defaultApplicationGatewayInstanceCount: 1,
  applicationGatewayStartOperation: 'start',
  applicationGatewayStopOperation: 'stop',

  trafficManager: {
    protocols: ['http', 'https'],
    loadBalancingMethods: ['performance', 'failover', 'roundrobin'],
    port: 80,
    ttl: 30,
    verb: 'GET',
    protocol: 'https',
    loadBalancingMethod: 'Performance',
    statusCode: 200,
    interval: 30,
    timeout: 10,
    numberOfFailures: 3
  }
};