(()=>{"use strict";var n={958:(n,e,r)=>{r.d(e,{A:()=>s});var t=r(354),o=r.n(t),a=r(314),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap);"]),i.push([n.id,":root {\n    --primary-color: rgb(17, 86, 102);\n    --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n}\n\nform input,  form label, form button {\n    display: block;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    margin-left: 10px;\n}\n\n.form-group {\n    display: flex;\n    justify-content: start;\n}\n\n#carac-quant:focus {\n    outline: 1px solid var(--primary-color);\n}\n\n#carac-quant {\n    width: 60px;\n}\n\n#add-numbers, #capital-letters, #small-letters, #add-symbols {\n    width: 30px;\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\nform button:active {\n    background: #662111;\n}\n\n.quantity-error, .checkboxes-error {\n    color: red;\n    font-size: 15px;\n    margin-left: 10px;\n}\n\n.generated-password {\n    color: var(--primary-color);\n    font-size: 45px;\n    margin: 50px 0px;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,iCAAiC;IACjC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sCAAsC;IACtC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;AACpB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap');\n\n:root {\n    --primary-color: rgb(17, 86, 102);\n    --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n}\n\nform input,  form label, form button {\n    display: block;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    margin-left: 10px;\n}\n\n.form-group {\n    display: flex;\n    justify-content: start;\n}\n\n#carac-quant:focus {\n    outline: 1px solid var(--primary-color);\n}\n\n#carac-quant {\n    width: 60px;\n}\n\n#add-numbers, #capital-letters, #small-letters, #add-symbols {\n    width: 30px;\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\nform button:active {\n    background: #662111;\n}\n\n.quantity-error, .checkboxes-error {\n    color: red;\n    font-size: 15px;\n    margin-left: 10px;\n}\n\n.generated-password {\n    color: var(--primary-color);\n    font-size: 45px;\n    margin: 50px 0px;\n}"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=t.base?c[0]+t.base:c[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var p=r(f),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var d=o(A,t);t.byIndex=s,e.splice(s,0,{identifier:f,updater:d,references:1})}i.push(f)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),u=0;u<a.length;u++){var l=r(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(72),e=r.n(n),t=r(825),o=r.n(t),a=r(659),i=r.n(a),s=r(56),c=r.n(s),u=r(540),l=r.n(u),f=r(113),p=r.n(f),A=r(958),d={};function m(n){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(n)}function y(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,v(t.key),t)}}function v(n){var e=function(n,e){if("object"!=m(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!=m(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==m(e)?e:String(e)}d.styleTagTransform=p(),d.setAttributes=c(),d.insert=i().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=l(),e()(A.A,d),A.A&&A.A.locals&&A.A.locals;var h=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.fields=e}var e,r;return e=n,(r=[{key:"validateQuantity",value:function(){return this.fields[0].value>0}},{key:"validateCheckboxes",value:function(){for(var n=0,e=1;e<5;e++)!1===this.fields[e].checked&&(n+=1);return 4===n}},{key:"showQuantityError",value:function(n){if(!document.querySelector(".quantity-error")){var e=document.createElement("div");e.classList.add("quantity-error");var r=document.createTextNode("Quantidade de caracteres inválida!");e.appendChild(r),n.insertAdjacentElement("afterend",e)}}},{key:"showCheckboxesError",value:function(){if(!document.querySelector(".checkboxes-error")){var n=document.createElement("div");n.classList.add("checkboxes-error");var e=document.createTextNode("Selecione pelo menos uma opção!");n.appendChild(e),this.fields[1].insertAdjacentElement("afterend",n)}}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();function b(){return Math.floor(10*Math.random())}function g(){return"abcdefghijklmnopqrstuvwxyz"[Math.floor(26*Math.random())]}function C(){return"abcdefghijklmnopqrstuvwxyz"[Math.floor(26*Math.random())].toUpperCase()}function x(){return'~!@#$%^&*()_+´-={}|[]:";`<>?,./'[Math.floor(31*Math.random())]}function I(n){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},I(n)}function w(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,B(t.key),t)}}function B(n){var e=function(n,e){if("object"!=I(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!=I(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==I(e)?e:String(e)}new(function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.form=document.querySelector("form"),this.fields=document.querySelectorAll(".passwordIncrement"),this.events()}var e,r;return e=n,(r=[{key:"events",value:function(){var n=this;this.form.addEventListener("submit",(function(e){n.handleSubmit(e)}))}},{key:"handleSubmit",value:function(n){n.preventDefault();var e=new h(this.fields);if(e.validateQuantity())if(e.validateCheckboxes())e.showCheckboxesError();else{var r=document.querySelector(".quantity-error");r&&r.remove();var t=document.querySelector(".checkboxes-error");t&&t.remove();var o=this.generatePassword();this.showPassword(o)}else e.showQuantityError(this.fields[0])}},{key:"generatePassword",value:function(){for(var n=this.fields[0].value,e="",r=[b,C,g,x],t=[],o=1;o<5;o++)!0===this.fields[o].checked&&t.push(r[o-1]);for(var a=0,i=0;i<n;i++)a===t.length&&(a=0),e+=t[a](),a++;return e}},{key:"showPassword",value:function(n){document.querySelector(".generated-password").innerHTML=n}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),n}())})()})();
//# sourceMappingURL=bundle.js.map