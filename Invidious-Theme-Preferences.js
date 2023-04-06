// ==UserScript==
// @name         Invidious Theme Preferences
// @namespace    http://greasyfork.org/
// @version      0.1
// @description  Enforces preffered Invidious theme
// @author       Sheer Anger
// @match        *://vid.puffyan.us/*
// @grant        none
// @license      MIT
// ==/UserScript==
/** This userscript is based on https://greasyfork.org/en/scripts/458494-old-wikipedia-layout but rewritten to enforce sitewide Invidious preferences such as theme and language using URL parameters without using browser cookies.
For more information about Invidious URL parameters and the various options, see https://docs.invidious.io/url-parameters/
To edit the enforced URL parameters, change appearencesettings below.
*/
const appearencesettings = 'dark_mode=auto&hl=en-US';
/**
To edit the Invidious instances this script applies to, edit the above domains.
It is recommended that you use this script in combination with https://github.com/dybdeskarphet/privacy-redirector
*/

function test(url){
    return !url.includes(appearencesettings);
}

function getNewPage(url){
    var que = '?';
    if(url.includes("?")){que = '&'};
    return url.concat(que,appearencesettings);
}

function fixLinks(){
    var links = Array.prototype.slice.call(document.links, 0);
    links.filter(function(link){
        if(test(link.href)){
            var greatNewLink = getNewPage(link.href);
            if(link.hasAttribute('data-outbound-url')) link.setAttribute('data-outbound-url', greatNewLink);
            link.setAttribute('href', greatNewLink);
        }
    });
}

if(test(window.location.href)){window.location.assign(getNewPage(window.location.href));}

window.onload = fixLinks;
setInterval(fixLinks, 50);
