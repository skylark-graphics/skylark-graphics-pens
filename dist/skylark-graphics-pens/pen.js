/**
 * skylark-graphics-pens - The skylark pen class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-graphics-brushes/brush","./pens","./line-gap","./line-join"],function(t,e,n,i,s){var r=t.klass({klassName:"Pen",lineWidth:{type:Number,get:function(){return this._.lineWidth},set:function(t){this._.lineWidth=t}},lineCap:{type:i,get:function(){return this._.lineCap},set:function(t){this._.lineCap=t}},lineJoin:{get:function(){return this._.lineJoin},set:function(t){this._.lineJoin=t}},miterLimit:{type:Number,get:function(){return this._.miterLimit},set:function(t){this._.miterLimit=t}},lineDash:{type:Number,get:function(){return this._.lineDash},set:function(t){this._.lineDash=t}},lineDashOffset:{type:Number,get:function(){return this._.lineDashOffset},set:function(t){this._.lineDashOffset=t}},strokeStyle:{type:e,get:function(){return this._.strokeStyle},set:function(t){this._.strokeStyle=t}},_construct:function(e){this._=t.colone(e)}});return n.Pen=r});
//# sourceMappingURL=sourcemaps/pen.js.map
