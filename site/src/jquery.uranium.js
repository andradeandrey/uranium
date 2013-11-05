(function(b){function q(c,e,g){var f={},j="[data-ur-set='"+e+"']",l="data-ur-"+e+"-component";b(c).find("["+l+"]").addBack("["+l+"]").each(function(){if(!b(this).data("urCompInit")){var e=b(this).attr("data-ur-id")?b(this):b(this).closest(j);if(e[0]&&!e.data("urInit")){b(this).data("urCompInit",!0);var c=e.attr("data-ur-id");c||(c=H(),e.attr("data-ur-id",c));f[c]=f[c]||{};f[c]._id=c;if(e.is(j))f[c].set=e[0];g?g(f[c],this):(e=b(this).attr(l),f[c][e]=f[c][e]||[],f[c][e].push(this))}}});return f}var F=
b.fn.jquery.split(".");F[0]==1&&F[1]<4&&(b=b.extend(function(c,e){return new b.fn.init(c||[],e)},b));b.fn.on||b.fn.extend({on:function(b,e,g,f){g==null&&f==null?(f=e,e=null):f==null&&typeof e!="string"&&(f=g,g=e,e=null);return e?this.delegate(e,b,g,f):this.bind(b,g,f)},off:function(b,e,g){g==null&&(g=e,e=null);return e?this.undelegate(e,b,g):this.unbind(b,g)}});if(!b.fn.addBack)b.fn.addBack=b.fn.andSelf;if(!b.error)b.error=function(b){throw Error(b);};var H=function(){var b=0;return function(){return++b}}(),
n={},A="ontouchstart"in window,I=(A?"touchstart":"mousedown")+".ur",J=(A?"touchmove":"mousemove")+".ur",K=(A?"touchend":"mouseup")+".ur";n.toggler=function(c){c=q(c,"toggler");b.each(c,function(e,g){g.button||b.error("no button found for toggler with id: "+e);g.content||b.error("no content found for toggler with id: "+e);var f=b(g.button).attr("data-ur-state")||"disabled";b(g.button).add(g.content).attr("data-ur-state",f);b(g.button).on("click.ur.toggler",function(){var f=b(g.button).attr("data-ur-state")==
"enabled",e=f?"disabled":"enabled";b(g.button).add(g.content).attr("data-ur-state",e);f||b(g.drawer).attr("data-ur-state",e)});b(g.drawer).on("webkitTransitionEnd.ur.toggler transitionend.ur.toggler",function(){b(this).attr("data-ur-state",b(g.button).attr("data-ur-state"))});b(g.set).data("urInit",!0)})};n.tabs=function(c){var e=q(c,"tabs",function(e,f){var c=b(f).attr("data-ur-tab-id");e.tabs=e.tabs||{};e.tabs[c]=e.tabs[c]||{};var l=b(f).attr("data-ur-tabs-component");e.tabs[c][l]=e.tabs[c][l]||
[];e.tabs[c][l].push(f)});b.each(e,function(c,f){f.closeable=b(f.set).attr("data-ur-closeable")=="true";b.each(f.tabs,function(){var f=b(this.button).attr("data-ur-state")||"disabled";b(this.button).add(this.content).attr("data-ur-state",f)});b.each(f.tabs,function(c,g){b(g.button).on("click.ur.tabs",function(){var c=b(this).attr("data-ur-state")=="enabled";b.each(f.tabs,function(){b(this.button).add(this.content).attr("data-ur-state","disabled")});(!c||!e.closeable)&&b(g.button).add(g.content).attr("data-ur-state",
"enabled")})});b(f.set).data("urInit",!0)})};n.inputClear=function(c){c=q(c,"input-clear");b.each(c,function(e,c){var f=b("<div class='data-ur-input-clear-ex'></div>").hide();b(c.set).append(f);f.on(A?"touchstart.ur.inputclear":"click.ur.inputclear",function(){j[0].value="";j[0].focus()}).on("touchend.ur.inputclear",function(){j[0].blur()});var j=b(c.set).find("input");j.on("focus.ur.inputclear",function(){j[0].value!=""&&f.show()}).on("keydown.ur.inputclear",function(){f.show()}).on("blur.ur.inputclear",
function(){setTimeout(function(){f.hide()},150)});b(c.set).data("urInit",!0)})};n.geoCode=function(c){c=q(c,"reverse-geocode",function(e,c){e.elements=e.elements||{};e.elements[b(c).attr("data-ur-reverse-geocode-component")]=c});b.each(c,function(e,c){function f(f,e,c){var g=0,j=null,l=null,r=null;switch(b(f).attr("data-ur-reverse-geocode-component")){case "rg-city":l="locality";break;case "rg-street":l="street_number";break;case "rg-zip":l="postal_code";break;case "rg-state":l="administrative_area_level_1";
break;case "rg-country":l="country"}for(var r=e[0],d=null,a=r.address_components.length,i=0;i<a;i++)for(var h=r.address_components[i].types.length,k=0;k<h;k++)if(d=r.address_components[i].types[k],l==d){switch(d){case "street_number":g=i;j=i+1;break;case "locality":g=i;break;case "postal_code":g=i;break;case "administrative_area_level_1":g=i;break;case "country":g=i}break}if(c==="input")f.value=j===null?e[0].address_components[g].long_name:e[0].address_components[g].long_name+" "+e[0].address_components[j].long_name;
else if(c==="select"){e=e[0].address_components[g];c=0;for(g=f.length;c<g;c++)if(f[c].value===e.long_name||f[c].value.toUpperCase()===e.short_name)f.selectedIndex=c}}var j=this.set;b(j).attr("data-ur-callback");var l=b(j).attr("data-ur-error-callback"),n,E,G;this.setupCallbacks=function(){G=this;var f=b(this.elements).filter("[data-ur-reverse-geocode-component='rg-button']");if(f.length>0)b(f).on("click.ur.inputclear",function(b){return function(){b.geocodeInit()}}(this));else console.warn("no button for triggering reverse geocoding present"),
this.geocodeInit()};this.geoSuccess=function(b){b={lat:b.coords.latitude,lng:b.coords.longitude};this.codeLatLng(b.lat,b.lng)};this.geoError=function(b){console.error("Ur geolocation error -- Error Getting Your Coordinates!");switch(b.code){case b.TIMEOUT:console.error("Ur geolocation error -- Timeout");break;case b.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");break;case b.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case b.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}l!==
void 0&&eval(l)};this.geoDenied=function(){console.error("Ur geolocation error -- User Denied Geolocation")};this.codeLatLng=function(b,e){var c=new google.maps.LatLng(b,e),g=this;n.geocode({latLng:c},function(b,e){if(e==google.maps.GeocoderStatus.OK)if(b[1]){E=b;var c=G.elements;for(elm in c)c[elm].localName==="input"?f(c[elm],E,"input"):c[elm].localName==="select"&&f(c[elm],E,"select");g.callback!==void 0&&eval(g.callback);return b}else console.error("Geocoder failed due to: "+e)})};this.geocodeInit=
function(){navigator.geolocation&&(n=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(b){return function(c){b.geoSuccess(c)}}(this),function(b){return function(c){b.geoError(c)}}(this),this.geoDenied))};UrGeocode=function(b){return function(){b.setupCallbacks()}}(this);j=document.createElement("script");j.type="text/javascript";j.src="https://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";b("head").append(j);b(c.set).data("urInit",!0)})};n.zoom=function(c){function e(b,
c){return Math.max(Math.min(c[0],b),c[1])}function g(c){function g(){d.canvasWidth=d.canvasWidth||d.container.offsetWidth;d.canvasHeight=d.canvasHeight||d.container.offsetHeight;d.width=d.width||parseInt(a.attr("width"))||parseInt(a.css("width"))||d.img.width;d.height=d.height||parseInt(a.attr("height"))||parseInt(a.css("height"))||d.img.height;d.bigWidth=parseInt(a.attr("data-ur-width"))||d.img.naturalWidth;d.bigHeight=parseInt(a.attr("data-ur-height"))||d.img.naturalHeight;if(a.attr("data-ur-width")&&
a.attr("data-ur-height")||a.attr("src")==a.attr("data-ur-src"))d.prescale=!0;d.ratio=d.bigWidth/d.width;k=(d.canvasWidth-d.bigWidth)/2;v=(d.canvasHeight-d.bigHeight)/2}function j(a){if(a.target==d.img){z=!1;o=a.pageX;m=a.pageY;C=!0;var b=a.originalEvent.touches;if(b)o=b[0].pageX,m=b[0].pageY;b=d.img.style;window.WebKitCSSMatrix?(b=new WebKitCSSMatrix(b.webkitTransform),x=b.m41,y=b.m42):(b=b.MozTransform||b.msTransform||b.transform||"translate(0, 0)",b=b.replace(/.*?\(|\)/,"").split(","),x=parseInt(b[0]),
y=parseInt(b[1]));a.preventDefault();a.stopPropagation()}}function t(a){if(C&&a.target==d.img){a.preventDefault();a.stopPropagation();var b=a.pageX,c=a.pageY;if(a=a.originalEvent.touches)b=a[0].pageX,c=a[0].pageY;b-=o;c-=m;if(Math.abs(b)>5||Math.abs(c)>5)z=!0;b=e(x+b,[-k,k]);c=e(y+c,[-v,v]);r(b,c,d.ratio)}}function q(a){z||d.zoomOut();a.preventDefault();a.stopPropagation();C=!1;z=!0}function u(){if(d.state=="enabled-in")a.css({webkitTransitionDelay:"",MozTransitionDelay:"",OTransitionDelay:"",transitionDelay:""}),
d.img.src=a.attr("data-ur-src"),f.indexOf(d.img.getAttribute("data-ur-src"))==-1&&setTimeout(function(){f.indexOf(d.img.getAttribute("data-ur-src"))==-1&&i.attr("data-ur-state","enabled")},16),d.state="enabled",d.container.setAttribute("data-ur-state",d.state),b(d.container).on(I+".zoom",j).on(J+".zoom",t).on(K+".zoom",q);else if(d.state=="enabled-out")d.state="disabled",d.container.setAttribute("data-ur-state",d.state),b(d.container).off(I+".zoom",j).off(J+".zoom",t).off(K+".zoom",q)}function B(a,
b){h.attr("data-ur-state","enabled");d.state="enabled-in";d.container.setAttribute("data-ur-state",d.state);r(a?a:0,b?b:0,d.ratio)}function r(b,d,c){var e="";b!=void 0&&(e=n+b+"px, "+d+"px"+E);c!=void 0&&(e+=l?" scale("+c+")":" scale3d("+c+", "+c+", 1)");return a.css({webkitTransform:e,MozTransform:e,msTransform:e,transform:e})}var d=this;this.container=c.set;this.img=c.img[0];this.prescale=!1;this.canvasWidth=this.canvasHeight=this.bigWidth=this.bigHeight=this.width=this.height=0;this.ratio=1;this.state=
"disabled";this.button=c.button;this.idler=c.loading;var a=b(this.img),i=b(this.idler),h=b(this.button),k,v,s,p,x=0,y=0,o=0,m=0,C=!1,z=!0;f.push(a.attr("src"));this.zoomIn=function(b){if(d.state=="disabled"){if(!d.width)g(),d.img.style.width=d.width+"px",d.img.style.height=d.height+"px";var c=b.pageX,f=b.pageY;if(b.touches)c=b.touches[0].pageX,f=b.touches[0].pageY;s=b.offsetX;p=b.offsetY;if(s==void 0||p==void 0)b=d.img.getBoundingClientRect(),s=c-b.left,p=f-b.top;d.prescale?(c=e(d.bigWidth/2-d.ratio*
s,[-k,k]),f=e(d.bigHeight/2-d.ratio*p,[-v,v]),B(c,f)):(d.state="enabled-in",d.img.src=a.attr("data-ur-src"),setTimeout(function(){d.prescale||i.attr("data-ur-state","enabled")},0))}};this.zoomOut=function(){if(d.state=="enabled")h.attr("data-ur-state","disabled"),d.state="enabled-out",d.container.setAttribute("data-ur-state",d.state),r(0,0,1)};if(d.container.getAttribute("data-ur-touch")!="disabled")b(d.container).on("click.ur.zoom",d.zoomIn);a.on("load.ur.zoom",function(){a.attr("src")==a.attr("data-ur-src")&&
f.push(a.attr("src"));i.attr("data-ur-state","disabled");if(!d.prescale&&d.state=="enabled-in"){d.prescale=!0;g();var b=e(d.bigWidth/2-d.ratio*s,[-k,k]),c=e(d.bigHeight/2-d.ratio*p,[-v,v]);a.css({webkitTransitionDelay:"0.3s",MozTransitionDelay:"0.3s",OTransitionDelay:"0.3s",transitionDelay:"0.3s"});B(b,c)}});this.zoom=function(){if(d.state=="disabled"){if(!d.width)g(),d.img.style.width=d.width+"px",d.img.style.height=d.height+"px";d.prescale?B(0,0):(d.state="enabled-in",d.img.src=a.attr("data-ur-src"),
setTimeout(function(){f.indexOf(d.img.getAttribute("data-ur-src"))==-1&&i.attr("data-ur-state","enabled")},0))}else d.zoomOut()};b(d.button).on(A?"touchstart.ur.zoom":"click.ur.zoom",d.zoom);a.on("webkitTransitionEnd.ur.zoom transitionend.ur.zoom",u);this.reset=function(){d.prescale=!1;d.width=d.height=0;a.css({width:"",height:""});r();d.state="enabled-out";u();i.attr("data-ur-state","disabled");h.attr("data-ur-state","disabled")}}var c=q(c,"zoom"),f=[],j=/Android [12]|Opera/.test(navigator.userAgent),
l=j,n=j?"translate(":"translate3d(",E=j?")":", 0)";b.each(c,function(c,e){Uranium.zoom[c]=new g(this);b(e.set).data("urInit",!0)})};n.carousel=function(c){function e(b){b.preventDefault();b.stopPropagation()}function g(c){function g(){a.options.translate3d=a.options.translate3d&&d();a.options.translate3d||(L="translate(",M=")");h.each(function(c,d){if(b(d).attr("data-ur-state")=="active")return a.itemIndex=c,!1});l();q(a.options.center?a.itemIndex+a.options.cloneLength:a.itemIndex);n();a.update();
b(a.scroller).on("dragstart.ur.carousel",function(){return!1});a.options.touch&&(b(a.scroller).on(I+".carousel",G).on(J+".carousel",F).on(K+".carousel",H),h.each(function(c,d){d.onclick&&b(d).data("urClick",d.onclick);d.onclick=function(c){if(a.flag.click||!c.clientX&&!c.clientY){var d=b(this).data("urClick");d&&d.call(this,c)}else e(c),c.stopImmediatePropagation()}}));a.button.prev.on("click.ur.carousel",function(){t(1)});a.button.next.on("click.ur.carousel",function(){t(-1)});if("onorientationchange"in
window)b(window).on("orientationchange.ur.carousel",a.update);else b(window).on("resize.ur.carousel",function(){w!=i.outerWidth()&&(a.update(),setTimeout(a.update,100))});h.find("img").addBack("img").on("load.ur.carousel",a.update);a.autoscrollStart();i.triggerHandler("load.ur.carousel")}function l(){if(a.options.infinite){if(a.options.cloneLength==0)if(a.options.fill)a.options.cloneLength=a.options.center?a.options.fill-1:a.options.fill;else if(a.options.center){for(var c=[0,0],d=w/2+h[o].offsetWidth/
2,e=o;d>0;e=(e-1+a.count)%a.count)d-=h[e].offsetWidth,c[0]++;d=w/2+h[0].offsetWidth/2;for(e=0;d>0;e=(e+1)%a.count)d-=h[e].offsetWidth,c[1]++;a.options.cloneLength=Math.max(c[0],c[1])}else{d=w;for(e=0;d>0;)d-=h[e].offsetWidth,a.options.cloneLength++,e=(e+1)%h.length}i.attr("data-ur-clones",a.options.cloneLength);c=document.createDocumentFragment();for(e=0;e<a.options.cloneLength;e++){var f=e%a.count,f=h.eq(f).clone(!0).attr("data-ur-clone",f).attr("data-ur-state","inactive");c.appendChild(f[0])}h.parent().append(c);
if(a.options.center){c=document.createDocumentFragment();for(e=d=a.count-a.options.cloneLength%a.count;e<d+a.options.cloneLength;e++)f=e%a.count,f=h.eq(f).clone(!0).attr("data-ur-clone",f).attr("data-ur-state","inactive"),c.appendChild(f[0]);h.parent().prepend(c)}h=b(a.scroller).find("[data-ur-carousel-component='item']");o=h.length-1}else a.options.cloneLength=0,i.attr("data-ur-clones",0)}function n(){if(a.dots){var c=b(a.dots).find("[data-ur-carousel-component='dot']");if(c.length!=a.count){c.remove();
for(var c=b("<div data-ur-carousel-component='dot'>"),d=document.createDocumentFragment(),e=0;e<a.count;e++){var f=c.clone().attr("data-ur-state",e==a.itemIndex?"active":"inactive");d.appendChild(f[0])}b(a.dots).append(d)}}}function q(c){if(c!==void 0){a.itemIndex=c;if(a.itemIndex<0)a.itemIndex=0;else if(a.itemIndex>o)a.itemIndex=o;c=a.itemIndex;a.options.infinite&&a.options.center&&(c=a.itemIndex-a.options.cloneLength);c%=a.count;var d=b(a.counter).attr("data-ur-template")||"{{index}} of {{count}}",
d=d.replace("{{index}}",c+1).replace("{{count}}",a.count);b(a.counter).html(d);h.attr("data-ur-state","inactive");h.eq(a.itemIndex).attr("data-ur-state","active");b(a.dots).find("[data-ur-carousel-component='dot']").attr("data-ur-state","inactive").eq(c).attr("data-ur-state","active");a.options.infinite?b([a.button.prev,a.button.next]).attr("data-ur-state","enabled"):(b(a.button.prev).attr("data-ur-state",a.itemIndex==0?"disabled":"enabled"),b(a.button.next).attr("data-ur-state",a.itemIndex==a.count-
Math.max(a.options.fill,1)?"disabled":"enabled"))}}function G(b){a.options.verticalScroll||e(b);a.autoscrollStop();a.flag.touched=!0;a.flag.lock=null;a.flag.click=!0;s=v=k=B(b);D=a.translate}function F(b){if(a.flag.touched){v=k;k=B(b);if(Math.abs(s.y-k.y)+Math.abs(s.x-k.x)>0)a.flag.click=!1;if(A&&a.options.verticalScroll){var c=Math.abs((s.y-k.y)/(s.x-k.x));if(a.flag.lock){if(a.flag.lock=="y")return}else if(c>1.2){a.flag.lock="y";return}else if(c<=1.2)a.flag.lock="x";else return}e(b);if(k!==null){var b=
D+(k.x-s.x),d=-b;a.options.center&&(d+=w/2);h.each(function(b,c){var e=c.offsetLeft;if(e+c.offsetWidth>d)return a.itemIndex=b,p=(d-e)/c.offsetWidth,a.options.center&&(p-=0.5),!1});a.options.infinite&&(a.options.center?a.itemIndex<a.options.cloneLength?(D-=m,b-=m,a.itemIndex+=a.count):a.itemIndex>=a.count+a.options.cloneLength&&(D+=m,b+=m,a.itemIndex-=a.count):p<0?(D-=m,b-=m,a.itemIndex+=a.count,c=h[a.itemIndex],p=(-b-c.offsetLeft)/c.offsetWidth):a.itemIndex>=a.count&&(c=h[a.count].offsetLeft-h[0].offsetLeft,
D+=c,b+=c,a.itemIndex-=a.count));u(b)}}}function H(b){if(a.flag.touched){if(!a.flag.click||a.flag.lock)e(b);else if(b.target.tagName=="AREA")location.href=b.target.href;a.flag.touched=!1;b=k.x-v.x;a.options.center?b<0&&p>0?t(-1):b>0&&p<0?t(1):t(0):t(b<0?-1:0)}}function t(b){a.autoscrollStop();clearTimeout(z);var c=a.itemIndex-b;a.options.infinite||(c=a.options.fill>0?r(c,[0,a.count-a.options.fill]):r(c,[0,o]));if(a.options.infinite){var d=a.translate;if(a.options.center)if(c<a.options.cloneLength)u(d-
m),c+=a.count,a.itemIndex=c+b;else{if(c>=a.count+a.options.cloneLength)u(d+m),c-=a.count,a.itemIndex=c+b}else if(c<0)u(d-m),c+=a.count,a.itemIndex=c+b;else if(c>a.count)u(d+m),c-=a.count,a.itemIndex=c+b}x=h[c];i.triggerHandler("slidestart",{index:c});setTimeout(function(){P();q(c)},0)}function P(){function b(){if(!a.flag.touched){var c=a.translate,d=y-c;d-=d/a.options.speed>=0?Math.floor(d/a.options.speed):Math.ceil(d/a.options.speed);Math.abs(d)<0.01&&(d=0);u(c+d);a.flag.snapping=d!=0;a.flag.snapping?
z=setTimeout(b,16):(a.options.infinite&&!a.options.center&&a.itemIndex>=a.count&&(u(a.translate+m),a.itemIndex-=a.count),p=0,a.flag.click=!0,a.autoscrollStart(),i.triggerHandler("slideend",{index:a.itemIndex}))}}y=-x.offsetLeft;a.options.center&&(y+=Math.floor((w-x.offsetWidth)/2));b()}function u(c){a.translate=c;c=L+c+"px, 0px"+M;b(a.scroller).css({webkitTransform:c,MozTransform:c,msTransform:c,transform:c})}function B(a){var b=a.originalEvent.touches,a=b&&b[0]||a;return{x:a.clientX,y:a.clientY}}
function r(a,b){return Math.min(Math.max(b[0],a),b[1])}function d(){var a=b("<a>").css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"}),c=a.css("webkitTransform"),d=a.css("MozTransform"),e=a.css("msTransform"),a=a.css("transform");return(c+d+e+a).indexOf("(")!=-1}var a=this;a.urId=c._id;a.container=c.set;a.scroller=c.scroll_container;a.scroller||b.error("carousel missing item components");a.items=c.item||
[];a.button={prev:b(c.button).filter("[data-ur-carousel-button-type='prev']"),next:b(c.button).filter("[data-ur-carousel-button-type='next']")};a.counter=c.count;a.dots=c.dots;a.flag={click:!0,snapping:!1,lock:null,touched:!1};a.options={autoscroll:!1,autoscrollDelay:5E3,autoscrollForward:!0,center:!1,cloneLength:0,fill:0,infinite:!0,speed:1.1,translate3d:!0,touch:!0,verticalScroll:!0};a.count=a.items.length;a.itemIndex=0;a.translate=0;var i=b(a.container),h=b(a.items),k=null,v,s={x:0,y:0},p=0,x=
h[0],y,o=a.count-1,m,C,z,w=i.outerWidth(),D=null,L="translate3d(",M=", 0px)";a.update=function(){var c=h.length;h=b(a.scroller).find("[data-ur-carousel-component='item']");if(c!=h.length){a.items=h.filter(":not([data-ur-clone])").toArray();a.count=a.items.length;o=h.length-1;h.each(function(c,d){if(b(d).attr("data-ur-state")=="active")return a.itemIndex=c,!1});if(a.itemIndex>=h.length-a.options.cloneLength)a.itemIndex=o-a.options.cloneLength,h.eq(a.itemIndex).attr("data-ur-state","active");b.contains(a.scroller,
x)||(x=h[a.itemIndex]);n();q(a.options.center?a.itemIndex+a.options.cloneLength:a.itemIndex)}w=i.outerWidth();var c=0,d=[];if(a.options.fill>0)for(var e=w,f=a.options.fill;f>0;f--){var g=Math.round(e/f);d.push(g);e-=g}for(f=m=0;f<h.length;f++)if(a.options.fill>0?(g=d[f%a.options.fill],h.eq(f).outerWidth(g),c+=g):c+=h[f].offsetWidth,f<=o-a.options.cloneLength&&f>=(a.options.center?a.options.cloneLength:0))m+=h[f].offsetWidth;b(a.scroller).width(c);c=h[a.itemIndex];d=-(c.offsetLeft+p*c.offsetWidth);
y=-x.offsetLeft;a.options.center&&(d+=Math.floor((w-c.offsetWidth)/2),y+=Math.floor((w-x.offsetWidth)/2));u(d)};a.autoscrollStart=function(){a.options.autoscroll&&(C=setTimeout(function(){w!=0?!a.options.infinite&&a.itemIndex==o&&a.options.autoscrollForward?a.jumpToIndex(0):!a.options.infinite&&a.itemIndex==0&&!a.options.autoscrollForward?a.jumpToIndex(o):t(a.options.autoscrollForward?-1:1):a.autoscrollStart()},a.options.autoscrollDelay))};a.autoscrollStop=function(){clearTimeout(C)};a.jumpToIndex=
function(b){t(a.itemIndex-b)};(function(){if(/Android [12]/.test(navigator.userAgent)){if((i.attr("data-ur-android3d")||i.attr("data-ur-translate3d"))!="enabled"){a.options.translate3d=!1;var c=parseFloat(i.attr("data-ur-speed"));a.options.speed=c>1?c:1.3}}else a.options.translate3d=i.attr("data-ur-translate3d")!="disabled";i.attr("data-ur-translate3d",a.options.translate3d?"enabled":"disabled");i.attr("data-ur-speed",a.options.speed);c=parseInt(i.attr("data-ur-fill"));if(c>0)a.options.fill=c;i.attr("data-ur-fill",
a.options.fill);if(c=i.attr("data-ur-clones"))a.options.cloneLength=parseInt(c);i.attr("data-ur-clones",a.options.cloneLength);c=parseInt(i.attr("data-ur-autoscroll-delay"));if(c>=0)a.options.autoscrollDelay=c;i.attr("data-ur-autoscroll-delay",a.options.autoscrollDelay);a.options.autoscrollForward=i.attr("data-ur-autoscroll-dir")!="prev";i.attr("data-ur-autoscroll-dir",a.options.autoscrollForward?"next":"prev");b.each(["autoscroll","center","infinite","touch","verticalScroll"],function(b,c){var d=
"data-ur-"+c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),e=i.attr(d);e=="enabled"?a.options[c]=!0:e=="disabled"&&(a.options[c]=!1);i.attr(d,a.options[c]?"enabled":"disabled")})})();var N=!1;a.options.infinite&&!a.options.fill&&a.options.cloneLength==0&&h.width(function(a,b){b==0&&(N=!0)});if(N){console.warn("carousel with id: "+a.urId+" will be late loaded");var c=h.find("img").addBack("img"),O=c.length;if(O>0)c.on("load.ur.carousel",function(){--O==0&&g()});else b(window).on("load.ur.carousel",
g)}else g()}c=q(c,"carousel");b.each(c,function(c,e){b(e.buttons).each(function(){var e=b(this).attr("data-ur-carousel-button-type");e||b.error("malformed carousel button type for carousel with id: "+c);b(this).attr("data-ur-state",e=="prev"?"disabled":"enabled")});Uranium.carousel[c]=new g(e);b(e.set).data("urInit",!0);b(e.set).attr("data-ur-state","enabled")})};window.Uranium={};b.each(n,function(b){Uranium[b]={}});b.fn.Uranium=function(){var c=this;b.each(n,function(){this(c)});return this};b(document).ready(b(document).Uranium)})(jQuery);
