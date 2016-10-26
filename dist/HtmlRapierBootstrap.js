jsns.amd("hr.bootstrap.affix-native",function(t){t(["require","exports","hr.bootstrap.utils"],function(t,e,i){"use strict";function s(t,e){if(e=e||{},this.element="object"==typeof t?t:document.querySelector(t),this.options={},this.options.target=e.target?"object"==typeof e.target?e.target:document.querySelector(e.target):null,this.options.offsetTop=e.offsetTop&&e.offsetTop?"function"===e.offsetTop?e.offsetTop():parseInt(e.offsetTop,0):0,this.options.offsetBottom=e.offsetBottom&&e.offsetBottom?"function"===e.offsetBottom?e.offsetBottom():parseInt(e.offsetBottom,0):null,this.element||this.options.target||this.options.offsetTop||this.options.offsetBottom){var s=this;this.processOffsetTop=function(){return null!==this.options.target?this.options.target.getBoundingClientRect().top+this.scrollOffset():null!==this.options.offsetTop?this.options.offsetTop:void 0},this.processOffsetBottom=function(){if(null!==this.options.offsetBottom){var t=this.getMaxScroll();return t-this.element.offsetHeight-this.options.offsetBottom}},this.checkPosition=function(){this.getPinOffsetTop=this.processOffsetTop,this.getPinOffsetBottom=this.processOffsetBottom},this.scrollOffset=function(){return window.pageYOffset||document.documentElement.scrollTop},this.pinTop=function(){/\baffix/.test(this.element.className)||(this.element.className+=" affix",this.affixed=!0)},this.unPinTop=function(){/\baffix/.test(this.element.className)&&(this.element.className=this.element.className.replace(" affix",""),this.affixed=!1)},this.pinBottom=function(){/\baffix-bottom/.test(this.element.className)||(this.element.className+=" affix-bottom",this.affixedBottom=!0)},this.unPinBottom=function(){/\baffix-bottom/.test(this.element.className)&&(this.element.className=this.element.className.replace(" affix-bottom",""),this.affixedBottom=!1)},this.updatePin=function(){this.affixed===!1&&parseInt(this.processOffsetTop(),0)-parseInt(this.scrollOffset(),0)<0?this.pinTop():this.affixed===!0&&parseInt(this.scrollOffset(),0)<=parseInt(this.getPinOffsetTop(),0)&&this.unPinTop(),this.affixedBottom===!1&&parseInt(this.processOffsetBottom(),0)-parseInt(this.scrollOffset(),0)<0?this.pinBottom():this.affixedBottom===!0&&parseInt(this.scrollOffset(),0)<=parseInt(this.getPinOffsetBottom(),0)&&this.unPinBottom()},this.updateAffix=function(){this.unPinTop(),this.unPinBottom(),this.checkPosition(),this.updatePin()},this.getMaxScroll=function(){return Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)},this.scrollEvent=function(){window.addEventListener("scroll",function(){s.updatePin()},!1)},this.resizeEvent=function(){var t=i.isIE&&i.isIE<10?500:50;window.addEventListener("resize",function(){setTimeout(function(){s.updateAffix()},t)},!1)},this.affixed=!1,this.affixedBottom=!1,this.getPinOffsetTop=0,this.getPinOffsetBottom=null,this.checkPosition(),this.updateAffix(),this.scrollEvent(),this.resizeEvent()}}function o(){var t=document.querySelectorAll('[data-spy="affix"]'),e=0,i=t.length;for(e;e<i;e++){var o=t[e],n={};n.offsetTop=o.getAttribute("data-offset-top"),n.offsetBottom=o.getAttribute("data-offset-bottom"),n.target=o.getAttribute("data-target"),!o||null===n.offsetTop&&null===n.offsetBottom&&null===n.target||new s(o,n)}}e.Affix=s,e.activate=o})}),jsns.amd("hr.bootstrap.alert-native",function(t){t(["require","exports"],function(t,e){"use strict";function i(t){this.btn="object"==typeof t?t:document.querySelector(t),this.alert=null,this.duration=150;var e=this;this.close=function(t){var i=t.target;e.btn="alert"===i.getAttribute("data-dismiss")&&"close"===i.className?i:i.parentNode,e.alert=e.btn.parentNode,null!==e.alert&&"alert"===e.btn.getAttribute("data-dismiss")&&/\bin/.test(e.alert.className)&&(e.alert.className=e.alert.className.replace(" in",""),setTimeout(function(){e.alert&&e.alert.parentNode.removeChild(e.alert)},e.duration))},document.addEventListener("click",this.close,!1)}function s(){var t=document.querySelectorAll('[data-dismiss="alert"]'),e=0,s=t.length;for(e;e<s;e++)new i(t[e])}e.Alert=i,e.activate=s})}),jsns.amd("hr.bootstrap.all",function(t){t(["require","exports","hr.bootstrap.affix-native","hr.bootstrap.alert-native","hr.bootstrap.button-native","hr.bootstrap.carousel-native","hr.bootstrap.collapse-native","hr.bootstrap.dropdown-native","hr.bootstrap.modal-native","hr.bootstrap.popover-native","hr.bootstrap.scrollspy-native","hr.bootstrap.tab-native","hr.bootstrap.tooltip-native"],function(t,e,i,s,o,n,a,r,l,c,d,h,u){"use strict";function p(){i.activate(),s.activate(),o.activate(),n.activate(),a.activate(),r.activate(),l.activate(),c.activate(),d.activate(),h.activate(),u.activate()}e.activate=p})}),jsns.amd("hr.bootstrap.button-native",function(t){t(["require","exports","hr.bootstrap.utils"],function(t,e,i){"use strict";function s(t,e){function s(t){n&&t.dispatchEvent(n)}this.btn="object"==typeof t?t:document.querySelector(t),this.option="string"==typeof e?e:null;var o=this,n="CustomEvent"in window&&window.dispatchEvent?new CustomEvent("bs.button.change"):null;this.setState=function(){"loading"===this.option&&(i.addClass(this.btn,"disabled"),this.btn.setAttribute("disabled","disabled")),this.btn.innerHTML=this.state},this.reset=function(){(/\bdisabled/.test(this.btn.className)||"disabled"===this.btn.getAttribute("disabled"))&&(i.removeClass(this.btn,"disabled"),this.btn.removeAttribute("disabled")),this.btn.innerHTML=this.btn.getAttribute("data-original-text")},this.toggle=function(t){var e=t.target.parentNode,n="LABEL"===t.target.tagName?t.target:"LABEL"===e.tagName?e:null;if(n){var a=this,r=a.querySelectorAll(".btn"),l=r.length,c=0,d=n.getElementsByTagName("INPUT")[0];if(d&&("checkbox"===d.type&&(d.checked?(i.removeClass(n,"active"),d.getAttribute("checked"),d.removeAttribute("checked"),d.checked=!1):(i.addClass(n,"active"),d.getAttribute("checked"),d.setAttribute("checked","checked"),d.checked=!0),s(d),s(o.btn)),"radio"===d.type&&!d.checked))for(i.addClass(n,"active"),d.setAttribute("checked","checked"),d.checked=!0,s(o.btn),s(d),c;c<l;c++){var h=r[c];if(h!==n&&/\bactive/.test(h.className)){var u=h.getElementsByTagName("INPUT")[0];i.removeClass(h,"active"),u.removeAttribute("checked"),u.checked=!1,s(u)}}}},/\bbtn/.test(this.btn.className)&&(this.option&&"reset"!==this.option?(this.state=this.btn.getAttribute("data-"+this.option+"-text")||null,!this.btn.getAttribute("data-original-text")&&this.btn.setAttribute("data-original-text",o.btn.innerHTML.replace(/^\s+|\s+$/g,"")),this.setState()):"reset"===this.option&&this.reset()),/\bbtn-group/.test(this.btn.className)&&this.btn.addEventListener("click",this.toggle,!1)}function o(){var t=document.querySelectorAll("[data-toggle=button]"),e=0,i=t.length;for(e;e<i;e++)new s(t[e]);var o=document.querySelectorAll("[data-toggle=buttons]"),n=0,a=o.length;for(n;n<a;n++)new s(o[n])}e.Button=s,e.activate=o})}),jsns.amd("hr.bootstrap.carousel-native",function(t){t(["require","exports","hr.bootstrap.utils"],function(t,e,i){"use strict";function s(t,e){e=e||{},this.carousel="object"==typeof t?t:document.querySelector(t),this.options={},this.options.keyboard="true"===e.keyboard,this.options.pause=e.pause?e.pause:"hover",this.duration=600,this.options.duration=i.isIE&&i.isIE<10?0:parseInt(e.duration)||this.duration;var s=this.carousel.querySelectorAll(".item"),o=s.length;this.controls=this.carousel.querySelectorAll(".carousel-control"),this.prev=this.controls[0],this.next=this.controls[1],this.slides=[];for(var n=0;n<o;n++)this.slides.push(s[n]);this.indicator=this.carousel.querySelector(".carousel-indicators"),this.indicators=this.carousel.querySelectorAll(".carousel-indicators li"),this.total=this.slides.length,this.timer=null,this.direction=null,this.index=0;var a=this;"false"===e.interval?this.options.interval=!1:this.options.interval=parseInt(e.interval)||5e3,this.cycle=function(t){this.direction="left",this.timer=setInterval(function(){a.index++,a.index==a.slides.length&&(a.index=0),a._slideTo(a.index,t)},this.options.interval)},this.pause=function(){var t=function(){a.options.interval===!1||/\bpaused/.test(a.carousel.className)||(a.carousel.className+=" paused",clearInterval(a.timer),a.timer=null)},e=function(){a.options.interval!==!1&&/\bpaused/.test(a.carousel.className)&&(a.cycle(),a.carousel.className=a.carousel.className.replace(/\bpaused/,""))};a.carousel.addEventListener("mouseenter",t,!1),a.carousel.addEventListener("mouseleave",e,!1),a.carousel.addEventListener("touchstart",t,!1),a.carousel.addEventListener("touchend",e,!1)},this._slideTo=function(t,e){var s=this._getActiveIndex(),o=this.direction,n="left"===o?"next":"prev",r=null,l=null;"CustomEvent"in window&&window.dispatchEvent&&(r=new CustomEvent("slid.bs.carousel"),l=new CustomEvent("slide.bs.carousel")),l&&this.carousel.dispatchEvent(l),this._removeEventListeners(),clearInterval(this.timer),this.timer=null,this._curentPage(this.indicators[t]),!/\bslide/.test(this.carousel.className)||i.isIE&&i.isIE<10?(this.slides[t].className+=" active",this.slides[t].offsetWidth,this.slides[s].className=this.slides[s].className.replace(" active",""),setTimeout(function(){a._addEventListeners(),a.options.interval===!1||/\bpaused/.test(a.carousel.className)||(clearInterval(a.timer),a.cycle()),r&&a.carousel.dispatchEvent(r)},this.options.duration+100)):(this.slides[t].className+=" "+n,this.slides[t].offsetWidth,this.slides[t].className+=" "+o,this.slides[s].className+=" "+o,setTimeout(function(){a._addEventListeners(),a.slides[t].className+=" active",a.slides[s].className=a.slides[s].className.replace(" active",""),a.slides[t].className=a.slides[t].className.replace(" "+n,""),a.slides[t].className=a.slides[t].className.replace(" "+o,""),a.slides[s].className=a.slides[s].className.replace(" "+o,""),a.options.interval===!1||/\bpaused/.test(a.carousel.className)||(clearInterval(a.timer),a.cycle()),r&&a.carousel.dispatchEvent(r)},this.options.duration+100))},this._addEventListeners=function(){this.next&&this.next.addEventListener("click",this.controlsHandler,!1),this.prev&&this.prev.addEventListener("click",this.controlsHandler,!1),this.indicator&&this.indicator.addEventListener("click",this.indicatorHandler,!1),this.options.keyboard===!0&&window.addEventListener("keydown",this.keyHandler,!1)},this._removeEventListeners=function(){this.next&&this.next.removeEventListener("click",this.controlsHandler,!1),this.prev&&this.prev.removeEventListener("click",this.controlsHandler,!1),this.indicator&&this.indicator.removeEventListener("click",this.indicatorHandler,!1),this.options.keyboard===!0&&window.removeEventListener("keydown",this.keyHandler,!1)},this._getActiveIndex=function(){return this.slides.indexOf(this.carousel.querySelector(".item.active"))},this._curentPage=function(t){for(var e=0;e<this.indicators.length;++e){var i=this.indicators[e];i.className=""}t&&(t.className="active")},this.indicatorHandler=function(t){t.preventDefault();var e=t.target,i=a._getActiveIndex();if(!e||/\bactive/.test(e.className)||!e.getAttribute("data-slide-to"))return!1;var s=parseInt(e.getAttribute("data-slide-to"),10);a.index=s,0==a.index?a.index=0:a.index==a.total-1&&(a.index=a.total-1),i<a.index||i===a.total-1&&0===a.index?a.direction="left":(i>a.index||0===i&&a.index===a.total-1)&&(a.direction="right"),a._slideTo(a.index,t)},this.controlsHandler=function(t){var e=t.currentTarget||t.srcElement;e===a.next?(a.index++,a.direction="left",a.index==a.total-1?a.index=a.total-1:a.index==a.total&&(a.index=0)):e===a.prev&&(a.index--,a.direction="right",0==a.index?a.index=0:a.index<0&&(a.index=a.total-1)),a._slideTo(a.index,t)},this.keyHandler=function(t){switch(t.which){case 39:t.preventDefault(),a.index++,a.direction="left",a.index==a.total-1?a.index=a.total-1:a.index==a.total&&(a.index=0);break;case 37:t.preventDefault(),a.index--,a.direction="right",0==a.index?a.index=0:a.index<0&&(a.index=a.total-1);break;default:return}a._slideTo(a.index,t)},this.options.interval!==!1&&this.cycle(),this.options&&"hover"===this.options.pause&&this.options.interval!==!1&&this.pause(),this._addEventListeners(),this.next&&this.next.addEventListener("click",function(t){t.preventDefault()},!1),this.prev&&this.prev.addEventListener("click",function(t){t.preventDefault()},!1)}function o(){var t=document.querySelectorAll('[data-ride="carousel"]'),e=0,i=t.length;for(e;e<i;e++){var o=t[e],n={};n.interval=o.getAttribute("data-interval")&&o.getAttribute("data-interval"),n.pause=o.getAttribute("data-pause")&&o.getAttribute("data-pause")||"hover",n.keyboard=o.getAttribute("data-keyboard")&&o.getAttribute("data-keyboard")||!1,n.duration=o.getAttribute("data-duration")&&o.getAttribute("data-duration")||!1,new s(o,n)}}e.Carousel=s,e.activate=o})}),jsns.amd("hr.bootstrap.collapse-native",function(t){t(["require","exports","hr.bootstrap.utils"],function(t,e,i){"use strict";function s(t,e){e=e||{},this.btn="object"==typeof t?t:document.querySelector(t),this.accordion=null,this.collapse=null,this.duration=300,this.options={},this.options.duration=i.isIE&&i.isIE<10?0:e.duration||this.duration;var s=this,o=function(t){var e=t&&(t.currentStyle||window.getComputedStyle(t)),i=/px/.test(e.borderTopWidth)?Math.round(e.borderTopWidth.replace("px","")):0,s=/px/.test(e.marginTop)?Math.round(e.marginTop.replace("px","")):0,o=/px/.test(e.marginBottom)?Math.round(e.marginBottom.replace("px","")):0,n=/em/.test(e.marginTop)?Math.round(e.marginTop.replace("em","")*parseInt(e.fontSize)):0,a=/em/.test(e.marginBottom)?Math.round(e.marginBottom.replace("em","")*parseInt(e.fontSize)):0;return t.clientHeight+parseInt(i)+parseInt(s)+parseInt(o)+parseInt(n)+parseInt(a)};this.toggle=function(t){t.preventDefault(),/\bin/.test(s.collapse.className)?s.close():s.open()},this.close=function(){this._close(this.collapse),i.addClass(this.btn,"collapsed")},this.open=function(){if(this._open(this.collapse),i.removeClass(this.btn,"collapsed"),null!==this.accordion){var t=this.accordion.querySelectorAll(".collapse.in"),e=t.length,s=0;for(s;s<e;s++)t[s]!==this.collapse&&this._close(t[s])}},this._open=function(t){this.removeEvent(),i.addClass(t,"in"),t.setAttribute("aria-expanded","true"),i.addClass(t,"collapsing"),setTimeout(function(){t.style.height=s.getMaxHeight(t)+"px",t.style.overflowY="hidden"},0),setTimeout(function(){t.style.height="",t.style.overflowY="",i.removeClass(t,"collapsing"),s.addEvent()},this.options.duration)},this._close=function(t){this.removeEvent(),t.setAttribute("aria-expanded","false"),t.style.height=this.getMaxHeight(t)+"px",setTimeout(function(){t.style.height="0px",t.style.overflowY="hidden",i.addClass(t,"collapsing")},0),setTimeout(function(){i.removeClass(t,"collapsing"),i.removeClass(t,"in"),t.style.overflowY="",t.style.height="",s.addEvent()},this.options.duration)},this.getMaxHeight=function(t){for(var e=0,i=0,s=t.children.length;i<s;i++)e+=o(t.children[i]);return e},this.removeEvent=function(){this.btn.removeEventListener("click",this.toggle,!1)},this.addEvent=function(){this.btn.addEventListener("click",this.toggle,!1)},this.getTarget=function(){var t=this.btn,e=t.href&&t.getAttribute("href").replace("#",""),i=t.getAttribute("data-target")&&t.getAttribute("data-target"),s=e||i&&/#/.test(i)&&i.replace("#",""),o=i&&"."===i.charAt(0)&&i,n=s&&document.getElementById(s)||o&&document.querySelector(o);return n},this.addEvent(),this.collapse=this.getTarget(),this.accordion=this.btn.getAttribute("data-parent")&&i.getClosest(this.btn,this.btn.getAttribute("data-parent"))}function o(){var t=document.querySelectorAll('[data-toggle="collapse"]'),e=0,i=t.length;for(e;e<i;e++){var o=t[e],n={};n.duration=o.getAttribute("data-duration"),new s(o,n)}}e.Collapse=s,e.activate=o})}),jsns.amd("hr.bootstrap.dropdown-native",function(t){t(["require","exports"],function(t,e){"use strict";function i(t){this.menu="object"==typeof t?t:document.querySelector(t);var e=this;this.handle=function(t){var i=t.target||t.currentTarget,s=[],o=e.menu.parentNode.getElementsByTagName("*");/\#$/g.test(i.href)&&t.preventDefault();for(var n=0,a=o.length||0;n<a;n++)a&&s.push(o[n]);if(i===e.menu||i.parentNode===e.menu||i.parentNode.parentNode===e.menu)e.toggle(t);else{if(s&&s.indexOf(i)>-1)return;e.close()}},this.toggle=function(t){/\bopen/.test(this.menu.parentNode.className)?(this.close(),document.removeEventListener("keydown",this.key,!1)):(this.menu.parentNode.className+=" open",this.menu.setAttribute("aria-expanded",!0),document.addEventListener("keydown",this.key,!1))},this.key=function(t){27==t.which&&e.close()},this.close=function(){e.menu.parentNode.className=e.menu.parentNode.className.replace(/\bopen/,""),e.menu.setAttribute("aria-expanded",!1)},this.menu.setAttribute("tabindex","0"),document.addEventListener("click",this.handle,!1)}function s(){var t=document.querySelectorAll("[data-toggle=dropdown]"),e=0,s=t.length;for(e;e<s;e++)new i(t[e])}e.Dropdown=i,e.activate=s})}),jsns.amd("hr.bootstrap.modal-native",function(t){t(["require","exports","hr.bootstrap.utils","hr.eventhandler","hr.toggles"],function(t,e,i,s,o){"use strict";function n(t,e){e=e||{},this.modal="object"==typeof t?t:document.querySelector(t),this.options={},this.options.backdrop="false"!==e.backdrop,this.options.keyboard="false"!==e.keyboard,this.options.content=e.content,this.duration=e.duration||300,this.options.duration=i.isIE&&i.isIE<10?0:this.duration,this.scrollbarWidth=0,this.dialog=this.modal.querySelector(".modal-dialog"),this.timer=0;var o=new s.EventHandler,n=new s.EventHandler;this.openEvent=o.modifier,this.closeEvent=n.modifier;var a=this,r=function(){var t=document.documentElement.getBoundingClientRect(),e=window.innerWidth||t.right-Math.abs(t.left);return e},l=function(){var t=window.getComputedStyle(document.body),e=parseInt(t.paddingRight,10);a.bodyIsOverflowing&&(document.body.style.paddingRight=e+a.scrollbarWidth+"px")},c=function(){document.body.style.paddingRight=""},d=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e},h=function(){a.bodyIsOverflowing=document.body.clientWidth<r(),a.modalIsOverflowing=a.modal.scrollHeight>document.documentElement.clientHeight,a.scrollbarWidth=d()};this.open=function(){var t=document.querySelector(".modal.in");t&&(clearTimeout(t.getAttribute("data-timer")),i.removeClass(t,"in"),setTimeout(function(){t.setAttribute("aria-hidden",!0),t.style.display=""},this.options.duration/2)),this.options.backdrop?this.createOverlay():this.overlay=null,this.overlay&&setTimeout(function(){i.addClass(a.overlay,"in")},0),clearTimeout(a.modal.getAttribute("data-timer")),this.timer=setTimeout(function(){a.modal.style.display="block",h(),a.adjustDialog(),l(),a.resize(),a.dismiss(),a.keydown(),i.addClass(document.body,"modal-open"),i.addClass(a.modal,"in"),a.modal.setAttribute("aria-hidden",!1),o.fire(this)},this.options.duration/2),this.modal.setAttribute("data-timer",this.timer)},this.close=function(){this.overlay&&i.removeClass(this.overlay,"in"),i.removeClass(this.modal,"in"),this.modal.setAttribute("aria-hidden",!0),clearTimeout(this.modal.getAttribute("data-timer")),this.timer=setTimeout(function(){i.removeClass(document.body,"modal-open"),a.resize(),a.resetAdjustments(),c(),a.dismiss(),a.keydown(),a.modal.style.display="",n.fire(this)},this.options.duration/2),this.modal.setAttribute("data-timer",this.timer),setTimeout(function(){document.querySelector(".modal.in")||a.removeOverlay()},this.options.duration)},this.content=function(t){return this.modal.querySelector(".modal-content").innerHTML=t},this.createOverlay=function(){var t=document.createElement("div"),e=document.querySelector(".modal-backdrop");t.setAttribute("class","modal-backdrop fade"),e?this.overlay=e:(this.overlay=t,document.body.appendChild(t))},this.removeOverlay=function(){var t=document.querySelector(".modal-backdrop");null!==t&&void 0!==t&&document.body.removeChild(t)},this.keydown=function(){function t(t){a.options.keyboard&&27==t.which&&a.close()}/\bin/.test(this.modal.className)?document.removeEventListener("keydown",t,!1):document.addEventListener("keydown",t,!1)},this.trigger=function(){var t=document.querySelectorAll('[data-toggle="modal"]'),e=t.length,i=0;for(i;i<e;i++)t[i].addEventListener("click",function(t){t.preventDefault();var e=t.target,i=e.getAttribute("data-target")&&e.getAttribute("data-target").replace("#","")||e.getAttribute("href")&&e.getAttribute("href").replace("#","");document.getElementById(i)===a.modal&&a.open()})},this._resize=function(){var t=this.overlay||document.querySelector(".modal-backdrop"),e={w:document.documentElement.clientWidth+"px",h:document.documentElement.clientHeight+"px"};null!==t&&/\bin/.test(t.className)&&(t.style.height=e.h,t.style.width=e.w)},this.oneResize=function(){function t(){a._resize(),a.handleUpdate(),window.removeEventListener("resize",t,!1)}window.addEventListener("resize",t,!1)},this.resize=function(){/\bin/.test(this.modal.className)?window.removeEventListener("resize",this.oneResize,!1):window.addEventListener("resize",this.oneResize,!1)},this.dismiss=function(){function t(t){"modal"!==t.target.parentNode.getAttribute("data-dismiss")&&"modal"!==t.target.getAttribute("data-dismiss")&&t.target!==a.modal||(t.preventDefault(),a.close())}/\bin/.test(this.modal.className)?this.modal.removeEventListener("click",t,!1):this.modal.addEventListener("click",t,!1)},this.handleUpdate=function(){this.adjustDialog()},this.adjustDialog=function(){this.modal.style.paddingLeft=!this.bodyIsOverflowing&&this.modalIsOverflowing?this.scrollbarWidth+"px":"",this.modal.style.paddingRight=this.bodyIsOverflowing&&!this.modalIsOverflowing?this.scrollbarWidth+"px":""},this.resetAdjustments=function(){this.modal.style.paddingLeft="",this.modal.style.paddingRight=""},this.trigger(),this.options.content&&void 0!==this.options.content&&this.content(this.options.content)}function a(t,e){function i(){return r.open(),e}function o(){return r.close(),e}function a(t){return e}var r=(new s.EventHandler,new s.EventHandler,new n(t));this.onEvent=r.openEvent,this.offEvent=r.closeEvent,this.on=i,this.off=o,this.applyState=a}function r(){var t=document.querySelectorAll(".modal"),e=t.length,i=0;for(i;i<e;i++){var s=t[i],r={};r.keyboard=s.getAttribute("data-keyboard"),r.backdrop=s.getAttribute("data-backdrop"),r.duration=s.getAttribute("data-duration"),new n(s,r)}o.addTogglePlugin(function(t,e,i){return t.classList.contains("modal")&&(i=new a(t,i)),i})}e.Modal=n,e.activate=r})}),jsns.amd("hr.bootstrap.popover-native",function(t){t(["require","exports","hr.bootstrap.utils"],function(t,e,i){"use strict";function s(t,e){if(e=e||{},this.link="object"==typeof t?t:document.querySelector(t),this.title=this.link.getAttribute("data-title")||null,this.content=this.link.getAttribute("data-content")||null,this.popover=null,this.options={},this.options.template=e.template?e.template:null,this.options.trigger=e.trigger?e.trigger:"hover",this.options.animation=e.animation&&"true"!==e.animation?e.animation:"true",this.options.placement=e.placement?e.placement:"top",this.options.delay=parseInt(e.delay)||100,this.options.dismiss=!(!e.dismiss||"true"!==e.dismiss),this.duration=150,this.options.duration=i.isIE&&i.isIE<10?0:e.duration||this.duration,this.options.container=document.body,this.content||this.options.template){this.timer=0;var s=this,o="onmouseleave"in this.link?["mouseenter","mouseleave"]:["mouseover","mouseout"];this.toggle=function(t){null===s.popover?s.open():s.close()},this.open=function(t){clearTimeout(s.link.getAttribute("data-timer")),s.timer=setTimeout(function(){null===s.popover&&(s.createPopover(),s.stylePopover(),s.updatePopover())},s.options.duration),s.link.setAttribute("data-timer",s.timer)},this.dismiss=function(t){s.popover&&t.target===s.popover.querySelector(".close")&&s.close()},this.close=function(t){clearTimeout(s.link.getAttribute("data-timer")),s.timer=setTimeout(function(){s.popover&&null!==s.popover&&/\bin/.test(s.popover.className)&&(s.popover.className=s.popover.className.replace(" in",""),setTimeout(function(){s.removePopover()},s.options.duration))},s.options.delay+s.options.duration),s.link.setAttribute("data-timer",s.timer)},this.removePopover=function(){this.popover&&this.options.container.removeChild(this.popover),this.popover=null,this.timer=null},this.createPopover=function(){if(this.popover=document.createElement("div"),null!==this.content&&null===this.options.template){this.popover.setAttribute("role","tooltip");var t=document.createElement("div");if(t.setAttribute("class","arrow"),null!==this.title){var e=document.createElement("h3");e.setAttribute("class","popover-title"),this.options.dismiss?e.innerHTML=this.title+'<button type="button" class="close">×</button>':e.innerHTML=this.title,this.popover.appendChild(e)}var i=document.createElement("div");i.setAttribute("class","popover-content"),this.popover.appendChild(t),this.popover.appendChild(i),this.options.dismiss&&null===this.title?i.innerHTML=this.content+'<button type="button" class="close">×</button>':i.innerHTML=this.content}else{var s=document.createElement("div");s.innerHTML=this.options.template,this.popover.innerHTML=s.firstChild.innerHTML}this.options.container.appendChild(this.popover),this.popover.style.display="block"},this.stylePopover=function(t){var e=this.link.getBoundingClientRect(),i=t||this.options.placement,s="true"===this.options.animation?"fade":"";this.popover.setAttribute("class","popover "+i+" "+s);var o={w:e.right-e.left,h:e.bottom-e.top},n={w:this.popover.offsetWidth,h:this.popover.offsetHeight},a=this.getScroll().y,r=this.getScroll().x;/top/.test(i)?(this.popover.style.top=e.top+a-n.h+"px",this.popover.style.left=e.left+r-n.w/2+o.w/2+"px"):/bottom/.test(i)?(this.popover.style.top=e.top+a+o.h+"px",this.popover.style.left=e.left+r-n.w/2+o.w/2+"px"):/left/.test(i)?(this.popover.style.top=e.top+a-n.h/2+o.h/2+"px",this.popover.style.left=e.left+r-n.w+"px"):/right/.test(i)&&(this.popover.style.top=e.top+a-n.h/2+o.h/2+"px",this.popover.style.left=e.left+r+o.w+"px")},this.updatePopover=function(){var t=null;t=i.isElementInViewport(this.popover)?this.options.placement:this.updatePlacement(),this.stylePopover(t),this.popover.className+=" in"},this.updatePlacement=function(){var t=this.options.placement;return/top/.test(t)?"bottom":/bottom/.test(t)?"top":/left/.test(t)?"right":/right/.test(t)?"left":void 0},this.getScroll=function(){return{y:window.pageYOffset||document.documentElement.scrollTop,x:window.pageXOffset||document.documentElement.scrollLeft}},"hover"===this.options.trigger?(this.link.addEventListener(o[0],this.open,!1),this.options.dismiss||this.link.addEventListener(o[1],this.close,!1)):"click"===this.options.trigger?(this.link.addEventListener("click",this.toggle,!1),this.options.dismiss||this.link.addEventListener("blur",this.close,!1)):"focus"===this.options.trigger&&(this.link.addEventListener("focus",this.toggle,!1),this.options.dismiss||this.link.addEventListener("blur",this.close,!1)),this.options.dismiss&&document.addEventListener("click",this.dismiss,!1),i.isIE&&i.isIE<9||window.addEventListener("resize",this.close,!1)}}function o(){var t=document.querySelectorAll("[data-toggle=popover]"),e=0,i=t.length;for(e;e<i;e++){var o=t[e],n={};n.trigger=o.getAttribute("data-trigger"),n.animation=o.getAttribute("data-animation"),n.duration=o.getAttribute("data-duration"),n.placement=o.getAttribute("data-placement"),n.dismiss=o.getAttribute("data-dismiss"),n.delay=o.getAttribute("data-delay"),new s(o,n)}}e.Popover=s,e.activate=o})}),jsns.amd("hr.bootstrap.scrollspy-native",function(t){t(["require","exports","hr.bootstrap.utils"],function(t,e,i){"use strict";function s(t,e,s){s=s||{},this.element="object"==typeof t?t:document.querySelector(t),this.options={},this.options.target=s.target?"object"==typeof s.target?s.target:document.querySelector(s.target):null,this.items=this.options.target&&this.options.target.getElementsByTagName("A"),this.item=e,this.parent=this.item.parentNode,this.parentParent=this.parent.parentNode.parentNode,this.tg=this.item.href&&document.getElementById(this.item.getAttribute("href").replace("#","")),this.active=!1,this.topEdge=0,this.bottomEdge=0;var o=this;this.element.offsetHeight<this.element.scrollHeight?this.scrollTarget=this.element:this.scrollTarget=window,this.options.target&&(this.topLimit=function(){return this.scrollTarget===window?this.tg.getBoundingClientRect().top+this.scrollOffset()-5:this.tg.offsetTop},this.bottomLimit=function(){return this.topLimit()+this.tg.clientHeight},this.checkEdges=function(){this.topEdge=this.topLimit(),this.bottomEdge=this.bottomLimit()},this.scrollOffset=function(){return this.scrollTarget===window?window.pageYOffset||document.documentElement.scrollTop:this.element.scrollTop},this.activate=function(){this.parent&&"LI"===this.parent.tagName&&!/\bactive/.test(this.parent.className)&&(i.addClass(this.parent,"active"),this.parentParent&&"LI"===this.parentParent.tagName&&/\bdropdown/.test(this.parentParent.className)&&!/\bactive/.test(this.parentParent.className)&&i.addClass(this.parentParent,"active"),this.active=!0)},this.deactivate=function(){this.parent&&"LI"===this.parent.tagName&&/\bactive/.test(this.parent.className)&&(i.removeClass(this.parent,"active"),this.parentParent&&"LI"===this.parentParent.tagName&&/\bdropdown/.test(this.parentParent.className)&&/\bactive/.test(this.parentParent.className)&&i.removeClass(this.parentParent,"active"),this.active=!1)},this.toggle=function(){this.active===!1&&this.bottomEdge>this.scrollOffset()&&this.scrollOffset()>=this.topEdge?this.activate():this.active===!0&&this.bottomEdge<=this.scrollOffset()&&this.scrollOffset()<this.topEdge&&this.deactivate()},this.refresh=function(){this.deactivate(),this.checkEdges(),this.toggle()},this.scrollEvent=function(){function t(){o.refresh()}this.scrollTarget.addEventListener("scroll",t,!1)},this.resizeEvent=function(){function t(){o.refresh()}window.addEventListener("resize",t,!1)},this.scrollHeight=function(){return this.scrollTarget===window?Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight):this.element.scrollHeight},this.item.getAttribute("href")&&this.item.getAttribute("href").indexOf("#")>-1&&(this.checkEdges(),this.refresh(),this.scrollEvent(),i.isIE&&i.isIE<9||this.resizeEvent()))}function o(){var t=document.querySelectorAll('[data-spy="scroll"]'),e=0,i=t.length;for(e;e<i;e++){var o=t[e],n={};if(n.target=o.getAttribute("data-target")||null,null!==n.target){var a="object"===n.target?n.target:document.querySelector(n.target),r=a.querySelectorAll("a"),l=0,c=r.length;for(l;l<c;l++){var d=r[l];d.href&&"#"!==d.getAttribute("href")&&new s(o,d,n)}}}}e.ScrollSpy=s,e.activate=o})}),jsns.amd("hr.bootstrap.tab-native",function(t){t(["require","exports","hr.bootstrap.utils"],function(t,e,i){"use strict";function s(t,e){e=e||{},this.tab="object"==typeof t?t:document.querySelector(t),this.tabs=this.tab.parentNode.parentNode,this.dropdown=this.tabs.querySelector(".dropdown"),/\bdropdown-menu/.test(this.tabs.className)&&(this.dropdown=this.tabs.parentNode,this.tabs=this.tabs.parentNode.parentNode),this.options=e,this.duration=150,this.options.duration=i.isIE&&i.isIE<10?0:e.duration||this.duration;var s=this;this.handle=function(t){t=t||window.e,t.preventDefault();var e=t.target,o=document.getElementById(e.getAttribute("href").replace("#","")),n=s.getActiveTab(),a=s.getActiveContent();/\bactive/.test(e.parentNode.className)||(i.removeClass(n,"active"),i.addClass(e.parentNode,"active"),s.dropdown&&(/\bdropdown-menu/.test(s.tab.parentNode.parentNode.className)?/\bactive/.test(s.dropdown.className)||i.addClass(s.dropdown,"active"):/\bactive/.test(s.dropdown.className)&&i.removeClass(s.dropdown,"active")),i.removeClass(a,"in"),setTimeout(function(){
i.removeClass(a,"active"),i.addClass(o,"active")},s.options.duration),setTimeout(function(){i.addClass(o,"in")},2*s.options.duration))},this.getActiveTab=function(){var t=this.tabs.querySelectorAll(".active");return 1!==t.length||/\bdropdown/.test(t[0].className)?t.length>1?t[t.length-1]:void 0:t[0]},this.getActiveContent=function(){var t=this.getActiveTab().getElementsByTagName("A")[0].getAttribute("href").replace("#","");return t&&document.getElementById(t)},this.tab.addEventListener("click",this.handle,!1)}function o(){var t=document.querySelectorAll("[data-toggle='tab'], [data-toggle='pill']"),e=t.length,i=0;for(i;i<e;i++){var o=t[i],n={};n.duration=o.getAttribute("data-duration")&&o.getAttribute("data-duration")||!1,new s(o,n)}}e.Tab=s,e.activate=o})}),jsns.amd("hr.bootstrap.tooltip-native",function(t){t(["require","exports","hr.bootstrap.utils"],function(t,e,i){"use strict";function s(t,e){if(e=e||{},this.link="object"==typeof t?t:document.querySelector(t),this.title=this.link.getAttribute("title")||this.link.getAttribute("data-original-title"),this.tooltip=null,this.options={},this.options.animation=e.animation&&"fade"!==e.animation?e.animation:"fade",this.options.placement=e.placement?e.placement:"top",this.options.delay=parseInt(e.delay)||100,this.duration=150,this.options.duration=i.isIE&&i.isIE<10?0:e.duration||this.duration,this.options.container=e.container||document.body,this.title){this.timer=0;var s=this,o="onmouseleave"in this.link?["mouseenter","mouseleave"]:["mouseover","mouseout"];this.open=function(t){clearTimeout(s.link.getAttribute("data-timer")),s.timer=setTimeout(function(){null===s.tooltip&&(s.createToolTip(),s.styleTooltip(),s.updateTooltip())},s.options.duration),s.link.setAttribute("data-timer",s.timer)},this.close=function(t){clearTimeout(s.link.getAttribute("data-timer")),s.timer=setTimeout(function(){s.tooltip&&null!==s.tooltip&&(s.tooltip.className=s.tooltip.className.replace(" in",""),setTimeout(function(){s.removeToolTip()},s.options.duration))},s.options.delay+s.options.duration),s.link.setAttribute("data-timer",s.timer)},this.removeToolTip=function(){this.tooltip&&this.options.container.removeChild(this.tooltip),this.tooltip=null},this.createToolTip=function(){this.tooltip=document.createElement("div"),this.tooltip.setAttribute("role","tooltip");var t=document.createElement("div");t.setAttribute("class","tooltip-arrow");var e=document.createElement("div");e.setAttribute("class","tooltip-inner"),this.tooltip.appendChild(t),this.tooltip.appendChild(e),e.innerHTML=this.title,this.options.container.appendChild(this.tooltip)},this.styleTooltip=function(t){var e=this.link.getBoundingClientRect(),i=t||this.options.placement;this.tooltip.setAttribute("class","tooltip "+i+" "+this.options.animation);var s={w:e.right-e.left,h:e.bottom-e.top},o={w:this.tooltip.offsetWidth,h:this.tooltip.offsetHeight},n=this.getScroll().y,a=this.getScroll().x;/top/.test(i)?(this.tooltip.style.top=e.top+n-o.h+"px",this.tooltip.style.left=e.left+a-o.w/2+s.w/2+"px"):/bottom/.test(i)?(this.tooltip.style.top=e.top+n+s.h+"px",this.tooltip.style.left=e.left+a-o.w/2+s.w/2+"px"):/left/.test(i)?(this.tooltip.style.top=e.top+n-o.h/2+s.h/2+"px",this.tooltip.style.left=e.left+a-o.w+"px"):/right/.test(i)&&(this.tooltip.style.top=e.top+n-o.h/2+s.h/2+"px",this.tooltip.style.left=e.left+a+s.w+"px")},this.updateTooltip=function(){var t=null;t=i.isElementInViewport(this.tooltip)?this.options.placement:this.updatePlacement(),this.styleTooltip(t),this.tooltip.className+=" in"},this.updatePlacement=function(){var t=this.options.placement;return/top/.test(t)?"bottom":/bottom/.test(t)?"top":/left/.test(t)?"right":/right/.test(t)?"left":void 0},this.getScroll=function(){return{y:window.pageYOffset||document.documentElement.scrollTop,x:window.pageXOffset||document.documentElement.scrollLeft}},this.link.addEventListener(o[0],this.open,!1),this.link.addEventListener(o[1],this.close,!1),this.link.setAttribute("data-original-title",this.title),this.link.removeAttribute("title")}}function o(){var t=document.querySelectorAll("[data-toggle=tooltip]"),e=0,i=t.length;for(e;e<i;e++){var o=t[e],n={};n.animation=o.getAttribute("data-animation"),n.placement=o.getAttribute("data-placement"),n.duration=o.getAttribute("data-duration"),n.delay=o.getAttribute("data-delay"),new s(o,n)}}e.Tooltip=s,e.activate=o})}),jsns.amd("hr.bootstrap.utils",function(t){t(["require","exports"],function(t,e){"use strict";function i(t,e){t.classList?t.classList.add(e):(t.className+=" "+e,t.offsetWidth)}function s(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}function o(t,e){for(var i=e.charAt(0);t&&t!==document;t=t.parentNode){if("."===i&&void 0!==document.querySelector(e))return t;if("#"===i&&t.id===e.substr(1))return t}return!1}function n(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}e.addClass=i,e.removeClass=s,e.isIE=null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)&&parseFloat(RegExp.$1),e.getClosest=o,e.isElementInViewport=n})});
//# sourceMappingURL=HtmlRapierBootstrap.js.map
