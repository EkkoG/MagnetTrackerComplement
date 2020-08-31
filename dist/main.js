// ==UserScript==
// @name         RarbgMegnetTrackerComplement
// @namespace    https://github.com/cielpy/RarbgMegnetTrackerComplement
// @version      0.1
// @description  给 rarbg 的磁链添加 tracker，tracker 来源 https://ngosang.github.io/trackerslist/trackers_all.txt
// @author       cielpy
// @match        https://rarbgprx.org/torrent/*
// @grant        none
// ==/UserScript==


(function () {
    var megnetUrls = document.querySelectorAll("body > table:nth-child(6) > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > div > table > tbody > tr:nth-child(1) > td.lista > a:nth-child(3)")
    let trackerList = ["udp://tracker.coppersurfer.tk:6969/announce","udp://tracker.opentrackr.org:1337/announce","udp://p4p.arenabg.ch:1337/announce","udp://tracker.leechers-paradise.org:6969/announce","udp://9.rarbg.to:2710/announce","udp://9.rarbg.me:2710/announce","udp://exodus.desync.com:6969/announce","udp://tracker.cyberia.is:6969/announce","udp://tracker.tiny-vps.com:6969/announce","udp://retracker.lanta-net.ru:2710/announce","udp://tracker.moeking.me:6969/announce","udp://open.stealth.si:80/announce","udp://tracker.torrent.eu.org:451/announce","udp://tracker3.itzmx.com:6961/announce","udp://bt2.archive.org:6969/announce","udp://bt1.archive.org:6969/announce","http://tracker1.itzmx.com:8080/announce","udp://ipv4.tracker.harry.lu:80/announce","udp://valakas.rollo.dnsabr.com:2710/announce","udp://retracker.akado-ural.ru:80/announce"]
    for (var i = 0; i <= megnetUrls.length; i++) {
        if (i == megnetUrls.length - 1) {
            var megnetUrl = megnetUrls[i].href;
            var trackerListUrlPrams = "&tr=" + trackerList.join("&tr=");
            megnetUrls[i].href = megnetUrl + trackerListUrlPrams; break;
        }
    }
})();