(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'* {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  --text-color: azure;\n  --accent-color: #1992d4;\n  --sidebar-color: #c4d4e8;\n  --white: #ffffff;\n}\n\nbody {\n  background-color: var(--white);\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: minmax(100px, 300px) 3fr;\n  grid-template-rows: repeat(auto-fit, minmax(1fr, 2fr));\n}\n\n.header-container {\n  height: 75px;\n  background: var(--accent-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 25px;\n  padding-right: 25px;\n  grid-column: 1 / 3;\n  grid-row: 1;\n}\n\n.header-container h1 {\n  color: var(--text-color);\n  font-size: 36px;\n}\n\n.sidebar-container {\n  background-color: var(--sidebar-color);\n  min-height: 100vh;\n}\n\n.sidebar-links {\n  padding: 0px;\n  margin: 25px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 20px;\n}\n\nli {\n  margin-bottom: 20px;\n}\n\n.sidebar-links a {\n  display: block;\n  width: 200px;\n  text-decoration: none;\n  cursor: pointer;\n  height: 30px;\n}\n\n.sidebar-links li a:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n\n.side-icons {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  padding: 5px;\n  vertical-align: middle;\n}\n\n.project-titles {\n  margin: 30px;\n}\n\n.project-add-button {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  align-items: center;\n  width: 195px;\n  margin: 30px;\n  border: none;\n  background-color: var(--sidebar-color);\n  cursor: pointer;\n  height: 30px;\n}\n\n.project-add-button:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n\n.button-image {\n  width: 20px;\n  height: 20px;\n  margin-right: 15px;\n}\n\n.hidden {\n  display: none;\n}\n\n.input-field {\n  margin-left: 25px;\n  height: 25px;\n  border-radius: 3px;\n}\n\n.button-container {\n  display: flex;\n  gap: 60px;\n  margin-top: 10px;\n  margin-left: 25px;\n}\n\n.add-button,\n.cancel-button {\n  width: 75px;\n  height: 50px;\n  border: 1px solid black;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 700;\n}\n\n.add-button {\n  background: greenyellow;\n}\n\n.cancel-button {\n  background-color: pink;\n}\n\n.task-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 25px;\n  margin: 25px;\n}\n\n.task-container .card {\n  border: black solid 2px;\n  text-align: center;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.card p {\n  font-weight: normal;\n  text-align: left;\n}\n\n.card .title {\n  font-size: 18px;\n  text-align: left;\n}\n\n.footer {\n  grid-column: 1 / 3;\n  background: var(--accent-color);\n  font-size: 20px;\n  color: var(--text-color);\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"images/2d4061552fac064ed076.svg",g=t.p+"images/498fb8e2c7cf437f5146.svg",x=t.p+"images/939f2a757e3335be71bb.svg",v=t.p+"images/233385e32206cd372d69.svg",b=t.p+"images/518ff47ec29e1552eabd.svg",y=t.p+"images/3cffe9a515498593b872.svg";class C{constructor(e){this.name=e,this.tasks=[]}addTaskToProject(e,n,t,r){const o=new k(e,n,t,r);this.tasks.push(o)}removeTaskFromProject(e){this.tasks.splice(e,1)}}class k{constructor(e,n,t,r){this.name=e,this.description=n,this.dueDate=t,this.priority=r}info(){return`${this.name}, ${this.description}, ${this.dueDate}, ${this.priority}`}}const E=document.getElementById("content"),w=(()=>{const e=document.createElement("div");e.classList.add("header-container");const n=document.createElement("img");n.classList.add("menu-button"),n.src=f,n.alt="Menu",n.style.width="30px",n.style.height="auto";const t=document.createElement("h1");t.textContent="Todo List";const r=document.createElement("img");return r.classList.add("logo"),r.src=g,r.alt="logo",r.style.width="30px",r.style.height="auto",e.appendChild(n),e.appendChild(t),e.appendChild(r),e})();E.appendChild(w);const L=(()=>{const e=document.createElement("div");e.classList.add("sidebar-container");const n=document.createElement("ul");n.classList.add("sidebar-links");const t=[{text:"Inbox",image:x},{text:"Today",image:v},{text:"This week",image:b}];for(let e=0;e<t.length;e++){const r=document.createElement("li"),o=document.createElement("a"),a=document.createElement("img");a.classList.add("side-icons"),a.src=t[e].image,a.alt=t[e].text,o.appendChild(a),o.append(t[e].text),r.appendChild(o),n.appendChild(r)}e.appendChild(n);const r=(()=>{const e=document.createElement("div");e.classList.add("sideproject-container");const n=document.createElement("h2");n.classList.add("project-titles"),n.textContent="Projects";const t=document.createElement("button");t.classList.add("project-add-button"),t.textContent="Add Project";const r=document.createElement("img");return r.src=y,r.alt="Add Project",r.classList.add("button-image"),t.appendChild(r),e.appendChild(n),e.appendChild(t),t.addEventListener("click",(()=>{t.classList.add("hidden");const n=document.createElement("input");n.classList.add("input-field"),n.type="text",n.placeholder="Enter project name",e.appendChild(n);const r=document.createElement("div");r.classList.add("button-container");const o=document.createElement("button");o.classList.add("add-button"),o.textContent="Add",o.addEventListener("click",(()=>{const e=n.value;console.log(`Project added: ${e}`),n.remove(),o.remove(),a.remove(),t.classList.remove("hidden")})),r.appendChild(o);const a=document.createElement("button");a.classList.add("cancel-button"),a.textContent="Cancel",a.addEventListener("click",(()=>{n.remove(),o.remove(),a.remove(),t.classList.remove("hidden")})),r.appendChild(a),e.appendChild(r)})),e})();return e.appendChild(r),e})();E.appendChild(L);const T=(()=>{const e=document.createElement("div");e.classList.add("task-container"),e.innerHTML="";const n=new C("Project One");n.addTaskToProject("Task 1","Description for Task 1","2024-01-10","High"),n.addTaskToProject("Task 1","Description for Task 1","2024-01-10","High");for(let t=0;t<n.tasks.length;t++){const r=n.tasks[t],o=document.createElement("div");o.classList.add("card");const a=document.createElement("h2");a.textContent=`${r.name}`;const i=document.createElement("p");i.textContent=`${r.description}`;const c=document.createElement("p");c.textContent=`Due: ${r.dueDate}`;const s=document.createElement("p");s.textContent=`Priority: ${r.priority}`;const d=document.createElement("button");d.textContent="Remove Task",d.dataset.index=t,o.appendChild(a),o.appendChild(i),o.appendChild(c),o.appendChild(s),o.appendChild(d),e.appendChild(o)}return e})();E.appendChild(T);const j=(()=>{const e=document.createElement("div");return e.classList.add("footer"),e.textContent="DragonflyValkyrie's Todo List 2023",e})();E.appendChild(j)})()})();