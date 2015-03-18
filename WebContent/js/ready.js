
$(document).ready(function() {
    var language = window.navigator.userLanguage || window.navigator.language;
    var qslang = getUrlVars()["lang"];
    if (qslang != undefined) {
        language = qslang;
    };
    language = language.toLowerCase();
    var versionLang = "kr";
    $("html").attr("lang", versionLang).addClass(versionLang);
    $("body").attr("data-lang", versionLang);
    

    var w = $(window);
    window.scrollTo(0, 1);
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
    isiPhone = false;	// init
    
    // set 3d class
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
    
    // init scroll 
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
    
    // set scene
    setPreload();

    function setPreload() {
        var urlPreaload = "preload.html";

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
                        console.log("start");
                        start();
                    }
                });
            },
            url: urlPreaload
        });
    }

    function start() {
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

//        $("#invariant").animate({
//            top: 0
//        }, "slow");
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
