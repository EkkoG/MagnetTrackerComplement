// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.14
// @description  给网页上的磁链添加 tracker，tracker 来源 https://ngosang.github.io/trackerslist/trackers_best.txt
// @author       cielpy
// @include      http://*
// @include      https://*
// @grant        none
// @license      MIT
// @supportURL   https://github.com/cielpy/MagnetTrackerComplement/issues
// ==/UserScript==


(function () {
    function appendTrackers(url) {
        let trackerList = ${trackers}
        var trackerListUrlPrams = "&tr=" + trackerList.join("&tr=");

        if (url.includes('dn=')) {
            const r = /(?<=dn\=)(.*?)(?=&)/
            const dn = url.match(r)[0]
            if (dn.includes(' ')) {
                const newDn = dn.replace(/\ /g, '%20')
                url = url.replace(dn, newDn)
            }
        }
        return url + trackerListUrlPrams;
    }
    const aTags = document.querySelectorAll("a")

    for (var i = 0; i <= aTags.length; i++) {
        if (aTags[i] !== undefined && aTags[i].href !== undefined && aTags[i].href.startsWith('magnet:')) {
            aTags[i].href = appendTrackers(aTags[i].href)
        }
    }

    var observer = new MutationObserver(function(mutations) {
        for(const mutation of mutations) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach( (node) => {
                    if (node.localName === 'a' && node.href !== undefined && node.href !== null && node.href !== '') {
                        if (node.href.startsWith('magnet:')) {
                            node.href = appendTrackers(node.href)
                        }
                    }
                })
            }
        }

    });

    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
})();