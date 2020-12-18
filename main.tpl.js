// ==UserScript==
// @name         RarbgMegnetTrackerComplement
// @namespace    https://github.com/cielpy/RarbgMegnetTrackerComplement
// @version      0.9
// @description  给 rarbg 的磁链添加 tracker，tracker 来源 https://ngosang.github.io/trackerslist/trackers_best.txt
// @author       cielpy
// @homepage     https://github.com/cielpy/RarbgMegnetTrackerComplement
// @match        https://rarbgprx.org/*
// @grant        none
// ==/UserScript==


(function () {
    function appendTrackers(url) {
        let trackerList = ${trackers}
        var trackerListUrlPrams = "&tr=" + trackerList.join("&tr=");
        return url + trackerListUrlPrams;
    }
    var megnetUrls = document.querySelectorAll("body > table:nth-child(6) > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > div > table > tbody > tr:nth-child(1) > td.lista > a:nth-child(3)")

    for (var i = 0; i <= megnetUrls.length; i++) {
        if (i == megnetUrls.length - 1) {
            megnetUrls[i].href = appendTrackers(megnetUrls[i].href)
            break;
        }
    }
    const targetNode = document.querySelector(".lista2t");
    var observer = new MutationObserver(function(mutations) {
        mutations[0].addedNodes.forEach( (node) => {
            if (node.localName === 'a') {
                if (node.href.includes('magnet:')) {
                    node.href = appendTrackers(node.href)
                }
            }
        })

    });

    if (targetNode !== null) {
        observer.observe(targetNode, {attributes: false, childList: true, characterData: false, subtree:true});
    }
})();