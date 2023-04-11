// ==UserScript==
// @name         Invidious Preferences
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Redirect Invidious Videos with URL Parameters
// @author       MintMain21
// @match        *://inv.odyssey346.dev/*
// @match        *://invidious.baczek.me/*
// @match        *://iteroni.com/*
// @match        *://invidious.namazso.eu/*
// @match        *://iv.ggtyler.dev/*
// @match        *://yewtu.be/*
// @match        *://vid.puffyan.us/*
// @match        *://inv.riverside.rocks/*
// @match        *://watch.thekitty.zone/*
// @match        *://y.com.sb/*
// @match        *://invidious.nerdvpn.de/*
// @match        *://invidious.tiekoetter.com/*
// @match        *://yt.artemislena.eu/*
// @match        *://invidious.flokinet.to/*
// @match        *://inv.bp.projectsegfau.lt/*
// @match        *://inv.vern.cc/*
// @match        *://invidious.sethforprivacy.com/*
// @match        *://invidious.projectsegfau.lt/*
// @match        *://yt.funami.tech/*
// @match        *://invidious.lunar.icu/?*
// @match        *://invidious.privacydev.net/*
// @match        *://invidious.slipfox.xyz/*
// @match        *://invidious.esmailelbob.xyz/*
// @match        *://iv.melmac.space/*
// @match        *://invidious.snopyta.org/*
// @match        *://invidious.weblibre.org/*
// @match        *://invidious.kavin.rocks/*
// @match        *://yt.oelrichsgarcia.de/*
// @match        *://invidious.privacydev.net/*
// @match        *://invidious.vpsburti.com/*
// @match        *://inv.zzls.xyz/*
// @match        *://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion/*
// @match        *://w6ijuptxiku4xpnnaetxvnkc5vqcdu7mgns2u77qefoixi63vbvnpnqd.onion/*
// @match        *://kbjggqkzv65ivcqj6bumvp337z6264huv5kpkwuv6gu5yjiskvan7fad.onion/*
// @match        *://grwp24hodrefzvjjuccrkw3mjq4tzhaaq32amf33dzpmuxe7ilepcmad.onion/*
// @match        *://osbivz6guyeahrwp2lnwyjk2xos342h4ocsxyqrlaopqjuhwn2djiiyd.onion/*
// @match        *://u2cvlit75owumwpy4dj2hsmvkq7nvrclkpht7xgyye2pyoxhpmclkrad.onion/*
// @match        *://euxxcnhsynwmfidvhjf6uzptsmh4dipkmgdmcmxxuo7tunp3ad2jrwyd.onion/*
// @match        *://invidious.esmail5pdn24shtvieloeedh7ehz3nrwcdivnfhfcedl7gf4kwddhkqd.onion/*
// @match        *://inv.vernccvbvyi5qhfzyqengccj7lkove6bjot2xhh5kajhwvidqafczrad.onion/*
// @match        *://am74vkcrjp2d5v36lcdqgsj2m6x36tbrkhsruoegwfcizzabnfgf5zyd.onion/*
// @match        *://ng27owmagn5amdm7l5s3rsqxwscl5ynppnis5dqcasogkyxcfqn7psid.onion/*
// @match        *://iv.odysfvr23q5wgt7i456o5t3trw2cw5dgn56vbjfbq2m7xsc5vqbqpcyd.onion/*
// @match        *://invidious.g4c3eya4clenolymqbpgwz3q3tawoxw56yhzk4vugqrl6dtu3ejvhjid.onion/*
// @match        *://verni6dr4qxjgjumnvesxerh5rvhv6oy5ddeibaqy5d7tgbiiyfa.b32.i2p/*
// @grant        none
// @license      MIT
// @homepage     https://github.com/MintMain21/Invidious-URL-Parameters-Userscript
// ==/UserScript==
/** This userscript is written to enforce invidious preferences such as theme, language, video quality, visibility of comments, etc, through URL parameters and without using browser cookies.
For more information about Invidious URL parameters and the various options, see https://docs.invidious.io/url-parameters/
To edit the enforced URL parameters, change the setting strings below. Keep options in their appropriate catagories (URL Parameters affecting video playback should only be in videosettings, etc). You can keep a setting option blank if you would rather not append any URL parameters.
*/
let appearencesettings = "dark_mode=auto&hl=en-US"
let searchsettings = "region=JP"
let videosettings = "related_videos=false&comments=false&quality=hd720&player_style=youtube&extend_desc=true"
let trendingsettings = "type=Music"
/**
To edit the Invidious instances this script applies to, edit the domains above.
You may also edit the Homepage by changing the variable below (options include "search", "popular", and "trending"). */
let homepage = "search"
/**
It is recommended that you use this script in combination with https://github.com/dybdeskarphet/privacy-redirector and https://codeberg.org/mthsk/userscripts/src/branch/master/simple-sponsor-skipper


This script can also redirect Invidious Feeds to their YouTube equivelants so that URLs from RSS Feeds can be easily redirected to the most convenient instance. To disable this, set rssRedirect below to "false"*/
let rssRedirect = "true"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCurrentURL () {
  return window.location.href;
}

// Example
const url = getCurrentURL();

(function() {
    'use strict';

    if (!url.includes("?") && !url.includes(appearencesettings)) {
        window.location.replace(url + ("?" + appearencesettings));

    }

            else if(!url.includes(appearencesettings)) {
                window.location.replace(url + ("&" + appearencesettings));
              
    }

    if (url.includes("q=") && !url.includes(searchsettings)) {
        window.location.replace(url + ("&" + appearencesettings + "&" + searchsettings));
    }

    if(homepage.includes("search") && url.includes("feed/trending")){
            window.location.replace (window.location.href.substring(0, window.location.href.indexOf('feed/trending')) + ("search"));
    }
    else if(homepage.includes("search") && url.includes("feed/popular")){
                window.location.replace (window.location.href.substring(0, window.location.href.indexOf('feed/popular')) + ("search"));
    }

    if(homepage.includes("popular") && url.includes("feed/trending")){
            window.location.replace (window.location.href.substring(0, window.location.href.indexOf('feed/trending')) + ("feed/popular"));
    }
    else if(homepage.includes("popular") && url.includes("search") && !url.includes("q=")){
                window.location.replace (window.location.href.substring(0, window.location.href.indexOf('search')) + ("feed/popular"));
    }

    if(homepage.includes("trending") && url.includes("feed/popular")){
            window.location.replace (window.location.href.substring(0, window.location.href.indexOf('feed/popular')) + ("feed/trending"));
    }
    else if(homepage.includes("popular") && url.includes("search") && !url.includes("q=")){
                window.location.replace (window.location.href.substring(0, window.location.href.indexOf('search')) + ("feed/trending"));
    }
    if (url.includes("feed/trending") && !url.includes(trendingsettings)) {
        window.location.replace(url + ("?" + appearencesettings + "&" + trendingsettings));
    }
    if (url.includes("v=") && !url.includes(videosettings)) {
        window.location.replace(url + ("&" + appearencesettings + "&" + videosettings));
    }

})();

var InvidiousLinks = Array.from(document.links).filter(link => link.href.includes(window.location.hostname));
    for (var i = 0; i < InvidiousLinks.length; i++) {
        if(InvidiousLinks[i].href.includes("?")){
            InvidiousLinks[i].href = InvidiousLinks[i].href + ("&" + appearencesettings)
        }
        else if (!InvidiousLinks[i].href.includes("feed/channel") && !InvidiousLinks[i].href.includes("feed/playlist")){
            InvidiousLinks[i].href = InvidiousLinks[i].href + ("?" + appearencesettings)
        }

                if(InvidiousLinks[i].href.includes("v=")){
            InvidiousLinks[i].href = InvidiousLinks[i].href + ("&" + videosettings)
        }
                         if(InvidiousLinks[i].href.includes("feed/channel") && rssRedirect.includes("true")){
            InvidiousLinks[i].href = ("https://www.youtube.com/feeds/videos.xml?channel_id=" + InvidiousLinks[i].pathname.replace("/feed/channel/", ""))
           }
                  if(InvidiousLinks[i].href.includes("feed/playlist") && rssRedirect.includes("true")){
            InvidiousLinks[i].href = ("https://www.youtube.com/feeds/videos.xml?playlist_id=" + InvidiousLinks[i].pathname.replace("/feed/playlist/", ""))
           }
    }
