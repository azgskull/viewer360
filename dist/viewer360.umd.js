!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).viewer360=t()}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function t(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{s(i.next(e))}catch(e){a(e)}}function c(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))}function n(e,t){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var i=function(e){var t=e.params,n=e.elements;t.rotation>=t.imgs.length?t.rotation=0:t.rotation<0&&(t.rotation=t.imgs.length-1),n.$viewImage.src=t.imgs[Math.trunc(t.rotation)]},r=function(e){return t(void 0,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,fetch(e)];case 1:return[4,t.sent().blob()];case 2:return[2,t.sent()]}}))}))},a=function(e){var t=e.params,n=e.elements,i=e.x,r=e.y;(e.forcePan||t.loaded&&1!==t.scale&&t.rotationLockedInZoom)&&(t.pan.x+=i,t.pan.y+=r,function(e){var t=e.params,n=e.elements;t.pan.x>0&&(t.pan.x=0),t.pan.y>0&&(t.pan.y=0),t.currentWidth+t.pan.x<t.initialWidth&&(t.pan.x=t.initialWidth-t.currentWidth),t.currentHeight+t.pan.y<t.initialHeight&&(t.pan.y=t.initialHeight-t.currentHeight),n.$viewImage.style.top=t.pan.y+"px",n.$viewImage.style.left=t.pan.x+"px"}({params:t,elements:n}))},o=function(e){var t=e.params,n=e.elements,i=e.scale,r=e.zoomPosition,o=e.type;if(t.loaded){t.scale+=i,t.scale<1.025||"dblclick"===o&&t.scale>t.scaleMax?t.scale=1:t.scale>t.scaleMax&&(t.scale=t.scaleMax);var c=t.initialWidth*t.scale,s=t.initialHeight*t.scale,l=c-t.currentWidth,u=s-t.currentHeight,v=100*(r.x-n.$viewImage.getBoundingClientRect().left)/t.currentWidth,d=100*(r.y-n.$viewImage.getBoundingClientRect().top)/t.currentHeight;t.currentWidth=c,t.currentHeight=s,n.$viewImage.style.width=c+"px",n.$viewImage.style.height=s+"px",a({params:t,elements:n,x:-l/(100/v),y:-u/(100/d),forcePan:!0})}},c=function(e){var t=e.params,n=e.elements,r=e.r;!t.loaded||t.scale>1&&t.rotationLockedInZoom||(t.rotation-=r,i({params:t,elements:n}))},s={scaleMax:3,rotationLockedInZoom:!1},l=function(e){var t=e.params,n=e.elements;return{use:function(e){var i=function(e){var i=new Set,r=function(r){var a=r.clientX,o=r.clientY;i.add(r),r.preventDefault();var c=function(r){var c=r.clientX-a,s=r.clientY-o;a=r.clientX,o=r.clientY,1===i.size&&e({params:t,elements:n,x:c,y:s})};n.$view.addEventListener("pointermove",c),document.addEventListener("pointerup",(function(){i.delete(r),n.$view.removeEventListener("pointermove",c)}),{once:!0})};return n.$view.addEventListener("pointerdown",r,!0),function(){n.$view.removeEventListener("pointerdown",r,!0)}}(e);return function(){i()}}}},u=function(e){var t=e.params,n=e.elements;return{use:function(e){var i=function(e){var i=new Set,r=function(r){i.add(r),r.preventDefault();var a=function(a){var o="touch"===r.pointerType?15:10;1===i.size&&e({params:t,elements:n,r:a.movementX/o})};n.$view.addEventListener("pointermove",a),document.addEventListener("pointerup",(function(){i.delete(r),n.$view.removeEventListener("pointermove",a)}),{once:!0})};return n.$view.addEventListener("pointerdown",r,!0),function(){n.$view.removeEventListener("pointerdown",r,!0)}}(e),r=function(e){var i=function(i){if(!i.ctrlKey){i.preventDefault();var r=i.deltaX;r=0!==r?r/Math.abs(r):0,e({params:t,elements:n,r:-r})}};return n.$view.addEventListener("wheel",i,!0),function(){n.$view.removeEventListener("wheel",i,!0)}}(e);return function(){i(),r()}}}},v=function(e){var t=e.params,n=e.elements;return{use:function(e){var i=function(e){var i=function(i){i.preventDefault();var r=i.clientX,a=i.clientY,o=0;i.ctrlKey?o=.01*-i.deltaY:0===Math.abs(i.deltaX)&&(o=i.deltaY>1?.3:-.3),e({params:t,elements:n,scale:o,zoomPosition:{x:r,y:a}})};return n.$view.addEventListener("wheel",i,!0),function(){n.$view.removeEventListener("wheel",i,!0)}}(e),r=function(e){var i=function(i){i.preventDefault();var r=i.clientX,a=i.clientY;e({params:t,elements:n,scale:1,zoomPosition:{x:r,y:a},type:"dblclick"})};return n.$view.addEventListener("dblclick",i,!0),function(){n.$view.removeEventListener("dblclick",i,!0)}}(e),a=function(e){var i=function(i){var r;i.preventDefault();var a=function(i){if(2===i.touches.length){var a=i.touches[1].clientX-i.touches[0].clientX,o=Math.abs(a),c=void 0!==r?o-r:0;r=o,e({params:t,elements:n,scale:.009*c,zoomPosition:{x:(i.touches[1].clientX+i.touches[0].clientX)/2,y:(i.touches[1].clientY+i.touches[0].clientY)/2}})}};n.$view.addEventListener("touchmove",a),document.addEventListener("touchend",(function(){n.$view.removeEventListener("touchmove",a)}),{once:!0})};return n.$view.addEventListener("touchstart",i,!0),function(){n.$view.removeEventListener("touchstart",i,!0)}}(e);return function(){i(),r(),a()}}}};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".viewer360 {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.viewer360__scope {\r\n  width: 100%;\r\n  height: 100%;\r\n  user-select: none;\r\n\r\n  position: relative;\r\n  touch-action: none;\r\n}\r\n\r\n.viewer360__scope img {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-width: initial !important;\r\n  max-height: initial !important;\r\n  user-select: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  object-fit: contain;\r\n\r\n  touch-action: none;\r\n\r\n  transform: scale(0.2);\r\n  transition: 1s transform ease-in-out;\r\n}\r\n\r\n.viewer360__scope img[data-loaded] {\r\n  transform: scale(1);\r\n}\r\n");return function(d){var m=d.containerId,f=d.imgs,p=d.options,h=void 0===p?s:p,w=d.fetcher;w||(w=r);var g={$container:null,$viewImage:null,$view:null},y=e(e({scale:1,rotation:0,loaded:!1,imgs:[],initialWidth:0,currentWidth:0,initialHeight:0,currentHeight:0,pan:{x:0,y:0},zoomPosition:{x:0,y:0}},s),h);!function(e,t,n){t.$container=document.getElementById(n),t.$viewImage=document.createElement("img"),t.$view=document.createElement("div"),t.$container.innerHTML="",t.$viewImage.setAttribute("draggable","false"),t.$view.classList.add("viewer360__scope"),t.$view.append(t.$viewImage),t.$container.append(t.$view),e.initialHeight=t.$view.getBoundingClientRect().height,e.currentHeight=e.initialHeight,e.initialWidth=t.$view.getBoundingClientRect().width,e.currentWidth=e.initialWidth}(y,g,m),function(e){var r=e.params,a=e.elements,o=e.imgs,c=void 0===o?[]:o,s=e.fetcher;t(void 0,void 0,void 0,(function(){var e,t,o,l;return n(this,(function(n){switch(n.label){case 0:e=0,n.label=1;case 1:if(!(e<c.length))return[3,6];n.label=2;case 2:return n.trys.push([2,4,,5]),t=c[e],[4,s(t)];case 3:return o=n.sent(),l=URL.createObjectURL(o),r.imgs.push(l),r.rotation=e,i({params:r,elements:a}),[3,5];case 4:return n.sent(),[3,5];case 5:return e++,[3,1];case 6:return r.loaded=!0,a.$viewImage.dataset.loaded="true",[2]}}))}))}({params:y,elements:g,imgs:f,fetcher:w});var $=u({params:y,elements:g}).use(c),b=v({params:y,elements:g}).use(o),x=l({params:y,elements:g}).use(a);return function(){$(),b(),x(),g.$container.innerHTML=""}}}));
