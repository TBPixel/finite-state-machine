module.exports=function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(e,!0).forEach((function(r){u(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(e).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function u(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}e.r(r);var a=function(t){var r=i({},{history:[],states:{}},{states:t});return{states:t,current:function(){return r.history[r.history.length-1]},history:function(){return n(r.history)},transitionTo:function t(e,n){return function(t,r,e){var n=Object.keys(t.states).find((function(e){return t.states[e]===r}));if(!n)throw new Error("failed to transition to an unknown state!");var o={name:n,payload:e,state:null,timestamp:new Date},u=t.history.push(o)-1,a=r(t,e);return a&&t.history.splice(u,1,i({},o,{state:a})),e}(i({},r,{transitionTo:t}),e,n)},undo:function(){r=i({},r,{},function(t){var r=t.history;if(r.length<=0)return{history:r};var e=r.length-1;return r.push(i({},r[e-1],{timestamp:new Date})),{history:r}}(r))},redo:function(){r=i({},r,{},function(t){var r=t.history;if(r.length<=0)return{history:r};var e=r.length-1;return r.push(i({},r[e],{timestamp:new Date})),{history:r}}(r))}}};r.default=a}]);