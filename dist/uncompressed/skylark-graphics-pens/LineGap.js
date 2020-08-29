define([
    "skylark-langx/langx",
	"./pens"
],function(langx,pens) {

	var LineGap = ["butt" ,	"round" ,"square"];

	langx.mixin(LineGap , {
		"butt" : 0,
		"round" : 1,
		"square" : 2
	});
	
	return pens.LineGap = LineGap;
});	
