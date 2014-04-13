var VertCent = {};

VertCent.center = function(){
	var elementsToVertCent = $(".vertCent");
	for(var i = 0; i < elementsToVertCent.length; i++){
		var element = $(elementsToVertCent[i]);
		var parent = element.parent()
		var elementH = element.height();
		var parentH = parent.outerHeight();
		var paddingTop = parseInt(parent.css("paddingTop"));
		var offset = 0;
		if(parent.children().length > 1){ // more than one element inside
			var children = parent.children();
			for(var j = 0; j < children.length; j++){
				if(children[j] != element[0]) offset += $(children[j]).outerHeight();
			}
		}
		if(elementH < parentH){
			var gap = ((parentH - offset - paddingTop) - elementH)/2;
			$(elementsToVertCent[i]).css("marginTop", gap + "px");
		}
	}
};

$(function(){
	VertCent.center();
});
