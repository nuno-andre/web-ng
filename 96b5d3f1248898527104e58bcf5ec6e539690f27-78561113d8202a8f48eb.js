(self.webpackChunkgatsby_serif_theme=self.webpackChunkgatsby_serif_theme||[]).push([[427],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!a(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";var r,o,a,i,c=n(5697),l=n.n(c),s=n(4839),u=n.n(s),f=n(2993),m=n.n(f),p=n(7294),d=n(6494),h=n.n(d),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",w="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",k="property",N="rel",j="src",P="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",L="defer",I="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",q=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],F="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},J=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=Q(e,v.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,x);return t||r||void 0},$=function(e){return Q(e,_)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===N&&"canonical"===e[n].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(f,m);var p={baseTag:se(v.BASE,n),linkTags:se(v.LINK,a),metaTags:se(v.META,i),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(F):n.getAttribute(F)!==i.join(",")&&n.setAttribute(F,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,o=fe(n,r),[p.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(v.BASE,t,r),bodyAttributes:me(y,n,r),htmlAttributes:me(g,o,r),link:me(v.LINK,a,r),meta:me(v.META,i,r),noscript:me(v.NOSCRIPT,c,r),script:me(v.SCRIPT,l,r),style:me(v.STYLE,s,r),title:me(v.TITLE,{title:f,titleAttributes:m},r)}},de=u()((function(e){return{baseTag:W([w,P],e),bodyAttributes:V(y,e),defer:Q(e,L),encode:Q(e,I),htmlAttributes:V(g,e),linkTags:G(v.LINK,[N,w],e),metaTags:G(v.META,[S,E,A,k,O],e),noscriptTags:G(v.NOSCRIPT,[C],e),onChangeClientState:$(e),scriptTags:G(v.SCRIPT,[j,C],e),styleTags:G(v.STYLE,[T],e),title:z(e),titleAttributes:V(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),he=(o=de,i=a=function(e){function t(){return B(this,t),J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return K({},o,((t={})[r.type]=i,t.titleAttributes=K({},a),t));case v.BODY:return K({},o,{bodyAttributes:K({},a)});case v.HTML:return K({},o,{htmlAttributes:K({},a)})}return K({},o,((n={})[r.type]=K({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.Z=he},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},3145:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),o=n(5933),a=n(5444);var i=e=>{const t=(0,a.K2)("3041911663");return r.createElement("div",{id:"main-menu",className:"main-menu"},r.createElement("ul",null,t.allMainMenuJson.edges.map((e=>{let{node:t}=e;return r.createElement("li",{key:t.name},r.createElement(a.rU,{to:t.url,activeClassName:"active"},t.name))}))))};class c extends r.Component{constructor(e){var t,n,r;super(e),r=()=>{this.setState((e=>({hamburgerActive:!e.hamburgerActive}))),this.props.toggleMenu(this.state.hamburgerActive)},(n="handleToggle")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.state={hamburgerActive:!1}}render(){return r.createElement("button",{id:"toggle-main-menu-mobile",className:"hamburger hamburger--slider ".concat(this.state.hamburgerActive?"is-active":""),type:"button",onClick:this.handleToggle},r.createElement("span",{className:"hamburger-box"},r.createElement("span",{className:"hamburger-inner"})))}}var l=c;var s=e=>{const t=(0,a.K2)("760941739");return r.createElement("div",{id:"main-menu-mobile",className:"main-menu-mobile ".concat(e.active?"open":"")},r.createElement("ul",null,t.allMainMenuJson.edges.map((e=>{let{node:t}=e;return r.createElement("li",{key:t.name},r.createElement(a.rU,{to:t.url,activeClassName:"active"},t.name))}))))};class u extends r.Component{constructor(e){var t,n,r;super(e),r=e=>{this.setState((e=>({menuActive:!e.menuActive})))},(n="toggleMenu")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.state={menuActive:!1}}render(){const e=this.props.data.configJson;return r.createElement("div",{className:"header"},r.createElement("div",{className:"container"},r.createElement("div",{className:"logo"},r.createElement(a.rU,{to:"/"},r.createElement("img",{alt:e.logo.alt,src:e.logo.desktop}))),r.createElement("div",{className:"logo-mobile"},r.createElement(a.rU,{to:"/"},r.createElement("img",{alt:e.logo.alt,src:e.logo.mobile}))),r.createElement(s,{active:this.state.menuActive}),r.createElement(i,null),r.createElement(l,{toggleMenu:this.toggleMenu})))}}var f=()=>r.createElement(a.i1,{query:"4266893431",render:e=>r.createElement(u,{data:e})});var m=e=>{const t=(0,a.K2)("239876865");return r.createElement("div",{className:"footer"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("div",{className:"footer-inner"},r.createElement("h3",{className:"footer-title"},t.site.siteMetadata.title),r.createElement("ul",null,t.allFooterMenuJson.edges.map((e=>{let{node:t}=e;return r.createElement("li",{key:t.name},r.createElement(a.rU,{to:t.url},t.name))})))))),r.createElement("hr",{className:"footer-line"})))},p=n(5999);var d=e=>{const t=(0,a.K2)("2951000573");return r.createElement("div",{className:"sub-footer"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("div",{className:"sub-footer-inner"},r.createElement(p.Z,null),r.createElement("div",{className:"copyright"},r.createElement("span",null,t.configJson.footer.copyright_text),t.configJson.footer.copyright_link&&r.createElement("a",{href:t.configJson.footer.copyright_mailto},t.configJson.footer.copyright_link)))))))};var h=e=>r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement("div",{className:"page".concat(e.bodyClass?" ".concat(e.bodyClass):"")},r.createElement("div",{id:"wrapper",className:"wrapper"},r.createElement(f,null),e.children),r.createElement(m,null),r.createElement(d,null)))},5933:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});n(7471);var r=n(7294),o=n(5414),a=n(5444),i=n.p+"static/fav-1bc327dcdea278d7b25fe4c5050b4c6c.png";const c=e=>r.createElement(a.i1,{query:s,render:t=>{const n=e.title,a=e.dontFormat?"".concat(n):"".concat(n," - ").concat(t.site.siteMetadata.title),c=e.description||t.site.siteMetadata.description,l=e.image||t.intro.frontmatter.image_mobile;return r.createElement(o.Z,{htmlAttributes:{lang:"en"},title:n,titleTemplate:e.dontFormat?"%s":"%s - ".concat(t.site.siteMetadata.title),link:[{rel:"shortcut icon",type:"image/png",href:"".concat(i)}]},r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:a}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:image",content:l}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:site",content:"@python_es"}),r.createElement("meta",{name:"twitter:title",content:a}),r.createElement("meta",{name:"twitter:description",content:c}),r.createElement("meta",{name:"twitter:image",content:l}))}});c.defaultProps={lang:"en",meta:[],keywords:[]};var l=c;const s="2415195612"},5999:function(e,t,n){"use strict";var r=n(7294),o=n(5444);t.Z=e=>{const t=(0,o.K2)("1902545798"),n=e.dark;return r.createElement("div",{className:"social"},t.allSocialJson.edges.map((e=>{let{node:t}=e;return r.createElement("a",{key:t.name,href:t.link,target:"blank"},r.createElement("img",{src:n?t.imageDark:t.image,title:t.name,alt:t.name}))})))}},7471:function(e,t,n){"use strict";var r=n(8845),o=n(4691),a=n(4075),i=n(1267),c=n(2933),l=n(2125).f,s=n(3826),u=a.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(f[t]=!0),t};s(m,u);var p=m.prototype=u.prototype;p.constructor=m;var d=p.toString,h="Symbol(test)"==String(u("test")),y=/^Symbol\((.*)\)[^)]+$/;l(p,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=d.call(e);if(i(f,e))return"";var n=h?t.slice(7,-1):t.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=96b5d3f1248898527104e58bcf5ec6e539690f27-78561113d8202a8f48eb.js.map