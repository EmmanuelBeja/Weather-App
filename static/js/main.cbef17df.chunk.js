(this["webpackJsonpweather-pwa"]=this["webpackJsonpweather-pwa"]||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),s=a(5),l=(a(24),a(25),a(6)),u=a.n(l),i=a(17),m=a(3),p=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=(new Date).getHours();c(e<10?"Hello! Good morning":e<20?"Hello. Good day":"Good evening")}),[]),r.a.createElement("div",{className:"greeting"},r.a.createElement("h1",null,a))},h=function(e){var t=e.setWeather,a=e.weather;return r.a.createElement("span",{className:"weather-card",onMouseDown:function(){return t([])}},r.a.createElement("div",{className:"weather-location"},r.a.createElement("span",null,a.name),r.a.createElement("span",null,r.a.createElement("img",{alt:a.sys.country,src:"http://catamphetamine.gitlab.io/country-flag-icons/3x2/".concat(a.sys.country,".svg")}))),r.a.createElement("div",{className:"weather-temperature"},Math.round(a.main.temp),r.a.createElement("sup",null,"\xb0C")),r.a.createElement("img",{className:"weather-icon",src:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),alt:a.weather[0].description}),r.a.createElement("p",{className:"weather-summary"},a.weather[0].description))},d=a(18),f=a.n(d),w=function(e){return f.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:e,units:"metric",APPID:"f33a484cf794d08d0148764789aaba32"}}).then((function(e){return e.data})).catch((function(t){return s.b.error("Ooops! Could'nt find place called ".concat(e," \ud83d\ude13."))}))};a(46);var E=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),l=s[0],d=s[1],f=Object(n.useState)([]),E=Object(m.a)(f,2),v=E[0],g=E[1],b=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=9;break}return c(!0),d(""),g([]),e.next=6,w(l);case 6:a=e.sent,g(a),c(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"app-container-overlay"}),r.a.createElement(p,null),r.a.createElement("input",{type:"text",className:"search-input",value:l,onChange:function(e){return d(e.target.value)},onKeyPress:function(e){return b(e)},placeholder:a?"Just a sec...":"Search location..."}),v&&v.main&&r.a.createElement(h,{setWeather:g,weather:v}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null),r.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cbef17df.chunk.js.map