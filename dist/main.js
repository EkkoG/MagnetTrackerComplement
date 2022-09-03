// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.651
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
  const trackerList = ["http%3A%2F%2F1337.abcvg.info%3A80%2Fannounce","http%3A%2F%2Ffxtt.ru%3A80%2Fannounce","http%3A%2F%2Fi-p-v-6.tk%3A6969%2Fannounce","http%3A%2F%2Fipv6.1337.cx%3A6969%2Fannounce","http%3A%2F%2Fipv6.govt.hu%3A6969%2Fannounce","http%3A%2F%2Fmediaclub.tv%3A80%2Fannounce.php","http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce","http%3A%2F%2Fopen-v6.demonoid.ch%3A6969%2Fannounce","http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce","http%3A%2F%2Fopen.tracker.ink%3A6969%2Fannounce","http%3A%2F%2Fopentracker.xyz%3A80%2Fannounce","http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce","http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce","http%3A%2F%2Ftorrent-team.net%3A80%2Fannounce.php","http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce","http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce","http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce","http%3A%2F%2Ftracker.ipv6tracker.ru%3A80%2Fannounce","http%3A%2F%2Ftracker.k.vu%3A6969%2Fannounce","http%3A%2F%2Ftracker.tfile.me%3A80%2Fannounce","http%3A%2F%2Ftracker.vrpnet.org%3A6969%2Fannounce","http%3A%2F%2Fvps02.net.orel.ru%3A80%2Fannounce","https%3A%2F%2Fcarbon-bonsai-621.appspot.com%3A443%2Fannounce","https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce","https%3A%2F%2Ftr.abiir.top%3A443%2Fannounce","https%3A%2F%2Ftr.burnabyhighstar.com%3A443%2Fannounce","https%3A%2F%2Ftr.ready4.icu%3A443%2Fannounce","https%3A%2F%2Ftracker.imgoingto.icu%3A443%2Fannounce","https%3A%2F%2Ftracker.jiesen.life%3A8443%2Fannounce","https%3A%2F%2Ftracker.lilithraws.cf%3A443%2Fannounce","https%3A%2F%2Ftracker.nanoha.org%3A443%2Fannounce","https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce","https%3A%2F%2Ftrackme.theom.nz%3A443%2Fannounce","udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce","udp%3A%2F%2Faarsen.me%3A6969%2Fannounce","udp%3A%2F%2Fastrr.ru%3A6969%2Fannounce","udp%3A%2F%2Fben.kerbertools.xyz%3A6969%2Fannounce","udp%3A%2F%2Fbetasoftsp.com.br%3A6969%2Fannounce","udp%3A%2F%2Fbt.ktrackers.com%3A6666%2Fannounce","udp%3A%2F%2Fbubu.mapfactor.com%3A6969%2Fannounce","udp%3A%2F%2Fcutscloud.duckdns.org%3A6969%2Fannounce","udp%3A%2F%2Fepider.me%3A6969%2Fannounce","udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce","udp%3A%2F%2Ffe.dealclub.de%3A6969%2Fannounce","udp%3A%2F%2Ffh2.cmp-gaming.com%3A6969%2Fannounce","udp%3A%2F%2Fhtz3.noho.st%3A6969%2Fannounce","udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce","udp%3A%2F%2Fipv6.tracker.harry.lu%3A80%2Fannounce","udp%3A%2F%2Fipv6.tracker.monitorit4.me%3A6969%2Fannounce","udp%3A%2F%2Flaze.cc%3A6969%2Fannounce","udp%3A%2F%2Fmail.artixlinux.org%3A6969%2Fannounce","udp%3A%2F%2Fmirror.aptus.co.tz%3A6969%2Fannounce","udp%3A%2F%2Fmoonburrow.club%3A6969%2Fannounce","udp%3A%2F%2Fmovies.zsw.ca%3A6969%2Fannounce","udp%3A%2F%2Fmts.tvbit.co%3A6969%2Fannounce","udp%3A%2F%2Fnew-line.net%3A6969%2Fannounce","udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce","udp%3A%2F%2Fopen.dstud.io%3A6969%2Fannounce","udp%3A%2F%2Fopen.free-tracker.ga%3A6969%2Fannounce","udp%3A%2F%2Fopen.publictracker.xyz%3A6969%2Fannounce","udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce","udp%3A%2F%2Fopen.tracker.ink%3A6969%2Fannounce","udp%3A%2F%2Fopen.xxtor.com%3A3074%2Fannounce","udp%3A%2F%2Fopentor.org%3A2710%2Fannounce","udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce","udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce","udp%3A%2F%2Fpsyco.fr%3A6969%2Fannounce","udp%3A%2F%2Fpublic.publictracker.xyz%3A6969%2Fannounce","udp%3A%2F%2Fpublic.tracker.vraphim.com%3A6969%2Fannounce","udp%3A%2F%2Frep-art.ynh.fr%3A6969%2Fannounce","udp%3A%2F%2Fretracker.hotplug.ru%3A2710%2Fannounce","udp%3A%2F%2Fsanincode.com%3A6969%2Fannounce","udp%3A%2F%2Ftamas3.ynh.fr%3A6969%2Fannounce","udp%3A%2F%2Fthetracker.org%3A80%2Fannounce","udp%3A%2F%2Fthouvenin.cloud%3A6969%2Fannounce","udp%3A%2F%2Ftorrentclub.space%3A6969%2Fannounce","udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce","udp%3A%2F%2Ftracker.0x.tf%3A6969%2Fannounce","udp%3A%2F%2Ftracker.altrosky.nl%3A6969%2Fannounce","udp%3A%2F%2Ftracker.artixlinux.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.auctor.tv%3A6969%2Fannounce","udp%3A%2F%2Ftracker.beeimg.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce","udp%3A%2F%2Ftracker.bitsearch.to%3A1337%2Fannounce","udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.jonaslsa.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.joybomb.tw%3A6969%2Fannounce","udp%3A%2F%2Ftracker.leech.ie%3A1337%2Fannounce","udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce","udp%3A%2F%2Ftracker.monitorit4.me%3A6969%2Fannounce","udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce","udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce","udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce","udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce","udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce","udp%3A%2F%2Ftracker2.dler.com%3A80%2Fannounce","udp%3A%2F%2Ftracker6.lelux.fi%3A6969%2Fannounce","udp%3A%2F%2Ftranskaroo.joustasie.net%3A6969%2Fannounce","udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce","udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce","udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce","ws%3A%2F%2Fhub.bugout.link%3A80%2Fannounce"]
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
