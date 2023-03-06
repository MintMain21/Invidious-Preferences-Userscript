// ==UserScript==
// @name         Invidious URL Parameters
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Redirect Invidious Videos with URL Parameters
// @author       MintMain21
// @match        *://inv.odyssey346.dev/watch?*
// @match        *://invidious.baczek.me/watch?*
// @match        *://iteroni.com/watch?*
// @match        *://invidious.namazso.eu/watch?*
// @match        *://iv.ggtyler.dev/watch?*
// @grant        none
// @license      MIT
// @homepage     https://github.com/MintMain21/Invidious-URL-Parameters-Userscript
// ==/UserScript==
/** This userscript is based on https://greasyfork.org/en/scripts/450983-genius-back-to-the-original-page-layout but rewritten to instead
redirect Invidious video URLs with URL parameters to enforce preferences like video quality, visibility of comments, etc, without using browser cookies.

To edit the enforced URL parameters, change both (!url.includes("[URL Parameters Here]") and (window.location.replace(url + "[URL Parameters Here]").

To edit the Invidious instances this script applies to, edit the above domains.

Anytime you load a video URL on your desired Invidious instance, this script will check the URL for the desired parameters, and apply them if not found.

It is recommended that you use this script in combination with https://github.com/dybdeskarphet/privacy-redirector and https://codeberg.org/mthsk/userscripts/src/branch/master/simple-sponsor-skipper

For more information about Invidious URL parameters and the various options, see https://docs.invidious.io/url-parameters/
 */

function getCurrentURL () {
  return window.location.href;
}

// Example
const url = getCurrentURL();

(function() {
    'use strict';

    if (!url.includes("&quality=dash&quality_dash=480&related_videos=false&comments=false&player_style=youtube")) {
        window.location.replace(url + "&quality=dash&quality_dash=480&related_videos=false&comments=false&player_style=youtube");
    }
})();
