var MainScroll = (function() {
    var w = $("#container");	// main container
    var HEIGHT = w.height();
    var WIDTH = w.width();
    var clampWidth = w.width();		// main container width
    var clampHeight = w.height();	// main container height
    var settings = {},
        defaults = {
            startAt: 0,
            sectionCheckInterval: clampHeight,
            clampWidth: clampWidth,
            tracking: false,
            firstPart: clampHeight * 6.2,
            maxScroll: clampHeight * 30.3
        },
        scrollContoller;
    var wHeight;
    var $scrollBar, $scrollThumb, isScrolling, scrollBarHeight, scrollThumbHeight, thumbDelta, scrollThumbPosition, scrollPercent;
    var maxScroll = clampHeight * 30.3;
    
    
    var firstPart = clampHeight * 6.2;
    var animation = getAnimation();
    
    /* 
     * description animation resource
     * 
     * setting your animation resource in animation array
     *
     */
    function getAnimation() {
        firstPart = clampHeight * 6.2
        maxScroll: clampHeight * 27.3
        console.log("firstPart : " + firstPart);
        
    	// description animation resource
    	var animation = [{
    	    selector: '#verticalScrollArea',
    	    startAt: 0,
    	    endAt: firstPart,
    	    onEndAnimate: function(anim) {},
    	    keyframes: [{
    	        position: 0,
    	        properties: {
    	            "top": 0
    	        }
    	    }, {
    	        position: 1,
    	        ease: TWEEN.Easing.Linear.EaseNone,
    	        properties: {
    	            "top": -firstPart
    	        }
    	    }]
    	}
    	// stage3-section0
    	//        , {
    	//            selector: '#stage3-0',
    	//            startAt: 0,
    	//            endAt: clampHeight * 0.6,
    	//            onEndAnimate: function(anim) {},
    	//            keyframes: [{
    	//                position: 0,
    	//                properties: {
    	//                    "margin-top": 200
    	//                }
    	//            }, {
    	//                position: 1,
    	//                ease: TWEEN.Easing.Linear.EaseNone,
    	//                properties: {
    	//                    "margin-top": 0
    	//                }
    	//            }]
    	//        }
    	// stage3-section1
    	/*, {
    	    selector: '#stage3-1',
    	    startAt: -1920,
    	    endAt: clampHeight * 0.6,
    	    onEndAnimate: function(anim) {},
    	    keyframes: [{
    	        position: 0,
    	        properties: {
    	            "margin-top": 200
    	        }
    	    }, {
    	        position: 1,
    	        ease: TWEEN.Easing.Linear.EaseNone,
    	        properties: {
    	            "margin-top": -100
    	        }
    	    }]
    	}*/, {
    	    selector: '#stage3-1-bg',
    	    startAt: clampHeight * 0.5,
    	    endAt: clampHeight * 2.4,
    	    onEndAnimate: function(anim) {},
    	    keyframes: [{
    	        position: 0,
    	        properties: {
    	            "margin-bottom": 1280
    	        }
    	    }, {
    	        position: 1,
    	        ease: TWEEN.Easing.Linear.EaseNone,
    	        properties: {
    	        	"margin-bottom": 0
    	        }
    	    }]
    	}, {
    	    selector: '#stage3-1-jp-top',
    	    startAt: clampHeight * 0.5,
    	    endAt: clampHeight * 2.4,
    	    onEndAnimate: function(anim) {},
    	    keyframes: [{
    	        position: 0,
    	        properties: {
    	            "top": 10
    	        }
    	    }, {
    	        position: 1,
    	        ease: TWEEN.Easing.Linear.EaseNone,
    	        properties: {
    	            "top": 200
    	        }
    	    }]
    	}, {
    	    selector: '#stage3-1-jp-shadow',
    	    startAt: clampHeight * 0.5,
    	    endAt: clampHeight * 2.4,
    	    onEndAnimate: function(anim) {},
    	    keyframes: [{
    	        position: 0,
    	        properties: {
    	            "top": 10
    	        }
    	    }, {
    	        position: 1,
    	        ease: TWEEN.Easing.Linear.EaseNone,
    	        properties: {
    	            "top": 200
    	        }
    	    }]
    	}
    	// stage3-section2
    	, {
    	    selector: '#stage3-2-bg',
    	    startAt: clampHeight * 0.5,
    	    endAt: clampHeight * 5.4,
    	    onEndAnimate: function(anim) {},
    	    keyframes: [{
    	        position: 0,
    	        properties: {
    	            "left": -300
    	        }
    	    }, {
    	        position: 1,
    	        ease: TWEEN.Easing.Linear.EaseNone,
    	        properties: {
    	            "left": 300
    	        }
    	    }]
    	}, {
    	    selector: '#stage3-2-jp-run',
    	    startAt: clampHeight * 0.5,
    	    endAt: clampHeight * 5.4,
    	    onEndAnimate: function(anim) {},
    	    keyframes: [{
    	        position: 0,
    	        properties: {
    	            "left": -250
    	        }
    	    }, {
    	        position: 1,
    	        ease: TWEEN.Easing.Linear.EaseNone,
    	        properties: {
    	            "left": 800
    	        }
    	    }]
    	}, {
    	    selector: '#stage3-2-drop',
    	    startAt: clampHeight * 0.5,
    	    endAt: clampHeight * 5.4,
    	    onEndAnimate: function(anim) {},
    	    keyframes: [{
    	        position: 0,
    	        properties: {
    	            "left": -200,
    	            "top":50
    	        }
    	    }, {
    	        position: 1,
    	        ease: TWEEN.Easing.Linear.EaseNone,
    	        properties: {
    	            "left": 100,
    	            "top":150
    	        }
    	    }]
    	}
    	// sections position
    	, {
    	    startAt: clampHeight * 0.7,
    	    endAt: clampHeight * 0.8,
    	    onEndAnimate: function(anim) {
    	        if (anim == 1) console.log("/section2");
    	    }
    	}, {
    	    startAt: clampHeight * 1.8,
    	    endAt: clampHeight * 1.9,
    	    onEndAnimate: function(anim) {
    	        if (anim == 1) console.log("/section3");
    	    }
    	}
    	// sound play position
    	, {
    	    startAt: clampHeight * 0.51,
    	    endAt: clampHeight * 0.52,
    	    onEndAnimate: function(anim) {
    	        if (anim == 1 && isMobile == false) {
    	        	soundBreathing1.play();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 2.42,
    	    endAt: clampHeight * 2.67,
    	    onEndAnimate: function(anim) {
    	        if (anim == 1 && isMobile == false) {
    	        	soundRunning3.play();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 4.58,
    	    endAt: clampHeight * 4.59,
    	    onEndAnimate: function(anim) {
    	        if (anim == 1 && isMobile == false) {
    	        	soundWipe2.play();
    	        }
    	    }
    	}, {										// container display position
    	    startAt: 0,
    	    endAt: 0.01,
    	    onEndAnimate: function(anim) {
    	        if (isMobile) {
    	            if (anim == 1) $("#verticalContainer").show();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 4.91,
    	    endAt: clampHeight * 4.92,
    	    onEndAnimate: function(anim) {
    	        if (isMobile) {
    	            if (anim == 1) $("#horizontalContainer").show();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 6.91,
    	    endAt: clampHeight * 6.92,
    	    onEndAnimate: function(anim) {
    	        if (isMobile) {
    	            if (anim == 1) $("#verticalContainer").hide();
    	            else $("#verticalContainer").show();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 19.91,
    	    endAt: clampHeight * 19.92,
    	    onEndAnimate: function(anim) {
    	        if (isMobile) {
    	            if (anim == 1) $("#verticalContainer2").show();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 22.91,
    	    endAt: clampHeight * 22.92,
    	    onEndAnimate: function(anim) {
    	        if (isMobile) {
    	            if (anim == 1) $("#horizontalContainer").hide();
    	            else $("#horizontalContainer").show();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 22.91,
    	    endAt: clampHeight * 22.92,
    	    onEndAnimate: function(anim) {
    	        if (isMobile) {
    	            if (anim == 1) $("#horizontalScroll2").show();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 23.91,
    	    endAt: clampHeight * 23.92,
    	    onEndAnimate: function(anim) {
    	        if (isMobile) {
    	            if (anim == 1) $("#verticalContainer2").hide();
    	            else $("#verticalContainer2").show();
    	        }
    	    }
    	}, {
    	    startAt: clampHeight * 24.91,
    	    endAt: clampHeight * 24.92,
    	    onEndAnimate: function(anim) {
    	        if (isMobile) {
    	            if (anim == 1) $("#verticalContainer2").hide();
    	            else $("#verticalContainer2").show();
    	        }
    	    }
    	}];
        
        return animation;
    }

    function getCurrent(cur, top, bottom, min, max) {
        return (max - min) / (bottom - top) * (cur - top) + min;
    }

    function isTouch() {
        return 'ontouchstart' in window;
    }

    function getCurrent(cur, top, bottom, min, max) {
        return (max - min) / (bottom - top) * (cur - top) + min;
    }

    function activateScrollBar(thumbHeight) {
        scrollThumbHeight = thumbHeight;
        scrollThumbPosition = 0;
        scrollPercent = 0;
        isScrolling = false;
        $scrollBar = $('#scrollBar');
        $scrollBar.show();
        $scrollThumb = $('#scrollBar .bg-track');
        $scrollThumb.css('height', scrollThumbHeight + "px");
        $scrollThumb.bind('mousedown', startScroll);
    }

    function resizeScrollBar() {
        scrollBarHeight = wHeight;
        $scrollBar.css('height', scrollBarHeight + "px");
        setScrollBarPosition(scrollPercent);
    }

    function startScroll(event) {
        isScrolling = true;
        thumbDelta = scrollThumbPosition - event.pageY;
        $(document).bind('mousemove', scrollUpdate);
        $(document).bind('mouseup', endScroll);
        return false;
    }

    function scrollUpdate(event) {
        scrollThumbPosition = event.pageY + thumbDelta;
        scrollThumbPosition = Math.max(0, Math.min(scrollBarHeight - scrollThumbHeight, scrollThumbPosition));
        scrollPercent = scrollThumbPosition / (scrollBarHeight - scrollThumbHeight);
        scrollPercent = Math.max(0, Math.min(1, scrollPercent));
        scrollContoller.scrollTo(maxScroll * scrollPercent);
        return false;
    }

    function setScrollBarPosition(percent) {
        scrollThumbPosition = (scrollBarHeight - scrollThumbHeight) * percent;
        $scrollThumb.css('top', scrollThumbPosition);
    }

    function endScroll(event) {
        isScrolling = false;
        $(document).unbind('mousemove', scrollUpdate);
        $(document).unbind('mouseup', endScroll);
        return false;
    }
    var init = function(opts) {
        settings = $.extend(defaults, opts);
        var scroll_speed;
        if (isTouch()) {
            scroll_speed = 300;
        } else {
            scroll_speed = 30;
            $("#scrollBar").show();
            activateScrollBar(40);
        }
        var directionTouch = [{
            start: -1,
            end: clampHeight * 6.45,
            direction: "up"
        }, {
            start: clampHeight * 6.45,
            end: clampHeight * 20.55,
            direction: "left"
        }, {
            start: clampHeight * 20.55,
            end: clampHeight * 24,
            direction: "down"
        }, {
            start: clampHeight * 24,
            end: clampHeight * 27.4,
            direction: "left"
        }, {
            start: clampHeight * 27.4,
            end: clampHeight * 35,
            direction: "up"
        }];
        scrollContoller = ScrollController();
        
        // initialize scroll 
        scrollContoller.init({
            animation: animation,
            maxScroll: maxScroll,
            tickSpeed: 20,
            directionTouch: directionTouch,
            scrollSpeed: scroll_speed,
            tweenSpeed: .4,
            startAt: settings.startAt,
            container: $('#main'),
            onStart: function() {},
            onResize: function(page) {
                w = $("#container");
                HEIGHT = w.height();
                WIDTH = w.width();
                clampWidth = w.width();
                clampHeight = w.height();
                sectionHeight = HEIGHT;
                wHeight = HEIGHT;
                settings = {}, defaults = {
                    startAt: 0,
                    sectionCheckInterval: clampHeight,
                    clampWidth: clampWidth,
                    tracking: false,
                    firstPart: clampHeight * 6.2,
                    maxScroll: clampHeight * 30.8
                }, scrollContoller;
                maxScroll = clampHeight * 30.3;
                firstPart = clampHeight * 6.2;
                scrollContoller.setSettings(settings);
                scrollContoller.resetAnimation();
                reposBackground(HEIGHT);
                if (clampHeight < 740) {
                    $("#section2-girl").css({
                        bottom: -(740 - clampHeight)
                    });
                }
                if ($scrollBar)
                    resizeScrollBar();
                scrollContoller.scrollTo(scrollContoller.getScrollTop() + 3);
            },
            onUpdate: function(scrollTop) {
                if (StageController.isDebug) $('#scrollTopTweened').html(("" + scrollTop).substring(0, 10));
                if ($scrollBar) setScrollBarPosition(scrollTop / maxScroll);
            }
        });
        $("#autoplay").bind("click", function() {
            $(this).toggleClass("disabled");
            if ($(this).hasClass("disabled")) {
                scrollContoller.autoScrollStop();	// min.js
            } else {
                scrollContoller.autoScrollStart();
            }
        });
        $("#sound").bind("click", function() {
            $(this).toggleClass("disabled");
        });
        $("#top").bind("click", function() {
            scrollContoller.scrollTo($(this).data("ref"));
        });
        return scrollContoller;
    }
    return {
        init: init,
        scrollContoller: scrollContoller
    }
})();