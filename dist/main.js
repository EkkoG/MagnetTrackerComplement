// ==UserScript==
// @name         MegnetTrackerComplement
// @namespace    https://github.com/cielpy/RarbgMegnetTrackerComplement
// @version      0.13
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
        let trackerList = ["udp://tracker.opentrackr.org:1337/announce","udp://9.rarbg.to:2710/announce","udp://9.rarbg.me:2710/announce","udp://tracker.leechers-paradise.org:6969/announce","udp://tracker.internetwarriors.net:1337/announce","udp://tracker.cyberia.is:6969/announce","udp://exodus.desync.com:6969/announce","http://explodie.org:6969/announce","http://p4p.arenabg.com:1337/announce","udp://p4p.arenabg.ch:1337/announce","udp://tracker3.itzmx.com:6961/announce","http://tracker1.itzmx.com:8080/announce","udp://tracker.ds.is:6969/announce","udp://open.stealth.si:80/announce","udp://tracker.zerobytes.xyz:1337/announce","udp://tracker.torrent.eu.org:451/announce","udp://open.demonii.si:1337/announce","http://open.acgnxtracker.com:80/announce","udp://retracker.lanta-net.ru:2710/announce","udp://tracker4.itzmx.com:2710/announce"]
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