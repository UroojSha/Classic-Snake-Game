(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,a){e.exports=a(16)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c);a(12),a(13),a(14);var l=e=>{let{snakeSegments:t}=e;return r.a.createElement("div",null,t.map((e,t)=>r.a.createElement("div",{key:t,className:"snake-segment",style:{top:e.y,left:e.x}})))};a(15);var o=()=>{const e=10,t=30,[a,c]=Object(n.useState)([{x:0,y:0}]),[s,o]=Object(n.useState)(b()),[u,m]=Object(n.useState)(0),[i,y]=Object(n.useState)(!1),[d,x]=Object(n.useState)("RIGHT"),[E,f]=Object(n.useState)(200),v=[{x:0,y:0}];function b(){return{x:Math.floor(Math.random()*e)*t,y:Math.floor(Math.random()*e)*t}}Object(n.useEffect)(()=>{const e=e=>{switch(e.key){case"ArrowUp":x("UP");break;case"ArrowDown":x("DOWN");break;case"ArrowLeft":x("LEFT");break;case"ArrowRight":x("RIGHT")}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]),Object(n.useEffect)(()=>{if(i)return;const e=setInterval(()=>{const e=a.map((e,n)=>{if(0!==n)return a[n-1];switch(d){case"UP":return{x:e.x,y:e.y-t};case"DOWN":return{x:e.x,y:e.y+t};case"LEFT":return{x:e.x-t,y:e.y};case"RIGHT":return{x:e.x+t,y:e.y};default:return e}}),n=e[0];n.x===s.x&&n.y===s.y?(o(b()),c(e=>[n,...e]),m(e=>e+1),f(e=>Math.max(100,e-10))):c(e)},E);return()=>{clearInterval(e)}},[d,i,a,E,s,t]),Object(n.useEffect)(()=>{a[0].x===s.x&&a[0].y===s.y&&(o(b()),c(e=>[{x:e[0].x,y:e[0].y},...e]),m(e=>e+1),f(e=>Math.max(100,e-10)));const n=a[0],r=a.slice(1);(n.x<0||n.x>=e*t||n.y<0||n.y>=e*t||r.some(e=>e.x===n.x&&e.y===n.y))&&(y(!0),c(v),o(b()),f(200))},[a,s,e,u,E,v]);return r.a.createElement("div",{className:"game-board"},i?r.a.createElement("div",{className:"game-over-screen"},r.a.createElement("h2",null,"Game Over!"),r.a.createElement("p",null,"Your score: ",u),r.a.createElement("button",{onClick:()=>{c([{x:0,y:0}]),o(b()),m(0),y(!1),x("RIGHT"),f(200)}},"Play Again")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"score"},"Score: ",u),r.a.createElement("div",{className:"grid"},[...Array(e*e)].map((e,t)=>r.a.createElement("div",{key:t,className:"cell"}))),r.a.createElement(l,{snakeSegments:a}),r.a.createElement("div",{className:"food",style:{top:s.y,left:s.x}})))};var u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null))};var m=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:c,getTTFB:s}=t;a(e),n(e),r(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null))),m()}],[[3,1,2]]]);
//# sourceMappingURL=main.5b04dff3.chunk.js.map