// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.1954
// @description  给网页上的磁链追加优质 tracker
// @author       cielpy
// @include      http://*
// @include      https://*
// @grant        none
// @license      MIT
// @supportURL   https://github.com/cielpy/MagnetTrackerComplement/issues
// ==/UserScript==

// eslint-disable-next-line
(function () {
  const trackerList = ["http%3A%2F%2F1337.abcvg.info%3A80%2Fannounce","http%3A%2F%2Fbt.okmp3.ru%3A2710%2Fannounce","http%3A%2F%2Fipv4.rer.lol%3A2710%2Fannounce","http%3A%2F%2Flucke.fenesisu.moe%3A6969%2Fannounce","http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce","http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce","http%3A%2F%2Ftorrentsmd.com%3A8080%2Fannounce","http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce","http%3A%2F%2Ftracker.dhitechnical.com%3A6969%2Fannounce","http%3A%2F%2Ftracker.exe.in.th%3A6969%2Fannounce","http%3A%2F%2Ftracker.mywaifu.best%3A6969%2Fannounce","http%3A%2F%2Ftracker.renfei.net%3A8080%2Fannounce","http%3A%2F%2Ftracker.skyts.net%3A6969%2Fannounce","http%3A%2F%2Ftracker.xn--djrq4gl4hvoi.top%3A80%2Fannounce","http%3A%2F%2Ftracker3.ctix.cn%3A8080%2Fannounce","https%3A%2F%2F1337.abcvg.info%3A443%2Fannounce","https%3A%2F%2Fhttp1.torrust-tracker-demo.com%3A443%2Fannounce","https%3A%2F%2Fshahidrazi.online%3A443%2Fannounce","https%3A%2F%2Ft.213891.xyz%3A443%2Fannounce","https%3A%2F%2Ftr.abiir.top%3A443%2Fannounce","https%3A%2F%2Ftr.nyacat.pw%3A443%2Fannounce","https%3A%2F%2Ftr.zukizuki.org%3A443%2Fannounce","https%3A%2F%2Ftracker-zhuqiy.xn--1r3au8b.space%3A443%2Fannounce","https%3A%2F%2Ftracker.ghostchu-services.top%3A443%2Fannounce","https%3A%2F%2Ftracker.kuroy.me%3A443%2Fannounce","https%3A%2F%2Ftracker.manager.v6.navy%3A443%2Fannounce","https%3A%2F%2Ftracker.moeblog.cn%3A443%2Fannounce","https%3A%2F%2Ftracker.nekomi.cn%3A443%2Fannounce","https%3A%2F%2Ftracker.pmman.tech%3A443%2Fannounce","https%3A%2F%2Ftracker.qingwapt.org%3A443%2Fannounce","https%3A%2F%2Ftracker.yggleak.top%3A443%2Fannounce","https%3A%2F%2Ftracker.zhuqiy.com%3A443%2Fannounce","https%3A%2F%2Ftracker1.520.jp%3A443%2Fannounce","udp%3A%2F%2Fbittorrent-tracker.e-n-c-r-y-p-t.net%3A1337%2Fannounce","udp%3A%2F%2Fbt.rer.lol%3A6969%2Fannounce","udp%3A%2F%2Fd40969.acod.regrucolo.ru%3A6969%2Fannounce","udp%3A%2F%2Fevan.im%3A6969%2Fannounce","udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce","udp%3A%2F%2Fextracker.dahrkael.net%3A6969%2Fannounce","udp%3A%2F%2Fleet-tracker.moe%3A1337%2Fannounce","udp%3A%2F%2Fmartin-gebhardt.eu%3A25%2Fannounce","udp%3A%2F%2Fnode01.trackerstatus.live%3A42069%2Fannounce","udp%3A%2F%2Fns575949.ip-51-222-82.net%3A6969%2Fannounce","udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce","udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce","udp%3A%2F%2Fopentor.org%3A2710%2Fannounce","udp%3A%2F%2Fopentracker.io%3A6969%2Fannounce","udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce","udp%3A%2F%2Ft.overflow.biz%3A6969%2Fannounce","udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce","udp%3A%2F%2Ftracker.004430.xyz%3A1337%2Fannounce","udp%3A%2F%2Ftracker.1h.is%3A1337%2Fannounce","udp%3A%2F%2Ftracker.bluefrog.pw%3A2710%2Fannounce","udp%3A%2F%2Ftracker.corpscorp.online%3A80%2Fannounce","udp%3A%2F%2Ftracker.darkness.services%3A6969%2Fannounce","udp%3A%2F%2Ftracker.dler.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.flatuslifir.is%3A6969%2Fannounce","udp%3A%2F%2Ftracker.fnix.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.gmi.gd%3A6969%2Fannounce","udp%3A%2F%2Ftracker.ixuexi.click%3A6969%2Fannounce","udp%3A%2F%2Ftracker.opentorrent.top%3A6969%2Fannounce","udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce","udp%3A%2F%2Ftracker.playground.ru%3A6969%2Fannounce","udp%3A%2F%2Ftracker.plx.im%3A6969%2Fannounce","udp%3A%2F%2Ftracker.qu.ax%3A6969%2Fannounce","udp%3A%2F%2Ftracker.skyts.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.srv00.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.t-1.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce","udp%3A%2F%2Ftracker.tryhackx.org%3A6969%2Fannounce","udp%3A%2F%2Fuabits.today%3A6990%2Fannounce","udp%3A%2F%2Fudp.tracker.projectk.org%3A23333%2Fannounce","udp%3A%2F%2Fudp1.torrust-tracker-demo.com%3A6969%2Fannounce","wss%3A%2F%2Ftracker.openwebtorrent.com%3A443%2Fannounce"]
  const trackerListUrlPrams = `&tr=${trackerList.join('&tr=')}`

  function appendTrackers(url) {
    let newUrl = url
    if (url.includes(' ')) {
      newUrl = url.replace(/ /g, '%20')
    }
    return newUrl + trackerListUrlPrams
  }
  const aTags = document.querySelectorAll('a')

  for (let i = 0; i <= aTags.length; i += 1) {
    if (aTags[i] !== undefined && aTags[i].href !== undefined && aTags[i].href.startsWith('magnet:')) {
      aTags[i].href = appendTrackers(aTags[i].href)
    }
  }



  const observer = new MutationObserver(((mutations) => {
    // eslint-disable-next-line
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        function findAndChangeA(nodeList) {
          nodeList.forEach((node) => {
            if (node.localName === 'a' && node.href !== undefined && node.href !== null && node.href !== '') {
              if (node.href.startsWith('magnet:')) {
                // eslint-disable-next-line
                node.href = appendTrackers(node.href)
              }
            }
            if (node.childNodes !== undefined && node.childNodes !== null && node.childNodes.length !== 0) {
              findAndChangeA(node.childNodes)
            }
          })
        }
        findAndChangeA(mutation.addedNodes)
      }
    }
  }))

  observer.observe(document, {
    attributes: false, childList: true, characterData: false, subtree: true,
  })
}())
