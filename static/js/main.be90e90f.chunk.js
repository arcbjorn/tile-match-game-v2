(this["webpackJsonptile-match-game-v2"]=this["webpackJsonptile-match-game-v2"]||[]).push([[0],{28:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),i=a.n(l),r=a(10),o=(a(37),a(12)),s=a(4),u=a(17),f=a(1),d=a(14),m=a(5),h=["ambulance","anchor","baby-carriage","bath","bed","beer","bell","bicycle","binoculars","bomb","book","bug","bus","camera","candy-cane","car","cloud","drum","feather","guitar","headphones","heart","helicopter","key","lightbulb","lock","moon","rocket","tv","umbrella","star","wrench"],b=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},v=function(e){return e[b(0,e.length-1)]},E={tiles:[],matchedTiles:[],selectedTiles:[],difficulty:2},g=function(e,t){return{type:"TILE_SELECTED",payload:{x:e,y:t}}},y=function(){return{type:"RESET_STATE"}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_TILES":return Object(m.a)(Object(m.a)({},e),{},{difficulty:t.payload.difficulty,tiles:t.payload.tiles});case"TILE_SELECTED":var a=e.selectedTiles.concat(e.tiles.filter((function(e){return e.x===t.payload.x&&e.y===t.payload.y})));if(2===a.length){if(a[0].value===a[1].value){var n=e.matchedTiles.concat(a);return n.length===e.tiles.length?Object(m.a)(Object(m.a)({},e),{},{tiles:[],selectedTiles:[],matchedTiles:[]}):Object(m.a)(Object(m.a)({},e),{},{matchedTiles:n,selectedTiles:[]})}return-1===t.payload.x&&-1===t.payload.y?Object(m.a)(Object(m.a)({},e),{},{selectedTiles:[]}):Object(m.a)(Object(m.a)({},e),{},{selectedTiles:a})}return a.length>2?Object(m.a)(Object(m.a)({},e),{},{selectedTiles:[]}):Object(m.a)(Object(m.a)({},e),{},{selectedTiles:a});case"RESET_STATE":return E;default:return e}},T=a(11),j=(a(41),function(e){var t=e.value,a=e.handleClick,n=e.className;return c.a.createElement("div",{className:n,onClick:a},c.a.createElement("div",{className:"block-backside"},c.a.createElement("div",{className:"block"},c.a.createElement(T.a,{icon:t,style:{width:"75px",height:"75px"}}))))}),O=(a(42),function(e){var t=e.tiles,a=e.matchedTiles,l=e.selectedTiles,i=e.difficulty,r=e.select,o=e.tileIcons,u=e.stateUpdated,f=e.selectAfterTimeout,m=Object(n.useState)([]),h=Object(d.a)(m,2),b=h[0],v=h[1],E=Object(n.useState)({}),g=Object(d.a)(E,2),y=g[0],p=g[1],T=Object(n.useState)([]),O=Object(d.a)(T,2),w=O[0],k=O[1];return Object(n.useEffect)((function(){v(0===t.length&&u?c.a.createElement(s.a,{to:"/"}):t.map((function(e,t){var n=a.includes(e)?"tile matched":l.includes(e)?"tile selected":w.includes(e)?"tile to-hide":"tile",s=a.includes(e)||l.includes(e)?function(){}:function(){r(e.x,e.y);var t=w.concat(e);t.length>2&&(t=t.slice(2)),k(t),2===t.length&&t[0].value!==t[1].value&&(n="tile to-hide",f(-1,-1,500))};return c.a.createElement(j,{key:e.value*t+i+t,value:o[e.value],handleClick:s,className:n})})));for(var e="",n=0;n<2*i;n++)e+="".concat((100/(2*i)).toFixed(2),"% ");return p({gridTemplateColumns:e,gridTemplateRows:e}),function(){w.length>=2&&k([])}}),[t,l,a]),c.a.createElement("div",{className:"tile-collection",style:y},b)}),w=(a(44),{select:g,initializeTiles:function(e){return function(t){var a,n=[],c=[],l=[];e<=3&&e>=2?a=2*e:(a=6,e=3);for(var i=0;i<a*e;i++){var r=void 0;do{r=b(0,31)}while(-1!==l.indexOf(r));c.push(r),l.push(r)}c=c.concat(c);for(var o=0;o<a;o++)for(var s=0;s<a;s++)n.push({x:o,y:s,value:v(c)}),c.splice(c.indexOf(n[n.length-1].value),1);t({type:"INIT_TILES",payload:{difficulty:e,tiles:n}})}},selectAfterTimeout:function(e,t,a){return function(n){setTimeout((function(){n(g(e,t))}),a)}}}),k=Object(r.b)((function(e){return{tiles:(e=e.tileReducer).tiles,matchedTiles:e.matchedTiles,selectedTiles:e.selectedTiles}}),w)((function(e){var t=e.tiles,a=e.matchedTiles,l=e.selectedTiles,i=e.difficulty,r=e.select,o=e.initializeTiles,s=e.tileIcons,u=e.selectAfterTimeout,f=Object(n.useState)(!1),m=Object(d.a)(f,2),h=m[0],b=m[1];return Object(n.useEffect)((function(){o(i),b(!0)}),[i,o]),c.a.createElement("div",{className:"board"},c.a.createElement(O,{stateUpdated:h,tiles:t,matchedTiles:a,selectedTiles:l,select:r,difficulty:i,tileIcons:s,selectAfterTimeout:u}))})),N=(a(45),function(e){var t=e.href,a=e.text,n=e.className;return c.a.createElement("div",{className:"ui-link ".concat(n)},c.a.createElement(o.b,{to:t},a))}),x=(a(46),Object(r.b)(null,{resetState:y})((function(e){var t=e.links,a=e.resetState;Object(n.useEffect)((function(){a()}),[a]);var l=t.map((function(e){return c.a.createElement(N,{key:e.href.length*e.name.length,href:e.href,className:"link-style",text:e.name})}));return c.a.createElement("div",{className:"ui"},c.a.createElement("h1",null,"Tile Matching Game"),c.a.createElement("h2",null,"Goal: match all tile-icons"),l)}))),S=(a(47),Object(r.b)(null,{resetState:y})((function(e){var t=e.difficultyList,a=e.resetState;Object(n.useEffect)((function(){a()}),[a]);var l=t.map((function(e,t){return c.a.createElement(N,{key:e.value*e.name.length+t,href:"/game/".concat(e.value),text:e.name,className:"link-style"})}));return c.a.createElement("div",{className:"difficulty-select"},l)}))),A=a(26),I=(a(48),function(){var e={width:"2rem",height:"2rem"};return c.a.createElement("div",{className:"about-wrapper"},c.a.createElement("header",{className:"about-header"},c.a.createElement("h1",null,"Tile matching game.")),c.a.createElement("section",{className:"about-content"},c.a.createElement("p",null,"by Arc"),c.a.createElement("div",{className:"about-socials"},c.a.createElement("span",{className:"github"},c.a.createElement("a",{href:"https://github.com/arcbjorn"},c.a.createElement(T.a,{icon:A.a,style:e}))),c.a.createElement("span",{className:"linkedin"},c.a.createElement("a",{href:"https://arcbjorn.github.io"},c.a.createElement(T.a,{icon:f.u,style:e}))))))}),C=(a(49),Object(s.f)((function(e){var t=e.history,a=e.location;return c.a.createElement("div",{className:"back-button"},"/"===a.pathname?c.a.createElement(c.a.Fragment,null):c.a.createElement("button",{type:"button",onClick:function(){return t.goBack()}},c.a.createElement(T.a,{icon:f.c,style:{width:"7rem",height:"7rem"}})))}))),L=(a(50),function(e){var t=e.history,a=void 0===t?null:t;u.b.add(f.a,f.b,f.d,f.e,f.f,f.g,f.h,f.i,f.j,f.k,f.l,f.m,f.n,f.o,f.p,f.q,f.r,f.s,f.t,f.v,f.w,f.x,f.y,f.z,f.A,f.B,f.C,f.D,f.F,f.G,f.E,f.H);var n=[{href:"/game/difficulty/choose",name:" \xb7 Play! \xb7 "},{href:"/about",name:" \xb7 About the game \xb7 "}],l=[{value:2,name:" \xb7 Normal difficulty \xb7 "},{value:3,name:" \xb7 Test yourself! \xb7 "}];return c.a.createElement("div",{className:"app"},c.a.createElement(o.a,null,c.a.createElement(C,{browserHistory:a}),c.a.createElement(s.b,{exact:!0,path:"/",render:function(){return c.a.createElement(x,{links:n})}}),c.a.createElement(s.b,{exact:!0,path:"/game/:difficulty",render:function(e){var t=e.match;return c.a.createElement(k,{difficulty:t.params.difficulty,tileIcons:h})}}),c.a.createElement(s.b,{exact:!0,path:"/game/difficulty/choose",render:function(){return c.a.createElement(S,{difficultyList:l})}}),c.a.createElement(s.b,{path:"/about",render:function(){return c.a.createElement(I,null)}})))}),R=a(13),W=a(27),_=Object(R.c)({tileReducer:p}),M=Object(R.d)(_,Object(R.a)(W.a)),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!==a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(c.a.createElement(r.a,{store:M},c.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tile-match-game-v2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tile-match-game-v2","/service-worker.js");U?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!==n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.be90e90f.chunk.js.map