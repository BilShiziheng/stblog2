/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","1764239331164b741ae5b564959cb1e1"],["/archives/2022/07/index.html","4953a5debfeb6fc177bdb91ef8049064"],["/archives/2022/08/index.html","77c6eee593b8f3566c3b8c3195d02901"],["/archives/2022/08/page/2/index.html","d4dd5f88b3298a919703208c8f3ceb53"],["/archives/2022/09/index.html","b79a191ce2e7669f732e5f18c72ed4c7"],["/archives/2022/10/index.html","128e1370f50bdfb791c72b42d780cbea"],["/archives/2022/11/index.html","bbf1e2f060e67865e91c5d5b6a87d807"],["/archives/2022/12/index.html","efba067dc0f1da0a15c30cd15953e6cb"],["/archives/2022/index.html","6539caabab72d66e25fdc2b681f8578e"],["/archives/2022/page/2/index.html","66bd9445cb2405af0a19e8b04fa646df"],["/archives/2022/page/3/index.html","e4eedbec7bef3fb6b4511d404dfee6f1"],["/archives/2022/page/4/index.html","697b944e5d84b6ae5b479b6314adf010"],["/archives/2022/page/5/index.html","8b4f8edaae6762454de408c1c43e19ec"],["/archives/index.html","e1669b408311c1301c0807ce7485117e"],["/archives/page/2/index.html","d382972fbef824b3e9b250f21fda0f57"],["/archives/page/3/index.html","dc5b2e3ea7d0f3d3a73ea975d1b0924d"],["/archives/page/4/index.html","de9d5f6e0dd3da352a434b2fa880465b"],["/archives/page/5/index.html","e709a53c5a41d2f63c0e2d7516fc3c27"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","431abb83b5d50b9339e4e5ab6bf4823e"],["/categories/Hexo魔改/index.html","3d7361cb00fab86ed841008bcdd16f22"],["/categories/Hexo魔改/page/2/index.html","0c81cdedc43502a3029c3db45daf62ca"],["/categories/OI/index.html","d03388ee5ad4e44afdab232c50bb4a24"],["/categories/Windows/index.html","b6f7a824b62cf3f1aea365832d50f39a"],["/categories/index.html","d1cce4b97d74bad97fd5a9510c5e3c27"],["/categories/个人/index.html","f1c622078220181a41ea1bf1351ceb01"],["/categories/白嫖教程/index.html","ed2efde4ae24b9dfe43241b60dba9828"],["/categories/社会/index.html","24d088fb6c6dbbcbb9cac0b3455c1cfc"],["/categories/经验教程/index.html","ae7f7d901f97a94be04da4e9e82f35fa"],["/categories/编程/index.html","5205b1eaf56070a1550382c1e5ecaabc"],["/categories/网络/index.html","61e76951e8ea7a9dbb5eb116e58260a3"],["/categories/避坑教程/index.html","8cd87d7ea672b7ba7b2ff2c44519989c"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","36e32513a3cbc43460ddf6bcc5e3929a"],["/fontawesome/index.html","625022aba95c87fa99ab81071bdb361b"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","13c29e7847ed9704675707f2deef7f89"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","85c861f6a26243cc1b6b3966363d847b"],["/js/commentsCount.js","143e6b64c18599cdb6f7200f24140bf6"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","503ec5422cd55b95e963946d8d463eb7"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","5ee77259dbb952c5b6d2d4ea63635fa8"],["/js/randomFriend.js","dd6c7b1921391f70f60a124bf116287c"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","f0e70048eaac6ee6fec017cdd4df3edc"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","fb7d5beb9bb06618d13aaf0ea08e5ad5"],["/license/index.html","76b3ab4d0a7df71fa227a1ffe94393f1"],["/link/index.html","9b1308bacc574752272483fa9db713d4"],["/links/index.html","0ef2fcd463a8e7c435317e8e672acdbf"],["/messageboard/index.html","c1e7cf99c608a4d70acce25d6d0f199c"],["/musics/index.html","2d0d424a80d90a008ee0bf26e8cfad48"],["/muyu/index.html","1f0788ebeb5c21840fe5581387214b65"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","3bc42e4feced7d1d207e9f57a725a378"],["/page/2/index.html","205a649618b8534315f57bff4841bb2b"],["/page/3/index.html","dd365a8733131cfdda6da7fb13882fc0"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","52d15f935c090ebb1108859956972477"],["/posts/14740f7c/index.html","5aa891add3fd423832aaa0e91c40d4f7"],["/posts/1b850b16/index.html","6f4c8534ed4b3a5d7122599bb44de8d4"],["/posts/29b0359b/index.html","bfe558920e66eef7f35809327ead1cef"],["/posts/30bce1d1/index.html","5255daebff00be1ef1d3b5b2a50672b4"],["/posts/3ee11b0f/index.html","3e202f1ae10bb0cb50a1a86ea61bd7e1"],["/posts/45897d5c/index.html","e13e43c6f99e2d536c2aeb25212dca36"],["/posts/4ae2ec41/index.html","6fbdd5b46f1b94d7227c6a1c3092e6a5"],["/posts/4bd8701b/index.html","1d6a53b50fc86ad2c886f4b430cf4fa8"],["/posts/4ebac27c/index.html","f62bd59fe4a6225b3203b781f1e58995"],["/posts/53e6b356/index.html","fbf5ff86ad8aeb3b371030005ec44b59"],["/posts/583ff077/index.html","9832708896e6ea520ee10c4df5388d3d"],["/posts/5d71c71f/index.html","fbf5c4c97e0ffe950adcddde86b43114"],["/posts/5e2c4b67/index.html","dd23ecd6aee7b79054e22d80debad456"],["/posts/614f1131/index.html","520349d167fd1752c75324cd6dfe0794"],["/posts/61b9829e/index.html","12876beb20f5302db5757097102e6c06"],["/posts/65ad2601/index.html","5b36af2e1586ada819fd197112313e34"],["/posts/670e47f/index.html","13f70e0c967fd6b33d2d0bb5df636979"],["/posts/69707535/index.html","67501518f88586c4101eb8eabf6326a8"],["/posts/6d1af91/index.html","f27abe99fd00512262919625323e4b45"],["/posts/6deceee9/index.html","20374b8187e8b103b6c9f23bca7b551f"],["/posts/70734559/index.html","f427a71ea9873d432658268fd1b74e97"],["/posts/74e5e1ec/index.html","ef2276736d2fc6504f4ad361ed1d804a"],["/posts/7e9276a3/index.html","94b2e8a7ed99ca38d6a4d8484ed7bf08"],["/posts/8245da27/index.html","bd4d60b20354201ee9d58d9acbce3c1e"],["/posts/895003b5/index.html","d4fd718e832fff417479377a84be68c9"],["/posts/8a79afbb/index.html","bdd2d570f9cd74258c81d113a21c7df9"],["/posts/8b73c6b7/index.html","8d1d982384f8ef5d1781ba7645b540bf"],["/posts/a1078b2d/index.html","0d22cdcf9d9e377aaa862f6bb96ddc0e"],["/posts/a61abc/index.html","d381053c6fa90413e5009c540345c67e"],["/posts/a844d9fc/index.html","d43b431921654540cbeb58dd36440666"],["/posts/a90c94cd/index.html","421f622bd68525d12fc19f0fc56df1ed"],["/posts/ac792cf4/index.html","b9a29711b12ddb6a07449a780448151f"],["/posts/aedd05c3/index.html","5f9c66c3d66574e0ea66bcfd2c68978b"],["/posts/bbc95d58/index.html","febd4a11f61b6d222538251b76a04672"],["/posts/bd7ef112/index.html","cd3e31e686cc725e50ca1443e2d33238"],["/posts/becc831a/index.html","e1bea0aa71ac9afba1a955cc7b2f1c92"],["/posts/d1fc759/index.html","cd1a8690af9cff6a8cb3ad4bef9f1dfd"],["/posts/e433f3d/index.html","e8eb8e470396eb13dd1dacd6f9b62ea2"],["/posts/e536ec4/index.html","c574e424e179b85e1d1162ecfc696787"],["/posts/ec12b762/index.html","d0f403455d96ad8934ae3fc00cf6cb04"],["/posts/ff156c72/index.html","1fe3f0f6c9b09a746cbbe56da3a4ff65"],["/posts/ff1701d7/index.html","a7ff1b67c4fe4a3cae738c968e655e25"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","90df41c4932dbb27b89d33c7708e7760"],["/sw-register.js","64d43613b060943b9295bab7ca49f96e"],["/tags/Hexo魔改/index.html","9db2073d78b7fac57c9330198b2beb7d"],["/tags/Hexo魔改/page/2/index.html","6b7c9dea6e63e4149fbfa11bbecb5f2c"],["/tags/OI/index.html","b3dfb07d002c455273c8f2a618df9c3e"],["/tags/PyQt5/index.html","4d58ed89983ea68108cfa1dd2462d94d"],["/tags/Python/index.html","6db426ecf3224a537b0a7790dbb5d8ef"],["/tags/Windows/index.html","80a562215170b18049e83eb933d6f50c"],["/tags/goorm/index.html","3801bbc2b14437d959282561fdf8f248"],["/tags/index.html","d95fbb0dec907732d575065436dcfcc0"],["/tags/uClock/index.html","466312591e364cd08e088f67c19e83df"],["/tags/个人/index.html","3890bdc41e80df5e5daec7507cf7578f"],["/tags/域名/index.html","d6b08f6e7355dc9bba55480ac40647e3"],["/tags/字符处理/index.html","b887e3a91d0eaf49ace1496920e26353"],["/tags/服务器/index.html","383cdff7c81e8c7e9110e201aa6001c0"],["/tags/模拟/index.html","2548fef2d17ab3a213dcf660c827a38c"],["/tags/白嫖/index.html","bfa91b9f27ed7bf6632aca6105530f76"],["/tags/社会/index.html","74bc9906e40bff1292f849e256f1b2a4"],["/tags/编程/index.html","b6f71119ac2d63ce170fe37415efe25a"],["/tags/网络/index.html","f3859554b9a506580aae1d862df3f34e"],["/tags/翻墙/index.html","4812cadb6fb7ef6f46b8939c56ce3069"],["/tags/贪心/index.html","27a3364b093990e62d1bb93b5a2645cf"],["/tags/避坑/index.html","ce8f765eac999c84086f91bb693539f2"],["/tags/高精度/index.html","9d872fe69ec239a79a89519dbd02dd14"],["/tags/魔改日记/index.html","1d09bde6b81a6e1a9de384d4c88203de"],["/tools/index.html","c35ba44ab3bacd554733b13e799168ae"],["/update/index.html","a3e68cf05722cd913ee70d95fed02119"],["/zaobao/index.html","3742a6892e784ee1f2757010712ae3dd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
