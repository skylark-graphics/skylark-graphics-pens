/**
 * skylark-graphics-pens - The skylark pen class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-graphics-pens/pens',[
	"skylark-langx/skylark"
],function(skylark){
	return skylark.attach("graphics.pens",{});
});
define('skylark-graphics-pens/line-gap',[
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

define('skylark-graphics-pens/line-join',[
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

define('skylark-graphics-pens/pen',[
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

define('skylark-graphics-pens/main',[
	"./pens",
	"./pen"
],function(pens){
	return pens;
});
define('skylark-graphics-pens', ['skylark-graphics-pens/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-graphics-pens.js.map
