// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.1690
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
  const trackerList = ["http%3A%2F%2F1337.abcvg.info%3A80%2Fannounce","http%3A%2F%2Fbt.okmp3.ru%3A2710%2Fannounce","http%3A%2F%2Fipv4.rer.lol%3A2710%2Fannounce","http%3A%2F%2Fipv6.rer.lol%3A6969%2Fannounce","http%3A%2F%2Fns3109441.mypdns.org%3A6969%2Fannounce","http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce","http%3A%2F%2Fopen.trackerlist.xyz%3A80%2Fannounce","http%3A%2F%2Ftk.greedland.net%3A80%2Fannounce","http%3A%2F%2Ftorrentsmd.com%3A8080%2Fannounce","http%3A%2F%2Ftracker.beeimg.com%3A6969%2Fannounce","http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce","http%3A%2F%2Ftracker.ipv6tracker.ru%3A80%2Fannounce","http%3A%2F%2Ftracker.mywaifu.best%3A6969%2Fannounce","http%3A%2F%2Ftracker.netmap.top%3A6969%2Fannounce","http%3A%2F%2Ftracker.privateseedbox.xyz%3A2710%2Fannounce","http%3A%2F%2Ftracker.renfei.net%3A8080%2Fannounce","http%3A%2F%2Ftracker.tritan.gg%3A8080%2Fannounce","http%3A%2F%2Fwww.all4nothin.net%3A80%2Fannounce.php","http%3A%2F%2Fwww.wareztorrent.com%3A80%2Fannounce","https%3A%2F%2F1337.abcvg.info%3A443%2Fannounce","https%3A%2F%2Ftr.abiir.top%3A443%2Fannounce","https%3A%2F%2Ftr.abir.ga%3A443%2Fannounce","https%3A%2F%2Ftr.nyacat.pw%3A443%2Fannounce","https%3A%2F%2Ftracker.aburaya.live%3A443%2Fannounce","https%3A%2F%2Ftracker.bjut.jp%3A443%2Fannounce","https%3A%2F%2Ftracker.expli.top%3A443%2Fannounce","https%3A%2F%2Ftracker.foreverpirates.co%3A443%2Fannounce","https%3A%2F%2Ftracker.ghostchu-services.top%3A443%2Fannounce","https%3A%2F%2Ftracker.jdx3.org%3A443%2Fannounce","https%3A%2F%2Ftracker.kuroy.me%3A443%2Fannounce","https%3A%2F%2Ftracker.moeblog.cn%3A443%2Fannounce","https%3A%2F%2Ftracker.pmman.tech%3A443%2Fannounce","https%3A%2F%2Ftracker.yemekyedim.com%3A443%2Fannounce","https%3A%2F%2Ftracker.zhuqiy.top%3A443%2Fannounce","https%3A%2F%2Ftracker1.520.jp%3A443%2Fannounce","udp%3A%2F%2Fd40969.acod.regrucolo.ru%3A6969%2Fannounce","udp%3A%2F%2Fevan.im%3A6969%2Fannounce","udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce","udp%3A%2F%2Fextracker.dahrkael.net%3A6969%2Fannounce","udp%3A%2F%2Fmartin-gebhardt.eu%3A25%2Fannounce","udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce","udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce","udp%3A%2F%2Fopentor.org%3A2710%2Fannounce","udp%3A%2F%2Fp2p.publictracker.xyz%3A6969%2Fannounce","udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce","udp%3A%2F%2Fretracker.lanta.me%3A2710%2Fannounce","udp%3A%2F%2Fretracker01-msk-virt.corbina.net%3A80%2Fannounce","udp%3A%2F%2Ft.overflow.biz%3A6969%2Fannounce","udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce","udp%3A%2F%2Ftracker.bitcoinindia.space%3A6969%2Fannounce","udp%3A%2F%2Ftracker.dler.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.ducks.party%3A1984%2Fannounce","udp%3A%2F%2Ftracker.dump.cl%3A6969%2Fannounce","udp%3A%2F%2Ftracker.filemail.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.fnix.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.gigantino.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.gmi.gd%3A6969%2Fannounce","udp%3A%2F%2Ftracker.hifitechindia.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.kmzs123.cn%3A17272%2Fannounce","udp%3A%2F%2Ftracker.ololosh.space%3A6969%2Fannounce","udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce","udp%3A%2F%2Ftracker.plx.im%3A6969%2Fannounce","udp%3A%2F%2Ftracker.qu.ax%3A6969%2Fannounce","udp%3A%2F%2Ftracker.skillindia.site%3A6969%2Fannounce","udp%3A%2F%2Ftracker.skyts.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.srv00.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.therarbg.to%3A6969%2Fannounce","udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce","udp%3A%2F%2Ftracker.torrust-demo.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.tryhackx.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.tvunderground.org.ru%3A3218%2Fannounce","udp%3A%2F%2Ftracker.yume-hatsuyuki.moe%3A6969%2Fannounce","udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce","udp%3A%2F%2Ftracker1.myporn.club%3A9337%2Fannounce","udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce","udp%3A%2F%2Fttk2.nbaonlineservice.com%3A6969%2Fannounce","udp%3A%2F%2Fudp.tracker.projectk.org%3A23333%2Fannounce","udp%3A%2F%2Fwepzone.net%3A6969%2Fannounce","udp%3A%2F%2Fwww.torrent.eu.org%3A451%2Fannounce"]
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
