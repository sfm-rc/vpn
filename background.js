chrome.proxy.settings.clear({});
var dataStr = `
var wall_proxy = "HTTPS www.51netflix.com:1443;";
var nowall_proxy = "DIRECT;";
var direct = "DIRECT;";

function FindProxyForURL(url, host) {
  return wall_proxy;
}
`;
var config = {
  scope: "regular",
  value: {
    mode: "pac_script",
    pacScript: {
      data: dataStr
    }
  }
};
chrome.proxy.settings.set(config);