/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: 2676
*/
YUI.add("jsonp",function(C){var B=C.Lang.isFunction;function A(){this._init.apply(this,arguments);}A.prototype={_init:function(D,F){this.url=D;F=(B(F))?{on:{success:F}}:F||{};var E=F.on||{};if(!E.success){E.success=this._defaultCallback(D,F);}this._config=C.merge({context:this,args:[],format:this._format},F,{on:E});},_defaultCallback:function(){},send:function(){var F=C.Array(arguments,0,true),G=C.guid(),E=this._config,D;F.unshift(this.url,"YUI.Env.JSONP."+G);D=E.format.apply(this,F);if(!E.on.success){return this;}function H(I){return(B(I))?function(J){delete YUI.Env.JSONP[G];I.apply(E.context,[J].concat(E.args));}:null;}YUI.Env.JSONP[G]=H(E.on.success);C.Get.script(D,{onFailure:H(E.on.failure),onTimeout:H(E.on.timeout),timeout:E.timeout});return this;},_format:function(D,E){return D.replace(/\{callback\}/,E);}};C.JSONPRequest=A;C.jsonp=function(D,F){var E=new C.JSONPRequest(D,F);return E.send.apply(E,C.Array(arguments,2,true));};if(!YUI.Env.JSONP){YUI.Env.JSONP={};}},"3.2.0",{requires:["get","oop"]});