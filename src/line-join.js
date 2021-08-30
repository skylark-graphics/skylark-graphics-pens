define([
    "skylark-langx/langx",
	"./pens"
],function(langx,pens) {
	var LineJoin = ["round" , "bevel" , "miter"];

	langx.mixin(LineJoin , {
		"round" : 0, 
		"bevel" : 1, 
		"miter" : 2 
	});


	return pens.LineJoin = LineJoin;
	
});	
