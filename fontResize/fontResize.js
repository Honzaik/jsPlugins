var FontResize = {
	minimalFontSize: 10,
};

FontResize.resize = function(){
	var elements = $(".fontResize");
	for(var i = 0; i < elements.length; i++){
		var element = $(elements[i]);
		parentElement = $(element).parent();
		if(element.outerWidth() > parentElement.outerWidth()){
			var parentWidth = parentElement.outerWidth();
			var newFontSize = FontResize.minimalFontSize;
			element.css("fontSize", newFontSize + "px");
			while(element.width() + 50 < parentWidth){
				newFontSize += 1;
				element.css("fontSize", newFontSize + "px");
			}
			if(newFontSize == FontResize.minimalFontSize) element.css("wordWrap", "break-word");
		}
	}
};

$(function(){
	FontResize.resize();
});

$(window).on("resize", function(){
	FontResize.resize();
});