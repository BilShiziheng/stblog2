//commentBarrage v3.0 By Ariasaka
//for swiper and both(pjax or nopjax)
//ainb?!!!! qwq
/document.addEventListener('pjax:complete', startbarrage); / / ����pjax��ע�͵���һ��
document.addEventListener('DOMContentLoaded', startbarrage);

function startbarrage() {
    try {
        clearInterval(timer);
        document.querySelector('.comment-barrage').innerHTML = "";
        delete sw;
    } catch (err) { }
    const commentBarrageConfig = {
        //ǳɫģʽ����ɫģʽ��ɫ����ر���һ�³��ȣ�ǰ���Ǳ�����ɫ�����������壬���ѡ��Ĭ�������ɫ����
        lightColors: [
            ['var(--lyx-white-acrylic2)', 'var(--lyx-black)'],
        ],
        darkColors: [
            ['var(--lyx-black-acrylic2)', 'var(--lyx-white)'],
        ],
        //v3��֧��һ����Ļ
        //��Ļ��ʾ���ʱ�䣬��λms
        barrageTime: 3000,
        //twikoo�����ַ��Vercel��˽�в��𣩣���Ѷ�Ƶ�Ϊ����ID
        twikooUrl: "https://twikoo-bay-ten.vercel.app/",
        //token��ȡ��ǰ��
        accessToken: "c1a88b6213cd48138125d605e1e3fb24",
        pageUrl: window.location.pathname,
        barrageTimer: [],
        barrageList: [],
        barrageIndex: 0,
        // û�����ù�ͷ��ʱ���ص�Ĭ��ͷ�񣬼�cravatar�ĵ� https://cravatar.cn/developers/api�����Բ����������
        noAvatarType: "retro",
        dom: document.querySelector('.comment-barrage'),
        //�Ƿ�Ĭ����ʾ���Ե�Ļ
        displayBarrage: true,
        //ͷ��cdn��Ĭ��cravatar
        avatarCDN: "cravatar.cn",
    }
    function checkURL(URL) {
        var str = URL;
        //�ж�URL��ַ���������ʽΪ:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
        //����Ĵ�����Ӧ����ת���ַ�"\"���һ���ַ�"/"
        var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        var objExp = new RegExp(Expression);
        if (objExp.test(str) == true) {
            return true;
        } else {
            return false;
        }
    }
    function isInViewPortOfOne(el) {
        const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        const offsetTop = el.offsetTop
        const scrollTop = document.documentElement.scrollTop
        const top = offsetTop - scrollTop
        return top <= viewPortHeight
    }
    if (location.href.indexOf("posts") != -1 || location.href.indexOf("posts") != -1)
        document.onscroll = function () {
            if (commentBarrageConfig.displayBarrage) {
                if (isInViewPortOfOne(document.getElementById("post-comment"))) {
                    $(".comment-barrage").hide();
                }
                else {
                    $(".comment-barrage").show();
                }
            }
        }
    function initCommentBarrage() {

        var data = JSON.stringify({
            "event": "COMMENT_GET",
            "commentBarrageConfig.accessToken": commentBarrageConfig.accessToken,
            "url": commentBarrageConfig.pageUrl
        });
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                commentBarrageConfig.barrageList = commentLinkFilter(JSON.parse(this.responseText).data);
                commentBarrageConfig.dom.innerHTML = '';
                for (commentBarrageConfig.barrageIndex = 0; commentBarrageConfig.barrageIndex < commentBarrageConfig.barrageList.length; commentBarrageConfig.barrageIndex++) {
                    popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]);
                }
                kkksc03 = new Swiper('.barrageswiper', {
                    direction: "vertical",
                    loop: true,
                    mousewheel: true,
                    autoplay: {
                        delay: commentBarrageConfig.barrageTime,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                })
                kkksc03.el.onmouseover = function () {
                    kkksc03.autoplay.stop();
                }
                kkksc03.el.onmouseout = function () {
                    kkksc03.autoplay.start();
                }
            }
        });
        xhr.open("POST", commentBarrageConfig.twikooUrl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    }
    function commentLinkFilter(data) {
        data.sort((a, b) => {
            return a.created - b.created;
        })
        let newData = [];
        data.forEach(item => {
            newData.push(...getCommentReplies(item));
        });
        return newData;
    }
    function getCommentReplies(item) {
        if (item.replies) {
            let replies = [item];
            item.replies.forEach(item => {
                replies.push(...getCommentReplies(item));
            })
            return replies;
        } else {
            return [];
        }
    }
    function popCommentBarrage(data) {
        let barrage = document.createElement('div');
        let width = commentBarrageConfig.dom.clientWidth;
        let height = commentBarrageConfig.dom.clientHeight;
        barrage.className = 'comment-barrage-item'
        let ran = Math.floor(Math.random() * commentBarrageConfig.lightColors.length)
        document.getElementById("barragesColor").innerHTML = `[data-theme='light'] .comment-barrage-item { background-color:${commentBarrageConfig.lightColors[ran][0]};color:${commentBarrageConfig.lightColors[ran][1]}}[data-theme='dark'] .comment-barrage-item{ background-color:${commentBarrageConfig.darkColors[ran][0]};color:${commentBarrageConfig.darkColors[ran][1]}}`;
        if (data.avatar != undefined) {
            if (data.link != undefined) {
                if (!checkURL(data.link)) {
                    data.link = "http://" + data.link;
                }
                barrage.innerHTML = `
            <div class="barrageHead">
                <img class="barrageAvatar" src="${data.avatar}"/>
                <a href="${data.link}" class="barrageNick" target="_blank">${data.nick}</a>
                <a href="javascript:switchCommentBarrage()" style="font-size:20px">��</a>
            </div>
            `
            }
            else {
                barrage.innerHTML = `
            <div class="barrageHead">
                <img class="barrageAvatar" src="${data.avatar}"/>
                <div class="barrageNick">${data.nick}</div>
                <a href="javascript:switchCommentBarrage()" style="font-size:20px">��</a>
            </div>
            `
            }
        }
        else {
            if (data.link != undefined) {
                if (!checkURL(data.link)) {
                    data.link = "http://" + data.link;
                }
                barrage.innerHTML = `
            <div class="barrageHead">
                <img class="barrageAvatar" src="https://${commentBarrageConfig.avatarCDN}/avatar/${data.mailMd5}?d=${commentBarrageConfig.noAvatarType}"/>
                <a href="${data.link}" class="barrageNick" target="_blank">${data.nick}</a>
                <a href="javascript:switchCommentBarrage()" style="font-size:20px">��</a>
            </div>
            `
            }
            else {
                barrage.innerHTML = `
            <div class="barrageHead">
                <img class="barrageAvatar" src="https://${commentBarrageConfig.avatarCDN}/avatar/${data.mailMd5}?d=${commentBarrageConfig.noAvatarType}"/>
                <div class="barrageNick">${data.nick}</div>
                <a href="javascript:switchCommentBarrage()" style="font-size:20px">��</a>
            </div>
            `
            }
        }
        barrageContent = document.createElement('a');
        barrageContent.className = "barrageContent";
        barrageContent.href = "#" + data.id;
        barrageContent.innerHTML = data.comment;
        barrage.appendChild(barrageContent);
        aswiper = document.createElement('div');
        aswiper.className = "swiper-slide";
        aswiper.setAttribute("style", "height: 150px;");
        aswiper.append(barrage);
        commentBarrageConfig.dom.append(aswiper);
    }
    switchCommentBarrage = function () {
        localStorage.setItem("isBarrageToggle", Number(!Number(localStorage.getItem("isBarrageToggle"))))
        if (!isInViewPortOfOne(document.getElementById("post-comment"))) {
            commentBarrageConfig.displayBarrage = !(commentBarrageConfig.displayBarrage);
            let commentBarrage = document.querySelector('.comment-barrage');
            if (commentBarrage) {
                $(commentBarrage).fadeToggle()
            }
        }

    }
    if (localStorage.getItem("isBarrageToggle") == undefined) {
        localStorage.setItem("isBarrageToggle", "0");
    } else if (localStorage.getItem("isBarrageToggle") == "1") {
        localStorage.setItem("isBarrageToggle", "0");
        switchCommentBarrage()
    }
    initCommentBarrage()
}
