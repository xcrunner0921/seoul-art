// set background element
function reposBackground(th) {
	var backgroundArray = [ {
		element : "#stage3-0-bg",
		width : 1280,
		height : 720
	}/*, {
		element : "#stage3-1-bg",
		width : 1280,
		height : 720
	}, {
		element : "#stage3-2-bg",
		width : 1332,
		height : 720,
		image : true
	}*/ ];

	for (var i = 0; i < backgroundArray.length; i++) {
		var stageW = StageController.sceneWidth;
		var sPer = stageW / th;
		var imgPer = backgroundArray[i].width / backgroundArray[i].height;
		var sW;
		var sH;
		var imgX;
		var imgY;
		if (imgPer > sPer) {
			sW = Math.round(backgroundArray[i].width
					* (th / backgroundArray[i].height));
			sH = th;
			imgX = Math.round((stageW - sW) / 2);
			imgY = 0;
		} else {
			sW = stageW;
			sH = Math.round(backgroundArray[i].height
					* (stageW / backgroundArray[i].width));
			imgX = 0;
			imgY = Math.round((th - sH) / 2);
		}
		if (backgroundArray[i].ratio) {
			sW = sW * backgroundArray[i].ratio;
			sH = sH * backgroundArray[i].ratio;
		}
		if (backgroundArray[i].image && backgroundArray[i].image == true) {
			$(backgroundArray[i].element).css({
				width : sW + "px",
				height : sH + "px",
				top : imgY,
				left : imgX
			});
		} else {
			$(backgroundArray[i].element).css({
				"background-size" : sW + "px " + sH + "px"
			});
		}
	}
}