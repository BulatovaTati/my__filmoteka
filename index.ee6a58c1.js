function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequiree4c3;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},e.parcelRequiree4c3=i),i("16IEh"),i("7qAvB"),i("aAM9C");var a=i("37uNk"),s=i("asUcn"),r=i("kbfff"),l=i("cXfU0");const c=new(0,(x=i("5SzY7")).default);a.refs.search_form.addEventListener("submit",(async function(t){t.preventDefault();const e=t.currentTarget.searchQuery.value.trim();if(c.enable(),console.log(e),!e)return a.refs.input.value="",a.refs.input_error.classList.add("visually-show-error"),a.refs.input_error.textContent="Please enter a movie name to search",setTimeout((()=>{a.refs.input_error.classList.remove("visually-show-error"),a.refs.input_error.textContent=""}),3e3),void c.disable();try{const t=(await(0,s.fetchMovieSearcher)(e)).results;if(0===t.length)return a.refs.input.value="",a.refs.input_error.textContent="Please enter a movie name to search",a.refs.input_error.classList.add("visually-show-error"),setTimeout((()=>{a.refs.input_error.textContent="",a.refs.input_error.classList.remove("visually-show-error")}),3e3),void c.disable();(0,l.addToStorage)("input-value",e),c.disable(),(0,r.renderCollection)(t),a.refs.input.value=""}catch(t){console.log(t)}})),(0,s.getGenres)().then((t=>{(0,l.addToStorage)("allGenres",t.genres)})).catch(console.log);s=i("asUcn");function u({poster_path:t,title:e,genres:n,popularity:o,vote_count:i,vote_average:a,original_title:s,overview:r}){return`<button class="btn close-btn" type="button">\n    <svg class="close-btn__icon" width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n      <path d="M23.733 10.304l-1.504-1.504-5.963 5.963-5.963-5.963-1.504 1.504 5.963 5.963-5.963 5.963 1.504 1.504 5.963-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.963z"></path>\n    </svg>\n  </button>\n  <div class="modal-movie__thumb">\n    <img\n      class="modal-movie__img"\n      src="${"https://image.tmdb.org/t/p/w500/"+t}"\n      alt="${s+" poster"}"\n    />\n  </div>\n  <div class="modal-movie__info-container">\n    <h2 class="modal-movie__title">${e}</h2>\n    <table class="modal-movie__table">\n      <tbody class="modal-movie__cell1">\n        <tr>\n          <td class="modal-movie__cell modal-movie__cell--gray-text">\n            Vote / Votes\n          </td>\n          <td class="modal-movie__cell modal-movie__cell--gray-text">\n            <span class="modal-movie__span modal-movie__span--vote">${a}</span> /\n            <span class="modal-movie__span modal-movie__span--votes">${i}</span>\n          </td>\n        </tr>\n        <tr>\n          <td class="modal-movie__cell modal-movie__cell--gray-text">\n            Popularity\n          </td>\n          <td class="modal-movie__cell">${o}</td>\n        </tr>\n        <tr>\n          <td class="modal-movie__cell modal-movie__cell--gray-text">\n            Original Title\n          </td>\n          <td class="modal-movie__cell">${s}</td>\n        </tr>\n        <tr>\n          <td\n            class="modal-movie__cell modal-movie__cell--last-row modal-movie__cell--gray-text"\n          >\n            Genre\n          </td>\n          <td class="modal-movie__cell modal-movie__cell--last-row">${n.map((t=>t.name)).join(", ")}</td>\n        </tr>\n      </tbody>\n    </table>\n    <h3 class="modal-movie__subtitle">About</h3>\n    <p class="modal-movie__text">${r}</p>\n    <ul class="modal-movie__btn-list">\n      <li class="modal-movie__btn-item">\n        <button\n          class="button button--modal-btn"\n          type="button" data-action="watch"\n        >\n          add to Watched\n        </button>\n      </li>\n      <li class="modal-movie__btn-item">\n        <button class="button button--modal-btn" type="button" data-action="queue">\n          add to queue\n        </button>\n      </li>\n    </ul>\n  </div>`}function p(t){const e=t,n=t,o=document.querySelector('[data-action="watch"]'),i=document.querySelector('[data-action="queue"]');console.log(o),o.addEventListener("click",(function(t){if(e){let t=JSON.parse(localStorage.getItem("watch"))||[];t.includes(e)?(o.classList.remove("button--accent-btn"),o.textContent="ADD TO WATCHED",t=t.filter((t=>t!==e))):(o.classList.add("button--accent-btn"),o.textContent="REMOVE FROM WATCHED",i.classList.remove("button--accent-btn"),i.textContent="ADD TO QUEUE",t.push(e)),localStorage.setItem("watch",JSON.stringify(t))}console.log(localStorage.getItem("watch").length)})),i.addEventListener("click",(function(){if(n){let t=JSON.parse(localStorage.getItem("queue"))||[];t.includes(n)?(i.classList.remove("button--accent-btn"),i.textContent="ADD TO QUEUE",t=t.filter((t=>t!==n))):(i.classList.add("button--accent-btn"),i.textContent="REMOVE FROM QUEUE",o.classList.remove("button--accent-btn"),o.textContent="ADD TO WATCHED",t.push(n)),localStorage.setItem("queue",JSON.stringify(t))}})),localStorage.getItem("watch")&&localStorage.getItem("watch").length>2&&(o.classList.add("button--accent-btn"),o.textContent="REMOVE FROM WATCHED",localStorage.removeItem("queue"),console.log(localStorage.getItem("watch").length)),localStorage.getItem("queue")&&localStorage.getItem("queue").length>2&&(i.classList.add("button--accent-btn"),i.textContent="REMOVE FROM QUEUE",localStorage.removeItem("watch"))}const f=document.querySelector(".cards__list"),d=document.querySelector(".modal-movie"),h=document.querySelector(".backdrop");let g={};function m(t){t.preventDefault();const e=t.target.classList.contains("close-btn__icon")||t.target.parentNode.classList.contains("close-btn__icon");("Escape"===t.code||e||t.target===h)&&(_(),d.innerHTML="",h.removeEventListener("click",m),window.removeEventListener("keydown",m),d.removeEventListener("click",m))}function _(){h.classList.toggle("is-hidden"),d.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}f.addEventListener("click",(function(t){t.preventDefault();const e=t.target.closest("li"),n=Number(e.getAttribute("data-id"));(0,s.fetchMovieForId)(n).then((t=>{g=t,_(),d.innerHTML=u(t),h.addEventListener("click",m),window.addEventListener("keydown",m),d.addEventListener("click",m)})).then((()=>p(g))).catch((t=>console.log(t)))})),i("kbfff"),i("dZ9QN");s=i("asUcn"),r=i("kbfff");(0,s.getPopularData)(1).then((t=>{(0,r.renderCollection)(t.results)})).catch(console.log),i("4LZXW"),i("37uNk");var v,b={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,v=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,o,i,a,s=Object.prototype.hasOwnProperty;for(i=1,a=arguments.length;i<a;i+=1)for(o in n=arguments[i])s.call(n,o)&&(t[o]=n[o]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var o=n(2),i=n(17),a=n(6);t.exports=function(t,e,n){o(t)?i(t,e,n):a(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var o;for(o in n=n||null,t)if(t.hasOwnProperty(o)&&!1===e.call(n,t[o],o,t))break}},function(t,e,n){var o=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&o(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){var o=n(2);t.exports=function(t,e,n){var i,a;if(n=n||0,!o(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(a=e.length,i=n;n>=0&&i<a;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){var o=n(29),i=n(30),a=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=a(t)?t(e):o(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,o=Array.prototype.slice;return t.bind?t.bind.apply(t,o.call(arguments,1)):(n=o.call(arguments,2),function(){return t.apply(e,n.length?n.concat(o.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var o=n(13),i=n(7),a=n(0),s=n(1),r=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=i({init:function(t,e){this._options=a({},c,e),this._currentPage=0,this._view=new r(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,o="prev"===t;return this._options.centerAlign?o?e-1:e+n:o?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),o=this._getPageIndex(t),i=this._getPageIndex(n),a=this._getEdge(t);return e.leftPageNumber=a.left,e.rightPageNumber=a.right,e.prevMore=o>1,e.nextMore=o<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,o,i=this._getLastPage(),a=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(o=Math.floor(a/2),(n=(e=Math.max(t-o,1))+a-1)>i&&(e=Math.max(i-a+1,1),n=i)):(e=(s-1)*a+1,n=s*a,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});o.mixin(u),t.exports=u},function(t,e,n){var o=n(0),i=n(14),a=n(4),s=n(16),r=n(2),l=n(5),c=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){o(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var o=this._safeEvent(t);this._memorizeContext(n),o.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var o=this;a(t)?(t=t.split(u),c(t,(function(t){o._bindEvent(t,e,n)}))):s(t)&&(n=e,c(t,(function(t,e){o.on(e,t,n)})))},p.prototype.once=function(t,e,n){var o=this;if(s(t))return n=e,void c(t,(function(t,e){o.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),o.off(t,i,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,o=0;if(r(t))for(n=t.length;o<n;o+=1)!0===e(t[o])&&(t.splice(o,1),n-=1,o-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var o=t===n.handler;return o&&e._forgetContext(n.context),o}},p.prototype._matchContext=function(t){var e=this;return function(n){var o=t===n.context;return o&&e._forgetContext(n.context),o}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(o){var i=t===o.handler,a=e===o.context,s=i&&a;return s&&n._forgetContext(o.context),s}},p.prototype._offByEventName=function(t,e){var n=this,o=l(e),i=n._matchHandler(e);t=t.split(u),c(t,(function(t){var e=n._safeEvent(t);o?n._spliceMatches(e,i):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,o=this;this._indexOfContext(t)<0?c(t,(function(t,e){o.off(e,t)})):a(e)?(n=this._matchContext(t),o._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){o._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){o._spliceMatches(t,n)})))},p.prototype.off=function(t,e){a(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,o,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),o=0;e[o];){if(!1===(i=e[o]).handler.apply(i.context,n))return!1;o+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var o=n(1),i=n(15);t.exports=function(t){return!o(t)&&!i(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var o=0,i=t.length;for(n=n||null;o<i&&!1!==e.call(n,t[o],o,t);o+=1);}},function(t,e,n){var o=n(19);t.exports=function(t,e){var n=o(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var o=n(3),i=n(7),a=n(21),s=n(22),r=n(24),l=n(25),c=n(0),u=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],m=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){o(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){o(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){o(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,o=t.leftPageNumber,i=t.rightPageNumber;for(n=o;n<=i;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==o||t.prevMore||l(e,this._firstItemClassName),n!==i||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,o,i=a(e);r(e),(o=this._getButtonType(i))||(n=this._getPageNumber(i)),t(o,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return o(n,(function(n,o){return!f.isContained(t,n)||(e=o,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,o=this._enabledPageElements.length;n<o;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],o(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var o=n(4),i=n(3),a=n(23);function s(t,e,n,o){function s(e){n.call(o||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,o){var s=a(t,e),r=!1;i(s,(function(t){return t.handler!==n||(r=!0,!1)})),r||s.push({handler:n,wrappedHandler:o})}(t,e,n,s)}t.exports=function(t,e,n,a){o(e)?i(e.split(/\s+/g),(function(e){s(t,e,n,a)})):i(e,(function(e,o){s(t,o,e,n)}))}},function(t,e,n){var o="_feEventKey";t.exports=function(t,e){var n,i=t[o];return i||(i=t[o]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var o=n(3),i=n(8),a=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),r=t.classList,l=[];r?o(n,(function(e){t.classList.add(e)})):((e=a(t))&&(n=[].concat(e.split(/\s+/),n)),o(n,(function(t){i(t,l)<0&&l.push(t)})),s(t,l))}},function(t,e,n){var o=n(1);t.exports=function(t){return t&&t.className?o(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var o=n(2),i=n(1);t.exports=function(t,e){e=(e=o(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var o=n(8),i=n(3),a=n(2),s=n(4),r=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var o=function(t,e){var n=[t],o=[],a=0,s=0;return i(e,(function(t,i){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),o.push(e.slice(s,i)),s=i+1)})),o.push(e.slice(s)),{exps:n,sourcesInsideIf:o}}(t,e),a=!1,s="";return i(o.exps,(function(t,e){return(a=x(t,n))&&(s=y(o.sourcesInsideIf[e],n)),!a})),s},each:function(t,e,n){var o=x(t,n),s=a(o)?"@index":"@key",l={},c="";return i(o,(function(t,o){l[s]=o,l["@this"]=t,r(n,l),c+=y(e.slice(),n)})),c},with:function(t,e,n){var i=o("as",t),a=t[i+1],s=x(t.slice(0,i),n),l={};return l[a]=s,y(e,r(n,l))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,o,i=[],a=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)o=n.index,i.push(t.slice(a,o)),a=o+n[0].length,n=e.exec(t);return i.push(t.slice(a)),i};function v(t,e){var n,o=e[t];return"true"===t?o=!0:"false"===t?o=!1:d.test(t)?o=t.replace(h,""):c.test(t)?o=v((n=t.split(u))[0],e)[v(n[1],e)]:p.test(t)?o=v((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(o=parseFloat(t)),o}function b(t,e,n){for(var o,i,a,r,l=m[t],c=1,u=2,p=e[u];c&&s(p);)0===p.indexOf(t)?c+=1:0===p.indexOf("/"+t)&&(c-=1,o=u),p=e[u+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(i=0,a=o,(r=e.splice(i+1,a-i)).pop(),r),n),e}function x(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var o=[];return i(e,(function(t){o.push(v(t,n))})),t.apply(null,o)}(n,t.slice(1),e):n}function y(t,e){for(var n,o,i,a=1,r=t[a];s(r);)o=(n=r.split(" "))[0],m[o]?(i=b(o,t.splice(a,t.length-a),e),t=t.concat(i)):t[a]=x(n,e),r=t[a+=2];return t.join("")}t.exports=function(t,e){return y(_(t,l),e)}},function(t,e,n){var o=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(a);(o(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var o=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return o(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},b=v();var x=i("5SzY7");s=i("asUcn");const y={totalPages:1e3,totalItems:100,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',disabledMoveButton:'<span class="visually-hidden tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',moveButton:({type:t})=>{let e="";return"first"===t&&(e='<a href="#" class=" tui-page-btn tui-first custom-class-first"><span class="tui-ico-first">1</span></a>'),"prev"===t&&(e='<a href="#" class="arrow tui-page-btn tui-prev custom-class-prev tui-first-child"><span class="material-icons-outlined">arrow_back</span></a>'),"next"===t&&(e='<a href="#" class="arrow tui-page-btn tui-next custom-class-next"><span class="material-icons-outlined">arrow_forward</span></a>'),"last"===t&&(e='<a href="#" class=" tui-page-btn tui-last custom-class-last"><span class="tui-ico-last">'+y.totalPages+"</span></a>"),e}}};r=i("kbfff");const E=new(t(b))("pagination",y),P=new(0,x.default);E.on("afterMove",(function(t){const e=t.page,n=localStorage.getItem("input-value");if(P.enable(),n){const t=(0,s.fetchMovieSearcher)(n,e);(0,r.renderCollection)(t.results)}else{const t=(0,s.getPopularData)(e);(0,r.renderCollection)(t.results)}setTimeout((()=>{window.scrollTo({top:240,behavior:"smooth"}),P.disable()}),400)}));
//# sourceMappingURL=index.ee6a58c1.js.map
