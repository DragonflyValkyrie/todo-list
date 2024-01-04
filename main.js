(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --text-color: azure;\n    --accent-color: #1992d4;\n    --sidebar-color: #c4d4e8;\n    --white: #FFFFFF;\n}\n\nbody {\n    background-color: var(--white);\n    margin: 0;\n    padding: 0;\n} \n\n.header-container {\n    height: 75px;\n    background: var(--accent-color);\n    display: flex; \n    justify-content: space-between;\n    align-items: center;\n    padding-left: 25px;\n    padding-right: 25px;\n}\n\n.header-container h1 { \n    color: var(--text-color);\n    font-size: 36px;\n}\n\n.sidebar-container {\n    background-color: var(--sidebar-color);\n}\n\n.sidebar-links {\n    font-size: 18px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.header-links a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.header-links li a:hover {\n    text-decoration: underline;\n    text-decoration-thickness: 2px;\n}\n\n.footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: var(--accent-color);\n    font-size: 20px;\n    color: var(--text-color);\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"images/2d4061552fac064ed076.svg",v=n.p+"images/498fb8e2c7cf437f5146.svg",g=n.p+"images/939f2a757e3335be71bb.svg",y=n.p+"images/233385e32206cd372d69.svg",x=n.p+"images/518ff47ec29e1552eabd.svg";class b{constructor(e){this.name=e,this.tasks=[]}addTaskToProject(e,t,n,r){const o=new C(e,t,n,r);this.tasks.push(o)}removeTaskFromProject(e){this.tasks.splice(e,1)}}class C{constructor(e,t,n,r){this.name=e,this.description=t,this.dueDate=n,this.priority=r}info(){return`${this.name}, ${this.description}, ${this.dueDate}, ${this.priority}`}}const E=document.getElementById("content"),k=(()=>{const e=document.createElement("div");e.classList.add("header-container");const t=document.createElement("img");t.classList.add("menu-button"),t.src=f,t.alt="Menu",t.style.width="30px",t.style.height="auto";const n=document.createElement("h1");n.textContent="Todo List";const r=document.createElement("img");return r.classList.add("logo"),r.src=v,r.alt="logo",r.style.width="30px",r.style.height="auto",e.appendChild(t),e.appendChild(n),e.appendChild(r),e})();E.appendChild(k);const w=(()=>{const e=document.createElement("div");e.classList.add("sidebar-container");const t=document.createElement("ul");t.classList.add("sidebar-links");const n=[{text:"Inbox",image:g},{text:"Today",image:y},{text:"This week",image:x}];for(let e=0;e<n.length;e++){const r=document.createElement("li"),o=document.createElement("a");o.textContent=n[e];const a=document.createElement("img");a.src=n[e].image,a.alt=n[e].text,a.style.width="24px",a.style.height="24px",a.style.marginRight="8px",o.appendChild(a),o.append(n[e].text),r.appendChild(o),t.appendChild(r)}return e.appendChild(t),e})();E.appendChild(w);const T=(()=>{const e=document.createElement("div");e.classList.add("task-container"),e.innerHTML="";const t=new b("Project One");t.addTaskToProject("Task 1","Description for Task 1","2024-01-10","High");for(let n=0;n<t.tasks.length;n++){const r=t.tasks[n],o=document.createElement("div");o.classList.add("card");const a=document.createElement("h2");a.textContent=`${r.name}`;const i=document.createElement("p");i.textContent=`${r.description}`;const s=document.createElement("p");s.textContent=`Due: ${r.dueDate}`;const c=document.createElement("p");c.textContent=`Priority: ${r.priority}`;const d=document.createElement("button");d.textContent="Remove Task",d.dataset.index=n,o.appendChild(a),o.appendChild(i),o.appendChild(s),o.appendChild(c),o.appendChild(d),e.appendChild(o)}return e})();E.appendChild(T);const L=(()=>{const e=document.createElement("div");return e.classList.add("footer"),e.textContent="DragonflyValkyrie's Todo List 2023",e})();E.appendChild(L)})()})();