
$(document).ready(function() {
    var language = window.navigator.userLanguage || window.navigator.language;
    var qslang = getUrlVars()["lang"];
    if (qslang != undefined) {
        language = qslang;
    };
    language = language.toLowerCase();
    var versionLang = "en";
    var description = "1 heroine, 1 mission, 4 driving modes. Discover an all new online experience inspired by the Peugeot HYbrid4  technology.";
    var twitterShare = "Discover an online experience inspired by the Peugeot HYbrid4 technology.";
    /* if (language == "fr" || language == "fr-fr") {
        versionLang = "fr";
        document.title = "Peugeot présente : Le roman graphique HYbrid4";
        description = "1 héroïne, 1 mission, 4 modes de conduites. Découvrez une nouvelle expérience en ligne inspirée par la technologie Peugeot HYbrid4.";
        twitterShare = "Découvrez une expérience en ligne hybride inspirée par la technologie HYbrid4 de Peugeot. #graphicnovel #hybrid #HYbrid4";
    } */
    $("html").attr("lang", versionLang).addClass(versionLang);
    $("body").attr("data-lang", versionLang);
    var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    var isiPod = navigator.userAgent.match(/iPod/i) != null;
    /* tc_log('/graphicnovel/home/?lang=' + $("body").data("lang")); */
    var w = $(window);
    window.scrollTo(0, 1);
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    var isiPhone = navigator.userAgent.match(/android|avantgo|android|Android|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i) != null;
    if (isiPad || isiPhone) {
        $("#container").addClass("mobile");
        $("#container").addClass("ipad");
    }
    if (isiPhone) {
        $("#body").css({
            "overflow": "auto"
        });
        $("#container").addClass("iphone");
    }
    if (checkVersion()) {
        $("#body").addClass("windaube");
    }
    isiPhone = false;
    var has3d = ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix())
    if (has3d) $("body").addClass("has3d");
    StageController.isDebug = true;
    StageController.minWidth = 0;
    StageController.minHeight = 0;
    StageController.addListener("index", onIndex);

    function onIndex() {
        var w = $(window);
        var WIDTH = w.width();
        var HEIGHT = w.height();
        StageController.sceneWidth = WIDTH;
        StageController.sceneHeight = HEIGHT;
    }
    var timer;
    window.scrollTo(0, 1);
    if (isiPhone == false) {
        $(window).bind("resize", function() {
            $("#container").fadeOut();
            $(document).stopTime("refresh");
            if (!$("body").hasClass("windaube")) {
                $(document).oneTime(500, "refresh", function() {
                    window.location.reload();
                });
            }
        });
    }
    setScene();

    function setScene() {
        var urlExperience = "experience.html";
        /* if (language == "fr" || language == "fr-fr") {
            urlExperience = "experience_fr.html";
        } */
        $.manageAjax.add('ajaxProfile', {
            abortOld: true,
            preventDoubbleRequests: true,
            cacheResponse: true,
            success: function(data) {
                var toLoad = retrieveImages($(data));
                var manuallyLoad = ["images/10/2.jpg", "images/10/3.jpg", "images/10/4.jpg", "images/10/5.jpg", "images/10/6.jpg", "images/10/7.jpg", "images/10/8.jpg", "images/10/9.jpg", "images/10/10.jpg", "images/10/11.jpg", "images/10/12.jpg", "images/10/13.jpg", "images/10/14.jpg", "images/10/15.jpg", "images/10/16.jpg", "images/10/17.jpg", "images/10/18.jpg", "images/10/19.jpg", "images/10/20.jpg", "images/10/21.jpg", "images/10/22.jpg", "images/10/23.jpg", "images/10/24.jpg"];
                var finalLoad = toLoad.concat(manuallyLoad);
                $("#scrollContainer").empty().html(data);
                var toLoad = retrieveImages($("#scrollContainer"));
                $.preload(toLoad, {
                    onComplete: function(callback) {
                        $("#progress").css({
                            width: (callback.done / callback.total) * 100 + "%"
                        });
                    },
                    onFinish: function() {
                        console.log("/section1");
                        start();
                    }
                });
            },
            url: urlExperience
        });
    }

    function start() {
        if (typeof FB != "undefined") FB.init({
            appId: "196882930414807",
            status: true,
            cookie: true
        });
        $(".redirectionCTA").click(function() {
            /* tc_log('/graphicnovel/cta/?lang=' + $("body").data("lang")); */
            /* _gaq.push("/cta"); */
			var url = "http://www.peugeot.co.uk/discover-hybrid4/#!technology/technology-1/";
            /* var url = "http://www.peugeot.fr/hybrid4/#!technologie-hybrid4";
            switch (language) {
                case "it":
                case "it-it":
                    url = "http://www.peugeot.it/hybrid4/#!la-tecnologia/content-image/";
                    break;
                case "en":
                case "en-en":
                case "en-us":
                case "en-gb":
                    url = "http://www.peugeot.co.uk/discover-hybrid4/#!technology/technology-1/";
                    break;
                case "de":
                case "de-de":
                    url = "http://www.peugeot.de/special-hybrid4/";
                    break;
                case "es":
                case "es-es":
                    url = "http://www.peugeot.es/hybrid4";
                    break;
                case "nl":
                    url = "http://www.peugeot.nl/hybrid-4/#!technologie/full-hybrid/";
                    break;
                case "fr-be":
                    url = "http://fr.peugeot.be/hybrid4-technology/#!technologie/une-conduite-multimode/";
                    break;
                case "nl-be":
                    url = "http://nl.peugeot.be/hybrid4-technology/#!technologie/eenvoudig-in-gebruik/";
                    break;
            } */
            window.open(url);
        });
        /* $("#facebook").click(function() {
            _gaq.push("/facebook");
            var obj = {
                method: 'feed',
                link: 'http://graphicnovel-hybrid4.peugeot.com/',
                picture: 'http://graphicnovel-hybrid4.peugeot.com/share.jpg',
                name: document.title,
                caption: '',
                description: description
            };

            function callback(response) {}
            FB.ui(obj, callback);
        }); */
        $("#credits").mouseenter(function() {
            $("#credits-popup").show().stop().animate({
                opacity: 1
            });
        });
        $("#credits-popup").mouseleave(function() {
            $("#credits-popup").animate({
                opacity: 0
            }, function() {
                $("#credits-popup").hide();
            });
        });
        /* $('#twitter').click(function(event) {
            _gaq.push("/twitter");
            var width = 575,
                height = 400,
                left = ($(window).width() - width) / 2,
                top = ($(window).height() - height) / 2,
                url = "http://twitter.com/share?text=" + document.title + "&url=http://graphicnovel-hybrid4.peugeot.com/",
                opts = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
            window.open(url, 'Twitter', opts);
            return false;
        }); */
        $("#invariant").animate({
            top: 0
        }, "slow");
        $("#sound, #autoplay, #separation").animate({
            top: 23
        }, "slow");
        $("#intro").delay(1000).fadeOut("slow", function() {
            $(document).oneTime(20000, "autoTimer", function() {
                $("#autoplay").trigger("click");
            });
            window.siteAnimator = null;
            window.siteAnimator = MainScroll.init();
            $("#intro").remove();
        });
    }
    $("#stat").hide();
    $("#status").hide();
});;
