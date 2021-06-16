const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playlist = $('.playlist')
const cd=$('.cd')
const heading =$('header h3')
const nameSong = $('header h2')
const cdThumb = $('.cd-thumb')
const audio =$('.audio')
const btnSong = $('.btn-toggle-play')
const progress =$('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const repeat =  $('.btn-repeat')
const random = $('.btn-random')
const chooseSong = $('.song')
const volumechange =$('.volumechange')
const takevolume = $('.volumeicon')
const app ={
    currentIndex:0,
    isPlaying:true,
    isActive:true,
    isRed:true,
    isVolume:true,
    songs:[
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3?st=_IjpS9u0LjapNgzm058wVw&e=1623143773',
            image: 'https://i.pinimg.com/originals/f8/6f/33/f86f3378e656883b33594f06d78d1634.jpg',
          },
          {
            name: 'Good Time',
            singer: 'Owl City & Carly Rae Jepsen',
            path: 'https://r4---sn-8qj-nboes.googlevideo.com/videoplayback?expire=1623871609&ei=GfzJYKeaKondgQPz04_YCQ&ip=103.138.88.45&id=o-AIkoxt0PH4DyjfMFEbMdRy275NdvKgttNlE-EQ8JEu4i&itag=140&source=youtube&requiressl=yes&mh=Vq&mm=31,26&mn=sn-8qj-nboes,sn-oguelned&ms=au,onr&mv=m&mvi=4&pl=23&initcwndbps=425000&vprv=1&mime=audio/mp4&ns=7rfvQ4gdfOw5gPm_Uct8Fd4F&gir=yes&clen=3840128&dur=237.238&lmt=1597569857282829&mt=1623849652&fvip=4&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5431432&n=IcgvCzsJIKcLKN1FQ&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl,initcwndbps&lsig=AG3C_xAwRgIhAPG3h8_8Noqh3xlfSpPOK04i_6k67tsV1ErAiwkRFfupAiEAwnhEniCzTr6Pfb86UP0Ef23C4GNix4VzWMLoNqXEFLk=&sig=AOq0QJ8wRQIhAPjX3oaW5E2eSNkOePE3JOeVMTDlDVzhvZr8VRColGBwAiB9TcM4BekFbUpXCwaqeCAHgwWXnikM1zZ1a2febMRFHA==',
            image: 'https://i.ytimg.com/vi/cmLSizwDGj4/maxresdefault.jpg',
          },
          {
            name: 'Until You',
            singer: 'Shayne Ward',
            path: 'https://r2---sn-8qj-nbol7.googlevideo.com/videoplayback?expire=1623871655&ei=R_zJYNLZFMOhlQS155vgCQ&ip=103.138.88.45&id=o-AD-Txci3idxeDmnZybutiAXl5MPsAtx85wnI_-xQ3KiD&itag=140&source=youtube&requiressl=yes&mh=2V&mm=31,26&mn=sn-8qj-nbol7,sn-ogul7n7k&ms=au,onr&mv=u&mvi=2&pl=23&gcr=vn&vprv=1&mime=audio/mp4&ns=3p0hhK_kUaox9v4Ex1HTcV8F&gir=yes&clen=4037392&dur=249.428&lmt=1608768347613480&mt=1623849291&fvip=2&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5531432&n=Phr0BUdS_0WBkQjxM&sparams=expire,ei,ip,id,itag,source,requiressl,gcr,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAJk9EhqYDl-XdOpta8p2Cg9xYE1axz6f1KRJVzimJ-2HAiEAmE5FTxfF9wDPGd8cXsyMMS4J_ZXmD1fUAQo-DhaLGkg=&sig=AOq0QJ8wRAIgWXE9rPUUAOgjg2ySvT_TmMF6IwiaKVwg3AIubloI5zQCIF-z8Mja2KFg6Rrm-dYaOUZ-28sG1X4hexoYVRyPy2to',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2018/01/29/b/d/d/e/1517189710456_640.jpg',
          },
         
          {
            name: 'Yoru ni kakeru',
            singer: 'YOASOBI',
            path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
          },
          {
            name: 'Eyes, Nose, Lips',
            singer: 'Taeyang',
            path: 'https://r4---sn-8qj-nboek.googlevideo.com/videoplayback?expire=1623872074&ei=6v3JYIDGK-ars8IPvb6vwAo&ip=103.138.88.45&id=o-AGfSkkn6NLVq7tbOQGd-TcA7yCjSooIwvcVsmxDGQP8i&itag=140&source=youtube&requiressl=yes&mh=xA&mm=31,26&mn=sn-8qj-nboek,sn-oguelney&ms=au,onr&mv=m&mvi=4&pl=23&initcwndbps=355000&vprv=1&mime=audio/mp4&ns=yCPCtgHmKO94bFJyBm1YhvAF&gir=yes&clen=3724844&dur=230.109&lmt=1577228283564079&mt=1623849652&fvip=4&keepalive=yes&fexp=24001373,24007246&beids=24010698&c=WEB&txp=5531432&n=3XB3Em_OHN2B63y8w&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl,initcwndbps&lsig=AG3C_xAwRQIhAJUaWy6LGSo4RbRInG1H19mWIH5NG7i3NfW3X4PMh8MjAiAQfYhlwECh4HP0-lNp4sJykvEW9PSwKyDm4sH9xLnxpQ==&sig=AOq0QJ8wRAIgWZMOxu297Ve_5D-lSwdbuQp9yZg68F1YeYr5Hh19-c0CIGgXh06IHtwqhv5o_X96_F5tBT3jlf0qUC6q0q_l7dk8',
            image: 'https://i1.sndcdn.com/artworks-000088818904-ee87m8-t500x500.jpg',
          },
          {
            name: 'Nothing Gonna Change My Love For You',
            singer: 'GEORGE BENSON',
            path: 'https://r4---sn-8qj-nbosz.googlevideo.com/videoplayback?expire=1623874662&ei=BgjKYJyAHpbOgAPiwILQDQ&ip=103.138.88.45&id=o-AP46ppgwPOhesqXw-c-N0F7h8R1OcpqfALfHa8usa5sM&itag=140&source=youtube&requiressl=yes&mh=Lm&mm=31,26&mn=sn-8qj-nbosz,sn-oguesnzs&ms=au,onr&mv=m&mvi=4&pl=23&initcwndbps=53750&vprv=1&mime=audio/mp4&ns=2feuW7hGabf6ECjFRmJZwIcF&gir=yes&clen=3990476&dur=246.526&lmt=1556939174192294&mt=1623852770&fvip=4&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5535432&n=e-FHDVGEZELaL3PPd&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl,initcwndbps&lsig=AG3C_xAwRgIhANVQkLtdfBmMOgkiJyQRc3F3hWPKz_TfU630GpSZC__fAiEAgMkl0KmcYlaVnNL6bhOmoxuqrfXsNEgWtaMydHG3W_g=&sig=AOq0QJ8wRgIhALhCmtKR4s8qAymfZ3K-LAuU1V40AVKRltyviDzMjT7tAiEA3Zuhga6-NMZwT7HBwhYpVc6ieNz_-LBdK0WLqSC5gtA=',
            image: 'https://i.ytimg.com/vi/AWKUF7xhuIw/maxresdefault.jpg',
          },
          {
            name: 'Tokyo Drift',
            singer: 'DJ Kantik Remix',
            path: 'https://r2---sn-8qj-nboek.googlevideo.com/videoplayback?expire=1623856887&ei=l8LJYJa2D4Pq4gKs9rnoCA&ip=103.138.88.45&id=o-AOu_iA9drnrG2CEs_DE2u1Hi9YUAsCGirsSCd4kA2vWe&itag=140&source=youtube&requiressl=yes&mh=vI&mm=31,26&mn=sn-8qj-nboek,sn-oguelnsz&ms=au,onr&mv=m&mvi=2&pcm2cms=yes&pl=23&initcwndbps=8786250&vprv=1&mime=audio/mp4&ns=sL0eiHXvIKUGrEE73lg8m-cF&gir=yes&clen=3722590&dur=229.970&lmt=1615784986482129&mt=1623835041&fvip=2&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5531432&n=7qc97q7b9z20RByOT&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl,initcwndbps&lsig=AG3C_xAwRgIhAOj7Ik9jf22bLd1G98wYQ2bFUWhXdXA-Pz2Gtl7pIHjSAiEApcFrtI-RXLONR7AVOx4bg6lHYovbPWkr7_7EjuX5EYY=&sig=AOq0QJ8wRQIhAK5y9rccT7sSv0UKdK3c-O0WAmTbdxLtwHtMGBqtuHf5AiA_q0jsjbMLfhhYE4wB_G3yyATKJHrdkqKqBTTd-zd1aw==',
            image: 'https://i.ytimg.com/vi/3ix92975nN8/hqdefault.jpg',
          },
          ,  
          {
            name: 'Runnin',
            singer: 'Adam Lambert',
            path: 'https://r5---sn-8qj-nboes.googlevideo.com/videoplayback?expire=1623876672&ei=4A_KYKviL8uPigbCp4xY&ip=103.138.88.45&id=o-AMljtfo-W6OTHZzUDzc0IVCqtG5me8YjxF_KRe1_az6V&itag=140&source=youtube&requiressl=yes&mh=Cs&mm=31,26&mn=sn-8qj-nboes,sn-ogueln7d&ms=au,onr&mv=u&mvi=5&pl=23&vprv=1&mime=audio/mp4&ns=bbPVhVdb41rkosb-lENyFlcF&gir=yes&clen=3703323&dur=228.786&lmt=1575158289022005&mt=1623854937&fvip=5&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5531432&n=JrW11jZm2EAu0j8cA&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAI0nLvArGgL2PML_c_TPA6GISFo0NMFuyyEMAy-nkNKMAiEAiwa_VkAyu15Tcez_NvLRxIqAsPqfVcaDgtQsRPBRFRQ=&sig=AOq0QJ8wRgIhAMmaiSfy04DLdFpi3UHYuMdBgnhUkhBUbs3ySRW07OB7AiEAxIYmZAsX9Tm312fNsYmVevJIbavwsa_ZvLL9YGth_10=',
            image: 'https://img.youtube.com/vi/i_YuXism-60/0.jpg',
          },   
          {
            name: 'Unstoppable ',
            singer: 'Sia',
            path: 'https://r4---sn-8qj-nbosz.googlevideo.com/videoplayback?expire=1623875111&ei=xwnKYL70I8a5qQG60JuABQ&ip=103.138.88.45&id=o-ALvqxZ7uf7NX25DW634rbBFcQTzBa3mbj1ud4JnCrVAS&itag=140&source=youtube&requiressl=yes&mh=DB&mm=31,26&mn=sn-8qj-nbosz,sn-ogueln7z&ms=au,onr&mv=m&mvi=4&pl=23&initcwndbps=53750&vprv=1&mime=audio/mp4&ns=WYaMgAGHdxjC2c7EPefpsKgF&gir=yes&clen=3466254&dur=214.134&lmt=1575135995122225&mt=1623853260&fvip=4&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5531432&n=yL-u94P1r7gQNM87W&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl,initcwndbps&lsig=AG3C_xAwRAIgPDn2Yt_kmxO6NEw4_QjKCBV8lCuFo1qZ5u_bihvE6asCIC3gbvhHxHuhYgpFPkNhiR3c9SMdTsGf6ooPTTfCedFH&sig=AOq0QJ8wRQIgN1CHhoZH3Zbg_712oAiWYrl6GukoQ05GXASIZ9Ssc4kCIQC57o3TbRg3n4oQEFqr6gbsPeFR-WQFo7JY3SZHGxQbUg==',
            image: 'https://i.ytimg.com/vi/4yI_sl_WvnU/maxresdefault.jpg',
          },
          {
            name: 'Nothing Stopping Me',
            singer: 'Vicetone(Nightcore)',
            path: 'https://r2---sn-8qj-nbole.googlevideo.com/videoplayback?expire=1623875343&ei=rwrKYJzwEuacs8IP7NqimAw&ip=103.138.88.45&id=o-AFc5dHQdlwJ3BA0hkTaFFU0VyxZ-7Qiqy3C9TY0EKxJO&itag=140&source=youtube&requiressl=yes&mh=Kv&mm=31,26&mn=sn-8qj-nbole,sn-ogueln7y&ms=au,onr&mv=m&mvi=2&pcm2cms=yes&pl=23&initcwndbps=2565000&vprv=1&mime=audio/mp4&ns=j285KmCwO99Xfpqi1DPwwnIF&gir=yes&clen=2836625&dur=178.561&lmt=1521242454438078&mt=1623853260&fvip=2&keepalive=yes&fexp=24001373,24007246&c=WEB&n=G4vbxGgIOKJROqMOM&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl,initcwndbps&lsig=AG3C_xAwRQIhAPV69piV_shkdgbgUuCO5lw6mb55lwHYLHFIYHncebarAiB2Yw2OdBZyHfNJRhnK1yYr4HkaG62LpmCspppTD0JmFw==&sig=AOq0QJ8wRQIhAIwwIvW-35nEP8O1rcrSDFs0h1MKa3eVj8ShAj0-fvcpAiBfl1CUT-UX2WKL2CbAJAlR10OVtW4YeUtmMyt13yFaPA==',
            image: 'https://i1.sndcdn.com/artworks-000121814307-6fud9f-t500x500.jpg',
          },
          {
            name: 'Gió Vẫn Hát',
            singer: 'Long Phạm',
            path: 'https://r3---sn-8qj-nbosz.googlevideo.com/videoplayback?expire=1623875443&ei=EwvKYLL6GczdrQSxh5ngDw&ip=103.138.88.45&id=o-AAUhhYaPRAyEbsLtUsiVEJmqT_HP5pcPFhBVwmuFUGly&itag=140&source=youtube&requiressl=yes&mh=Kw&mm=31,26&mn=sn-8qj-nbosz,sn-ogueln7k&ms=au,onr&mv=m&mvi=3&pcm2cms=yes&pl=23&initcwndbps=797500&vprv=1&mime=audio/mp4&ns=MYixlEcNwgt_XysKvdkCnCwF&gir=yes&clen=3887559&dur=240.163&lmt=1574704807838956&mt=1623853495&fvip=3&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5531432&n=oISpjLb7ZrWPtx6hw&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl,initcwndbps&lsig=AG3C_xAwRgIhAIFmHjFR-EchfV1bY2D-HdizyZIM0CtbxrULvAKR7cFfAiEAvY72ojp3gc4M6eRbv6fOkHxYNEaP5GsCMc3yaVVIvQ4=&sig=AOq0QJ8wRQIgL9MwdyPEQwk14_e-M86Qx751ehJsTSLjbltt-DhZkeoCIQDb2lIN4BolU7KDoyRNupErW7OjSqABrk5XCtpDbhTrng==',
            image: 'https://i.ytimg.com/vi/1d2HfH8EBsk/maxresdefault.jpg',
          },
          {
            name: 'Dancin',
            singer: 'Aaron Smith',
            path: 'https://r6---sn-8qj-nboll.googlevideo.com/videoplayback?expire=1623875607&ei=twvKYPOMC4vHs8IPpfuQ6AE&ip=103.138.88.45&id=o-ADFkkDgxe2st9pMnSe2JEKw-MRCR8c_awxrWJKMm62zv&itag=140&source=youtube&requiressl=yes&mh=c0&mm=31,26&mn=sn-8qj-nboll,sn-oguelner&ms=au,onr&mv=m&mvi=6&pl=23&initcwndbps=1318750&vprv=1&mime=audio/mp4&ns=HNWK5Vjup2G-FwHrLgbn634F&gir=yes&clen=3179126&otfp=1&dur=196.394&lmt=1584894721532311&mt=1623853746&fvip=1&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=6211222&n=PGrZrnXvrnYP45KNw&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,otfp,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl,initcwndbps&lsig=AG3C_xAwRgIhAJKzcNLXtxgAAxqq09-zruylo92RsIznScP-mLbCDb88AiEAjNkSUlUE5z7F6d95e1L3O6fsumPGtVXxVfUyidlJdjc=&sig=AOq0QJ8wRgIhAPNGakg9qI6L3a_cFzNXXn3Towk_TWKDwIUERKbGlpLGAiEAw3AqlihqPUGWagOllZfAvao14upilcHvpu9RmPUpnUs=',
            image: 'https://i.ytimg.com/vi/KIAZWfSmNOU/maxresdefault.jpg',
          },
          {
            name: 'Unravel',
            singer: 'Toru Kitajima ',
            path: 'https://r5---sn-8qj-nboez.googlevideo.com/videoplayback?expire=1623876157&ei=3Q3KYInYLYW8qQGIwa5Y&ip=103.138.88.45&id=o-AP4-ji9CWxed9x2Mb1cpwHsv-buuuCvP32qnCuOh9EHn&itag=140&source=youtube&requiressl=yes&mh=ab&mm=31,26&mn=sn-8qj-nboez,sn-oguesnzl&ms=au,onr&mv=u&mvi=5&pl=23&vprv=1&mime=audio/mp4&ns=T-Qg__uQzFdOcl8Sl9wJQpAF&gir=yes&clen=3896572&dur=240.721&lmt=1603563144869796&mt=1623854240&fvip=5&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5431432&n=Jy6RmNb2KDcOlFIW6&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgKp9yGj3LNFfkL1oQd5yKqPdVEQow65iHM-AjMeJgBrgCIQDjnO-dVyrrM-2VkZ6ZoQsubm6K2lwPl0ufCCPiT58P2Q==&sig=AOq0QJ8wRgIhAOgvu3IEQEj7iLjcbq812dcpLLMCZSl803PYI8wsrZKVAiEAz_h8SNGZcs_QmHKlRgbEh3PEYZFaTjAN_79CZS8Jy4I=',
            image: 'https://i.ytimg.com/vi/eKj2vGm3Ip0/maxresdefault.jpg',
          },
          {
            name: 'Century',
            singer: 'Nightcore ',
            path: 'https://r1---sn-8qj-nboez.googlevideo.com/videoplayback?expire=1623876957&ei=_RDKYKC8B5WHs8IPk8aniAc&ip=103.138.88.45&id=o-AOjz9repBYuSpKVubqN4JB_Tam0cQt7wJW_ectRDt1re&itag=140&source=youtube&requiressl=yes&mh=_U&mm=31,26&mn=sn-8qj-nboez,sn-oguelne7&ms=au,onr&mv=u&mvi=1&pl=23&vprv=1&mime=audio/mp4&ns=g2oFG5Tm8w4aEaPmtR1y5kEF&gir=yes&clen=3694686&dur=228.252&lmt=1575008797255050&mt=1623854937&fvip=1&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5531432&n=pxocnKr3aDudJKHCW&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgEsz-dlxGWllZzD43SBMaptn2ytOw1wYJ49tOt-dxNf8CIDj652unw5or13P81QyaFoN0Da7o5C1so9UTngiY7qCr&sig=AOq0QJ8wRgIhAP00toaDSwj1YJSFhCkOfaVvatsEOavo98ZCi94cggpNAiEA26RqsSb5zECpW-KUPLkI9XfWo1pGLgnnfrBCNEvlZnM=',
            image: 'https://i.ytimg.com/vi/dZEnQogAd8U/hqdefault.jpg',
          },

    ],
    render: function () {
        const htmls = app.songs.map((song,index) => {
            return `
            <div 
             class="song  ${index === this.currentIndex ? 'active' : ''} " title = ${index+1}>
                    <div class="image" style="background-image: url('${song.image}');"></div>
                    <div class="body">
                        <h2>${song.name}</h2>
                        <p>${song.singer}</p>
                    </div>
            </div>`
        })
        playlist.innerHTML = htmls.join('')
    },
    handleEvents:function() {
        const _this=this
        const a = cd.offsetWidth
        //Xử lý khi scroll màn hình
        document.onscroll = function() {
            cd.style.width=a-window.scrollY>0 ? a-window.scrollY +'px':0
            cd.style.opacity = (a-window.scrollY)/a
        }
        const cdThumbAnimate= cdThumb.animate(
          [
            { transform:'rotate(360deg)'}
    
          ],{
            duration:11000,
            iterations:Infinity
          }
        )
        cdThumbAnimate.pause()
        //Xử lý khi bật / tắt bài hát 
        audio.onended = function() {
          _this.currentIndex++
          if(_this.currentIndex>_this.songs.length-1)
          {
              _this.currentIndex = 0
          }
          _this.loadCurrentSong()
         _this.render()
          audio.play()
          _this.scrollToActiveSong()
        }
        /////
        btnSong.onclick = function() {
            if (_this.isPlaying)
            {
                audio.play()
            }
            else{
                audio.pause()
            }
            audio.onplay = function () {
                _this.isPlaying = false
                btnSong.classList.add('playing')
                cdThumbAnimate.play()
            }
            audio.onpause = function () {
                _this.isPlaying = true 
                btnSong.classList.remove('playing')
                cdThumbAnimate.pause()
            }
           }
          
            //Xử lý khi chạy 
            audio.ontimeupdate = function () {
              progress.value = audio.currentTime / audio.duration *100
           }
           progress.onchange = function(e) {
              audio.currentTime=  e.target.value*audio.duration /100
           }
          
           nextBtn.onclick = function() {
               _this.currentIndex++
               if(_this.currentIndex>_this.songs.length-1)
               {
                   _this.currentIndex = 0
               }
               _this.loadCurrentSong()
               audio.play()
               audio.onplay = function () {
                _this.isPlaying = false
                btnSong.classList.add('playing')
                cdThumbAnimate.play()
            }
            audio.onpause = function () {
                _this.isPlaying = true 
                btnSong.classList.remove('playing')
                cdThumbAnimate.pause()
            }
               _this.render()
               
               _this.scrollToActiveSong()
           }
           prevBtn.onclick = function() {
               _this.currentIndex--
               if(_this.currentIndex<0)
               {
                   _this.currentIndex = _this.songs.length-1
               }
               _this.loadCurrentSong()
              audio.play()
            audio.onplay = function () {
                _this.isPlaying = false
                btnSong.classList.add('playing')
                cdThumbAnimate.play()
            }
            audio.onpause = function () {
                _this.isPlaying = true 
                btnSong.classList.remove('playing')
                cdThumbAnimate.pause()
            }
               _this.render()
               _this.scrollToActiveSong()
           }
           repeat.onclick =function() {
             if (_this.isActive)
             {
               _this.isActive = false
               repeat.classList.add('active')
               audio.onended = function() {
                 _this.loadCurrentSong()
                 audio.play()
               }
               
             }
             else{
               _this.isActive = true
               repeat.classList.remove('active')          
             }
           }
           random.onclick = function()
           {
             if (_this.isActive)
             {
               _this.isActive =false
               random.classList.add('active')
                      
                      
                          nextBtn.onclick = function() {
                              _this.currentIndex = Math.floor(Math.random() *_this.songs.length)
                             _this.render()
                              _this.loadCurrentSong()
                              audio.play()
                              _this.scrollToActiveSong()
                          }
                          prevBtn.onclick = function() {
                            _this.currentIndex = Math.floor(Math.random() *_this.songs.length)
                            _this.render()
                            _this.loadCurrentSong()
                            audio.play()
                            _this.scrollToActiveSong()
                          }
                          audio.onplay = function () {
                            _this.isPlaying = false
                            btnSong.classList.add('playing')
                            cdThumbAnimate.play()
                        }
                        audio.onpause = function () {
                            _this.isPlaying = true 
                            btnSong.classList.remove('playing')
                            cdThumbAnimate.pause()
                        }
                        audio.onended =function() {
                          _this.currentIndex = Math.floor(Math.random() *_this.songs.length)
                          _this.render()
                          _this.loadCurrentSong()
                          audio.play()
                          _this.scrollToActiveSong()
                        }
                        
                      
             }
             else{
               _this.isActive =true
               random.classList.remove('active')
               ////
               nextBtn.onclick = function() {
                _this.currentIndex++
                if(_this.currentIndex>_this.songs.length-1)
                {
                    _this.currentIndex = 0
                }
                _this.loadCurrentSong()
                audio.play()
                audio.onplay = function () {
                 _this.isPlaying = false
                 btnSong.classList.add('playing')
                 cdThumbAnimate.play()
             }
             audio.onpause = function () {
                 _this.isPlaying = true 
                 btnSong.classList.remove('playing')
                 cdThumbAnimate.pause()
             }
                _this.render()
                
                _this.scrollToActiveSong()
            }
            prevBtn.onclick = function() {
                _this.currentIndex--
                if(_this.currentIndex<0)
                {
                    _this.currentIndex = _this.songs.length-1
                }
                _this.loadCurrentSong()
               audio.play()
             audio.onplay = function () {
                 _this.isPlaying = false
                 btnSong.classList.add('playing')
                 cdThumbAnimate.play()
             }
             audio.onpause = function () {
                 _this.isPlaying = true 
                 btnSong.classList.remove('playing')
                 cdThumbAnimate.pause()
             }
                _this.render()
                _this.scrollToActiveSong()
            }

               ////
             }
           }

         playlist.onclick =function(e) {
           _this.currentIndex = e.target.closest('.song').getAttribute('title')-1
           _this.render()
           _this.loadCurrentSong()
           audio.play()
           audio.onplay = function () {
            _this.isPlaying = false
            btnSong.classList.add('playing')
            cdThumbAnimate.play()
        }
        audio.onpause = function () {
            _this.isPlaying = true 
            btnSong.classList.remove('playing')
            cdThumbAnimate.pause()
        }
         }
           
    },
    scrollToActiveSong: function () {
      setTimeout(() => {
        if (this.currentIndex <= 3) {
          $('.song.active').scrollIntoView({
            behavior: 'smooth',
            block: 'end',
          });
        } else {
          $('.song.active').scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 300);
    },
    loadCurrentSong:function() {
        nameSong.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    defineProperties:function() {
        Object.defineProperty(this,'currentSong', {
            get:function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    volumeSong:function(){
      volumechange.onchange = function(e) {
        audio.volume = e.target.value/100
      }
    },
    adjustSong :function() {
      takevolume.onclick = function() {
        if(this.isVolume)
        {
          this.isVolume=false
        volumechange.style.display ='block'
        }
        else{
         this.isVolume=true
         volumechange.style.display ='none'
        }
      }
    },
    // Hàm chạy Song
    start:function() {
        this.handleEvents()
        this.defineProperties()
        this.loadCurrentSong()
        this.render()  
       this.volumeSong()
       this.adjustSong()
    }
}
app.start()
