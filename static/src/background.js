// This file must be placed on the same directory to "manifest.json"
// since below code works as a service worker.

chrome.declarativeNetRequest.getEnabledRulesets(rulesetIds => console.log(rulesetIds));
