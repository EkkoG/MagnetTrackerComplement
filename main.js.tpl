// ==UserScript==
// @name         RarbgMegnetTrackerComplement
// @namespace    https://github.com/cielpy/RarbgMegnetTrackerComplement
// @version      0.4
// @description  给 rarbg 的磁链添加 tracker，tracker 来源 https://ngosang.github.io/trackerslist/trackers_best.txt
// @author       cielpy
// @match        https://rarbgprx.org/torrent/*
// @grant        none
// ==/UserScript==


(function () {
    var megnetUrls = document.querySelectorAll("body > table:nth-child(6) > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > div > table > tbody > tr:nth-child(1) > td.lista > a:nth-child(3)")
    let trackerList = ${trackers}
    for (var i = 0; i <= megnetUrls.length; i++) {
        if (i == megnetUrls.length - 1) {
            var megnetUrl = megnetUrls[i].href;
            var trackerListUrlPrams = "&tr=" + trackerList.join("&tr=");
            megnetUrls[i].href = megnetUrl + trackerListUrlPrams; break;
        }
    }
})();