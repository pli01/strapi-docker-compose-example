/*
'use strict';
Function to fix bug in axios about https overt http_proxy
 use tunnel instead
*/
const tunnel = require('tunnel');
const url = require('url'); 

module.exports = () => {
/*
module.exports = ({ env }) => {
  // Dirty fix: must use http_proxy and parse hostname and port
   proxyUrl = env('http_proxy');
   if (proxyUrl) {
        parsedProxyUrl = url.parse(proxyUrl);
        shouldProxy = true;
  }
  if (shouldProxy) {
  console.log("# proxyUrl");
    }
*/
   return tunnel.httpsOverHttp({
        proxy: {
       host: '172.16.1.20',
       port: 8888,
//          host: parsedProxyUrl.hostname,
//          port: parsedProxyUrl.port
       },
   });

};

