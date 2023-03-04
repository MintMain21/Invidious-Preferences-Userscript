# Invidious-URL-Parameters-Userscript
A userscript (compatible with browser extensions such as Tampermonkey) for enforcing preffered URL Parameters on preffered Invidious Instances. 

This Userscript is based on https://greasyfork.org/en/scripts/450983-genius-back-to-the-original-page-layout but rewritten to instead
redirect Invidious Video URLs with URL parameters to enforce preferences like video quality, visibility of comments, etc, without using browser cookies.

To edit the enforced URL parameters, change both (!url.includes("[URL Parameters Here]") and (window.location.replace(url + "[URL Parameters Here]").

To edit the invidious instances this script applies to, edit the domains at the top.

Anytime you load a video URL on your desired Invidious instance, this script will check the URL for the desired parameters, and apply them if not found.

It is reccomended that you use this script in combination with https://github.com/dybdeskarphet/privacy-redirector and https://codeberg.org/mthsk/userscripts/src/branch/master/simple-sponsor-skipper

For more information about Invidious URL Parameters and the various options, see https://docs.invidious.io/url-parameters/
