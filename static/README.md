# Overview

A sample of `static` APIs of `declarativeNetRequest`.

Using these APIs:

* Adding static rules by a json file.
* chrome.declarativeNetRequest.getEnabledRulesets
    * https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#method-getEnabledRulesets

# Usage

```
$ npm start
```

You can see these values in Chrome Dev Tool's `Network` section.

* `X-DeclarativeNetRequest-Sample: request` in request headers.
* `X-DeclarativeNetRequest-Sample: response` in response headers.

![Screenshot](https://github.com/mmktomato/chrome-extension-manifest-v3-declarativeNetRequest-sample/blob/master/static/readme-asset/screenshot.png "Screenshot")
