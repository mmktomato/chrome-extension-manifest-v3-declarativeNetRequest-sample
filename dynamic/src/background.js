// This file must be placed on the same directory to "manifest.json"
// since below code works as a service worker.

const ruleId = 1;

const rules = {
  removeRuleIds: [ruleId],
  addRules: [{
    id: ruleId,
    priority: 1,
    condition: {
      domains: ["www.google.com"],
      resourceTypes: ["main_frame", "xmlhttprequest"],
    },
    action: {
      type: "modifyHeaders",
      requestHeaders: [{
        header: "X-DeclarativeNetRequest-Sample",
        operation: "set",
        value: "request"
      }],
      responseHeaders: [{
        header: "X-DeclarativeNetRequest-Sample",
        operation: "set",
        value: "response"
      }],
    }
  }],
};

chrome.declarativeNetRequest.updateDynamicRules(rules, () => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
  } else {
    chrome.declarativeNetRequest.getDynamicRules(rules => console.log(rules));
  }
});

