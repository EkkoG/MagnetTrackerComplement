// ==UserScript==
// @name         MegnetTrackerComplement
// @namespace    https://github.com/cielpy/RarbgMegnetTrackerComplement
// @version      0.9
// @description  给网页上的磁链添加 tracker，tracker 来源 https://ngosang.github.io/trackerslist/trackers_best.txt
// @author       cielpy
// @homepage     https://github.com/cielpy/RarbgMegnetTrackerComplement
// @match        https://rarbgprx.org/*
// @match        https://www.btdig.com/*
// @match        https://subdh.com/*
// @grant        none
// ==/UserScript==


(function () {
    function appendTrackers(url) {
        let trackerList = ${trackers}
        var trackerListUrlPrams = "&tr=" + trackerList.join("&tr=");
        return url + trackerListUrlPrams;
    }
    const aTags = document.querySelectorAll("a")

    for (var i = 0; i <= aTags.length; i++) {
        if (aTags[i] !== undefined && aTags[i].href !== undefined && aTags[i].href.includes('magnet:')) {
            aTags[i].href = appendTrackers(aTags[i].href)
        }
    }

    var observer = new MutationObserver(function(mutations) {
        for(const mutation of mutations) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach( (node) => {
                    if (node.localName === 'a' && node.href !== undefined && node.href !== null && node.href !== '') {
                        if (node.href.includes('magnet:')) {
                            node.href = appendTrackers(node.href)
                        }
                    }
                })
            }
        }

    });

    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
})();