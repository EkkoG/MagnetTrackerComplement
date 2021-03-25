// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.122
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
  // eslint-disable-next-line
  const trackerList = ["http%3A%2F%2F104.28.1.30%3A8080%2Fannounce","http%3A%2F%2F104.28.16.69%2Fannounce","http%3A%2F%2F104.28.16.69%3A80%2Fannounce","http%3A%2F%2F1337.abcvg.info%3A80%2Fannounce","http%3A%2F%2Fbt.3kb.xyz%3A80%2Fannounce","http%3A%2F%2Fbt.okmp3.ru%3A2710%2Fannounce","http%3A%2F%2Fns3107607.ip-54-36-126.eu%3A6969%2Fannounce","http%3A%2F%2Fopentracker.xyz%3A80%2Fannounce","http%3A%2F%2Frt.tace.ru%3A80%2Fannounce","http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce","http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce","http%3A%2F%2Ftorrent.nwps.ws%3A80%2Fannounce","http%3A%2F%2Ftorrentsmd.com%3A8080%2Fannounce","http%3A%2F%2Ftr.cili001.com%3A8070%2Fannounce","http%3A%2F%2Ftracker.anirena.com%3A80%2Fannounce","http%3A%2F%2Ftracker.anirena.com%3A80%2Fb16a15d9a238d1f59178d3614b857290%2Fannounce","http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce","http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce","http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce","http%3A%2F%2Ftracker.noobsubs.net%3A80%2Fannounce","http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce","http%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce","http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce","http%3A%2F%2Ftrk.publictracker.xyz%3A6969%2Fannounce","http%3A%2F%2Fvps02.net.orel.ru%3A80%2Fannounce","http%3A%2F%2Fwww.all4nothin.net%3A80%2Fannounce.php","https%3A%2F%2F1337.abcvg.info%3A443%2Fannounce","https%3A%2F%2Fbt.nfshost.com%3A443%2Fannounce","https%3A%2F%2Ftr.ready4.icu%3A443%2Fannounce","https%3A%2F%2Ftr.steins-gate.moe%3A2096%2Fannounce","https%3A%2F%2Ftracker.coalition.space%3A443%2Fannounce","https%3A%2F%2Ftracker.gbitt.info%3A443%2Fannounce","https%3A%2F%2Ftracker.hama3.net%3A443%2Fannounce","https%3A%2F%2Ftracker.imgoingto.icu%3A443%2Fannounce","https%3A%2F%2Ftracker.lilithraws.cf%3A443%2Fannounce","https%3A%2F%2Ftracker.nanoha.org%3A443%2Fannounce","https%3A%2F%2Ftracker.nitrix.me%3A443%2Fannounce","https%3A%2F%2Ftracker.parrotsec.org%3A443%2Fannounce","https%3A%2F%2Ftracker.sloppyta.co%3A443%2Fannounce","https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce","https%3A%2F%2Fw.wwwww.wtf%3A443%2Fannounce","udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce","udp%3A%2F%2F6rt.tace.ru%3A80%2Fannounce","udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce","udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce","udp%3A%2F%2Fapp.icon256.com%3A8000%2Fannounce","udp%3A%2F%2Fbubu.mapfactor.com%3A6969%2Fannounce","udp%3A%2F%2Fcode2chicken.nl%3A6969%2Fannounce","udp%3A%2F%2Fdiscord.heihachi.pw%3A6969%2Fannounce","udp%3A%2F%2Fedu.uifr.ru%3A6969%2Fannounce","udp%3A%2F%2Fengplus.ru%3A6969%2Fannounce","udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce","udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce","udp%3A%2F%2Ffe.dealclub.de%3A6969%2Fannounce","udp%3A%2F%2Ffree-tracker.zooki.xyz%3A6969%2Fannounce","udp%3A%2F%2Ffree.publictracker.xyz%3A6969%2Fannounce","udp%3A%2F%2Finferno.demonoid.is%3A3391%2Fannounce","udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce","udp%3A%2F%2Fipv6.tracker.zerobytes.xyz%3A16661%2Fannounce","udp%3A%2F%2Fline-net.ru%3A6969%2Fannounce","udp%3A%2F%2Fln.mtahost.co%3A6969%2Fannounce","udp%3A%2F%2Fmail.realliferpg.de%3A6969%2Fannounce","udp%3A%2F%2Fmovies.zsw.ca%3A6969%2Fannounce","udp%3A%2F%2Fmts.tvbit.co%3A6969%2Fannounce","udp%3A%2F%2Fnagios.tks.sumy.ua%3A80%2Fannounce","udp%3A%2F%2Fnewtoncity.org%3A6969%2Fannounce","udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce","udp%3A%2F%2Fopen.publictracker.xyz%3A6969%2Fannounce","udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce","udp%3A%2F%2Fopentor.org%3A2710%2Fannounce","udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce","udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce","udp%3A%2F%2Fperu.subventas.com%3A53%2Fannounce","udp%3A%2F%2Fretracker.hotplug.ru%3A2710%2Fannounce","udp%3A%2F%2Fretracker.lanta-net.ru%3A2710%2Fannounce","udp%3A%2F%2Fretracker.netbynet.ru%3A2710%2Fannounce","udp%3A%2F%2Ft1.leech.ie%3A1337%2Fannounce","udp%3A%2F%2Ft2.leech.ie%3A1337%2Fannounce","udp%3A%2F%2Ft3.leech.ie%3A1337%2Fannounce","udp%3A%2F%2Fthetracker.org%3A80%2Fannounce","udp%3A%2F%2Ftorrentclub.online%3A54123%2Fannounce","udp%3A%2F%2Ftracker.0x.tf%3A6969%2Fannounce","udp%3A%2F%2Ftracker.altrosky.nl%3A6969%2Fannounce","udp%3A%2F%2Ftracker.army%3A6969%2Fannounce","udp%3A%2F%2Ftracker.beeimg.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce","udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce","udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.e-utp.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce","udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce","udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce","udp%3A%2F%2Ftracker.shkinev.me%3A6969%2Fannounce","udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce","udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce","udp%3A%2F%2Ftracker.v6speed.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.zerobytes.xyz%3A1337%2Fannounce","udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce","udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce","udp%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce","udp%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce","udp%3A%2F%2Fu.wwwww.wtf%3A1%2Fannounce","udp%3A%2F%2Fus-tracker.publictracker.xyz%3A6969%2Fannounce","udp%3A%2F%2Fvalakas.rollo.dnsabr.com%3A2710%2Fannounce","udp%3A%2F%2Fvibe.community%3A6969%2Fannounce","udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce"]
  const trackerListUrlPrams = `&tr=${trackerList.join('&tr=')}`

  function appendTrackers(url) {
    let newUrl = url
    if (url.includes('dn=')) {
      const r = /(?<=dn=)(.*?)(?=&)/
      const dn = url.match(r)[0]
      if (dn.includes(' ')) {
        const newDn = dn.replace(/ /g, '%20')
        newUrl = url.replace(dn, newDn)
      }
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
        mutation.addedNodes.forEach((node) => {
          if (node.localName === 'a' && node.href !== undefined && node.href !== null && node.href !== '') {
            if (node.href.startsWith('magnet:')) {
              // eslint-disable-next-line
              node.href = appendTrackers(node.href)
            }
          }
        })
      }
    }
  }))

  observer.observe(document, {
    attributes: false, childList: true, characterData: false, subtree: true,
  })
}())
