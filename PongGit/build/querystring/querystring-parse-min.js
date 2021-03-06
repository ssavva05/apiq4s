/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: 2676
*/
YUI.add("querystring-parse",function(E){var B=E.namespace("QueryString"),D=function(F){return function G(L,N){var H,M,K,J,I;if(arguments.length!==2){L=L.split(F);return G(B.unescape(L.shift()),B.unescape(L.join(F)));}L=L.replace(/^\s+|\s+$/g,"");if(E.Lang.isString(N)){N=N.replace(/^\s+|\s+$/g,"");if(!isNaN(N)){M=+N;if(N===M.toString(10)){N=M;}}}H=/(.*)\[([^\]]*)\]$/.exec(L);if(!H){I={};if(L){I[L]=N;}return I;}J=H[2];K=H[1];if(!J){return G(K,[N]);}I={};I[J]=N;return G(K,I);};},C=function(G,F){return((!G)?F:(E.Lang.isArray(G))?G.concat(F):(!E.Lang.isObject(G)||!E.Lang.isObject(F))?[G].concat(F):A(G,F));},A=function(H,F){for(var G in F){if(G&&F.hasOwnProperty(G)){H[G]=C(H[G],F[G]);}}return H;};B.parse=function(G,H,F){return E.Array.reduce(E.Array.map(G.split(H||"&"),D(F||"=")),{},C);};B.unescape=function(F){return decodeURIComponent(F.replace(/\+/g," "));};},"3.2.0",{requires:["collection"]});