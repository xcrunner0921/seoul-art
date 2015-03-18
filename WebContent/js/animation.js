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
	    selector: '#stage3-1-jp-top',
	    startAt: clampHeight * 0.5,
	    endAt: clampHeight * 2.4,
	    onEndAnimate: function(anim) {},
	    keyframes: [{
	        position: 0,
	        properties: {
	            "top": clampWidth / 2 - 138
	        }
	    }, {
	        position: 1,
	        ease: TWEEN.Easing.Linear.EaseNone,
	        properties: {
	            "top": clampWidth / 2 + 70 + 638
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
	            "top": clampWidth / 2 - 138
	        }
	    }, {
	        position: 1,
	        ease: TWEEN.Easing.Linear.EaseNone,
	        properties: {
	            "top": clampWidth / 2 + 70 + 638
	        }
	    }]
	}
	// stage3-section2
	, {
	    selector: '#stage3-2-bg2',
	    startAt: clampHeight * 0.5,
	    endAt: clampHeight * 5.4,
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
	}, {
	    selector: '#stage3-2-jp-run',
	    startAt: clampHeight * 0.5,
	    endAt: clampHeight * 5.4,
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
	}, {
	    selector: '#stage3-2-drop',
	    startAt: clampHeight * 0.5,
	    endAt: clampHeight * 5.4,
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
	}
	// sections...
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
	}, {
	    startAt: clampHeight * 3.6,
	    endAt: clampHeight * 3.7,
	    onEndAnimate: function(anim) {
	        if (anim == 1) console.log("/section4");
	    }
	}, {
	    startAt: clampHeight * 4.9,
	    endAt: clampHeight * 5,
	    onEndAnimate: function(anim) {
	        if (anim == 1) console.log("/section5");
	    }
	}, {
	    startAt: clampHeight * 10.3,
	    endAt: clampHeight * 10.4,
	    onEndAnimate: function(anim) {
	        if (anim == 1) console.log("/shuffle3");
	    }
	}, {
	    startAt: clampHeight * 13.7,
	    endAt: clampHeight * 13.8,
	    onEndAnimate: function(anim) {
	        if (anim == 1) console.log("/shuffle4");
	    }
	}, {
	    startAt: clampHeight * 16.5,
	    endAt: clampHeight * 16.6,
	    onEndAnimate: function(anim) {
	        if (anim == 1) console.log("/shuffle5");
	    }
	}, {										// sound play position
	    startAt: clampHeight * 0.51,
	    endAt: clampHeight * 0.52,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event1.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 2.42,
	    endAt: clampHeight * 2.67,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event2.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 4.58,
	    endAt: clampHeight * 4.59,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event3.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 7.46,
	    endAt: clampHeight * 7.47,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event4.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 8.4,
	    endAt: clampHeight * 8.41,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event5.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 10.16,
	    endAt: clampHeight * 10.17,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event6.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 10.58,
	    endAt: clampHeight * 10.59,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event7.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 12.31,
	    endAt: clampHeight * 12.32,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event8.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 14.27,
	    endAt: clampHeight * 14.28,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event9.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 17.27,
	    endAt: clampHeight * 17.28,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event10.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 20.88,
	    endAt: clampHeight * 20.89,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event11.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 21.86,
	    endAt: clampHeight * 21.87,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event12.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 25.52,
	    endAt: clampHeight * 25.53,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event13.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 27.13,
	    endAt: clampHeight * 27.14,
	    onEndAnimate: function(anim) {
	        if (anim == 1 && isMobile == false) {
	            //event14.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 2,
	    endAt: clampHeight * 2.01,
	    onEndAnimate: function(anim) {
	        if (isMobile == false) {
	            //moletteSport.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 6.31,
	    endAt: clampHeight * 6.32,
	    onEndAnimate: function(anim) {
	        if (isMobile == false) {
	            //moletteWd.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 9.83,
	    endAt: clampHeight * 9.84,
	    onEndAnimate: function(anim) {
	        if (isMobile == false) {
	            //moletteAuto.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 13.87,
	    endAt: clampHeight * 13.88,
	    onEndAnimate: function(anim) {
	        if (isMobile == false) {
	            //moletteWd.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 16.81,
	    endAt: clampHeight * 16.82,
	    onEndAnimate: function(anim) {
	        if (isMobile == false) {
	            //moletteZev.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 20.41,
	    endAt: clampHeight * 20.42,
	    onEndAnimate: function(anim) {
	        if (isMobile == false) {
	            //moletteAuto.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 23.46,
	    endAt: clampHeight * 23.47,
	    onEndAnimate: function(anim) {
	        if (isMobile == false) {
	            //moletteZev.play();
	        }
	    }
	}, {
	    startAt: clampHeight * 26.91,
	    endAt: clampHeight * 26.92,
	    onEndAnimate: function(anim) {
	        if (isMobile == false) {
	            //moletteSport.play();
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
