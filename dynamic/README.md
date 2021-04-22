# Overview

A sample of `dynamic` APIs of `declarativeNetRequest`.

Using these APIs:

* chrome.declarativeNetRequest.updateDynamicRules
    * https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#method-updateDynamicRules
* chrome.declarativeNetRequest.getDynamicRules
    * https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#method-getDynamicRules

# Usage

```
$ npm start
```

You can see these values in Chrome Dev Tool's `Network` section.

* `X-DeclarativeNetRequest-Sample: request` in request headers.
* `X-DeclarativeNetRequest-Sample: response` in response headers.

![Screenshot](https://github.com/mmktomato/chrome-extension-manifest-v3-declarativeNetRequest-sample/blob/master/dynamic/readme-asset/screenshot.png "Screenshot")
