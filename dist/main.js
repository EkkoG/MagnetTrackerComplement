// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.279
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
  const trackerList = ["http%3A%2F%2Fall4nothin.net%3A80%2Fannounce.php","http%3A%2F%2Fbt.rghost.net%3A80%2Fannounce","http%3A%2F%2Fdata-bg.net%3A80%2Fannounce.php","http%3A%2F%2Fgooger.cc%3A1337%2Fannounce","http%3A%2F%2Fh4.trakx.nibba.trade%3A80%2Fannounce","http%3A%2F%2Fmasters-tb.com%3A80%2Fannounce.php","http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce","http%3A%2F%2Fopenbittorrent.com%3A80%2Fannounce","http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce","http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce","http%3A%2F%2Ftorrent-team.net%3A80%2Fannounce.php","http%3A%2F%2Ftorrentzilla.org%3A80%2Fannounce.php","http%3A%2F%2Ftr.cili001.com%3A8070%2Fannounce","http%3A%2F%2Ftracker.anirena.com%3A80%2Fannounce","http%3A%2F%2Ftracker.corpscorp.online%3A80%2Fannounce","http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce","http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce","http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce","http%3A%2F%2Ftracker.tfile.me%3A80%2Fannounce","http%3A%2F%2Ftracker.torrentyorg.pl%3A80%2Fannounce","http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce","http%3A%2F%2Fvps02.net.orel.ru%3A80%2Fannounce","http%3A%2F%2Fwww.zone-torrent.net%3A80%2Fannounce.php","https%3A%2F%2F1337.abcvg.info%3A443%2Fannounce","https%3A%2F%2Fcarbon-bonsai-621.appspot.com%3A443%2Fannounce","https%3A%2F%2Fmytracker.fly.dev%3A443%2Fannounce","https%3A%2F%2Fopen.acgnxtracker.com%3A443%2Fannounce","https%3A%2F%2Ftr.ready4.icu%3A443%2Fannounce","https%3A%2F%2Ftr.torland.ga%3A443%2Fannounce","https%3A%2F%2Ftracker.gbitt.info%3A443%2Fannounce","https%3A%2F%2Ftracker.imgoingto.icu%3A443%2Fannounce","https%3A%2F%2Ftracker.kuroy.me%3A443%2Fannounce","https%3A%2F%2Ftracker.lilithraws.cf%3A443%2Fannounce","https%3A%2F%2Ftracker.nitrix.me%3A443%2Fannounce","https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce","https%3A%2F%2Ftrackme.theom.nz%3A443%2Fannounce","https%3A%2F%2Ftrakx.herokuapp.com%3A443%2Fannounce","udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce","udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce","udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce","udp%3A%2F%2Fabufinzio.monocul.us%3A6969%2Fannounce","udp%3A%2F%2Fbms-hosxp.com%3A6969%2Fannounce","udp%3A%2F%2Fbubu.mapfactor.com%3A6969%2Fannounce","udp%3A%2F%2Fcode2chicken.nl%3A6969%2Fannounce","udp%3A%2F%2Fdiscord.heihachi.pw%3A6969%2Fannounce","udp%3A%2F%2Fengplus.ru%3A6969%2Fannounce","udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce","udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce","udp%3A%2F%2Ffe.dealclub.de%3A6969%2Fannounce","udp%3A%2F%2Fmail.realliferpg.de%3A6969%2Fannounce","udp%3A%2F%2Fmovies.zsw.ca%3A6969%2Fannounce","udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce","udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce","udp%3A%2F%2Fopentor.org%3A2710%2Fannounce","udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce","udp%3A%2F%2Fretracker.lanta-net.ru%3A2710%2Fannounce","udp%3A%2F%2Fretracker.netbynet.ru%3A2710%2Fannounce","udp%3A%2F%2Fthetracker.org%3A80%2Fannounce","udp%3A%2F%2Ftracker.0x.tf%3A6969%2Fannounce","udp%3A%2F%2Ftracker.altrosky.nl%3A6969%2Fannounce","udp%3A%2F%2Ftracker.blacksparrowmedia.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.grepler.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.haynet.io%3A6969%2Fannounce","udp%3A%2F%2Ftracker.jordan.im%3A6969%2Fannounce","udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce","udp%3A%2F%2Ftracker.ololosh.space%3A6969%2Fannounce","udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce","udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce","udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce","udp%3A%2F%2Ftracker.zerobytes.xyz%3A1337%2Fannounce","udp%3A%2F%2Ftracker0.ufibox.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce","udp%3A%2F%2Ftracker2.dler.com%3A80%2Fannounce","udp%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce","udp%3A%2F%2Fvibe.community%3A6969%2Fannounce","udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce"]
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
