!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
var nyumi_api = {
   single_section: function(){
    
    // redirect url
    var url = window.location.href;
    if(url.indexOf('/collections/all/products') != -1){
      url = url.replace('/collections/all', '');  
      window.location.href = url;
    }
       
    //       
    const client = contentful.createClient({      
      space: "537ig19c198x",      
      accessToken: "xrFAWU3JjmllmPiF2MtCWP2bMzCszbQuPjLW0MNogdw"
    }); 
        
    // Purpose section
    client
      .getEntry("6lIWO6fWUYG7pP1JsaS590")
    .then(entry => {
             //Purpose_section(entry.fields);            
      })       
      .catch(err => console.log(err));    
    // Top Section    
    client
      .getEntry("5uLVb46VrfKdvGXCNxuko4")
    .then(entry => {
            // top_section(entry.fields);
            // top_slider();
      })       
      .catch(err => console.log(err));
    
     // Science Section    
    client
      .getEntry("01DAHa2TizKGPevyPF0h7n")
    .then(entry => {
           //  Science_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    // Testimonial Section    
    client
      .getEntry("4X1eym1axdU4GSVIyXZ4Z0")
    .then(entry => {
            // Testimonial_section(entry.fields);  
      })       
      .catch(err => console.log(err));
    
    // Press Section    
    client
      .getEntry("7wanxMFgG1xyHcdRDSGT07")
    .then(entry => {
            // Press_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    // Our Journal
      client
      .getEntry("51ZgpCqPcbnXPsU7QOXspN")
    .then(entry => {
            // Journal_section(entry.fields);            
      })       
      .catch(err => console.log(err)); 
    
    
    // OUR PRODUCTS
    
     client
      .getEntry("7FTjrOg7iLj4JrmQaC56WO")
    .then(entry => {
            // Product_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    
    // collection page
    client
      .getEntry("oowZMfoPUooYvJzz0i4Js")
    .then(entry => {
            // collection_page(entry.fields);            
      })       
      .catch(err => console.log(err)); 
    
    // header
    client
      .getEntry("6Pwg05sBNTJ8MlQsMsbQRP")
    .then(entry => {
           //  header_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    
    // footer
     client
      .getEntry("4ovMk9EHjkcyWkySsWy0qd")
    .then(entry => {
           //  footer_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
      // footer_menu_left
     client
      .getEntry("2GpHeM8MAMiuqUMahzNy3p")
    .then(entry => {
            // footer_menu_left(entry.fields);            
      })       
      .catch(err => console.log(err));
    
     // footer_menu_right
     client
      .getEntry("19PUxtiuGSgnbhhTcccj1c")
      .then(entry => {
           //  footer_menu_right(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    
      // beauty sleep    
       client
      .getEntry("2l45Kyep6E54E1M4KwPCgj")
      .then(entry => {
          //   product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
      // beauty skin    
       client
      .getEntry("2eJGW91w1rUeCl1f3DT54D")
      .then(entry => {
           //  product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
      // beauty uti    
       client
      .getEntry("1BsF4PuDn0XAUgjCi0lNmV")
      .then(entry => {
           //  product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
      // Hair and nails
       client
      .getEntry("5EPf833aX5h6x1Otq6WeO4")
      .then(entry => {
           //  product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
     // immunity
       client
      .getEntry("548W3ae5i2K7jKXyMIRZba")
      .then(entry => {
            // product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
      // bundle product  
    // hair, immunity & skin
       client
      .getEntry("364iGETdgnnMbpp9nKEY2N")
      .then(entry => {
       //  product_detail(entry.fields); 
        // add_bundle_description(entry.fields);
        // combo_product(entry.fields);
      }).catch(err => console.log(err));
     
     // hair & Immunity
       client
      .getEntry("4bir2mO127U72i0lMzZekO")
      .then(entry => {
       //  product_detail(entry.fields);      
        // add_bundle_description(entry.fields);
        // combo_product(entry.fields);
      }).catch(err => console.log(err)); 
    
    client
      .getEntry("5erCvHNdeRa0tu9xboehcO")
      .then(entry => {
         // product_detail(entry.fields);      
       //  add_bundle_description(entry.fields);
        // combo_product(entry.fields);
      }).catch(err => console.log(err)); 
    
client
      .getEntry("6T6YOSGitWDwi0rzbRzDCJ ")
      .then(entry => {
       //  product_detail(entry.fields);      
       //  add_bundle_description(entry.fields);
       //  combo_product(entry.fields);
      }).catch(err => console.log(err));  
    
    // hair & skin
       client
      .getEntry("1rbWsvuqC23BmxpSJGVuhY")
      .then(entry => {
       //  product_detail(entry.fields);  
       //  add_bundle_description(entry.fields);
       //  combo_product(entry.fields);
      }).catch(err => console.log(err));
    
     
    
     // science page    
       client
      .getEntry("6uvvsBqfjkfgVQSJO7uuHu")
      .then(entry => {
           //  science_product(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    // faq page    
       client
      .getEntry("7ootLIzwgF7LD3XUhRKrEH")
      .then(entry => {
       //     faq_page(entry.fields);   
          
      })       
      .catch(err => console.log(err));
    
	  // blog    
      client
      .getEntry("2t82O294d7DhdlAALd3XF9")
      .then(entry => {
        //    blog_page(entry.fields);            
      }).catch(err => console.log(err));
    
    
      // contact     
      client
      .getEntry("6ZXJHRikQcgNR83uq3COVt")
      .then(entry => {
         //   contact_page(entry.fields);            
      }).catch(err => console.log(err));
    
     // about page
    client
      .getEntry("5G31bFNfBIB1pwwanw06uO")
      .then(entry => {
         //   about_page(entry.fields);            
      }).catch(err => console.log(err));
    
     // ingredients page
    client
      .getEntry("5EC81MNLMexOj0nEWboRGY")
      .then(entry => {
        //    ingredients_page(entry.fields);            
      }).catch(err => console.log(err));
    
    // ingredients page
    client
      .getEntry("1R0xVBStpmMpv8Y707SsBC")
      .then(entry => {
        //    footer_menu(entry.fields);            
      }).catch(err => console.log(err));
    
    
    // careers page
    client
      .getEntry("6M9PAOFsZWExIybLE3sjXc")
      .then(entry => {
        //    careers_page(entry.fields);            
      }).catch(err => console.log(err));
    
    
    // terms_use_page
    client
      .getEntry("p27demlw9dm3X8nRoQF6S")
      .then(entry => {
          //  terms_use_page(entry.fields);            
      }).catch(err => console.log(err));
    
    // Privacy policy
    client
      .getEntry("2jFQSyT0aImMw8DU5E7nXs")
      .then(entry => {
         //   terms_use_page(entry.fields);            
      }).catch(err => console.log(err));
    
    
    
     // blog page    
    client
      .getEntry("4OwNUiqgbRnf51xSOLGGV6")
      .then(entry => {
        //    bolg_new(entry.fields);            
      }).catch(err => console.log(err));
    
    
    function bolg_new(value){
       
       if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){       
         page_meta_description(value);
       }
   }
    
    
    function terms_use_page(value){
      
      if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
       
        page_meta_description(value);
        
        if(typeof value.sections[0].fields.text1 !== 'undefined'){
          
           var section = value.sections[0].fields.text1;
           var text = editer_value(section);          
           $('#page_content_fixed').html(text);
        }
        
      }
    }
    
    
    function page_meta_description(value){
       
       
      var meta= '', description = '';
      if(typeof value.metaTitle !== 'undefined'){
        var meta =  '<title>'+value.metaTitle+'</title>';
        $('html head').append(meta);
      }
      if(typeof value.metaDescription !== 'undefined'){
        if(typeof value.metaDescription.content  !== 'undefined'){
          description = '<meta name="description" content="'+value.metaDescription.content[0].content[0].value+'">';
        }else{
          description = '<meta name="description" content="'+value.metaDescription+'">';
        }
        $('html head').append(description);
      }
      
      
    }
    
   function editer_value_space(value){
      var text = '';
          
        $(value.content).each(function(i,txt1){
                
                if(txt1.nodeType == 'unordered-list' || txt1.nodeType == 'ordered-list'){                    
                    $(txt1.content).each(function(x2, txt2){                      
                      var list_item = false;
                      if(txt2.nodeType == 'list-item'){
                            text +='<ul>';
                        	list_item = true;
                       }                      
                        $(txt2.content).each(function(x3, txt3){                            
                          
                          if(list_item)
                            text +='<li>';
                            
                          $(txt3.content).each(function(x4, txt4){
                            
                           
                            
                              var bold_start = '', bold_false ='', underline_start= '', underline_end= '';
                          if(typeof txt4.marks !== 'undefined' ){
                             $(txt4.marks).each(function(x, mark){ 
                                if(mark.type == 'bold'){
                                  bold_false = '</b>'; 
                                  bold_start = '<b>'; 
                                }else if(mark.type == 'underline'){
                                  underline_start = '<span style="text-decoration: underline">';
                                  underline_end = '</span>';
                                }                             
                               
                             });
                            
                              
                            /*                            
                             if(txt4.nodeType == 'hyperlink'){
                              var url = txt4.data.uri;
                              if(typeof txt4.content[0] !== 'undefined' ){
                                var txt = txt4.content[0].value;
                                text += '<a href="'+url+'">'+txt+'</a>';
                              }
                            }
                           */
                            
                          }
                            
                            if(typeof txt4.value !== 'undefined'){
                             text += underline_start+ bold_start+txt4.value+bold_false+underline_end;
                            }
                                               
                          });
                          if(list_item){
                            text +='</li>';
                          }else{                          
                            text += '<br/>';     
                          }
                          
                        });
                      
                       if(txt2.nodeType == 'list-item'){
                            text +='</ul>';
                        }
                    });
                    text += '<br/>';

                }else if(txt1.nodeType =='embedded-asset-block'){
                  
                   if(typeof txt1.data.target.fields.file.url  !== 'undefined' ){
                     text += '<img src="'+txt1.data.target.fields.file.url+'" alt="#"/>';
                   }
                  
                }else{              
                 
                    var heading = '', heading_end = '';
                    if(txt1.nodeType == 'heading-1'){
                      heading = '<h1>';
                      heading_end = '</h1>';
                    }else if(txt1.nodeType == 'heading-2'){
                      heading = '<h2>';
                      heading_end = '</h2>';
                    }if(txt1.nodeType == 'heading-3'){
                      heading = '<h3>';
                      heading_end = '</h3>';
                    }if(txt1.nodeType == 'heading-4'){
                      heading = '<h4>';
                      heading_end = '</h3>';
                    }
                      
                  $(txt1.content).each(function(x, txt2){
                     
                    var bold_start = '', bold_false ='', underline_start= '', underline_end= '';;
                    if(typeof txt2.marks !== 'undefined' ){
                       $(txt2.marks).each(function(x, mark){ 
                          if(mark.type == 'bold'){
                            bold_false = '</b>'; 
                            bold_start = '<b>'; 
                          }else if(mark.type == 'underline'){
                                  underline_start = '<span style="text-decoration: underline">';
                                  underline_end = '</span>';
                           }
                           
                       });
                    }
                    
                     if(typeof txt2.value !== 'undefined'){
                       text += heading+underline_start+bold_start+txt2.value + bold_false+underline_end+heading_end;
                      }else if(txt2.nodeType == 'hyperlink'){
                        var url = txt2.data.uri;
                        if(typeof txt2.content[0] !== 'undefined' ){
                          var txt = txt2.content[0].value;
                          text += '<a href="'+url+'">'+txt+'</a>';
                        }
                      }                   
                    
                  });
                    text += '<br/>';
                }
                	
                });
        return text;
      
    }
    
    
    function editer_value(value){
      var text = '';
         
        $(value.content).each(function(i,txt1){
                
                if(txt1.nodeType == 'unordered-list' || txt1.nodeType == 'ordered-list'){
                    
                    $(txt1.content).each(function(x2, txt2){
                      
                      var list_item = false;
                      if(txt2.nodeType == 'list-item'){
                            text +='<ul>';
                        	list_item = true;
                       }
                      
                        $(txt2.content).each(function(x3, txt3){ 
                           
                          
                          if(list_item)
                            text +='<li>';
                            
                          $(txt3.content).each(function(x4, txt4){
                            
                              var bold_start = '', bold_false ='', underline_start= '', underline_end= '';
                          if(typeof txt4.marks !== 'undefined' ){
                             $(txt4.marks).each(function(x, mark){ 
                                if(mark.type == 'bold'){
                                  bold_false = '</b>'; 
                                  bold_start = '<b>'; 
                                }else if(mark.type == 'underline'){
                                  underline_start = '<span style="text-decoration: underline">';
                                  underline_end = '</span>';
                                }
                               
                               
                             });
                          }
                            
                           text += underline_start+ bold_start+txt4.value+bold_false+underline_end;
                          });
                          if(list_item){
                            text +='</li>';
                          }else{                          
                            text += '<br/>';     
                          }
                          
                        });
                      
                       if(txt2.nodeType == 'list-item'){
                            text +='</ul>';
                        }
                      

                    });
                    text += '<br/>';

                  }else if(txt1.nodeType =='embedded-asset-block'){
                  
                   if(typeof txt1.data.target.fields.file.url  !== 'undefined' ){
                     text += '<img src="'+txt1.data.target.fields.file.url+'" alt="#"/>';
                   }
                  
                }else{              
                 
                    var heading = '', heading_end = '';
                    if(txt1.nodeType == 'heading-1'){
                      heading = '<h1>';
                      heading_end = '</h1>';
                    }else if(txt1.nodeType == 'heading-2'){
                      heading = '<h2>';
                      heading_end = '</h2>';
                    }if(txt1.nodeType == 'heading-3'){
                      heading = '<h3>';
                      heading_end = '</h3>';
                    }if(txt1.nodeType == 'heading-4'){
                      heading = '<h4>';
                      heading_end = '</h3>';
                    }
                      
                  $(txt1.content).each(function(x, txt2){
                     
                    var bold_start = '', bold_false ='', underline_start= '', underline_end= '';;
                    if(typeof txt2.marks !== 'undefined' ){
                       $(txt2.marks).each(function(x, mark){ 
                          if(mark.type == 'bold'){
                            bold_false = '</b>'; 
                            bold_start = '<b>'; 
                          }else if(mark.type == 'underline'){
                                  underline_start = '<span style="text-decoration: underline">';
                                  underline_end = '</span>';
                           }
                           
                       });
                    }
                    
                     if(typeof txt2.value !== 'undefined'){
                       text += heading+underline_start+bold_start+txt2.value + bold_false+underline_end+heading_end;
                      }else if(txt2.nodeType == 'hyperlink'){
                        var url = txt2.data.uri;
                        if(typeof txt2.content[0] !== 'undefined' ){
                          var txt = txt2.content[0].value;
                          text += '<a href="'+url+'">'+txt+'</a>';
                        }
                      }                   
                    
                  });
                    
                    text += '<br/><br/>';
                }
                	
                });
        return text;
      
    }
    
    
    function Journal_section(value){
    
      $('#featured_Journal').hide();
      
     if(value.sectionVisible){
       
     setTimeout(function(){
          $(value.blog).each(function(index, item){

            var title='',img='', subtitle='';

            if(typeof item.fields.title !=='undefined'){
              title = item.fields.title;
            }
            if(typeof item.fields.subtitleForHomepage !=='undefined'){
              subtitle = item.fields.subtitleForHomepage;
            }
            if(typeof item.fields.featuredBlogImage !=='undefined'){
              img = item.fields.featuredBlogImage.fields.file.url;
            }

            var slg_title = title.replaceAll(' ', '-');

            var post = '<li class="grid__item medium-up--one-third"><article><header>'+
                         '<a href="/blogs/news" class="article__link">';
                if(img != ''){
                    post += '<div class="article__grid-image-wrapper"><img class="article__grid-image_new" src="'+img+'" alt="'+title+'"/></div>';
                }
                post += '</a>'+
                        ' <h3 class="article__title"><a href="/blogs/news"> '+title+'</a> </h3>'+
                         '<div class="rte article__grid-excerpt">'+subtitle+'</div>'+
                       '</header></article></li>';

            $('#blog_home').append(post);

           });   

          $('#featured_Journal').show();
     
   		}, 8800);
     }
      
   }
    
    
    function careers_page(value){
      
       if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
         
         page_meta_description(value);
         
         $(value.sections).each(function(index, item){            
           // banner
           if(index == 0){
             if(typeof item.fields.title !== 'undefined'){
               $('#careers_banner h1').html(item.fields.title);
             }
             var text = '';
              if(typeof item.fields.text1 !== 'undefined'){                
                $(item.fields.text1.content).each(function(i,txt1){
                  $(txt1.content).each(function(x, txt2){
                    text +=txt2.value;
                  });
                  
                });                
              }
             $('#careers_banner .crsbn_txt p').html(text);
             
             // button crsbn_btn
             if(typeof item.fields.ctaCallToAction !== 'undefined'){
             	var id = item.fields.ctaCallToAction.sys.id;
                
                 if(typeof id !== 'undefined'){
                    client
                    .getEntry(id)
                    .then(entry => {                     
                       banner_btn(entry.fields);                      
                    }).catch(err => console.log(err));
                  }                
             }
             
             // image
             var left_img ='';
             if(typeof item.fields.image !== 'undefined'){
               left_img = item.fields.image.fields.file.url;
             }
             
             if(left_img !=''){
               var style = '<style>.careers_banner:before{background-image:url('+left_img+')}</style>';
               $('#careers_banner').append(style);
             }
             
             if(typeof item.fields.animatedIconsIfAny !== 'undefined'){ 
                var id = item.fields.animatedIconsIfAny[0].sys.id;
                
                 if(typeof id !== 'undefined'){
                    client
                    .getEntry(id)
                    .then(entry => {                     
                       banner_right(entry.fields);                      
                    }).catch(err => console.log(err));
                  }                 
             }
             
             
           }else if(index == 1){             
             var title = '';
             if(typeof item.fields.title !== 'undefined'){             	 
               $('#core_value h2').html(item.fields.title);
             }
             var text = '';
              if(typeof item.fields.text1 !== 'undefined'){                
                $(item.fields.text1.content).each(function(i,txt1){
                  $(txt1.content).each(function(x, txt2){
                    text +=txt2.value;
                  });
                  
                });                
              }
             $('#core_value .crv_description p').html(text);
             
             $(item.fields.textColumnsAndImagesIfAny).each(function(i, list){
               var id = list.sys.id;
               
               if(typeof id !== 'undefined'){
                    client
                    .getEntry(id)
                    .then(entry => {                     
                       careers_item(entry.fields);                      
                    }).catch(err => console.log(err));
                  }               
             }); 
             
             if(typeof item.fields.image  !== 'undefined'){ 
               var img =  item.fields.image.fields.file.url;
               $('#core_value .crv_inner').html('<img src="'+img+'" alt="#"/>');
             }
              
           }else if(index == 2){
             var title = item.fields.title;
             $('#carrer_opp_section h2').html(title);             
             
              var text = '';
              if(typeof item.fields.text1 !== 'undefined'){                
                $(item.fields.text1.content).each(function(i,txt1){
                  $(txt1.content).each(function(x, txt2){
                    text +=txt2.value;
                  });
                  
                });                
              }             
             $('#carrer_opp_section .crrpp_description p').html(text);
             
              
             $(item.fields.careeropportunities).each(function(no, list){
               
               var id = list.sys.id;

               if(typeof id !== 'undefined'){
                 client
                 .getEntry(id)
                 .then(entry => {                     
                   careers_location(entry.fields, no);                      
                 }).catch(err => console.log(err));
               }  
            
             });
             
           }else if(index == 3){
             var title = '';
             if(typeof item.fields.title !== 'undefined'){
             	title = item.fields.title;
             }
             
              var text = '';
              if(typeof item.fields.text1 !== 'undefined'){                
                $(item.fields.text1.content).each(function(i,txt1){
                  $(txt1.content).each(function(x, txt2){
                     if(typeof txt2.value !== 'undefined'){
                       text +=txt2.value;
                      }else if(txt2.nodeType == 'hyperlink'){
                        var url = txt2.data.uri;
                        if(typeof txt2.content[0] !== 'undefined' ){
                          var txt = txt2.content[0].value;
                          text += '<a href="'+url+'">'+txt+'</a>';
                        }
                      }                   
                    
                  });
                  text +='<br/><br/>';
                });                
              }
             
              $('#careers_bottom_banner .crbb_heading').html(title);
             $('#careers_bottom_banner .crbb_txt').html('<p>'+text+'</p>');
             
           }
          
           
         });
       }
      
    }
    
    
    
    
    
    function careers_location(value, no){
      
      var position = '';
      var Location = '';
      var description = '';
      var url ='';
      var txt = '';
      
      if(typeof value.applyNow !== 'undefined')
      txt = value.applyNow;
      
      if(typeof value.location !== 'undefined')
      Location = value.location;
      
      if(typeof value.positionName !== 'undefined')
      position = value.positionName;      
      
        if(typeof value.description !== 'undefined'){                
          $(value.description.content).each(function(i,txt1){
            if(txt1.nodeType == 'unordered-list'){
              
              $(txt1.content).each(function(x, txt2){
                  $(txt2.content).each(function(x, txt3){                    
                    description +=txt3.content[0].value;
                    description += '<br/>';
                  });
                
              });
              description += '<br/>';
              
            }else{              
              $(txt1.content).each(function(x, txt2){
                description +=txt2.value;
              });
               description += '<br/><br/>';
            }
          });                
        }
               
      var html = '<div class="crpp_accouding">'+
          '<div class=" crrpac_item" data-id="'+no+'">'+
          '<div class="crpac_flx crrpac_text">'+
          '<div class="crpac_flx_item">' +position+ ' </div>'+
          '<div class="crpac_flx_item">'+Location+' </div>'+
          '</div>'+
          '</div> '+

          ' <div class="crpac_description" data-id="'+no+'">'+
          '<div class="crpac_description_inner">'+
          ' <div class="crpac_description_txt">'+  description + '</div>'+

          '<div class="crpac_btn_outer">'+
          '<a href="mailto:careers@nyumi.com?subject='+position+'" class="crpac_btn">'+txt+'</a>'+
          ' </div>  '+
          '</div>'+
          ' </div>'
          '</div>';
      
      	$('#carrer_opp_section .crpp_accouding_outer').append(html);
    }
    
    function careers_item(value, no){
     
      var img = '';
      var title = '';
      var description = '';
      
      title = value.title;
      if(typeof value.icon !== 'undefined'){
        img = value.icon.fields.file.url;
      }
      
      
      if(typeof value.description !== 'undefined'){                
        $(value.description.content).each(function(i,txt1){
          $(txt1.content).each(function(x, txt2){
            description +=txt2.value;
          });

        });                
      }
      
      var html = '<div class="crv_items">'+
                   '<div class="crv_icon">';
      			if(img != '')
                html += '<img src="'+img+'" alt="#"/>';
      
               html += '</div>'+
                   '<div class="crv_itme_txt">'+
                     '<div class="crv_item_headiing">'+title+' </div>'+
                     '<div class="crv_item_descrption">'+
                       '<p>'+description+' </p>'+
                     '</div>'+
                   '</div>'+
                 '</div>';
      
      $('#core_value .crv_list').append(html);
    }
    
    function banner_right(value){
      var img = value.imagegif.fields.file.url;
      
      if(typeof img !== 'undefined'){
         var style = '<style>.careers_banner:after{background-image:url('+img+')}</style>';
         $('#careers_banner').append(style);
      }
    }
    
    function banner_btn(value){
      
      var btn_txt = value.buttonTextLable;
      var link = '';
      if(typeof value.link !== 'undefined'){
        link = value.link.content[0].content[0].value;
      }
      if(typeof btn_txt  !== 'undefined'){
      	$('#careers_banner .crsbn_description').append('<a class="crsbn_btn" href="'+link+'">'+btn_txt+'</a>');
      }
    }
    
    function footer_menu(value){
      
      
      $(value.menuItems).each(function(index, item){
            var name = item.fields.title;
        	var url = item.fields.link.content[0].content[0].value;
        	var i = index+1;
        	var html = '<span class="nameset first'+i+'">'+
                		'<a href="'+url+'">'+name+'</a></span>';        
        	$('#footer_copy_right').append(html);        
      });
      $('.copyryt p').html(value.title);
      
    }
    
    function ingredients_page(value){
         
      if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
        
        page_meta_description(value);
        
        $(value.sections).each(function(index, item){
          if(index == 0){          	 
            if(typeof item.fields.text1 !== 'undefined'){             
             $('#ingredients_banner h3').html(item.fields.text1.content[0].content[0].value);
             $('#ingredients_banner h1').html(item.fields.text1.content[1].content[0].value);
            }            
          }else if(index == 1){
              
              if(typeof item.fields.text1 !== 'undefined'){                
              	$('#ingredient_full_list .ingfl_top').html('<p>'+item.fields.text1.content[0].content[0].value+'</p>');
              }
            
            $(item.fields.activeIngredients).each(function(i, list){
                var id = list.sys.id;               
                if(typeof id !== 'undefined'){
                  client
                  .getEntry(id)
                  .then(entry => {                     
                     Ingredients_item(entry.fields, i);                      
                  }).catch(err => console.log(err));
                }
            });
                        
          }else if(index == 2){          
            $('#comp_ingred_slider .section_heading').html(item.fields.title);
            
             if(item.fields.text1)
             $('#comp_ingred_slider .section_subheading').html(item.fields.text1.content[0].content[0].value);
            
               $(item.fields.storyIngredients).each(function(i, list){
                  var id = list.sys.id;               
                  if(typeof id !== 'undefined'){
                    client
                    .getEntry(id)
                    .then(entry => {                     
                       slider_item(entry.fields);
                       slider_int();
                    }).catch(err => console.log(err));
                  }
              }); 
          }else if(index == 3){    
            
            $('#ingredient .faq_title').html(item.fields.title);
            
            if(typeof item.fields.text1 !== 'undefined')
             $('#ingredient .faq_decription_txt').html('<p>'+item.fields.text1.content[0].content[0].value+'</p>');
            
            $(item.fields.text2.content[1].content).each(function(i, list){                 
            	var html = '<li><span class="inner">'+list.content[0].content[0].value+'</span></li>';
              	$('#ingredient .strikeout').append(html);
            });
            
            
          }else if(index == 4){ 
            
            var img = '';
            if(typeof item.fields.image !== 'undefined')
               img = item.fields.image.fields.file.url;
               
            var html = '<div class="half indgpg center">';
               if(img != '')
                 html +=  '<img src="'+img+'" alt="#">';
                 html +=  '</div>'+
                      '<div class="half vertical_center">'+
                        '<h3 class="cm_title">'+item.fields.title+'</h3>'+
                        '<div class="ltx_detion">'+
                          '<p>'+ item.fields.text1.content[0].content[0].value+ '</p>'+
                        '</div>'+
                        '<div class="cm_but"><a id="Purpose-button" class="button" href="https://nyumi.com/pages/ingredients">our science</a></div>'+
                      '</div> ';
            
            $('#indgpg_box_txt_img').html(html);
          }
          
          
        });
        
      }
    }
    
    function slider_item(value){      
      var img = '';
      if(value.image)
       img = value.image.fields.file.url;
      
      var html = '<li>';
      	  if(img != '')
          html +=  '<img src="'+img+'" alt="#">';
          html +=   '<h4>'+value.name+'</h4><p>';
           
          html +=  '<p>'+value.features +'</p>';
         
          if(value.sourceLocation)
          html += '<span class="component_location"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/map-black.png" alt="#"/>'+value.sourceLocation+'</span>';
          html += '</li>';
      $('#comp_ingred_slider .component_slider').append(html);
    }
    
    function Ingredients_item(value, index){ 
       
      var img = '';     
      if(typeof value.image !== 'undefined')
       img = value.image.fields.file.url;
        
      var active_class='';
      if(index == 0){
        active_class = 'active';
      }
        
      // list 
      var list_html = '<li data-id="'+index+'" class="'+active_class+'">';
      		if(img != '')
      		list_html += '<img src="'+img+'" alt="#">';
            list_html += '<span>'+ value.name+'<img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/arrow-right.png?v=57770472121948948791695642484" alt="#"></span></li>' ;
            
      $('#Ingredients_item .ingf_list ul').append(list_html);
      
      // full detail
       var description = '', willfind = '';
      if( value.description)
      description = value.description.content[0].content[0].value;
      
      if( value.youWillFind){         
        $(value.youWillFind.content).each(function(i, txt){        
         willfind += txt.content[0].value +'<br/>';
        });
      }
      
      var full_html = '<li class="'+active_class+'">';
        if(img != '')
        full_html += '<img src="'+img+'" class="ing-image" alt="#">'; 
        full_html += '<div class="ingf_txt_box">'+      				 
                     '<h4>'+ value.name+'</h4>'+
                     '<div class="ingf_txt_style">'+
                      '<p>'+description+'</p>';      
           
          if(typeof value.sourceLocation != 'undefined'){
             var features = value.sourceLocation;            
             features = features.replaceAll('|', '<br/>');            
            
            full_html += '<span class="simple_box">'+
                        '<strong>Source </strong>'+
                        '<span class="smp_txt"> '+features+' </span>'+
                        '</span>';
            
            //  <img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/map.png" alt="#"/>
          }
      
          if(willfind != ''){
            full_html += '<span class="simple_box">'+
              '<strong>You’ll find it in:</strong>'+
              '<span class="smp_txt">'+willfind+'</span>'+
              '</span> </div> </div>   </li>';
          }
      
     $('#Ingredients_item .ingf-slider').append(full_html);
      
    }
    
    function about_page(value){
     
  
      
      if(typeof value.pageUrl !== 'undefined'){
        var link = window.location.href;         
        if(link.indexOf(value.pageUrl) != -1){
         page_meta_description(value);
         
        	$(value.sections).each(function(index, item){
              if(index == 0){
                
                if(typeof item.fields.text1 !== 'undefined' ){
                  $('.about_banner h1').html(item.fields.text1.content[0].content[0].value);
                }
                if(typeof item.fields.text2 !== 'undefined' ){
                  $('.about_banner .abbn_txt').html('<p>'+item.fields.text2.content[0].content[0].value+'</p>');
                }
              }
              if(index == 1){
                var per = '', per_txt ='', description='', man_img='';
                if(typeof item.fields.text1 !== 'undefined')
                per = item.fields.text1.content[0].content[0].value;
                
                if(typeof item.fields.text2 !== 'undefined')
                per_txt = item.fields.text2.content[0].content[0].value;
                
                if(typeof item.fields.text3 !== 'undefined')
                description = item.fields.text3.content[0].content[0].value;
                  
                if(typeof item.fields.image !== 'undefined')
                man_img = item.fields.image.fields.file.url;
                   
                $('#pre_txt_image .per_value').html(per);
                $('#pre_txt_image .per_txt').html(per_txt);
                $('#pre_txt_image .ptmg_description').html('<p>'+description+'</p>');
                
                if(man_img != ''){
                 // $('#pre_txt_image .ptmg_img').html('<img src="'+man_img+'"/>');
                }
                
              }else if (index == 2){
                
                if(typeof item.fields.text1 !== 'undefined'){
                  $('#founder-journey .abtct_txt').html('<p>'+item.fields.text1.content[0].content[0].value+'</p>');
                   $('#founder-journey .abtct_small h3').html(item.fields.text1.content[1].content[0].value);
                  $('#founder-journey .abtct_sml_txt').html(item.fields.text1.content[2].content[0].value);
                }
                
                 if(typeof item.fields.text1 !== 'undefined')
                 $('#founder-journey h2').html(item.fields.title);
                 
              }else if (index == 3 || index == 4 ||  index == 5){
                
                    var img= '';
                    var flx_reverse = 'flx_reverse';
                if(index % 2){
                  flx_reverse= '';
                }                    
                    if(typeof item.fields.image != 'undefined')
                    img = item.fields.image.fields.file.url;
                
         			var html = '<div class="abt_left_image ">'+
                              '<div class="page_width"><div class="abtlf_flx '+flx_reverse+'">'+
                                '<div class="abtlf_txt">'+
                                   ' <h3>'+item.fields.title+'</h3>'+
                                   '<div class="abtlth_description">'+
                                    '<p>'+item.fields.text1.content[0].content[0].value+' </p>'+
                                   '</div>'+
                                 '</div>  '+
                                 '<div class="abtlf_img">';
                				  if(img != '')
                                    html += '<img src="'+img+'" alt="#">';
                
                              html += '</div> '+
                               '</div></div>'+
                            '</div>';
                
                 $('#abt_txt_full').append(html);
              
              }else if(index == 6){
                
                $('#abut_founder-des h3').html(item.fields.title);
                $('#abut_founder-des .txt_founder').html(item.fields.text1.content[0].content[0].value);
              }
              
            });
       }
      }
    }
    
    
    
    function contact_page(value){
       
      if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
        
        page_meta_description(value);
        
        $(value.sections).each(function(index, item){
          if(index == 0){
            if(typeof item.fields.text1 !== 'undefined'){
              $('#contact_heading .cnth_heading').html(item.fields.text1.content[0].content[0].value);
            }

             if(typeof item.fields.text2 !== 'undefined'){
              $('#contact_heading .cnth_txt').html(item.fields.text2.content[0].content[0].value);
            }
          }else if (index == 1){
            
            if(typeof item.fields.text1 !== 'undefined'){
              $('#addres_info #email_section .cmcl').html(item.fields.text1.content[0].content[0].value);
              var email = item.fields.text1.content[1].content[0].value;
              $('#addres_info #email_section .infor').html('<a href="email:'+email+'">'+email+'</a>');
            }
            
            if(typeof item.fields.text2 !== 'undefined'){
              $('#addres_info #call_section .cmcl').html(item.fields.text2.content[0].content[0].value);
              var email = item.fields.text2.content[1].content[0].value;
              $('#addres_info #call_section .infor').html('<a href="tel:'+email+'">'+email+'</a>');
            }
            if(typeof item.fields.text3 !== 'undefined'){
              $('#addres_info #sunemail_section .cmcl').html(item.fields.text3.content[0].content[0].value);
              var email = item.fields.text3.content[1].content[0].value;
              $('#addres_info #sunemail_section .infor').html('<a href=email:"'+email+'">'+email+'</a>');
            }
            
          }else if (index == 2){
            
           // item.image.fields.file.url;
            if(typeof item.fields.text1 !== 'undefined'){
               $('#find_more h2').html(item.fields.text1.content[0].content[0].value);
            }
            if(typeof item.fields.image !== 'undefined'){
              var html = '<div class="imgseting">'+
                           '<img src="'+item.fields.image.fields.file.url+'"> '+
                          '</div>';
              
              $('#find_more .find_more_imgs').append(html);
            }
            
          }
          
          
        });
        
      }
      
    }
    
    
    
    function isFutureDate(dateText) {

            var dateEntered = dateText; 
              var year  = dateEntered.substring(0, 4);
              var month = dateEntered.substring(5, 7);
              var date = dateEntered.substring(8, 10); 
      
              var dateToCompare = new Date(year, month - 1, date);
              var currentDate = new Date(); 
              
              if (dateToCompare > currentDate) {
                   return false;
              }
              else {
                   return true;
              }
        }
    
    var featured_post = 0;
    function Featured_post_detail(item, index){
       
        var img = '';
       
          if(typeof item.fields.featuredBlogImage  !== 'undefined'){
            img = item.fields.featuredBlogImage.fields.file.url
          }
          var sort_detail = item.fields.blogContentBody.content[0].content[0].value;
            
          var section = item.fields.blogContentBody;
          var full_txt = editer_value_space(section);
            
          var readmore_btn = '';
            
            var title = '', slg_title = '';
            if(typeof item.fields.title !== 'undefined'){
              title = item.fields.title;
              slg_title = title.replaceAll(' ', '-');
              slg_title = slg_title.replaceAll(',', '');
              slg_title = slg_title.replaceAll('!', '');
              slg_title = slg_title.replaceAll(':', '');
            }

          if(sort_detail.length > 155){
    		sort_detail = sort_detail.substring(0,200) + '...';            
          }
       
          readmore_btn = '<a class="bgpt_btn" href="'+slg_title+'">read more > </a>';
         
          var post = '<div class="inlpst_item" data-id="p'+index+'">'+
                      '<a class="post_detail_url" href="/blogs/news/'+slg_title+'"></a>'+
                        '<div class="inlpst_img">';
                      if(img){
                         post +='<img src="'+img+'" alt="#" />';
                      }
                post +=  '</div>'+

                        '<div class="inlpst_txt">'+
                          '<div class="inlpst_catg">'+item.fields.categoryName+'</div>'+
                          '<div class="inlpst_title">'+title+'</div>'+
                          '<div class="inlpst_description">'+sort_detail+'</div>'+
                        '</div>'+ 
                      '</div>';
      
          var post_detail = '<div class="inlpst_big" data-id="p'+index+'">'+
              				 
                             '<div class="bgpt_flx">'+
                          '<div class="bgpt_img">';
      				if(img){	
                  		post_detail += '<img src="'+img+'" alt="#" />';
                    }
                  post_detail +=  '</div>'+
                          '<div class="bgpt_txt">'+
                            '<div class="bgpt_txt_inner">'+

                              '<div class="post_catg">'+item.fields.categoryName+'</div>'+
                              '<div class="post_title">'+title+'</div>'+
                              '<div class="post_description">'+sort_detail+'</div>'+

                            '</div>'+
                         ' </div>'+
                       ' </div> '+
                         '<div class="bgpt_post_detail" data-title="'+title+'"> '+
                          '<div class="bgpt_post_detail_flx">'+
                            '<div class="bgpt_social">'+
                              '<div class="social_icon">'+
                                '<div class="social_icon_close"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_503_2x_d4585c32-280d-44fd-ae25-6e09b98341f3.png" alt="close"/></div>'+
                                '<ul class="bgpt_social_list">'+
                                  '<li><a target="_blank" href="https://www.facebook.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_497_2x_de9f3124-6476-42b6-996f-572df3a74784.png" alt="facebook"/></a></li>'+
                                  '<li><a target="_blank" href="https://twitter.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_499_2x_630a780c-5da5-4bd2-ba13-e11aa1d3a928.png" alt="twitter"/></a></li>'+
                                  '<li><a target="_blank" href="https://www.instagram.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_501_2x_44bf93a1-6734-4d26-8f62-ea89137f29e7.png" alt="pistagram"/></a></li>'+
                                '</ul>'+
                              '</div>'+
                            '</div>'+
                            '<div class="bgpt_description"> '+full_txt+ '</div>'+
                         ' </div> '+
                       ' </div> '+
                         ' </div>';
                
          
                if(featured_post < 3){
                  $('#Featured_post_item').append(post);
                  $('#Featured_post_detail').append(post_detail);
                }else{
                   $('#Featured_post_item_bottom').append(post);
                   $('#Featured_post_detail_bottom').append(post_detail);
                }
      		featured_post +=1;
            
    }
    
    
    function blog_page(value){
      
      var link = window.location.href;         
        if(link.indexOf('/blogs/news') != -1){
          
     // if(window.location.pathname == '/blogs/news'){
        
        redirect_url(value); 
        
        page_meta_description(value);
        
        $(value.blog).each(function(index, item){
         
           
          if(isFutureDate(item.fields.blogPublishingDate)){
                        
            if(typeof item.fields.featuredOnBlogListingPage !== 'undefined' && item.fields.featuredOnBlogListingPage){
                Featured_post_detail(item, index);
            } 
            
              var img = ''; 
             

                    if(typeof item.fields.featuredBlogImage  !== 'undefined'){
                      img = item.fields.featuredBlogImage.fields.file.url
                    }
                    var sort_detail = item.fields.blogContentBody.content[0].content[0].value;

                    var section = item.fields.blogContentBody;
                    var full_txt = editer_value_space(section);

                    var readmore_btn = '';

                      var title = '', slg_title = '';
                      if(typeof item.fields.title !== 'undefined'){
                        title = item.fields.title;
                        slg_title = title.replaceAll(' ', '-');
                        slg_title = slg_title.replaceAll(',', '');
                        slg_title = slg_title.replaceAll(':', '');
                        slg_title = slg_title.replaceAll('!', '');
                      }

                    if(sort_detail.length > 155){
                      sort_detail = sort_detail.substring(0,200) + '...';            
                    }
                    readmore_btn = '<a class="bgpt_btn aaa" href="/blogs/news/'+slg_title+'">read more > </a>';


                    var post = '<div class="blog_post" data-cat="'+item.fields.categoryName+'">'+
                                '<div class="bgpt_flx">'+
                                  '<div class="bgpt_img">';
                                  if(img != ''){
                                    post += '<img src="'+img+'" alt="" />';
                                  }
                        post +=    '</div>'+
                                  '<div class="bgpt_txt">'+
                                    '<div class="bgpt_txt_inner">';
                                  if(index == 0){
                                     post +=  '<div class="sub_title">THIS JUST IN</div>';
                                  }
                         post +=    '<div class="post_catg">'+item.fields.categoryName+' I '+ item.fields.readingTime+'</div>'+
                                      '<div class="post_title"><a class="url_title" href="/blogs/news/'+slg_title+'">'+title+'</a></div>'+
                                      '<div class="post_description"> <p>'+sort_detail+ readmore_btn+ '</p>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>'+

                                '<div class="bgpt_post_detail" data-title="'+title+'">'+ 
                                 ' <div class="bgpt_post_detail_flx">'+
                                    '<div class="bgpt_social">'+
                                      '<div class="social_icon">'+
                                       ' <div class="social_icon_close" data-url="'+slg_title+'"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_503_2x_d4585c32-280d-44fd-ae25-6e09b98341f3.png" alt="close"/></div>'+
                                       ' <ul class="bgpt_social_list">'+
                                        '  <li><a target="_blank" href="https://www.facebook.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_497_2x_de9f3124-6476-42b6-996f-572df3a74784.png" alt="facebook"/></a></li>'+
                                        '  <li><a target="_blank" href="https://twitter.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_499_2x_630a780c-5da5-4bd2-ba13-e11aa1d3a928.png" alt="twitter"/></a></li>'+
                                         ' <li><a target="_blank" href="https://www.instagram.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/it.png?v=1606469610" alt="pistagram"/></a></li>'+
                                       ' </ul>'+
                                     ' </div>'+
                                   ' </div>'+
                                   ' <div class="bgpt_description">'+full_txt+
                                       // ' <p>'+item.fields.blogContentBody.content[0].content[0].value+'</p>'+
                                    '</div>'+
                                  '</div>'+ 
                                '</div>'+

                              '</div>';

                    if(index < 3){
                      $('#blog_top_list').append(post);
                    }else{
                      $('#blog_bottom_list').append(post);
                    }


                    // category 
                    var cat ='<li data-id="'+item.fields.categoryName+'">'+item.fields.categoryName+'</li>';
                     var addcat = true;
                    $('#blog_cat li').each(function(){
                      if($(this).data('id') == item.fields.categoryName){
                        addcat = false;
                      }
                    });

                    if(addcat){
                     $('#blog_cat').append(cat);
                    }

                    }
            
            
          
        });
          
          
          
      }
      
    }
    
    function redirect_url(value){
      setTimeout(function(){
       $(value.blog).each(function(index, item){
         
           var title = '', slg_title = '';
            if(typeof item.fields.title !== 'undefined'){
              title = item.fields.title;
              slg_title = title.replaceAll(' ', '-');
            }
          
           var current_url = window.location.search;           
           if(current_url.indexOf(slg_title) != -1){
             console.log(current_url);
             
             $('.bgpt_post_detail[data-title="'+title+'"]').show();
          	// window.location.replace('/blogs/news');
             
               $('html, body').animate({
            		scrollTop: $('.bgpt_post_detail[data-title="'+title+'"]').offset().top - 100
        		}, 700);
           }
         
       });
      },500);
    }
    
    var faq_schema = '';
    
    function faq_page(value){
    
      if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
        
        page_meta_description(value);
        
        $(value.sections).each(function(index, item){
          // banner
          if(index == 0){
            
            var html = '<div class="half">'+
                       '<div class="leftpd banner_text">';
                  if(typeof item.fields.text1 !== ''){
                      html += '<div class="small_text cm_title comcol">'+item.fields.text1.content[0].content[0].value+'</div>';
                  }
             	  if(typeof item.fields.text2 !== ''){
                     html += '<h1 class="banner_heading top_heading">'+item.fields.text2.content[0].content[0].value+'</h1>';
                  }
                        html += '</div>'+
                  '</div>'+
                  '<div class="half">';
            	 if(typeof item.fields.image !== ''){
                     html += '<img src="'+item.fields.image.fields.file.url+'" alt="image">';
                 }
                 html += '</div>';
            
            $('.faq_banner').html(html);
          }
          
          // faq question
           
          if(index == 1 && typeof item.fields.faQsForFaqPage !== 'undefined'){
             
            $(item.fields.faQsForFaqPage).each(function(i, list){
                 var id = list.sys.id;
               
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                               faq_question(entry.fields, i);            
                        }).catch(err => console.log(err));
                    }
            });
            
            
            
            
            
          }
          
           if(index == 1 && typeof item.fields.faqCategories !== 'undefined'){
             
              $(item.fields.faqCategories).each(function(i, list){
                 var id = list.sys.id;
               
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                               faq_Categories(entry.fields, i);            
                        }).catch(err => console.log(err));
                    }
            });
             
             setTimeout(function(){
            	$('#faq_cat li:first-child').trigger('click');
               $('#faq_cat').removeClass('active');
               
               var faq_schema_pre = '{ "@context": "https://schema.org",    "@type": "FAQPage",'+
                                     '"mainEntity": [ '+
                   						faq_schema +
	                                 '] },';
               
               $('#schema_data').html(faq_schema_pre);
               
            }, 400);
            
             
           }
          
           
          
          
          
        });
        
      }
    }
    
    function faq_Categories(value,no){
       
      var cat_html = '';
      if(typeof value.title !== 'undefined')
       cat_html = '<li data-order="'+no+'" data-cat="'+value.title+'">'+value.title+'</li>';
      
      $('#faq_cat').append(cat_html);
      
    }
    
    function faq_question(value, no){
             
       var add_calss = '', style='';
       
      if(no == 0){
        add_calss = 'active';
        style = 'style="display:block"';
      }
      var cat = '';
      if(typeof value.faqCategory !== 'undefined')
      cat = value.faqCategory[0].fields.title;
      
        
       var ans = '';
      /*
      $(value.answer.content).each(function(out, cont_out){ 
        $(cont_out.content).each(function(i, cont_inner){
          if(typeof cont_inner.value !== 'undefined'){
           ans +=cont_inner.value;
          }else if(cont_inner.nodeType == 'hyperlink'){
            var url = cont_inner.data.uri;
            if(typeof cont_inner.content[0] !== 'undefined' ){
              var txt = cont_inner.content[0].value;
              ans += '<a href="'+url+'">'+txt+'</a>';
            }
          } 
        }); 
      });
      */
           
      ans = editer_value(value.answer);
      
       var item =  '<div class="product_tab_item '+add_calss+'" data-cat="'+cat+'" data-id="'+no+'">'+
                    '<div class="pdtb_heading">'+value.question+'</div>'+
                      '<div class="pdtb_detail" '+style+'>'+
                        '<p>'+ans+'</p>'+
                      '</div>'+
                    '</div>';
     
      $('#faq_quans').append(item);
      
      // schema
      ans =  ans.replaceAll('"','');
       ans =  ans.replaceAll("'",'');
      ans =  ans.replaceAll('<br/>','');
      faq_schema += '{'+
                      '"@type": "Question",'+
                      '"name": "'+value.question+'",'+
                      '"acceptedAnswer": {'+
                       ' "@type": "Answer",'+
                       '"text": "'+ans+'"'+
                      '} }';
    }
    
    function science_product(value){
      
       if(typeof value.pageUrl !== 'undefined' ){
          
          if(value.pageUrl == window.location.href){
            
            page_meta_description(value);
            
            $(value.sections).each(function(index, item){
              var name = item.fields.title;
            	// banner
              if(name == 'Science Banner'){
               // 
                var image = '';
                var title = '';
                var description = '';
                var mobile_img = '';
                
                
                if(typeof item.fields.image !== 'undefined'){
                   image = item.fields.image.fields.file.url;
                }
                if(typeof item.fields.text1 !== 'undefined'){
                   title = item.fields.text1.content[0].content[0].value;
                }
                if(typeof item.fields.text2 !== 'undefined'){
                   description = item.fields.text2.content[0].content[0].value;
                }
                 
                $('#science_banner h1').html(title);
                $('#science_banner .scbn_txt p').html(description);
                
                console.log(item);
                
                if(typeof item.fields.mobileImage !== 'undefined'){
                  mobile_img = item.fields.mobileImage.fields.file.url;
                }
                
                if(image != '')
                $('#science_banner .scbn_img').append('<img class="desktop_show" src="'+image+'" alt="#"/ >');
                
                if(mobile_img != '')
                $('#science_banner .scbn_img').append('<img class="mobile_show" src="'+mobile_img+'" alt="#"/ >');
                
              }
              
              // ingredients 
              if(name == 'Science - Ingredients'){
                   // title
                if(typeof item.fields.text1 !== 'undefined'){
                  $('#ingredients_section h2').html(item.fields.text1.content[0].content[0].value);
                }
                // description
                if(typeof item.fields.text2 !== 'undefined'){
                  $('#ingredients_section .lft_txt p').html(item.fields.text2.content[0].content[0].value);
                }
                
                // image section
                $(item.fields.contentModuleForSciencePage).each(function(index, item){
                    var id = item.sys.id;
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                               science_product_image(entry.fields, index);            
                        }).catch(err => console.log(err));
                    }
                });
               
              }
              
              // Portion
              if(name == 'Portion Control'){
               
                var image = item.fields.image.fields.file.url;
                
                // heading
                if(typeof item.fields.text1 !== 'undefined'){
                 $('#Portion_Control h3.cm_title').html(item.fields.text1.content[0].content[0].value);
                }
                if(typeof item.fields.text2 !== 'undefined'){
                 $('#Portion_Control .cm_description').html(item.fields.text2.content[0].content[0].value);
                }
                
                // img
                if(typeof item.fields.image !== 'undefined' ){
               	 $('#Portion_Control .control-image').html('<img src="'+item.fields.image.fields.file.url+'"/>');
                }
                
                // textColumnsAndImagesIfAny
                $(item.fields.textColumnsAndImagesIfAny).each(function(i, list){
                    var id = list.sys.id;
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                               science_text(entry.fields, i);            
                        }).catch(err => console.log(err));
                    }
                }); 
               
              }
              
              // Expert (Science Page)
              if(name == 'Expert (Science Page)'){
                if(typeof item.fields.text1 !== 'undefined'){
                 $('#hire_exp h2').html(item.fields.text1.content[0].content[0].value);
                }
                
                $(item.fields.contentModuleForSciencePage).each(function(i, list){                 
                  var id = list.sys.id;
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                              science_hire(entry.fields);            
                        }).catch(err => console.log(err));
                    }
                }); 
              }
              
               
              // Expert (Science Page)
              if(name == 'Heart and Science'){
                
                if(typeof item.fields.text1!== 'undefined'){
               		$('#heart_section h3').html(item.fields.text1.content[0].content[0].value);
                }
                if(typeof item.fields.text2!== 'undefined'){
               		$('#heart_section .behind_txt').html(item.fields.text2.content[0].content[0].value);
                }
                if(typeof item.fields.image !== 'undefined'){
               	 $('#heart_section .behind-scienc-image').append('<img src="'+ item.fields.image.fields.file.url+'"/>');
                }
                 
                
                if(typeof item.fields.ctaCallToAction !== 'undefined'){
                     var id = item.fields.ctaCallToAction.sys.id;
                      if(typeof id !== 'undefined'){
                        client
                          .getEntry(id)
                          .then(entry => {
                                science_btn(entry.fields);            
                          }).catch(err => console.log(err));
                      }
                }
                 
              }
              
              
            });
            
          }
       }
    }
    
    function science_btn(value){      
      var txt = value.buttonTextLable;
      var url = value.link.content[0].content[1].data.uri;
      $('#heart_btn').html('<a class="button" id="Science-btn" href="'+url+'">'+txt+'</a>');
    }
    
    function science_hire(value){
       
      var description = '';
      if(typeof value.description !== 'undefined'){
       description = value.description.content[0].content[0].value;
      }
      value.icon.fields.file.url;
      
     var html = '<div class="hrxp_flx">'+
                '<div class="hrxp_icon">';
      if(typeof value.icon !== 'undefined'){
         html += '<div class="hrxp_img"><img src="'+value.icon.fields.file.url+'" alt="#"></div>';
      }
         html +='</div>'+
              '<div class="hrxp_txt">'+
                '<h3>'+value.title+'</h3>'+
                '<div class="hrxp_description">'+
                  '<p>'+description+' </p>'+
                '</div>'+
              '</div>'+
            '</div>'; 
      
      $('#hire_exp .hrxp_outer_flx').append(html);
    }
    
    function science_text(value, no){      
      var heading = '';
      if(typeof value.title !== 'undefined'){
      	heading = '<h3 class="sml_tag">'+value.title+'</h3>';
      }
      
      var description = '';      
      if(typeof value.description !== 'undefined'){
      	description = '<p class="cm_small_txt">'+value.description.content[0].content[0].value+'</p>';
      }
      
      if(no == 2){
        $('#Portion_Control .control-last-section').html(heading+description);
      }else{
        $('#Portion_Control .flx').append('<div class="half center">'+heading+description+'</div>');
      }
      
    }
    
    function science_product_image(value, index){
      
       var descripton = value.description.content[0].content[0].value;
       var icon = '';
       var title = value.title;
      
      if(typeof value.icon !== 'undefined'){
        icon = value.icon.fields.file.url;
      }
      var left = false;
      var class_add = '';
      var order = index+1;
      if(order == 1){
        class_add = 'lft_center';
        left = true;
        
      }else if(order == 2){
         class_add = 'lft_left';
          
      }else if(order == 3){
         class_add = 'lft_right lft_big ryt_fx';
        left = true;
         
      }else if(order == 4){
         class_add = 'lft_left lft_big';
         
      }
      
      var text =  '<div class="lftmtx_txt">'+
                        '<h3>'+title+'</h3>'+
                        '<div class="lftmtx_description">'+
                          '<p>'+descripton+'</p>'+
                        '</div>'+
                      '</div>';
      var img = '<div class="lftmtx_img">';
      				if(icon != ''){
                        img +='<img src="'+icon+'" alt="#"/>';
      				 }
          img += '</div>';
                    
      
       var html = '<div data-id="'+order+'" class="lft_img_txt '+class_add+'"> <div class="lftmtx_flx">';
                if(left){
                  html += text+img;
                }else{
                  html += img+text;
                }      
                    
              html +='</div></div>';
      
      $('#ingredients_img_box').append(html);
    }
    
    function commen_pdp_txt(){
      
      setTimeout(function(){
        client
        .getEntry("5rTTD5zXICRZBKXik3PIZM")
        .then(entry => {
               pdp_txt(entry.fields);            
        })   
      }, 4800);
      
    }
    function pdp_txt(value){
       
      
      $(value.sections).each(function(index, item){
        if(index == 0){
          
          var img = '';
          if(typeof item.fields.image !== 'undefined'){
            img = item.fields.image.fields.file.url;
          }
          var html= '<div class="shipping_img">';
           if(typeof img !== 'undefined')
          	 html +=  '<img src="'+img+'" alt="shipping"/>';
             html += '</div>'+
                     '<div class="shipping_txt">'+
                       '<p>'+item.fields.title;+'</p>'+
                     '</div>';          
          $('#shipping_info').html(html); 
          
        }else if(index == 1){
          if(typeof item.fields.text1 !== 'undefined')
          $('#pdp_icon .pdi_heading').html(item.fields.text1.content[0].content[0].value);
          
          
          var id = item.sys.id;
          if(typeof id !== 'undefined'){
            client
            .getEntry(id)
            .then(entry => {
              pdp_icon_img(entry.fields);            
            }).catch(err => console.log(err));
          }
          
        }else if(index == 2){
          if(typeof item.fields.text1 !== 'undefined')
           $('#pdp_kept .faq_title').html(item.fields.text1.content[0].content[0].value);
                    
          if(typeof item.fields.text2 !== 'undefined'){
            $(item.fields.text2.content[0].content).each(function(i, list){
                 var html ='';
                 html = '<li><span class="inner">'+list.content[0].content[0].value+'</span></li>';
                 $('#pdp_kept .strikeout').append(html);
            });
          }
          
         }else if(index == 3){
           
           if(typeof item.fields.title !== 'undefined')
            $('#why_nyumi h3').html(item.fields.title);
           
           $(item.fields.textColumnsAndImagesIfAny).each(function(i, list){
             
              var id = list.sys.id;
              if(typeof id !== 'undefined'){
                client
                .getEntry(id)
                .then(entry => {
                  pdp_why_nyumi(entry.fields, i);            
                }).catch(err => console.log(err));
              }
             
           });
           
         }
        
      });
    }
    
    function pdp_why_nyumi(value, index){
        
      var img = '', description = '';
      if(value.icon !== 'undefined')
        img = value.icon.fields.file.url;
      if(value.description !== 'undefined')
        description = value.description.content[0].content[0].value;
      
      var html = '<div class="three" data-index="'+index+'">'+
                   '<div class="icon_img">';
             if(img != '' )
          	html += '<img class="res_width1" src="'+img+'" alt="color">';
          	html +=	'</div>'+
                   '<div class="icon_txts white">'+value.title+'</div>'+
                   '<div class="icon_des">'+description+'</div>'+
                '</div>';
      
      $('#why_nyumi .three-icon_box').append(html);
       
    }
    
    function pdp_icon_img(value){
       
      $(value.animatedIconsIfAny).each(function(index, item){
        
        var img = '';
        if(typeof item.fields.imagegif !== 'undefined')
        img = item.fields.imagegif.fields.file.url;
        
        var html = '<div  class="boxes">'+
                     '<div class="icon_img">';
            if(img != '')
        	html +=	'<img class="res_width1" src="'+img+'" alt="color"/>';
            html += '</div>'+
                     '<div class="icon_txt">'+item.fields.label+'</div>'+
                   '</div>';
        $('#pdp_icon .icon_boxes').append(html);
        
      });
      
    }
    
    
    function combo_product(value){   
      
      
      
      if(typeof value.productsIncluded !=='undefined' ){
        
        var url = '';
        if(value.productLink !== 'undefined')
          url = value.productLink.content[0].content[0].value;
        
        var link = window.location.href;
        var  link_first = link.split("?");
          
         if(link_first[0] == url){
             
       // if(url == window.location.href){ 
         product_faq(value); 
          
         //product_image(value);
          
       setTimeout(function(){    
        $(value.productsIncluded).each(function(index, list){
          var id = list.sys.id;
           
          if(typeof id !== 'undefined'){
             client
            .getEntry(id)
            .then(entry => {
               product_ingredients(entry.fields, index+1); 
               product_nonActiveIngredients(entry.fields);  
               nutritional_img(entry.fields);
            }).catch(err => console.log(err));
          }
          
          if(typeof list.fields.productName !== 'undefined'){
            var name = list.fields.productName.content[0].content[0].value;
            combo_ingredients(name, index);
          }           
          
        });
         
      }, 6200);
          setTimeout(function(){
        	slider_int();
          }, 6900);
      }
      
      
      }
       
         
        
       //  combo_ingredients('radiant skin', 'ut care');
       //  commen_pdp_txt();
        
      }
    
    
    function combo_ingredients(name1, no){
      var active= '';
      if(no == 0){
        active='active';
      }
      var html = '<li class="'+active+'">'+name1+'</li>';      	  
      $('.ingredient_combo_menu ul').append(html);
    }
    
     var pd_img = 0;
     function product_video(value, all_img){
       
       
       
      if(typeof value.productVideo !== 'undefined' ){  
        
        $(value.productVideo).each(function(index, item){        
            
          all_img += index
          if(typeof item.fields !== 'undefined'){ 
              var video = '<video width="100%" height="100%" controls disablepictureinpicture controlslist="nodownload"> <source src="'+item.fields.video.fields.file.url+'" type="video/mp4"> </video>';              
            }
          
            if(typeof item.fields.thumbnail !== 'undefined'){             	
                var image_thumb = '<img src="'+item.fields.thumbnail.fields.file.url+'" alt="product image" />';
            }else{
              var image_thumb = '<img src="'+"\/\/cdn.shopify.com\/s\/files\/1\/0412\/3027\/0631\/t\/113\/assets\/video.jpg?v=3256721065610687651695642484"+'" alt="product image" />';
            }
            
             $('#product_slider').append('<div class="slider_itmes">'+video+'</div>');
            
             $('#product_slider_thumb').append('<li data-index="'+pd_img+'" class="slider_thumb">'+image_thumb+'</li>')
            pd_img +=1;
        }); 
        
        var size = ($(value.additionalImagesDetailPage).size()+1)*65;
        $('#product_slider_thumb').css('min-width', size);
        
      }
     
    }
    
    
   
    function product_image(value){
      
       
        var all_img = 0;
      if(typeof value.additionalImagesDetailPage !== 'undefined' ){  
        
       
        $(value.additionalImagesDetailPage).each(function(index, item){        
            
          
          if(typeof item.fields !== 'undefined'){     
            if(item.fields.file.contentType == 'video/mp4'){
              var img = '<video width="100%" height="100%" controls disablepictureinpicture controlslist="nodownload"> <source src="'+item.fields.file.url+'" type="video/mp4"> </video>';
              var image_thumb = '<img src="'+"\/\/cdn.shopify.com\/s\/files\/1\/0412\/3027\/0631\/t\/113\/assets\/video.jpg?v=3256721065610687651695642484"+'" alt="product image" />';
            }else{
             	var img = '<img src="'+item.fields.file.url+'" alt="product image" />';
                var image_thumb = '<img src="'+item.fields.file.url+'" alt="product image" />';
            }
            
             $('#product_slider').append('<div class="slider_itmes">'+img+'</div>');
            
             $('#product_slider_thumb').append('<li data-index="'+pd_img+'" class="slider_thumb">'+image_thumb+'</li>')
          }
          all_img = index;
          pd_img +=1;
        }); 
        
      }
      
       product_video(value, pd_img);
     
    }
    
    
    function run_slider(){
      setTimeout(function(){
        
        $('.product_image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            adaptiveHeight: true
         });
        
      },800);
    }
    
    function nutritional_img(value){
       
       if(typeof value.nutritionalInfo !== 'undefined' ){
         var img = '<div class="nutritional_item"><img src="'+value.nutritionalInfo.fields.file.url+'" alt="#"/></div>';
         $('.show-nutrition .nutrition_flx').append(img);
       }
    }
    function product_detail(value){
      
            if(typeof value.productLink !== 'undefined' ){  
        
         var url = value.productLink.content[0].content[0].value;  
          var link = window.location.href;  
              
          var  link_first = link.split("?");
         // if(link.indexOf(url) != -1){
           if(link_first[0] == url){
            // whyNyumibgColor  
             
          
            
            page_meta_description(value);
            
             product_image(value);
             //product_video(value);
             run_slider();
            
            
             nutritional_img(value);
            
            
            if(typeof value.whyNyumibgColor !== 'undefined' ){
              var style= value.whyNyumibgColor;
              var txt = '<style>.bottom_section{background-color:#'+style+'}</style>';
              $('body').append(txt);
            }            
            
            // commen text all product
            commen_pdp_txt();            
            
            // Purpose
              if(typeof value.productPurpose !== 'undefined' ){
                 $('.product_sub_title').html(value.productPurpose);
              }
              
            // flavour
            if(typeof value.flavour !== 'undefined' ){
              var html = '';
              var label = value.flavour.fields.label;
              var img = value.flavour.fields.imagegif.fields.file.url;
               html = '<img src="'+img+'" alt="orange"/>'+
                      '<div class="pd_sty_txt">'+label+'</div>';
              $('.product_sub_type').html(html);
            }
            
            // Description
            if(typeof value.productDescriptionForDetailPage !== 'undefined' ){
               $('.product-single__description').html(value.productDescriptionForDetailPage.content[0].content[0].value);
            }
            
            //Supply            
             if(typeof value.supply !== 'undefined' ){
               $('.product_tab_heading').html(value.supply);
            }            
            
            // lookForwardTo
            if(typeof value.lookForwardTo  !== 'undefined' ){
              var html = '';
              $(value.lookForwardTo).each(function(index, item){
                var label = '';
                if(typeof item.fields.label !== 'undefined')
                label =item.fields.label;
                
                var img = '';
                
                if(typeof item.fields.imagegif !== 'undefined')
                img = item.fields.imagegif.fields.file.url;
                
                
                html += '<div class="pdtb_item">'+
                        '<div class="pdtb_img">';
                if(img != '')
                html +=   '<img src="'+img+'" alt="#"/>';
                
                html +=  '</div>'+
                        '<div class="pdtb_txt">'+label+'</div>'+
                     ' </div>';
              });
              $('#lookForwardTo .pdtb_flx').html(html);              
            }            
           
            //storeItRight
            if(typeof value.storeItRight  !== 'undefined' ){ 
              var li_html = '';
              $(value.storeItRight.content[0].content).each(function(i, line){
                li_html +=line.value;
              });              
              $('#storeItRight .pdtb_flx').html('<p>'+li_html+'</p>');
            }
            
            //dailyDosage
            if(typeof value.dailyDosage  !== 'undefined' ){
               var li_html = '';
              $(value.dailyDosage.content).each(function(i, line){
                li_html +=line.content[0].value+'<br/>';
              });               
              
              $('#dailyDosage .pdtb_flx').html('<p>'+li_html+'</p>');
            }
            
             setTimeout(function(){
              //ingredients
              if(typeof value.ingredients !== 'undefined' ){
                 product_ingredients(value, 1);              
              }
               $('.ingredient_section').show();
             }, 4200);
                        
            // nonActiveIngredients
             
            setTimeout(function(){ 
              if(value.nonActiveIngredients !== 'undefined' ){
                product_nonActiveIngredients(value);              
                slider_int();
              }
              $('#nonActiveIngredients').show();
            }, 5500);
            
            // faq
            setTimeout(function(){ 
              if(value.gotDoubtsFaQs !== 'undefined' ){
                product_faq(value);             
              }
              $('#why_nyumi').show();
              
            }, 6200);
             
            
             setTimeout(function(){ 
            	if(value.gotDoubtsImages !== 'undefined' ){
              var html_style = '';
              $(value.gotDoubtsImages).each(function(index, item){
                if(typeof item.fields.file.url !== 'undefined'){
              	   var img = item.fields.file.url;
                  if(index == 0){
                    html_style += '.faq_section:before{background-image:url('+img+')}';
                  }else{
                    html_style += '.faq_section:after{background-image:url('+img+')}';
                  }
                  
                }
                
              });
               $('#product_faq').append('<style>'+html_style+'</style>');
              
            }
               $('#product_faq, #nutritionInfo, #pdp_kept, .product-reviews-section').show();
            }, 6600);
          }
      }
    }
    
    var faq_count = 0;
    
    function product_faq(value){
       var html = '';
       var product_faq = '';
      
        $(value.gotDoubtsFaQs).each(function(index, item){
                
                 var question = '';
                 var answer = '';
                 
                if(typeof item.fields.question !== 'undefined'){
                   question = item.fields.question;
                }                
                if(typeof item.fields.answer !== 'undefined'){
                   answer = item.fields.answer.content[0].content[0].value;
                }  
                var add_calss = '';
                var style= '';
                 if(faq_count == 0){
                  add_calss = 'active';
                  style = "style='display:block'";
                }
                 
                html +=  '<div class="product_tab_item '+add_calss+'" data-id="'+faq_count+'">'+
                          '<div class="pdtb_heading">'+question+'</div>'+
                            '<div class="pdtb_detail"' +style+'>'+
                              '<p>'+answer+'</p>'+ 
                           '</div>'+
                          '</div>';   
               
          	    faq_count +=1;
          
          		// ld+json 
             
          		product_faq += '{ "@type": "Question", "name": "'+question+'",'+
                                  '"acceptedAnswer": { "@type": "Answer", "text": "'+question+'" } },';
        
              }); 
        $('#product_faq .ac-container').html(html); 
       
         product_faq = product_faq.slice(0,-1);
         product_faq = '{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": ['+product_faq+'] }';

      
        $('#product_faq_json').html(product_faq);
      
    }
    
    function product_nonActiveIngredients(value){
      var html = '';
      $(value.nonActiveIngredients).each(function(index, item){                 

        var name = '';
        if(item.fields.name !== 'undefined'){
          name = item.fields.name;
        }
        var sourceLocation = ''; 
        var image = '';
        var description =  '';

        if(typeof item.fields.sourceLocation !== 'undefined' ){
          sourceLocation = item.fields.sourceLocation; 
        }
        if(typeof item.fields.image !== 'undefined' ){
          image = item.fields.image.fields.file.url;
        }
        if(typeof item.fields.description !== 'undefined' ){
          description =  item.fields.description.content[0].content[0].value;
        }

        html += '<li>';
        if(image != '')
          html += '<img src="'+image+'" alt="#">';                   
        html +='<h4>'+name+'</h4>'+
          '<p>'+description+'</p>';
        if(sourceLocation != '')
          html +='<span class="component_location"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/map-black.png" alt="#"/>'+sourceLocation+'</span>';
        html +='</li>';                
      });

      $('#nonActiveIngredients .component_slider').append(html);
      
    }
    
    function product_ingredients(value, type){
          var list_html = '';
          var detail_html = '';
              $(value.ingredients).each(function(index, item){
                 var name = item.fields.name;
                 var img = '';
                 var description = '';
                 var active = '';                  
                if(index == 0){
                  active= 'active';
                }
                
                if(typeof item.fields.image !== 'undefined' ){
                  img = item.fields.image.fields.file.url;
                }
                if(typeof item.fields.description !== 'undefined' ){
                  description = item.fields.description.content[0].content[0].value;
                }
                
                 list_html +=  '<li class="'+active+'">';
                 if(img != '')
                   list_html +=  '<img src="'+img+'" alt="#">';                
                  list_html += '<span>'+name+' <img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/arrow-right.png?v=57770472121948948791695642484" alt="#"></span></li>';                 
                 detail_html += '<li class="'+active+'">';
                 if(img != '')
                  detail_html += '<img src="'+img+'" class="ing-image" alt="#">';
                  detail_html += '<h4>'+name+'</h4>';
                  if(description != ''){
                    detail_html += '<p>'+description+'</p>';
                  }
                  detail_html += '</li>';
              });
              
              $('#ingredients .content_wrapper[data-id="'+type+'"] .vertical-scroller').html(list_html);
              $('#ingredients .content_wrapper[data-id="'+type+'"] #fade-sliders').html(detail_html);
      }
    
    
    
      function footer_menu_left(value){
        $(value.menuItems).each(function(index, item){
          var name = item.fields.buttonTextLable;
          var url = '';
           
          if(typeof item.fields.link !== 'undefined' ){
            if( typeof item.fields.link.content[0].content[1] !== 'undefined'){
               url = item.fields.link.content[0].content[1].data.uri;
            }else{
               url = item.fields.link.content[0].content[0].value;
            }
          }
      
          var html = '<li><a href="'+url+'"> '+name+' </a>  </li>';
           $('#footer1_section #footer_menu_left').append(html);
          
        });
      }
    
    function footer_menu_right(value){
        $(value.menuItems).each(function(index, item){
          var name = item.fields.buttonTextLable;
          var url = '';
           
          if(typeof item.fields.link !== 'undefined' ){
            if( typeof item.fields.link.content[0].content[1] !== 'undefined'){
               url = item.fields.link.content[0].content[1].data.uri;
            }else{
               url = item.fields.link.content[0].content[0].value;
            }
          }
      
          var html = '<li><a href="'+url+'"> '+name+' </a>  </li>';
           $('#footer1_section #footer_menu_right').append(html);
          
        });
      }
    
    
    function footer_section(value){
       
      // left section 
      var address = value.address.content[0].content[0].value;
      var email = value.emailAndPhoneNumber.content[0].content[0].value;
      var logo = value.nyumiLogo.fields.file.url;
      var logo_alt = value.nyumiLogo.fields.description;
      
      
      var html =   '<div class="footer_logo"><img src="'+logo+'" alt="'+logo_alt+'"></div>'+
                    '<div class="desktop"><p>'+address+'</p></div>'+	
                     '<div class="desktop">'+
                      '<strong><span class="nameset first1">'+email+'</span></strong>'+
                    '</div>';
      var mobiile_email = '<strong><span class="nameset first1">'+email+'</span></strong>';
      
      $('.mobile_email').html(mobiile_email);
        
      $('#footer1_section #address_box').html(html); 
       
    }    
    
    
    function header_section(value){ 
      //announcement bar
       var announcement = value.announcementBanner.content[0].content[0].value;      
       var html = '<p class="announcement-bar__message">'+announcement+'</p>';
       $('#announcement_bar').html(html);
      
      // header menu 
     
      var menu = value.headerMenu.fields.menuItems;
      $(menu).each(function(index, item){
        
          var id = item.sys.id;
                if(typeof id !== 'undefined'){ 
                   client
                    .getEntry(id)
                    .then(entry => {
                             header_menu(entry.fields, index);            
                      }).catch(err => console.log(err)); 
                }
           }); 
    }
    
    function header_menu(value, no){
       
       var name = value.buttonTextLable;
       var url = value.link.content[0].content[0].value;
      if(typeof value.link.content[0].content[1] !== 'undefined'){
         url = value.link.content[0].content[1].data.uri;
      }else{
         url = value.link.content[0].content[0].value;
      }
      
      var active = '', relative= 'no_hover_img'; 
      if(url == window.location.href){
        active = 'site-nav--active';
      }
      var order = 10; 
      if(name == 'shop'){
        order = 1;
        relative = '';
      }else if( name == 'story'){
        order = 2;        
      }
     order = no;
      // desktop menu
      var menu= '<li class="'+relative+'" data-order="'+order+'" ><a href="'+url+'" class="site-nav__link site-nav__link--main '+active+'">'+
                  '<span class="site-nav__label">'+name+'</span>'+
                '</a>';
      
         // product menu 
          if(typeof value.productAssignedIfAny !== 'undefined'){
            
             menu += '<div class="site_mega_menut"> <ul>';
             $(value.productAssignedIfAny).each(function(index, item){
                
                var hover = '', img = '', link = '', name= '';
               
                if(typeof item.fields.productLink.content[0].content[1] !== 'undefined'){
                     link = item.fields.productLink.content[0].content[1].data.uri;
                  }else{
                     link = item.fields.productLink.content[0].content[0].value;
                  }
               
                  if(typeof item.fields.productName !== 'undefined'){
                    name = item.fields.productName.content[0].content[0].value;
                  }else if(typeof item.fields.comboName !== 'undefined'){
                    name = item.fields.comboName;
                  }
                
              	 if(typeof item.fields.comboName !== 'undefined' && typeof item.fields.productImageForHeaderMenu !== 'undefined' ){
                    img = item.fields.productImageForHeaderMenu.fields.file.url;                   
                 }else if(typeof item.fields.productImage !== 'undefined'){
                    img = item.fields.productImage.fields.file.url;
                 }
               
                  if(typeof item.fields.productImageForHeaderMenu !== 'undefined' && typeof item.fields.comboName === 'undefined'){                    
                      hover = item.fields.productImageForHeaderMenu.fields.file.url;                   
                  }
                
                menu += '<li class="mega_items "  data-hover="'+hover+'">';
                    if(hover)
                      menu += '<div class="mega_items_hover" style="background-image:url('+hover+')"></div>';
                
                    menu +=  '<a class="'+active+'_new" href="'+link+'">';
                    if(img != '')
                    menu += '<img src="'+img+'" alt="#"/>';
                    menu += '<span class="mega_txt"> <span class="mega_txt_style">'+name+'</span> <span class="menu_sign"> > </span> </span>'+
                        '</a>'+
                     '</li>';
               
             });
             menu +=  '</ul> </div>';
          }
         // normal image
         else if(typeof value.submenusbuttons !== 'undefined'){
              
            menu += '<div class="site_mega_menut"> <ul>';
             
        	     
            $(value.submenusbuttons).each(function(index, item){ 
               
               var link = '';                
                if(typeof item.fields.link.content[0].content[1] !== 'undefined'){
                     link = item.fields.link.content[0].content[1].data.uri;
                  }else{
                     link = item.fields.link.content[0].content[0].value;
                  }
                    active = '';
                   if(link == window.location.href){
                      active = 'site-nav--active';
                    }
              
               var a = 'ingredients.png';
               var b = 'about.png';
              
              // menu
               var img = '', hover='';
                
              		/*
                    if(item.fields.buttonTextLable== 'Ingredients'){
                         img= '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/ingredients.png?v=68284707682751100621695642484';   
                    } else if(item.fields.buttonTextLable== 'Science'){
                         img= '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/science.png?v=140547661855125755751695642484'; 
                    } else  if(item.fields.buttonTextLable== 'About'){
                         img= '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/about.png?v=140087271171188008681695642484';
                    }else  if(item.fields.buttonTextLable== 'skin'){  
                      img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/p-01.png?v=70321680026849546931695642484';
                      hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/Skin_icon.png?v=8798128366405522401695642484';
                     }else if(item.fields.buttonTextLable== 'sleep'){
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/p-02.png?v=106027680925421685811695642484';
                       hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/Sleep_Icon.png?v=130030158599845727431695642484';
                     }else if(item.fields.buttonTextLable== 'immunity'){
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/p-05.png?v=85405605534512633741695642484';
                       hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/Immunity_Icon.png?v=122082383887061141401695642484';
                     }else if(item.fields.buttonTextLable== 'uti'){
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/p-04.png?v=2432197703919416331695642484';
                       hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/UTI_icon.png?v=57958794406455294291695642484';
                     }else if(item.fields.buttonTextLable== 'hair & nails'){
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/p-03.png?v=154247179845821094391695642484';
                       hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/Hair_Icon.png?v=169729995983690088441695642484';
                     }else{
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/p-01.png?v=70321680026849546931695642484';
                     }
              		*/		
             
              
              
              if(typeof item.fields.imageIfNeeded !== 'undefined'){
                img = item.fields.imageIfNeeded.fields.file.url;                
              }
              
              if(order !=1){
                  menu += '<li class="mega_items " > <a href="'+link+'" class="'+active+'_new">';
                           
                   if(img != '')
                     menu += '<img src="'+img+'" alt="#"/>';   
                    
                   menu +=  '<span class="mega_txt"> <span class="mega_txt_style">'+item.fields.buttonTextLable+'</span> <span class="menu_sign"> > </span> </span></a>  </li>';
              }else{
                    
                    menu += '<li class="mega_items "  data-hover="'+hover+'">';
                    if(hover)
                      menu += '<div class="mega_items_hover" style="background-image:url('+hover+')"></div>';
                 
                    menu +=  '<a class="'+active+'_new" href="'+link+'">';
                    if(img != '')
                    menu += '<img src="'+img+'" alt="#"/>';
                    menu += '<span class="mega_txt"> <span class="mega_txt_style">'+item.fields.buttonTextLable+'</span> <span class="menu_sign"> > </span> </span>'+
                        '</a>'+
                     '</li>';
              }
              
            });
            
            menu +=  '</ul> </div>';
             
          }
      
          menu +='</li>';
      $('#menu_list').append(menu);
      
      // mobile menu 
      var menu_name = 'shop';
      var active_submenu = '';
      var class_name='';
      if(menu_name == name){
        class_name = 'active';
        active_submenu = 'style="display:block"';
      }
      		
      var mobile_menu = '<li data-order="'+order+'" class="mobile-nav__item ">';
                   if(typeof value.submenusbuttons !== 'undefined'){
                      mobile_menu +=  '<button type="button" class="btn--link mobile_child_item mobile-nav__link '+class_name+'" data-target="menu-'+no+'"  data-level="1" aria-expanded="false">'+
                        '<span class="mobile-nav__label">'+name+'</span>'+
                         '<div class="mobile-nav__toggle">'+
                          '<img class="plus_img" src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/plus.png?v=19405718348818129421695642484" alt="plus">'+
                          '<img class="minis_img" src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/minis.png?v=14085178808061018951695642484" alt="minis">'+
                        '</div>'+
                      '</button>'+
                    '<ul class="mobile-nav__dropdown" data-parent="menu-'+no+'" data-level="2" '+active_submenu+'>';
                     
                     if(order == 0){
                        mobile_menu += '<li class="mobile-nav__item">'+
                                  '<a href="'+url+'" class="mobile-nav__sublist-link">'+                                  
                                    '<span class="mobile-nav__label">'+name+' all</span>'+
                                  '</a>'+
                               '</li>';
                     }
                     
                      $(value.submenusbuttons).each(function(index, item){
                         var link = '';
                         

                          if(typeof item.fields.link.content[0].content[1] !== 'undefined'){
                               link = item.fields.link.content[0].content[1].data.uri;
                            }else{
                               link = item.fields.link.content[0].content[0].value;
                            }
                        mobile_menu += '<li class="mobile-nav__item">'+
                                  '<a href="'+link+'" class="mobile-nav__sublist-link">'+                                  
                                    '<span class="mobile-nav__label">'+item.fields.buttonTextLable+'</span>'+
                                  '</a>'+
                               '</li>';
                      });
                     
                  mobile_menu += '</ul>';
                   }else{
              		 mobile_menu += '<a href="'+url+'" class="mobile-nav__link">'+
                            '<span class="mobile-nav__label">'+name+'</span>'+
                          '</a>'+
                      '</li>';
                   }
      
     $('#MobileNav').append(mobile_menu); 
    }
    
    function collection_page(value){
     
      var url = value.pageUrl;
       
      if(url == window.location.href){ page_meta_description(value); }
      
         // banner
        var banner = value.sections[0];
        var img_url = banner.fields.image.fields.file.url;
        var text1 = banner.fields.text1.content[0].content[0].value;
        var text2 = banner.fields.text2.content[0].content[0].value;
       
         var html=  '<img src="'+img_url+'">'+
                     '<div class="absolute">'+
                      '<div class="banner_text">'+
                        '<div class="small_text center cm_title comcol">'+text1+'</div>'+
                        '<h1 class="banner_heading center top_heading">'+text2+'</h1>	'+
                     '</div>'+
                     '</div>';
        
            $('#collectino_banner').html(html);
        
          // fotter section 
          var banner = value.sections[1];
          var title = banner.fields.title;
      
       setTimeout(function(){
      
         coll_sort_description();
         
         //$('#Collection').show();
       },3900);
      
      setTimeout(function(){
        
          $('#coll_btm_section h3').html(title);
          
          $(banner.fields.textColumnsAndImagesIfAny).each(function(index, item){
               var id = item.sys.id;
                if(typeof id !== 'undefined'){
                  
                   client
                    .getEntry(id)
                    .then(entry => {
                             collection_bottom(entry.fields, index);            
                      })       
                        .catch(err => console.log(err));
                   
                }
           });
        
      },6000);
        
        
        
      
    }
    function coll_sort_description(){
      
      // home page product 
       client.getEntry('7FTjrOg7iLj4JrmQaC56WO')
         .then(entry => {
           add_sort_description(entry.fields);            
         }).catch(err => console.log(err));
      
    }
    function add_sort_description(value){
       
      $(value.productFeaturedIfAny).each(function(index, item){
        var url = item.fields.productLink.content[0].content[0].value;
        var st_html = '';
        if(typeof item.fields.shortDescriptionForListingPage.content[0].content[0].value !== 'undefined'){
          st_html = item.fields.shortDescriptionForListingPage.content[0].content[0].value;
        }
        $('.product_description[data-url="'+url+'"]').html(st_html);
        
        
        
        if(typeof item.fields.listingPageImage !== 'undefined'){
          var img =  item.fields.listingPageImage.fields.file.url;
          $('.product_description[data-url="'+url+'"]').closest('.product-card').find('img.grid-view-item__image')
          			.attr('src', img)          			 
          			.removeAttr('srcset');
        }
        
        if(typeof item.fields.listingPageIcon !== 'undefined'){
          var icon_img =  item.fields.listingPageIcon.fields.file.url;
          $('.product_description[data-url="'+url+'"]').closest('.product-card').find('.prdocut_icon')
          	.html('<img src="'+icon_img+'"/>');
        }
        
      }); 
    }
    
    
     function add_bundle_description(value){
        
       var url = value.productLink.content[0].content[0].value;
        
       if(typeof value.listingPageImage !== 'undefined'){
          var img =  value.listingPageImage.fields.file.url;
          
          $('.product_description[data-url="'+url+'"]').closest('.product-card').find('img.grid-view-item__image')
          			.attr('src', img)          			 
          			.removeAttr('srcset');
        }
        
        if(typeof value.listingPageIcon !== 'undefined'){
          var icon_img =  value.listingPageIcon.fields.file.url;
          $('.product_description[data-url="'+url+'"]').closest('.product-card').find('.prdocut_icon')
          	.html('<img src="'+icon_img+'"/>');
        }
        
       
    } 
    
    
    
    function collection_bottom(valu, index){
      
      
        var title = valu.title;
        var description = valu.description.content[0].content[0].value;
        var icon = valu.icon.fields.file.url;

        var html = '<div class="three" data-index="'+index+'">'+
                     '<div class="icon_img"><img class="res_width1" src="'+icon+'" alt="color"></div>'+
                     '<div class="icon_txts white">'+title+'</div>'+
                     '<div class="icon_des">'+description+'</div>'+
                   '</div>';
        $('#coll_btm_box').append(html).show();
        
        $('#coll_btm_section').show();
       
      
    }
    
    
    function Product_section(value){  
       
      $('#product_section').hide();
      if(value.sectionVisible){
        
        setTimeout(function(){
          var heading =  value.text1.content[0].content[0].value;
          add_muli_product(value);
          $('#product_section #product_heading').html(heading); 
           
          
        }, 6000);
        
          setTimeout(function(){ 
            $('#product_section').show();
             nyumi_api.slder_product();
           },7200);
      }
       
    }
    
    function product_icon(value, index){
       
	  var item = '<div class="pdil_itmes" data-index="'+index+'">'+
                  '<div class="pdil_img">';
      				if(typeof value.imagegif !== 'undefined')
                  	item +='<img src="'+value.imagegif.fields.file.url+'" alt="'+value.imagegif.fields.description+'"/>';
                item += '</div>';
      		if(typeof value.label !== 'undefined'){
                var str =  value.label.substr(0,13);
                //str +='..';
                item += '<div class="pdil_txt">'+value.label+' </div>';
             }
             item += '</div>';
      return item;
    }
    
    function add_muli_product(value){
    /*
     var icon =  '<div class="product_icon_li">'+
                      '<div class="pdil_itmes">'+
                        '<div class="pdil_img">'+
                         '<img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/s-01.png?v=5951547802039784641695642484" alt="#"/>'+
                        '</div>'+
                        '<div class="pdil_txt"> Restful Sleep </div>'+
                      '</div>'+
                      '<div class="pdil_itmes">'+
                        '<div class="pdil_img">'+
                         '<img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/s2.png?v=166658742542489904601695642484" alt="#"/>'+
                        '</div>'+
                        '<div class="pdil_txt">Skin Repair</div>'+
                      '</div>'+
                      '<div class="pdil_itmes">'+
                        '<div class="pdil_img">'+
                         '<img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/s3.png?v=143646789359622602311695642484" alt="#"/>'+
                        '</div>'+
                        '<div class="pdil_txt">Reduces Fatigue</div>'+
                      '</div>'+
                    '</div> ' ;  
      
       */
      
      $(value.productFeaturedIfAny).each(function(index, item){  
        var html = '';  
        var productCategory = '';
        var img = '', img_alt='';
        var url = '';        
         if(index > 4){
          $('.show_more_product').addClass('active');
        }
       
          var icon = ''; 
        $(item.fields.benefitIconsForHomepageProductSection).each(function(i, line){         
           var id = line.sys.id;
           
           if(typeof id !== 'undefined'){                  
             client
             .getEntry(id)
             .then(entry => {
              icon = product_icon(entry.fields, i);  
               
               if(icon != ''){                  
                  $('#product_section #product_add_item .pdhm_itme[data-index="'+index+'"] .product_icon_li').append(icon); 
                } 
               
             }).catch(err => console.log(err));  
             
              
           }

        });
        
         
        
        var style = '';
        // gummyImagesforHome
        $(item.fields.gummyImagesforHome).each(function(i, list){          
          if(typeof list.fields.file.url !== 'undefined'){
             var gn = i +1;            
             style += '.product_section_outer[data-val="'+index+'"] .pdhm_gummy.pdhm_gummy_'+gn+':before {'+
                        'background-image: url('+list.fields.file.url+');'+
                    '}';
            
              style +='@media only screen and (max-width: 768px){ .product_section_outer .pdhm_itme[data-index="'+index+'"] .pdhm_gummy.pdhm_gummy_'+gn+':before {'+
                        'background-image: url('+list.fields.file.url+');'+
                      '} }';
             // bottom gummy
            if(i == 0){
              style += '.product_section_outer[data-val="'+index+'"] .page_width:after {'+
                          'background-image: url('+list.fields.file.url+');'+
                        '}';
              
              style += '.product_section_outer .pdhm_itme[data-index="'+index+'"]:after {'+
                          'background-image: url('+list.fields.file.url+');'+
                        '}';
            }
          }          
        });
        
        var img_add = '';
        // backgrond          
        if(typeof item.fields.backgroundImageforHomePage !== 'undefined'){
            style += '.product_section_outer[data-val="'+index+'"]:before {'+
                          'background-image: url('+item.fields.backgroundImageforHomePage[0].fields.file.url+');'+
                      '}';
          
            style += '.pdhm_itme[data-index="'+index+'"]:before {'+
              			 'background-image: url('+item.fields.backgroundImageforHomePage[0].fields.file.url+');'+
                      '}';
           img_add = '<div class="bg_img"><img src="'+item.fields.backgroundImageforHomePage[0].fields.file.url+'" alt=""/></div>';
        }        
        $('#product_section_style').append(style);
        
        $('.hide_img_section').append(img_add);
        
        
        if(typeof item.fields.productImage.fields.file.url !== 'undefined'){           
          img = item.fields.productImage.fields.file.url;
          if(typeof item.fields.productImage.fields.description !== 'undefined')
           img_alt = item.fields.productImage.fields.description;
        }
        
        productCategory = item.fields.productCategory;
        var productName = item.fields.productName.content[0].content[0].value;
        var productDescription= ''; 
        if(typeof item.fields.productLink !== 'undefined' )
        url = item.fields.productLink.content[0].content[0].value;
         
        if(typeof item.fields.productDescription !== 'undefined')
          productDescription = item.fields.productDescription.content[0].content[0].value;
                                                               
        html  = '<div class="pdhm_itme" data-index="'+index+'"><a class="url_btn_style" href="'+url+'"></a>'+ 
                '<div id="product_items" class="product-items">'+ 
          '<div class="productName" style="color:'+item.fields.productTitleColorforHomepage+'">'+productName+'</div>'+
                '<div class="productDescription">'+productDescription+'</div>'+
                '<div class="product_icon_li"></div>'+          		 
                '<a class="btn_style_pd" href="'+url+'">shop </a>'+
                '</div>'+
                '<div class="big_img_box">'+
                '<div class="pdhm_gummy pdhm_gummy_1"></div>'+
          		'<div class="pdhm_gummy pdhm_gummy_2"></div>'+
          		'<div class="pdhm_gummy pdhm_gummy_3"></div>';
        if(img !=''){
          html  +=  '<img class="big_img_slider"  src="'+img+'" alt="'+img_alt+'"/>';
        }
         html  +=     '</div>';                                                      
                                                               
       $('#product_section #productCategory').append('<div class="category_item" data-item="'+index+'">'+productCategory+'</div>');
       $('#product_section #product_add_item').append(html); 
      
       
        
      });
      
      
    }
    
    function Purpose_section(value){
      
      $('#Purpose').hide();
      
      if(value.sectionVisible){        
        setTimeout(function(){
         
              var heading = value.text1.content[0].content[0].value;
              var subheading = value.text2.content[0].content[0].value;

              subheading = editer_value(value.text2);
             // subheading = subheading.replace("<br>", " ");
              var description = '';
              $(value.text3.content).each(function(index, item){
                var next_line = '';
                if(index !=0){  next_line = ' '; }
                description += next_line +item.content[0].value;
              });


              var text = value.text4.content[0].content[0].value;
              var btn = value.ctaCallToAction.fields.link.content[0].content[1].content[0].value;
              var url = value.ctaCallToAction.fields.link.content[0].content[1].data.uri;

              // add text
              $('#Purpose #Purpose-heading').html(heading);
              $('#Purpose #Purpose-subheading').html(subheading);
              $('#Purpose #Purpose-description').html(description);
              $('#Purpose #Purpose-text').html(text);
              $('#Purpose #Purpose-button').html(btn);
              $('#Purpose #Purpose-button').attr('href', url);  

              // box icon

              $(value.animatedIconsIfAny).each(function(index, item){

                var img = '', img_alt='#';
                if(typeof item.fields.imagegif !== 'undefined'){
                    img = item.fields.imagegif.fields.file.url;

                if(typeof item.fields.imagegif.fields.description !== 'undefined')
                    img_alt = item.fields.imagegif.fields.fields.description;
                }

                var html = '<div  class="boxes">'+
                             '<div class="icon_img gif_icon_'+index+' ">';
                      if(img != '')
                        html += '<img class="res_width1" src="'+img+'"  alt="'+img_alt+'"/>';
                      html += '</div>'+
                                '<div class="icon_txt">'+item.fields.label+'</div>'+           
                           '</div>';

                $('#hm_icon_boxes').append(html);
              });
        
       $('#Purpose').show();
       }, 5600);
        
      } 

    }
    
    function top_section(value){ 
      
      if(window.location.href == 'https://nyumi.com/'){
         client
        .getEntry("4V8IL5wRm9xy2tjarNeza8")
        .then(entry => {      
              page_meta_description(entry.fields);            
        }).catch(err => console.log(err));
      }
      
      if(!value.sectionVisible){
        $('#top_section').hide();
      }
      
      $(value.bannersForCarousel).each(function(index, item){
        var img = '';
        if(typeof item.fields.bannerImage !== 'undefined' ){
         img = item.fields.bannerImage.fields.file.url;
        }
        var img_alt = '';
         if(typeof item.fields.bannerImage.fields.description !== 'undefined' ){
         img_alt = item.fields.bannerImage.fields.description;
        }
        
        var desktop_img = '';
         if(typeof item.fields.bannerImageDesktop !== 'undefined' ){
         desktop_img = item.fields.bannerImageDesktop.fields.file.url;
        }
        
        var desktop_img_alt = '';
         if(typeof item.fields.bannerImageDesktop.fields.description !== 'undefined' ){
         desktop_img_alt = item.fields.bannerImageDesktop.fields.description;
        }
         
                 
        var txt1 = item.fields.title;
        
        var txt2 ='';
        if(typeof item.fields.bannerText !== 'undefined' )
          $(item.fields.bannerText.content).each(function(i, line){
            if(i == 0)
            var next_line = '';
            else
            var next_line = '<br/>';

            txt2 += next_line+line.content[0].value;        
          });
       
        
        if(typeof item.fields.button !== 'undefined'){
            client
            .getEntry(item.fields.button.sys.id)
            .then(entry => {
                   sldier_button(entry.fields, index);            
            }).catch(err => console.log(err));
        }
        
        
        
         var html= '<div class="item_top"><div class="top_section_flx"><div class="top_section_txt" data-index="'+index+'">'+
      			 '<div id="banner_heading" class="top_heading">'+txt1+'</div>'+
     			 '<div id="banner_subheading" class="top_sunheading">'+txt2+'</div>'+      				 
    			 '</div>'+
                  '<div class="top_section_img">';
        
             if(desktop_img !='' && $(window).width() > 769)
             html += '<div id="banner_img" class="desktop_img"><img src="'+desktop_img+'" alt="'+desktop_img_alt+'"></div>';
            if(img !='' && $(window).width() <= 769)
             html += '<div id="banner_img" class="mobile_img"><img src="'+img+'" alt="'+img_alt+'"></div>';
        
             html += '</div></div></div>';
        
      	$('#top_section_slider').append(html);
        
      });
      
       
      // add html
         
       
    }
    
    
    function sldier_button(value, index){
       
      var url = value.link.content[0].content[0].value;
      var txt = value.buttonTextLable;
      
      var html = '<a href="'+url+'" id="banner_btn" class="top_btn_style button">'+txt+'</a>';
      
      $('.top_section_txt[data-index="'+index+'"]').append(html);
    }
    
    function top_slider(){
      setTimeout(function(){
//         $('.flx_slider_top').slick({
//           dots: true,
//           infinite: true,
//           arrows: false,  
//           speed: 300,
//           slidesToShow: 1,
//           autoplay: false,
//   		  autoplaySpeed: 2000,
//           speed: 800,
//         });
      },300);
    }
    
    function Science_section(value){  
      
       $('#Science').hide();
     if(value.sectionVisible){
	  
       setTimeout(function(){
         
            var heading = value.text1.content[0].content[0].value;      
            var subheading = value.text2.content[0].content[0].value; 
            var text = value.text3.content[0].content[0].value; 
            var btn = value.ctaCallToAction.fields.link.content[0].content[1].content[0].value;
            var url = value.ctaCallToAction.fields.link.content[0].content[1].data.uri;
            var img = '', img_alt = '';

            if(typeof value.image !=='undefined'){
              img = value.image.fields.file.url;
              if(typeof value.image.fields.description !=='undefined'){
                img_alt = value.image.fields.description;
              }
            }

            // add text
            $('#Science #Science-heading').html(heading);
            $('#Science #Science-subheading').html(subheading);
            $('#Science #Science-description').html(text);
            $('#Science #Science-text').html(text);
            $('#Science #Science-btn').html(btn);
            $('#Science #Science-btn').attr('href', url);  

            if(img != ''){
              $('#Science .imgtextani').prepend('<img src="'+img+'" alt="'+img_alt+'"/>');
            }

            if(typeof value.scienceImage !=='undefined'){
              var bg_img = value.scienceImage.fields.file.url;
              var html = '<style>.Science_section:after{background-image: url('+bg_img+');}<style>';
              $('body').append(html);
            }
         
         $('#Science').show();
         
        }, 7900);
       
      }
      
    }
    
    function Testimonial_section(value){ 
      
      $('#Testimonial').hide();
     if(value.sectionVisible){
        
       setTimeout(function(){

          var heading = value.text1.content[0].content[0].value;
            // add text
          $('#Testimonial #Testimonial-heading').html(heading);
          inner_Testimonial(value);
          inner_Testimonial(value);
          testimonial_slider();
          $('#Testimonial').hide();
       }, 8300);
       
     } 
       
    }
    
    var test_prd = 0 ;
    function inner_Testimonial(value){
       $(value.reviews).each(function(index, item){
          var reviews = item.fields.reviewerDescription.content[0].content[0].value;
          var Name = item.fields.reviewerName;
          var img = item.fields.reviewerImage.fields.file.url;
          var Quote = item.fields.reviewerQuote.content[0].content[0].value; 
          var img_alt = item.fields.reviewerImage.fields.description;
          
         if(typeof item.fields.productImageForReviews !== 'undefined' ){
           var hover_img = item.fields.productImageForReviews.fields.file.url;
           var hover_img_alt = item.fields.productImageForReviews.fields.description;
           $('#test_hover_img').append('<div class="test_prd" data-count="'+test_prd+'"><img src="'+hover_img+'" alt="'+hover_img_alt+'"/></div>');
         }
        
         test_prd +=1;
         
         var html = ''
          html = '<div class="slider_content">'+
                   '<div id="Testimonial-Quote" class=semi-bold-content>'+Quote+'</div>'+
                   '<div id="Testimonial-Name" class="writer">'+Name+'</div>'+
                   '<div id="Testimonial-reviews" class="designation">'+reviews+'</div>'+               
                  '</div>'; 

          $('#testimonial_item').append(html);
          
          // menu 
          var nav = '<div class="imgbox">'+
                         '<div id="Testimonial-img"> <img src="'+img+'" alt="'+img_alt+'"> </div>'+
                    '</div>'; 
           $('#Testimonial #testimonial_nav').append(nav); 
        
      }); 
    }
    
    function Press_section(value){
      
      $('#Press').hide();
      if(value.sectionVisible){
        
        setTimeout(function(){
          
          var heading = value.text1.content[0].content[0].value;      
          $(value.pressMentionsIfAny).each(function(index, item){         
           // var title = item.fields.title;
            var img = item.fields.pressLogo.fields.file.url;
            var img_alt = item.fields.pressLogo.fields.description;
            var txt = item.fields.pressMentionText.content[0].content[0].value;        
             $('#Press #Press_txt').append('<div class="cm_p min-center">'+txt+'</div>');
             $('#Press #Press_logo').append('<div class="three"">'+'<img class="res_width1" src="'+img+'" alt="'+img_alt+'"/>'+'</div>');
          });      
          $('#Press #Press_heading').html(heading); 
          
          $('#Press').show();
          
        }, 7200);
        
     }
      
    }
     
     
  },
  slder_product: function(){
    
   setTimeout(function(){ 
     
//     var $slider  = $('.pdhome_flx');
//     var width = $(window).width();
     
//     if(width > 769){
//        // prroduct slider
//        $slider.slick({
//           infinite: true,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           speed: 400,
//           dots: false,           
//         }).on('afterChange', function(event, slick, currentSlide, nextSlide){
//    			nyumi_api.change_color(currentSlide);
// 		});
      
//     }else{
//       if($slider.hasClass('slick-initialized')) {
//            $slider.slick("unslick");
//         }
//       //$('.pdhome_flx .pdhm_itme[data-index="4"], .pdhome_flx .pdhm_itme[data-index="3"]').addClass('hide_mobile_list');
//     }
     
//      $('.product_Category_item .category_item[data-item="0"]').addClass('active');
     
//      $('.icon_box_text .three:eq(0)').addClass('active');
     
   }, 300);
    
     $('body').on('click', '.pdhome_flx .slick-arrow', function (e) {
        var current = parseInt($(this).closest('.pdhome_flx').find('.pdhm_itme.slick-active').attr('data-index'));
       
       if($(this).hasClass('slick-next')){
         //current +=1; 
       }else{
         current -=1;
       }
       nyumi_api.change_color(current);
        
    })
    
  },
  change_color: function(val){
    $('.product_section_outer').attr('data-val', val); 
    $('.product_Category_item .category_item').removeClass('active');
    $('.product_Category_item .category_item[data-item="'+val+'"]').addClass('active'); 
  },
  outher_option: function(){
    
    $('body').on('click', '.product_thumb li',function(){
      var index = $(this).data('index');       
      console.log(index);
      $('.product_image').slick('slickGoTo',index); 
    });
    
    
      
    $('.newslater_design form').on('submit', function(e){
      // e.preventDefault();
      var email = $('.newslater_design form #fname').val();
      
      webengage.track("User Signed Up", {
           email: '"'+email+'"',
           signup: true
      });
      webengage.user.login(email); 
      webengage.user.setAttribute('we_email', email);
      
    });
   
    
    $('#RegisterForm[action="/account"]').on('submit', function(e){
      var phone = $(this).find('[type="number"]').val();
        
      if(phone.length < 6){
        alert("Phone required");
        e.preventDefault();
      }else{
         
        add_registier_webengage($(this));
      }
      
    });
    
    function add_registier_webengage(that){
      var f_name = that.find('.first_name').val();
      var l_name = that.find('.last_name').val();
      var phone = that.find('.phone').val();
      var emil = that.find('[type="email"]').val();
       
       webengage.track("Create Account", {
           First_name: f_name,
           Last_name: l_name,
           Email: emil,         
           phone : phone
      });
      
    }
    
    
    
 
    
    $('body').on('click', 'a', function(){
      var url = $(this).attr('href');
      
      if($('body').hasClass('template-index') && !$(this).hasClass('site-header__cart')){
        window.location.href = url;
      }
      
    });
    
    $('body').on('click', '.read_more_faq', function(e){
      e.preventDefault();
      $('.product_tab_item').show();
      $(this).hide();
    });
    
    $(".ingd_podinfo").click(function() {
          $(this).find('span').show();
      }).mouseleave(function() {
          $(this).find('span').hide();
      });
    
   
    $('body').on('click', '.url_btn_style, #Science-btn, #Purpose-button, #banner_btn', function(e){
      	//e.preventDefault();
        var href = $(this).attr('href');
        window.location.href =href;  
    });
    
    
    $('body').on('click', '.click_link', function(){
      var href = $(this).attr('href');      
      $(location).attr('href', href);
    });
    
    $('form.first_address').on('submit', function(e){
      
      var phone = $(this).find('[name="address[phone]"]').val();
       
      if(!validatePhone(phone)){
        $(this).find('[name="address[phone]"]').addClass('error');
        $(this).find('.error_info').html('Invalid phone number').show();
        e.preventDefault();
        return false;
      }
      
    });
    
    function validatePhone(txtPhone) {
     // var a = document.getElementById(txtPhone).value;
      var filter = /^\d*(?:\.\d{1,2})?$/;
      if (filter.test(txtPhone ) && txtPhone.length > 8) {
        return true;
      }
      else {
        return false;
      }
    }
    
    
    $('.address-edit-toggle').on('click', function(){
      $(this).closest('.acut_addfull_deatil').find('.address').slideToggle();
    });
    
  // $('.pdhome_flx .pdhm_itme[data-index="4"], .pdhome_flx .pdhm_itme[data-index="3"]').addClass('hide_mobile_list'); 
     
    
    $('.select_date').on('change', function(){
      var day = $('#day').val();
      var month = $('#month').val();
      var year = $('#year').val();
      var date = '';
      if(day !='0' && month !='0' && year !='0'){
        date = year+'-'+month+'-'+day;
        $(this).closest('.edit_custinf_form').find('[name="address[address2]"]').val(date);
      }
      
      
    });
    
    $('.share_url_btn').on('click', function(){
      $('.share_input_form').slideToggle();      
    });
    
    $('.whtapp_share').on('click', function(){
        var phone = $('.whtapp_phone').val();
        var url = $('.whatpp_url').val();
        url = 'https://wa.me/'+phone+'/?text='+url;
        window.open(url, '_blank');
    });
    
     $('body').on('click', '.account_info_header', function(){
       if($(this).hasClass('active')){
         $(this).removeClass('active');
         $(this).next('.acut_full_detal').slideToggle();
       }else{
         $('.account_info_header.active').next('.acut_full_detal').slideToggle();
         $('.account_info_header').removeClass('active');
         
         $(this).addClass('active');
         $(this).next('.acut_full_detal').slideToggle();
           show_ekoma();
       }
        
       
     });
    
    $('body').on('click', '.order_items_box', function(){
        $(this).toggleClass('active');
        $(this).find('.oditems_fullDetial').slideToggle();
       
    });
    
    $('body').on('click', '.custinf_edit_info, .customer_cancel_form', function(){
        $(this).toggleClass('active');
        $('.edit_custinf_form, .acut_customerinfo').slideToggle();        
    });
     
    $('body').on('click', '.updata_password_btn', function(){
      $('.password_form_box').slideToggle();  
    });
        
    $('body').on('click', '.account_menu li', function(){
      if(!$(this).hasClass('logout_link')){
          var id = $(this).index();
          $('.account_menu li').removeClass('active');
          $(this).addClass('active');

          $('.right_side_detail .rgsd_item').removeClass('active');
          $('.right_side_detail .rgsd_item:eq('+id+')').addClass('active');

          if($(this).hasClass('Refer_friend_btn')){
            // $('.ekoma-btn').trigger('click');
             show_ekoma();
          }      
      }
      
    });
    
    function show_ekoma(){
      $('#refcandy-poprocks div').trigger('click').addClass('active');
      
      /*  
      if(!$('.ekoma-card').length){
        $('.ekoma-btn').trigger('click');
      }      
      var whtapp = '<span class="whtapp"><a target="_blank" href="https://wa.me/918291155181"><img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/113/assets/black-whatapp.png?v=122251336417792918411695642484" alt="Whatsapp logo"/></a></span>';       
      if(typeof $('.ekoma-mt-5 .whtapp').html() ===  'undefined'){
      	$('.ekoma-mt-5').prepend(whtapp);
      }
       
       */
    }
    
    
    
    
    $('body').on('click', '.ingredient_combo_menu ul li', function(){
         var id = $(this).index() +1;
         
    	 $('.ingredient_combo_menu li').removeClass('active');
      	 $(this).addClass('active');
      	 $('.content_wrapper').hide();
         $('.content_wrapper[data-id="'+id+'"').css('display', 'flex');
    });
    
    // search
    $('body').on('keypress', '.bgsh_input',function(e) {
     // e.preventDefault();
      key_search($(this));
      
    });
    
    $('.serch_blog_form').on('submit', function(e){
      e.preventDefault();
    });
    
    
    function key_search(that){
      setTimeout(function(){
        
        var search = that.val();
        var blog_item = 1;
        var not_found = true;
        if(search.length > 3){           
          $('.blog_post_outer').addClass('active_filter');
          
          $('.blog_post_outer .blog_post').each(function(){
             var title = $(this).find('.post_title').html();            
             var description = $(this).find('.bgpt_description').html();
            
             if(title.indexOf(search) != -1 || description.indexOf(search) != -1){
               not_found = false;
               $(this).show();
               if(blog_item%2 != 1){
                  $(this).addClass('reverse_post');
                }
               blog_item += 1;
             }else{
               $(this).hide().removeClass('reverse_post');                 
             }
            
          });
        }else{
           not_found = false;
           $('.blog_post_outer .blog_post').show().removeClass('reverse_post');
           $('.blog_post_outer').removeClass('active_filter');
        }
        
        if(not_found){
          $('.blog_nav .post_notfound').html('No results found');
        }else{
           $('.blog_nav .post_notfound').html('');
        }
        
      },10);
    }
    
    
    var deg = 0, top_scroll = 1;    
    setInterval(function(){
      deg += 40;
      gif_cricle(deg); 
      
      top_scroll = top_scroll%2;
      product_img_gif(top_scroll);
      top_scroll += 1;

      if($('.empty-cart').css('display') == 'block') {
          $('.sub-footer').hide()
          // $('.apply_coupon_initial').hide()
        }
        else {
          $('.sub-footer').show()
          // $('.apply_coupon_initial').css('display','flex')
        }
      for(var i=0; i<$('.minct_item_price').length; i++) {
        if($('.minct_item_price')[i].attributes['price'].value == $('.minct_item_price')[i].attributes['compare_at_price'].value) {
          $('.minct_item_price')[i].children[0].innerText = ''
        }  
      }
      
      if($('.min_cart').scrollTop() > 0) {
        $('.coupon_header').css('top','0')
      }
      else {
        $('.coupon_header').css('top','auto')
      }
      
      // if($('.item_details').length == 1 && $('.minct_qty')[0].innerText == 0) {
      //   $('.item_details').hide()  
      //   $('.apply_coupon_initial').hide()
      //   // $('.apply_coupon_initial').hide()
      //   $('.sub-footer').hide()
      //   $('.site-header__cart-count').hide()
      //   $('.empty-cart').show()
      //   }
      //   else if($('.item_details').length == 0) {
      //     $('.item_details').hide()  
      //   $('.apply_coupon_initial').hide()
      //   // $('.apply_coupon_initial').hide()
      //   $('.sub-footer').hide()
      //   $('.site-header__cart-count').hide()
      //   $('.empty-cart').show()
      //   }
      // else {
      //   $('.item_details').show() 
      //   if($('.available_coupons').css('display') == 'flex') {
      //     $('.apply_coupon_initial').show()
      //   }
      //   else {
      //     $('.apply_coupon_initial').hide()
      //   }
      //   // $('.apply_coupon_initial').show()
      //   $('.sub-footer').show()
      //   $('.site-header__cart-count').show()
      //   $('.empty-cart').hide()
      // }

      for(var j=0; j<$('.upsell_variant').length; j++) {
        if($('.upsell_variant')[j].children.length > 5) {
            for(var i=5; i<$('.upsell_variant')[j].children.length; i++) {
                $('.upsell_variant')[j].children[i].style.display = 'none'
            }
        } 
      }
      
    }, 800);
    
    function gif_cricle(deg){
      deg = deg + 'deg';
      $('.round_line').css('transform', 'rotate('+deg+')');
    }
    
    function product_img_gif(top_scroll){
       $('.big_img_box, .product_section_outer').toggleClass('active_animation');
      
      /*
      if($(window).width() < 769 && $(window).width() > 420){         
        if(top_scroll){
            $('.big_img_slider').css({'margin-top': 'calc(38vw - 20px)', 'margin-bottom': '0'});
          }else{
            $('.big_img_slider').css({'margin-top': 'calc(38vw - 25px)', 'margin-bottom': '0'});
          }
      }else if( $(window).width() < 421){
         if(top_scroll){
            $('.big_img_slider').css({'margin-top': 'calc(50px - 20px)', 'margin-bottom': '0'});
          }else{
            $('.big_img_slider').css({'margin-top': 'calc(50px - 25px)', 'margin-bottom': '0'});
          }
      }else{
          if(top_scroll){
            $('.big_img_slider').css({'margin-top': '75px', 'margin-bottom': '25px'});
          }else{
            $('.big_img_slider').css({'margin-top': '100px', 'margin-bottom': '0'});
          }
        }
        */
    }
    
    var show_itme = 5;
     $('body').on('click', '.ingf_flx_btn', function(){       
        var item = $(this).closest('.page_width_right');
        show_itme +=5;
        var itme_size = item.find('.ingf-slider li').size();
       
       if(show_itme >= itme_size ){
         $(this).hide();
       }
        for(var i = 0;  show_itme > i; i +=1){
           item.find('.ingf-slider li:eq('+i+')').show();
        }
     });
    
    
    
    $('body').on('click', '#blog_cat li', function(){
      var id = $(this).data('id');
      $('#blog_cat li').removeClass('active');
      $(this).addClass('active');
      $('.blog_drop_down').removeClass('active');
      
      
      $('.blog_drop_down').html($(this).html());
       
      $('.blog_post').hide().removeClass('reverse_post');
     
      
      if(id == '0'){
        $('.blog_post').show();
        $('.blog_post_outer').removeClass('active_filter');
      }else{
         filter_post(id);
        $('.blog_post_outer').addClass('active_filter');
      }
      
      
      if($(window).width() < 1025 ){
        $('.blog_cat_box').slideToggle();
      }
      
    });
    
    function filter_post(id){
      var blog_item = 1;
      $('.blog_post_outer .blog_post').each(function(){
        var cat_id = $(this).data('cat');
        
        if(cat_id == id){          
          if(blog_item%2 != 1){
            $(this).addClass('reverse_post');
          }
          $(this).show();
          blog_item += 1;
        }else{
          $(this).hide();
        }
        
      });
    }
    
    $('body').on('click', '.blog_drop_down', function(){
       $('.blog_cat_box').slideToggle();
       $(this).toggleClass('active');
    });
    
    
     $('body').on('click', '.crsbn_btn', function(e){  
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".carrer_opp_section").offset().top
        }, 1000);
     });
      
        $('body').on('click', '.product_Category_item .category_item', function(){          
          var item = $(this).data('item');
           $('.pdhome_flx').slick('slickGoTo', item);  
           nyumi_api.change_color(item);
        });
      
     
    $('body').on('click', '.crrpac_item', function(){
      var id = $(this).data('id');
      if(typeof id !== 'undefined'){
        $(this).toggleClass('active');
        $('.crpac_description[data-id="'+id+'"]').slideToggle().toggleClass('active');
        $(this).closest('.crpp_accouding').toggleClass('active');
      }
      
    });
   
    
    $('body').on('click', '.icon_box_text .three', function(e){
      $('.icon_box_text .three').removeClass('active');
      $('#Press_txt .cm_p').removeClass('active').hide();
      $(this).addClass('active');
      var id = 0, n = true;
      
      $('.icon_box_text .three').each(function(e){
        if(n){
          if($(this).hasClass('active')){              
               n = false;
          }else{
            id = id+1;
          }
        }
           
      });
      $('#Press_txt .cm_p').eq(id).addClass('active').show();
             
    });
    
    
    // cricle
    var value = 0;
    
    setInterval(function(){
       value = value + 180;
    	//rotate(value);
    },3500);
    
    function rotate(value){
      $('.eqpd .round_line').css('transform', 'rotate('+value+'deg)');
    }
    
    
    // header mobile menu
    
    $('body').on('click', '.mobile_child_item', function(){
      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).next('.mobile-nav__dropdown').slideToggle();
      }else{        
        $('.mobile_child_item.active').next('.mobile-nav__dropdown').slideToggle();
        $('.mobile_child_item').removeClass('active');
        
        $(this).addClass('active');
        $(this).next('.mobile-nav__dropdown').slideToggle();
      }
      
    });
    
     
    
    
    $('body').on('click', '.social_icon_close', function(){
      // $(this).next('.bgpt_social_list').slideToggle();
      //  $(this).toggleClass('active');
      $(this).closest('.bgpt_post_detail').slideToggle();
      
       var url =  $(this).data('url');
       var that = $(this).closest('.blog_post').find('.bgpt_btn');
       that.removeClass('active');
       show_blog(that, url);
       
    });
    
     
    /*
    $('body').on('click', '.bgpt_btn', function(e){
       e.preventDefault();
       $(this).closest('.blog_post').find('.bgpt_post_detail').slideToggle();
      
      close_blog();
      
       $(this).toggleClass('active');
       var url =  $(this).data('url');
       show_blog($(this), url); 
       blog_click(url);
      
    });
    */
    
     function blog_click(url){        
        webengage.track("Blog Click", { 
            "url" : url    
        });
    }
    
    function close_blog(){
      var url = $('.bgpt_btn.active').data('url');
      
      if(typeof url !== 'undefined' ){
      $('.bgpt_btn.active').closest('.blog_post').find('.bgpt_post_detail').slideToggle();
      $('.bgpt_btn').removeClass('active');
        
        var url_first = window.location.href;
        url = '/'+url;
        url_first = url_first.replace(url,'');
        window.history.pushState('page2', 'Title', url_first);
      }
    }
    
    
    function show_blog(that, url){      
        if(that.hasClass('active')){
          url = window.location.pathname+'?'+url;
         window.history.pushState('page2', 'Title', url);
        }else{
           var url_first = window.location.href;
           url = '?'+url;
           url_first = url_first.replace(url,'');
           window.history.pushState('page2', 'Title', url_first);
        }      
    }
    
    /*
    $('body').on('click', '.inlpst_item', function(){
       var id = $(this).data('id');
       $('.inlpst_item').removeClass('active');       
       $('.inlpst_big').hide();
      
       $(this).addClass('active');
       $('.inlpst_big[data-id="'+id+'"]').slideToggle();
      $('.inlpst_big[data-id="'+id+'"] .bgpt_post_detail').show();
      
      // scroll 
      var scroll_point = $(this).closest(".inline_post");
      $('html, body').animate({
        scrollTop: scroll_point.offset().top
      }, 600);       
    });
    */
    
    
    $('body').on('click', '.inlpst_big', function(){
      	var id = $(this).data('id');
        $(this).slideToggle();
        $('.inlpst_item[data-id="'+id+'"]').removeClass('active');
    });
    
    
    // faq
    $('body').on('click', '.faq-categories li', function(){
      var id = $(this).data('cat');
      $('.faq-categories li').removeClass('active');
      var txt = $(this).html();
      $('.select_value').html(txt);
      $(this).addClass('active');
      $('.product_tab_item').hide();
      
      if(id == 0){
        $('.product_tab_item').fadeIn();
      }else{
      	$('.product_tab_item[data-cat="'+id+'"]').fadeIn();
      }
      
      if($(window).width() < 769){
         $('.faq-categories ul').slideUp().toggleClass('active');
         $('.select_value').toggleClass('active');
      }
    });
    
     $('body').on('click', '.select_value', function(){
       $('.faq-categories ul').slideToggle().toggleClass('active');
       $(this).toggleClass('active');
     });
    
    // first child
    $('.faq-categories li:first-child').trigger( "click" );
   //  $('.product_tab_item').hide();
   //  $('.product_tab_item[data-cat="'+id+'"]').show();
    
    $('body').on('click', '.ppal_close, .ppal_outer', function(){
      $('.popup_apply').fadeOut();
    });
    
    $('body').on('click', '.crpac_btn', function(){
      //$('.popup_apply').fadeIn();
    });
   
    
  },
  product_page: function(){
    
    // $('body').on('click', '.pdtb_heading', function(){
    //   	$(this).closest('.product_tab_item').toggleClass('active');
    //     $(this).next('.pdtb_detail').slideToggle();
    // });
    
    $('body').on('click', '.product_sign', function(){
       var qty = parseInt($(this).closest('.prodcut_qty_box').find('[name="quantity"]').val());
      if($(this).hasClass('qty_minis')){
        qty = qty -1;        
      }else{
        qty = qty +1;
      }
      
      if(qty > 0 && qty < 11){
         $(this).closest('.prodcut_qty_box').find('[name="quantity"]').val(qty);
      }
      
      
      
    });
    
  },
  loader_function(){
    
    setTimeout(function(){ 
      var product_slider = true;     
      // product slider
      $('img.big_img_slider').load(function(e){          
          $('.product_section_outer').removeClass('preloader');  
          product_slider = false;           
      });      
      
      if(product_slider){
        set_timeinterval();
      }
    }, 900);
  },
  load_gif(){
    setTimeout(function(){ 
      // gif icon
       var gif_icon = true;
       var icon = 0;
      $('#hm_icon_boxes .boxes').each(function(){
        
       $('.gif_icon_'+icon+' img').load(function(e){ 
         
          $('.gif_icon_'+icon).addClass('preloader_hide');
          gif_icon = false;
         
        });
        icon +=1;
      
         
        
       });
            
       if(gif_icon){
          nyumi_api.load_gif();
        }
      }, 900);

  },
  mincart: function(){
    
    $('body').on('click', '[data-cart-remove]', function(e){
       e.preventDefault();
       var url = $(this).attr('href');
       var item = $(this).closest('.cart__row'); 
      
      var title = item.attr('data-cart-item-title'), 
          id=item.attr('data-id'), 
          qty=item.attr('data-cart-item-quantity'), 
          price = item.attr('data-price');
      var img  = item.attr('data-img');
      
      
      nyumi_api.webengage_delete_cart(title, id, qty, price, img);
      
        
      setTimeout(function(){
        location.reload();
      },1000);
    });
    
      $('body').on('change', '[data-quantity-input]', function(e){
       e.preventDefault();
        
      var item = $(this).closest('.cart__row'); 
      var title = item.attr('data-cart-item-title'), 
          id=item.attr('data-id'), 
          qty=$(this).val(), 
          price = item.attr('data-price');
      var img  = item.attr('data-img');
      
       
      nyumi_api.webengage_update_cart(title, id, qty, price, img);
      
        setTimeout(function(){
        	location.reload();
        },800);
       
    });
    
    
    
    $('body').on('click', '.minct_qty_sign', function(event){
      // $('.cart_drawer_loder').removeClass('hide');
      // setTimeout(function(){
      //   $('.cart_drawer_loder').addClass('hide');
      // },1000);
      
      var qty = parseInt($(this).closest('.minct_item_qty').find('.minct_qty').html());
      var id = $(this).closest('.minct_item').attr('data-line');
      // $('.new_upsell').hide()
      if($(this).hasClass('minius_sighn')){
        qty -=1;
      }else{
        qty +=1;
      }
       
      
      $(this).closest('.minct_item_qty').find('.minct_qty').html(qty);
      edit_cart_line(qty, id, event); 
      
      var title = $(this).closest('.minct_item_title').find('.minct_title').html();
      var price =  parseInt($(this).closest('.minct_item').data('price'))/100;
      var img = $(this).closest('.minct_item').find('.minct_item_img > img').attr('src'); console.log(img);
       
      nyumi_api.webengage_update_cart(title, id, qty, price, img);
             
      if(qty < 1 ){
        var id = $(this).closest('.minct_item').data('id');
        edit_cart(0, id);
        var title = $(this).closest('.minct_item_title').find('.minct_title').html();
        var price =  parseInt($(this).closest('.minct_item').data('price'))/100;
        var img  = $(this).closest('.minct_item').find('.minct_item_img').find('img').attr('src');

        nyumi_api.webengage_delete_cart(title, id, 0, price, img);
      }

      setTimeout(function(){
        $.ajax({
          type: "GET",
          url: "https://nyumi.com/cart.json",
          headers: { "Content-Type": "application/json" },
        }).then((data) => {
          if(data.item_count == 0) {
            console.log('count',data.item_count)
            // $('.apply_coupon_initial').hide()
            $('.sub-footer').hide()
              $('.item_details').hide()
            $('.empty-cart')[0].style.display = 'block'
            if($('.empty-cart').length == 2){
              $('.empty-cart')[1].style.display = 'none'
            }
          }
        })
      },2000)  
      
    });
    
    $('body').on('click', '.minct_item_remove', function(){     
      
      var id = $(this).closest('.minct_item').data('id');
       edit_cart(0, id);
      var title = $(this).closest('.minct_item_title').find('.minct_title').html();
      var price =  parseInt($(this).closest('.minct_item').data('price'))/100;
      var img  = $(this).closest('.minct_item').find('.minct_item_img').find('img').attr('src');
      
       nyumi_api.webengage_delete_cart(title, id, 0, price, img);
    });
    
    
    $('body').on('click', '.site-header__cart', function(e){
      e.preventDefault();
      $('.min_cart').toggleClass('active');
    });
    
    $('body').on('click', '.minct_close, .min_cart_outer', function(e){
      $('.min_cart').toggleClass('active');
    });
    
    $('body').on('submit', 'form[action="/cart/add"]', function(e){
      e.preventDefault();
      
      var Recommendation = false;
      if($(this).closest('.grid__item').hasClass('recommendation') || $(this).closest('.grid__item').hasClass('medium-up--one-third')  ){
        Recommendation = true;
      }
      
      add_to_cart($(this), Recommendation);
    });
    
   // $('body').on('click', '.faca-product-button', function(e){
   //      e.preventDefault();
   //      add_to_cart2($(this));
   //    });
    
    $('body').on('click', 'button.save', function(event){
      event.preventDefault()
      var new_id
      var old_id = event.currentTarget.attributes['old-id'].value
      var product_id = event.currentTarget.attributes['product-id'].value
      var quantity = $('.minct_item[data-id="'+old_id+'"]')[0].children[1].children[3].children[0].children[1].innerText
      for(var i=0; i<$('.upsell[product-id="'+product_id+'"]').length; i++) {
        if($('.upsell[product-id="'+product_id+'"]')[i].children[0].children[0].checked == true) {
          new_id = $('.upsell[product-id="'+product_id+'"]')[i].attributes['variant-id'].value
        }
      }
      $('.cart_drawer_loder').css('position','fixed')
      $('.cart_drawer_loder').css('height','100%')
      $('.cart_drawer_loder').css('position','fixed')
      $('.cart_drawer_loder').css('right','0')
      $('.cart_drawer_loder').css('top','0')
      $('.cart_drawer_loder').removeClass('hide');
      console.log("old id",old_id)
      console.log("new id",new_id)
      console.log("quantity",quantity)

      if(new_id) {
        setTimeout(function(){
          $('.cart_drawer_loder').addClass('hide');
          $('.cart_drawer_loder').css('position','absolute')
          $('.cart_drawer_loder').css('height','calc(100vh - 120px)')
          $(event.currentTarget.previousElementSibling).click()
        },1000);
        $.ajax({
          type: 'POST',
          url: '/cart/add.js',
          dataType: 'json',
          data: {
            id: parseFloat(new_id),
            quantity: quantity,
          },
       }).then(data => {
            $.ajax({
              type: "POST",
              url: "/cart/change.js",
              dataType: "json",
              data: {
                'id': parseFloat(old_id),
                'quantity': 0,
              },
            }).then(data => {
              location.reload()
            });
          })
        }
      else {
        setTimeout(function(){
          $('.cart_drawer_loder').addClass('hide');
        })
        $('.select_input_error').show()
      }
      })
    
    
    $('body').on('click', '.spd_add_to_cart', function(e){
    	e.preventDefault();
      var url = $(this).attr('href');
      add_to_url(url);
    });

    $('body').on('click', '.upsell', function(event){
      // event.preventDefault()
      for(var i=0; i<$('.upsell input').length; i++) { $('.upsell input')[i].checked = false }
      event.currentTarget.children[0].children[0].checked = true
    })

    $('body').on('click', '.top_head img', function(event){
      event.preventDefault()
      var product_id = event.currentTarget['attributes']['product-id']['value']
      $('.variant-popup[product-id=' + product_id + ']').css('display','none')
     })

    $('body').on('click', 'button.cancel', function(event){
      event.preventDefault()
      var product_id = event.currentTarget['attributes']['product-id']['value']
      $('.variant-popup[product-id=' + product_id + ']').css('display','none')
    })

    
     function add_to_url(url){
     
       jQuery.ajax({
          type: 'POST',
         async: false,
          url: url,          
          success: function() { 
             get_cart();
            setTimeout(function(){
              sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc')
              show_upsell()
            },1500)
          }
        });
    }
    
     async function edit_cart_line(qty , line, e){ 
      e.target.parentElement.children[0].style.opacity = 0.5
      e.target.parentElement.children[0].style.pointerEvents = 'none'
      e.target.parentElement.children[1].classList.add('hide')
      e.target.parentElement.children[2].classList.remove('hide')
      e.target.parentElement.children[3].style.opacity = 0.5
      e.target.parentElement.children[3].style.pointerEvents = 'none'
      // setTimeout(function(){
        
      // },2000)
      line = parseInt(line) + 1;
       
      var data = { quantity: qty, line: line };
       var x= await jQuery.ajax({
          type: 'POST',
          url: '/cart/change.js',
          data: data,
          dataType: 'json',
          success: function(cart) {  
             e.target.parentElement.children[0].style.opacity = 1
             e.target.parentElement.children[0].style.pointerEvents = 'all'
             e.target.parentElement.children[1].classList.remove('hide')
             e.target.parentElement.children[2].classList.add('hide')
             e.target.parentElement.children[3].style.opacity = 1
             e.target.parentElement.children[3].style.pointerEvents = 'all'
             // get_cart(); 
            update_cart_price()
            show_upsell()
          },
          error: function (jqXHR, exception) {
              //  alert('Low Stock');              
          }
        });
    }
    
    async function edit_cart(qty , id){ 
       
      var data = { quantity: qty, id: id };
       var x = await jQuery.ajax({
          type: 'POST',
          url: '/cart/change.js',
          data: data,
         async: false,
          dataType: 'json',
          success: function(cart) {  
             get_cart(); 
            setTimeout(function(){
              sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc')
              show_upsell()
            },1500)
          },
          error: function (jqXHR, exception) {
                alert('Low Stock');              
          }
        });
    }
    
    async function add_to_cart(that, Recommendation){
      $('.btn[data-add-to-cart]').prop('disabled',true)
      that.find('[data-add-to-cart-text]').html('Adding...');
       var x = await jQuery.ajax({
          type: 'POST',
          url: '/cart/add.js',
          data: that.serialize(),
          dataType: 'json',
          success: function(cart) { 
             get_cart();
            setTimeout(function(){
              sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc')
              show_upsell()
              $('.btn[data-add-to-cart]').prop('disabled',false)
            },1500)
            that.find('[data-add-to-cart-text]').html('Add to cart');
            nyumi_api.webengage_add_cart(cart);
            if(Recommendation){
              nyumi_api.webengage_Recommendation_cart(cart);
            }
          },
          error: function (jqXHR, exception) {
                alert('Low Stock');     
            $('.btn[data-add-to-cart]').prop('disabled',false)
          }
         
        });
      console.log('clicked add to cart',)
      
    }
    // async function add_to_cart2(that){
             
    //         setTimeout(function(){
    //           get_cart();
    //           sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc')
    //           show_upsell()
    //           $('.btn[data-add-to-cart]').prop('disabled',false)
    //         },1500)
            
    //   console.log('clicked free product',)
      
    // }
    function sortMeBy(arg, sel, elem, order) {
              var $selector = $(sel),
                $element = $selector.children(elem);
            
              $element.sort(function(a, b) {
                var an = parseInt(a.getAttribute(arg)),
                  bn = parseInt(b.getAttribute(arg));
            
                if (order == 'asc') {
                  if (an > bn)
                    return 1;
                  if (an < bn)
                    return -1;
                } else if (order == 'desc') {
                  if (an < bn)
                    return 1;
                  if (an > bn)
                    return -1;
                }
                return 0;
              });
            
              $element.detach().appendTo($selector);
            }
    
    async function get_cart(){
        var x = await jQuery.ajax({
          type: 'POST',
          async: false,
          url: '/cart.js',           
          dataType: 'json',
          success: function(resuelt) { 
            console.log(resuelt)
            $('.cart_drawer_loder').removeClass('hide')
          }
        }).then(function(resuelt){
          console.log('resulttttt',resuelt)
            show_mincart(resuelt);
            $('.checkout_btn').css('display','flex')
          $('.cart_drawer_loder').addClass('hide')
            // setTimeout(function(){
              sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc');
              // show_upssell()
            // },2000)

          nyumi_api.webengage_view_cart(resuelt);
            if($('.item_details').length == 1 && $('.minct_qty')[0].innerText == 0) {
              $('.item_details').hide()  
              // $('.apply_coupon_initial').hide()
              $('.sub-footer').hide()
              $('.empty-cart').show()
               $('.may-also-like').hide()
              }
            else {
              $('.item_details').show()  
              // $('.apply_coupon_initial').show()
              $('.sub-footer').show()
              $('.empty-cart').hide()
               $('.may-also-like').show()
            }
            
        }).then(show_upsell())
    }

    function update_cart_price() {
   
      // if($('.empty-cart')[0].style.display = 'none'){
    $.ajax({
        type: "GET",
        url: "https://nyumi.com/cart.json",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
              if(response.items.length<1){
              $('.may-also-like').hide()
            }else{
              $('.may-also-like').show()
            }
           
            let price = 0
            let orderTotal = 0
            const discount_amount = (response.total_discount/100)
      
            for(var i=0; i<$('.minct_item_price').length; i++) {
                  orderTotal = (orderTotal) + (parseInt($('.minct_item_price')[i].attributes['compare_at_price'].value.slice(0,-2)) * parseInt($('.minct_qty')[i].innerText))
            }
            for(let i=0; i<response.items.length; i++) {
               price=price+ (response.items[i].original_price* response.items[i].quantity)/100
            }
            if(response.cart_level_discount_applications.length<1){
              if(price>499){
                $('.shipping .value')[0].innerHTML = '<span style="text-decoration: line-through;">₹ 50 </span><span style="color: #f37168; padding-left: 5px;">FREE</span>'
                $('.saving_message span')[0].innerText = '₹ ' + (discount_amount + 50 + orderTotal - price).toFixed(0)
              }else{
                $('.shipping .value')[0].innerText = '₹ 50'
                $('.saving_message span')[0].innerText = '₹ ' + (discount_amount + orderTotal - price).toFixed(0)
              }
               $('.items-discount').hide()
            }else{
              $('.items-discount').hide()
               $('.items-discount span')[0].innerText = response.cart_level_discount_applications[0].title
             if(price>499){
                $('.shipping .value')[0].innerHTML = '<span style="text-decoration: line-through;">₹ 50 </span><span style="color: #f37168; padding-left: 5px;">FREE</span>'
                $('.saving_message span')[0].innerText = '₹ ' + (discount_amount + 50 + orderTotal - price).toFixed(0)
              }else{
                $('.shipping .value')[0].innerText = '₹ 50'
                $('.saving_message span')[0].innerText = '₹ ' + (discount_amount + orderTotal - price).toFixed(0)
              }
            }
           
            $('.items-discount .value')[0].innerText = '-₹ ' + discount_amount.toFixed(0)
            $('.grand-total .value')[0].innerText = '₹ ' + response.total_price/100
            $('.order-total .value')[0].innerText = '₹ ' + orderTotal.toFixed(0)
            $('.sub-total .value')[0].innerText = '₹ ' + price.toFixed(0)
            $('.discount .value')[0].innerText = '-₹ ' + (orderTotal - price + discount_amount).toFixed(0)
            $('.grand-total .value')[0].innerText = '₹ ' + (response.total_price/100).toFixed(0)
            $('.checkout_btn span')[0].innerText = 'Total ₹ ' + (response.total_price/100).toFixed(0)
          
    setTimeout(function(){
        if($('.items-discount').css('display') == 'none') {
          $('.apply_coupon_initial .input_box')[0].value = ''
          $('.apply_coupon_initial .initial_apply_btn')[0].innerText = 'Apply'
        }
      },1200)
    if($('.apply_coupon_initial .input_box')[0].value == 'XXXX') {
      $('.apply_coupon_initial .input_box')[0].value = ''
    }
      // }
  })
}//end


  async function product_api(url_handle,index) {
     await jQuery.getJSON(window.Shopify.routes.root + 'products/'  + url_handle + '.js', function(product) {
      console.log('product', product)
      // for(var k=0; k<$('.minct_item').length; k++) {
       if(product['variants'].length <= 1 || product['id'] == '6094251163815') {
         $('.new_upsell')[index].style.display = 'none'
       }
       else{
        for(var j=0; j<product['variants'].length; j++) {
          if(parseInt($('.minct_item_price')[index].attributes['price'].value) < product['variants'][j]['price']) {
            console.log('product price',product['variants'][j]['price']);
            console.log('cart price',parseInt($('.minct_item_price')[index].attributes['price'].value))
            $('.new_upsell')[index].style.display = 'block'
          }
          else {
            console.log("didn't found any upsell variant")
            $('.new_upsell')[index].style.display = 'none'
          }
        }
       }
    });
  }

    // $('body').on('click', '#after-adding-edit-icon', add_upsell_data())

  function show_upsell_variants(id, price) {
    console.log(id, price)
    for(var y=0; y<$('.upsell[product-id="'+id+'"]').length; y++) {
      if(parseInt($('.upsell[product-id="'+id+'"]')[y].attributes['variant-price'].value) > parseInt(price)) {
          $('.upsell[product-id="'+id+'"]')[y].style.display = 'flex'
      }
      else {
          $('.upsell[product-id="'+id+'"]')[y].style.display = 'none'
      }
    }
  }
    
  async function show_upsell() {
      await $.ajax({
          type: "GET",
          url: "https://nyumi.com/cart.json",
          headers: { "Content-Type": "application/json" },
        async: false,
      }).then((data) => {
        console.log(data)
        for(var i=0; i<data['items'].length; i++) {
          console.log(data['items'][i]['handle'])
          var url_handle = data['items'][i]['handle']
          var x =  product_api(url_handle,i)
        }
      })
    }

    
    function show_mincart(cart){
      
      var html = '';
      var total = 0;
      
      var compare_at_price = 0;
      var old_price;
      var final;
      
     async function getProductJSON(item,price) {
          var result = await jQuery.getJSON(window.Shopify.routes.root + 'products/' + item.handle + '.js', function(product) {
            console.log(product)
            result = product.compare_at_price 
          } ).then(
            (result) => {
              price = result.compare_at_price
              return price
            });
          
      }
    function productJSONData() {
      var cart_length  = cart.items.length
      var sum = cart_length*(cart_length-1)/2
      var loop_sum = 0
      $(cart.items).each(async function(index, item){
        console.log(item,'item')
        getProductJSON(item,item.price)
        
          var productData = await jQuery.getJSON(window.Shopify.routes.root + 'products/' + item.handle + '.js', function (productdata) {
            productData = productdata
          }).then((productData) => {
            console.log('productdata.compare_at_price',productData,index,sum,loop_sum)
            console.log(productData)
            console.log(item,item[0])
            var sale_price = item.price
            if(item.price == item.total_discount){
              sale_price = 0
            }
            if(item.options_with_values[0].value == 'Pack of 1') {
                compare_at_price = productData.variants[0].compare_at_price
            }
            else if(item.options_with_values[0].value == 'Pack of 2') {
                compare_at_price = productData.variants[1].compare_at_price
            }
            else if(item.options_with_values[0].value == 'Pack of 3') {
                compare_at_price = productData.variants[2].compare_at_price
            }
            else {
              compare_at_price = productData.compare_at_price
            }
            if(item.price == item.discounted_price){
              conpare_at_price = ''
            }
         html +='<p class="empty-cart" style="display:none;">'+'Your cart is empty'+'</p>'+
                 '<div class="item_details" data-line="'+index+'">'+'<div class="minct_item" data-line="'+index+'" data-id="'+item.id+'" data-price="'+item.price+'">'+
                  '<div class="minct_item_img">';
                   if(typeof item.image !== 'undefined')
                   html +='<img src="'+item.image+'"  alt="#"/>';
                  if(item.variant_title==null)
                  item.variant_title="";
                   html +='</div>'+
                    '<div class="minct_item_title">'+
                       '<a href="'+item.url+'" class="minct_title">'+item.product_title+'</a>'+
                        '<p class="product-details__item product-details__item--variant-option">'+item.variant_title+'</p>'+
                       '<div class="minct_item_price" yash price="'+sale_price+'" compare_at_price="'+compare_at_price+'">'+theme.Currency.formatMoney(sale_price, theme.moneyFormat)+
                         '<span class="compare_at_price">'+theme.Currency.formatMoney(compare_at_price, theme.moneyFormat)+'</span>'+
                       '</div>'+
                       '<div class="remove_and_qty">'+
                         '<div class="minct_item_qty">'+
                           '<div class="minct_qty_sign minius_sighn"></div>'+
                           '<div class="minct_qty">'+ item.quantity +'</div>'+
                           '<i class="fa fa-circle-o-notch fa-spin hide" style="font-size:24px"></i>'+
                          ' <div class="minct_qty_sign plus_sign"></div>'+
                         '</div>'+

                        ' <div class="minct_item_remove hide">remove </div>'+
                       '</div>'+
                   ' </div>'+
                    '</div>'+
                     '<div class="new_upsell" data-line="'+index+'" variant_title="'+item.variant_title+'">'+
                      '<p class="fact-msg">'+'<i style="font-size:20px" class="fa">'+'&#xf0eb;'+'</i>'+'Fact: People who use this product for 3 months see best results'+'</p>'+
                      '<div class="msg-details" product-id="'+item.product_id+'" variant-id="'+item.id+'" variant-price="'+item.price+'">'+
                        '<div class="choose_variant">'+
                          '<input type="radio" style="margin-right: 10px;" />'+
                          '<p>'+'Switch to pack of 2 and pack of 3'+'<br>'+'<span>'+'Save upto 15%'+'</span>'+'</p>'+
                        '</div>'+
                        '<div class="edit-icon" product-id="'+item.product_id+'" variant-id="'+item.id+'" variant-price="'+item.price+'">'+'<i class="fa fa-pencil" aria-hidden="true">'+'</i>'+'</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="variant-popup" product-id="'+item.product_id+'" variant-id="'+item.id+'" product-price="'+item.price+'">'+
                    '<div class="inside_popup">'+
                      '<div class="top_head">'+
                        '<p>'+'Purchase Options'+'</p>'+
                        '<img id="top_head" product-id="'+item.product_id+'" src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/button-ui_1.png?v=1675079012" />'
                      +'</div>'+
                      '<div class="x upsell_variant upsell_variant-'+item.product_id+'" variant-price="'+item.price+'">'+
                        '<p class="select_input_error">'+'Select any upsell variant'+'</p>'+
                        '<div class="buttons">'+
                          '<button class="cancel" product-id="'+item.product_id+'">Cancel</button>'+
                          '<button class="save" product-id="'+item.product_id+'" old-id="'+item.id+'">Save</button>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>';

          
          loop_sum = loop_sum+index
          if(sum == loop_sum){
             total =theme.Currency.formatMoney(cart.total_price, theme.moneyFormat);
      
      
              $('.minct_detail').html(html); 
              $('.minct_subtotal__price').html(total);
              $('.min_cart').addClass('active');
          
           }
        
          })
        
        
      });

    }
      productJSONData()
       
      if($('.item_details').length == 1 && $('.minct_qty')[0].innerText == 0) {
        $('.item_details').hide()  
        // $('.apply_coupon_initial').hide()
        $('.sub-footer').hide()
        $('.empty-cart').show()
        }
      else {
        $('.item_details').show()  
        // $('.apply_coupon_initial').show()
        $('.sub-footer').show()
        $('.empty-cart').hide()
      }
      
      update_cart_price()
      $('body').on('click', '.msg-details', function(event){
        event.preventDefault()
        add_upsell_data()
        var product_id = event.currentTarget['attributes']['product-id']['value']
        var variant_id = event.currentTarget['attributes']['variant-id']['value']
        var variant_price = event.currentTarget['attributes']['variant-price']['value']
        console.log(variant_id)
        $('.variant-popup[variant-id=' + variant_id + ']').css('display','flex')
        show_upsell_variants(product_id,variant_price)
      })

      function add_upsell_data() {

   add_upsell_data = function(){};
    
     var upsell_data_beauty = JSON.parse(localStorage.getItem("upsell_data_beauty"))
     var upsell_data_radiant = JSON.parse(localStorage.getItem("upsell_data_radiant"))
     var upsell_data_happy = JSON.parse(localStorage.getItem("upsell_data_happy"))
     var upsell_data_iron = JSON.parse(localStorage.getItem("upsell_data_iron"))
     console.log('upsell_data',$(upsell_data_happy)[0])
     upsell_data_beauty = $(upsell_data_beauty)[0].replace('69000',$('.beauty .price1')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 401',$('.beauty .saveRS1')[0].innerText).replace('₹ 1,100',$('.beauty .compare_price1')[0].innerText).replace('36% OFF',$('.beauty .percentage1')[0].innerText).replace('₹ 699',$('.beauty .price1')[0].innerText).replace('165000',$('.beauty .price2')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 840',$('.beauty .saveRS2')[0].innerText).replace('₹ 2,200',$('.beauty .compare_price2')[0].innerText).replace('38% OFF',$('.beauty .percentage2')[0].innerText).replace('₹ 1,360',$('.beauty .price2')[0].innerText).replace('231000',$('.beauty .price3')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 1,320',$('.beauty .saveRS3')[0].innerText).replace('₹ 3,300',$('.beauty .compare_price3')[0].innerText).replace('40% OFF',$('.beauty .percentage3')[0].innerText).replace('₹ 1,980',$('.beauty .price3')[0].innerText)
     upsell_data_radiant = $(upsell_data_radiant)[0].replace('88000',$('.radiant .price1')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 220',$('.radiant .saveRS1')[0].innerText).replace('₹ 1,100',$('.radiant .compare_price1')[0].innerText).replace('20% OFF',$('.radiant .percentage1')[0].innerText).replace('₹ 880',$('.radiant .price1')[0].innerText).replace('165000',$('.radiant .price2')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 550',$('.radiant .saveRS2')[0].innerText).replace('₹ 2,200',$('.radiant .compare_price2')[0].innerText).replace('25% OFF',$('.radiant .percentage2')[0].innerText).replace('₹ 1,650',$('.radiant .price2')[0].innerText).replace('231000',$('.radiant .price3')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 990',$('.radiant .saveRS3')[0].innerText).replace('₹ 3,300',$('.radiant .compare_price3')[0].innerText).replace('30% OFF',$('.radiant .percentage3')[0].innerText).replace('₹ 2,310',$('.radiant .price3')[0].innerText)
     upsell_data_happy = $(upsell_data_happy)[0].replace('79000',$('.happy .price1')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 200',$('.happy .saveRS1')[0].innerText).replace('₹ 990',$('.happy .compare_price1')[0].innerText).replace('20% OFF',$('.happy .percentage1')[0].innerText).replace('₹ 790',$('.happy .price1')[0].innerText).replace('148500',$('.happy .price2')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 495',$('.happy .saveRS2')[0].innerText).replace('₹ 1,980',$('.happy .compare_price2')[0].innerText).replace('25% OFF',$('.happy .percentage2')[0].innerText).replace('₹ 1,485',$('.happy .price2')[0].innerText).replace('207900',$('.happy .price3')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 891',$('.happy .saveRS3')[0].innerText).replace('₹ 2,970',$('.happy .compare_price3')[0].innerText).replace('30% OFF',$('.happy .percentage3')[0].innerText).replace('₹ 2,079',$('.happy .price3')[0].innerText)
     upsell_data_iron = $(upsell_data_iron)[0].replace('79000',$('.iron .price1')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 200',$('.iron .saveRS1')[0].innerText).replace('₹ 990',$('.iron .compare_price1')[0].innerText).replace('20% OFF',$('.iron .percentage1')[0].innerText).replace('₹ 790',$('.iron .price1')[0].innerText).replace('148500',$('.iron .price2')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 495',$('.iron .saveRS2')[0].innerText).replace('₹ 1,980',$('.iron .compare_price2')[0].innerText).replace('25% OFF',$('.iron .percentage2')[0].innerText).replace('₹ 1,485',$('.iron .price2')[0].innerText).replace('207900',$('.iron .price3')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 891',$('.iron .saveRS3')[0].innerText).replace('₹ 2,970',$('.iron .compare_price3')[0].innerText).replace('30% OFF',$('.iron .percentage3')[0].innerText).replace('₹ 2,079',$('.iron .price3')[0].innerText)
    
      console.log('upsell_data',upsell_data)
     $('.upsell_variant-6094251163815').remove()
     $('.upsell_variant-6091784978599').remove()
     $('.upsell_variant-6092022481063').remove()
        
    $('.upsell_variant-6094251163815').append($(upsell_data_beauty)[0])
    $('.upsell_variant-6094251163815').append($(upsell_data_beauty)[2])
    $('.upsell_variant-6094251163815').append($(upsell_data_beauty)[4])
    $('.upsell_variant-6094251163815').append($(upsell_data_beauty)[6])

    $('.upsell_variant-6091784978599').append($(upsell_data_radiant)[0])
    $('.upsell_variant-6091784978599').append($(upsell_data_radiant)[2])
    $('.upsell_variant-6091784978599').append($(upsell_data_radiant)[4])
    $('.upsell_variant-6091784978599').append($(upsell_data_radiant)[6])

    $('.upsell_variant-6092022481063').append($(upsell_data_happy)[0])
    $('.upsell_variant-6092022481063').append($(upsell_data_happy)[2])
    $('.upsell_variant-6092022481063').append($(upsell_data_happy)[4])
    $('.upsell_variant-6092022481063').append($(upsell_data_happy)[6])

    $('.upsell_variant-8199164985600').append($(upsell_data_iron)[0])
    $('.upsell_variant-8199164985600').append($(upsell_data_iron)[2])
    $('.upsell_variant-8199164985600').append($(upsell_data_iron)[4])
    $('.upsell_variant-8199164985600').append($(upsell_data_iron)[6])
  
  }

    }
     
  },
  webengage_view_cart: function(cart){
    
        var data = [];
    
    $(cart.items).each(function(index, item){
    
      data.push({"Name" :item.product_title, "Id" :item.id,"quantity":item.quantity,"Price":item.price/100,"Image":item.image});
      
    });
    
    // console.log(cart);
    
         webengage.track("Cart Viewed", {
           cart_detail:data,
           total_quantity: cart.item_count,
           total:cart.total_price/100
         });
  },
  webengage_add_cart: function(item){
    
       
        	webengage.track("Added To Cart", {
              "Id" : item.id,
              "Price" : item.price/100,
              "Name" : item.product_title,
              "quantity":  item.quantity,
              "Image": item.image
            });
    
    // nyumi_api.facebook_event(item.price/100, item.quantity);
           
  },
  webengage_Recommendation_cart: function(item){    
       
        	webengage.track("Recommendation", {
              "Id" : item.id,
              "Price" : item.price/100,
              "Name" : item.product_title,
              "quantity":  item.quantity,
              "Image": item.image
            });
           
  },
  webengage_update_cart: function(title, id, qty, price, img){
    
    id = parseInt(id);
    qty = parseInt(qty);
    price = parseInt(price);
    
    if(typeof(img) != 'undefined' && img != null){
    	if(img.indexOf('https') == -1){
      		img = 'https:'+img;
    	}
    }
    
    console.log(price);
    
    
    webengage.track("Cart update", {       
        "Name" : title,        
        "Id" :  id,   
        "quantity": qty,
        "Price":  price,
        "Image": img
    });
    
  },
  webengage_delete_cart: function(title, id, qty, price,img){ 
    
    id = parseInt(id);
    qty = parseInt(qty);
    price = parseInt(price);
    
    if(img.indexOf('https') == -1){
      img = 'https:'+img;
    }
     
    webengage.track("Cart remove", { 
        "Name" : title,        
        "Id" :  id,   
        "quantity": qty,
        "Price":  price,
        "image": img
    });
    
  },
  webengage_page_click: function(){
    
    $('body').on('click', 'a', function(e){
       var url = $(this).attr('href');   
      
       if($('body').hasClass('template-index')){    
          home_click(url);  
       } 
    });
    
    function home_click(url){        
        webengage.track("Home Click", { 
            "url" : url    
        });
    } 
   
  },
  taccking_url: function(){
    
    var url = window.location.search;
    let searchParams = new URLSearchParams(url);
    var utmsource = '(not set)';
    var utmmedium = '(not set)';
    var utmcampaign = '(not set)';
    var utmterm = '(not set)';
    var utmcontent = '(not set)';
    if(url.indexOf('utm_source') != -1){   
    	var utmsource = searchParams.get('utm_source');
    }
    if(url.indexOf('utm_medium') != -1){
      	var utmmedium = searchParams.get('utm_medium');
    }
    if(url.indexOf('utm_campaign') != -1){
      	var utmcampaign = searchParams.get('utm_campaign');
    }
    if(url.indexOf('utm_term') != -1){
      	var utmterm = searchParams.get('utm_term');
    }
    if(url.indexOf('utm_content') != -1){
      	var utmcontent = searchParams.get('utm_content');
    }
    if(url.indexOf('utm_campaign') != -1){
        webengage.track('UTM parameters',{
            "UTM campaign": utmsource,
            "UTM Source": utmsource,
            "UTM Medium": utmmedium,
            "UTM Content": utmcontent,
            "UTM Term": utmterm
        });
     }
    
  },
  // facebook_event: function(total_price, total_qty){    
  //      fbq('track', 'AddToCart', {value: total_price, currency: 'INR', number_item:total_qty}); 
  // }
  
}

function set_timeinterval(){
   nyumi_api.loader_function();
}

// update_cart_price()


// $(function(){
//$(window).load(function() {
    
  
  nyumi_api.outher_option();
  
  nyumi_api.product_page();
  
  nyumi_api.mincart();
  
  setTimeout(function(){  
    if($('body').hasClass('template-index') ){    
        scroll_top();  
    	$('.reload_bg').fadeOut();
        home_line_scroll(); 
    } 
  },1300);
  
  setTimeout(function(){ 
  		$('.insta_header, #insta-feed').show();
  }, 7400);
  
 
   
   set_timeinterval();
   nyumi_api.load_gif();
  
   nyumi_api.webengage_page_click();
  
   nyumi_api.taccking_url();
  
   var search = window.location.search;    
    if(search == '?customer_posted=true' || search == '?form_type=customer'){   
      	subscription_msg();
    }
// });


function scroll_top(){
   var search = window.location.search;    
    if(search == '?customer_posted=true' || search == '?form_type=customer'){   
      	subscription_msg();
      
    }else{
     $('body, html').animate({scrollTop: 0}, 200);
    }
}
 
 function subscription_msg(){
  		setTimeout(function(){
      		$('body, html').animate({scrollTop: $('#footer1_section').offset().top}, 200);
        }, 300);
 }


var slidesToShow1 = 4;
$(window).on("load resize", function(){
  if($(window).width() < 769) {
    slidesToShow1 = 1;
    if($(".product-single__thumbnails").hasClass("slick-initialized")) {
      $(".product-single__thumbnails").slick('unslick');
      $(".product-single__thumbnails").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
  	}
    else {
      $(".product-single__thumbnails").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }
  else {
    slidesToShow1 = 4;
    if($(".product-single__thumbnails").hasClass("slick-initialized")) {
      $(".product-single__thumbnails").slick('unslick'); 
    }
  }
 
  slider_int();
  
});

function slider_int(){
  setTimeout(function(){
     if($(".component_slider").hasClass("slick-initialized")) {
      $(".component_slider").slick('unslick');
    }
    $(".component_slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: slidesToShow1,
      slidesToScroll: 1
    });
  },300);
  
}

var window_width = $(window).width();

$(window).on("resize", function(){
  testimonial_slider();
   nyumi_api.slder_product(); 
  
   if($('body').hasClass('template-index')){
     var resize = $(window).width();
     if(window_width >769 &&  resize < 769){
        location.reload();
     }
     if(window_width < 769 &&  resize > 769){
        location.reload();
     }
     window_width = resize;
   }
  
});

 

function testimonial_slider(){
   var slideToShow = 3;
   $('.slider-nav').css('opacity', 0);
  
  if($(window).width() > 768 && $(window).width() < 1024) {
    
    if($(".slicks").hasClass("slick-initialized")) {
      $(".slicks").slick("unslick");
    }
    if($(".slider-nav").hasClass("slick-initialized")) {
      $('.slider-nav').slick("unslick");
    }
    slideToShow = 2;
    setTimeout(function(){
      syncSlides(slideToShow);
    }, 100);
    
  }else if($(window).width() < 769) {
    if($(".slicks").hasClass("slick-initialized")) {
      $(".slicks").slick("unslick");
    }
    if($(".slider-nav").hasClass("slick-initialized")) {
      $('.slider-nav').slick("unslick");
    }
    slideToShow = 1;
    setTimeout(function(){
      syncSlides(slideToShow);
    }, 100);
    
  }
  else {
    if($(".slicks").hasClass("slick-initialized")) {
      $(".slicks").slick("unslick");
    }
    if($(".slider-nav").hasClass("slick-initialized")) {
      $('.slider-nav').slick("unslick");
    }
    slideToShow = 3;
    setTimeout(function(){
    	syncSlides(slideToShow);
    }, 100);
  }
  
}


 




$('.slicks').on("afterChange", function(event, slick, currentSlide) { 
  if(currentSlide == 0){
    $('.testimonial_first .slick-prev').addClass('slick-disabled');
  }else{
     $('.testimonial_first .slick-prev').removeClass('slick-disabled');
  }
  //
  if( (currentSlide + 1) === slick.slideCount){
     $('.testimonial_first .slick-next').addClass('slick-disabled');
  }else{
     $('.testimonial_first .slick-next').removeClass('slick-disabled');
  }
 
});

function syncSlides(slideToShow) { 
  var speed = 0;
  if($(window).width() < 769) {
     speed = 2000;
  }
        $('.slider-nav').slick({
        slidesToShow: slideToShow,
        slidesToScroll: 1,    
        asNavFor: '.slicks',
        dots: false,
        arrows: false,  
        centerMode: true,         
        speed: speed,
        infinite: false, 
        focusOnSelect: false,
          mobileFirst:true,
          responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 2000             
            }
          }]
      });
  $('.slicks').slick({
      dots: false,
      infinite: false,
      arrows: true,  
      speed: 200,
      slidesToShow: 1,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      asNavFor: '.slider-nav'
    
      });
  
      $('.slicks').slick('slickGoTo', 0);
      //$('.slider-nav').slick('slickGoTo', 1);
  
     $('.slider-nav').css('opacity', 1);
}


$('.slicks').on("afterChange", function(event, slick, currentSlide){
  console.log(currentSlide);
  $('.test_hover_img .test_prd').hide();
  $('.test_hover_img .test_prd[data-count="'+currentSlide+'"]').show();
});
                

$("body").on("click", ".vertical-scroller li", function(){
  var ind = $(this).index();
  $(".vertical-scroller li").removeClass("active");
  $(this).addClass("active");
  $(".fade-slider li").removeClass("active");
  $(".fade-slider li:eq("+ind+")").addClass("active");
});

$("body").on("click", ".ingf_list ul li", function(){
  var ind = $(this).index();
  $(".ingf_list ul li").removeClass("active");
  $(this).addClass("active");
  
  $(".ingf-slider li").removeClass("active");
  $(".ingf-slider li:eq("+ind+")").addClass("active");
});
$("body").on("click", ".toggle-nutrition", function(event){
  event.preventDefault();
  if(!$(this).hasClass("active")) {
   $(this).text("nutrition info -");
  }
  else {
    $(this).text("nutrition info +");
  }
  $(this).toggleClass("active");
  
  $(this).parent().next(".show-nutrition").stop().fadeToggle();
});

//$(window).load(function(){
// $(function(){   
  
//   setTimeout(function(){ 
//      if(!$('body').hasClass('template-blog') ){    
//     	 scroll_top();
//      }
    
//     $('.reload_bg').fadeOut();
//     home_line_scroll();
//     bundle_scoll();
//   },1300);
  
  
  
// });

function bundle_scoll(){
   
  var $url = $(location).attr('hash'); 
   
   if ($url.length === 0) {
        return;
    }

   var pos = $($url).offset().top;
    // animated top scrolling
   $('body, html').animate({scrollTop: pos}, 300);
}



// menu scroll 

var position = $(window).scrollTop(); 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        
        $('body').removeClass('add_top_menu');
    } else {
          
         $('body').addClass('add_top_menu');
    }
    position = scroll;
  
  home_line_scroll();
});




function home_line_scroll(){
  if($('.Science_section').length > 0)
  if($('.Science_section').isInViewport()) {
      $('.Science_section').addClass('active');
  }  
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Oops, the form is incomplete. Please fill in all fields to submit.");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

