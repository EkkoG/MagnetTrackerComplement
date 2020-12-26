// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.29
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
        let trackerList = ["udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce","udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce","udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce","udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce","udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce","udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce","http%3A%2F%2Fexplodie.org%3A6969%2Fannounce","udp%3A%2F%2Fp4p.arenabg.ch%3A1337%2Fannounce","http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce","udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce","http%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce","udp%3A%2F%2Ftracker.zerobytes.xyz%3A1337%2Fannounce","udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce","udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce","udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce","udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce","udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce","udp%3A%2F%2Fretracker.lanta-net.ru%3A2710%2Fannounce","http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce"]
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