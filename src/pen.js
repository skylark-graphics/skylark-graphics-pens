define([
    "skylark-langx/langx",
	"skylark-graphics-brushes/brush",
	"./pens",
	"./line-gap",
	"./line-join",
],function(langx,Brush,pens,LineGap,LineJoin) {

	var Pen = langx.klass({
		"klassName"	:	"Pen",

		"lineWidth" : {
			type   : Number,	
            "get" : function() {
                return this._.lineWidth;
            },
            "set" : function(v) {
                this._.lineWidth = v;
            }  
   		},

		"lineCap" : {
			type  : LineGap,
            "get" : function() {
                return this._.lineCap;
            },
            "set" : function(v) {
                this._.lineCap = v;
            }  
		},

		"lineJoin" : {
            "get" : function() {
                return this._.lineJoin;
            },
            "set" : function(v) {
                this._.lineJoin = v;
            }  
		},
		

		"miterLimit" : {
			type   : Number,			
            "get" : function() {
                return this._.miterLimit;
            },
            "set" : function(v) {
                this._.miterLimit = v;
            }  
		},

		"lineDash" : {
			type   : Number,			
            "get" : function() {
                return this._.lineDash;
            },
            "set" : function(v) {
                this._.lineDash = v;
            }  
		},

		"lineDashOffset" : {
			type   : Number,			
            "get" : function() {
                return this._.lineDashOffset;
            },
            "set" : function(v) {
                this._.lineDashOffset = v;
            }  
		},

		"strokeStyle" : {
			"type"   : Brush,			
            "get" : function() {
                return this._.strokeStyle;
            },
            "set" : function(v) {
                this._.strokeStyle = v;
            }  
		},

		"_construct" : function(params) {
			this._ = langx.colone(params);
		}

	});
	

	return pens.Pen = Pen;
});	
