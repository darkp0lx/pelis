_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"1iga":function(e,n,t){"use strict";t.r(n);var r=t("jT3O"),i=t("nKUr"),c=t("vOnD"),o=t("JhT6");function a(){var e=Object(r.a)(["\n  h3{\n    color:white;\n    font-size:30px;\n  }\n  padding: 2em;\n  padding-top: 8em;\n  ul {\n    list-style: none;\n  }\n"]);return a=function(){return e},e}n.default=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{children:Object(i.jsxs)(l,{children:[Object(i.jsx)("h3",{children:"hola soy el HectorDev@ \ud83d\udc53 "}),Object(i.jsx)("h4",{children:"Ofresco mis Servicios de Frontend Developer tengo los siguientes skills \ud83d\udca5 :"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"\u2714html  "}),Object(i.jsx)("li",{children:"\u2714css"}),Object(i.jsx)("li",{children:"\u2714javascript"}),Object(i.jsx)("li",{children:"\u2714React"}),Object(i.jsx)("li",{children:"\u2714Next(basico)"}),Object(i.jsx)("li",{children:"\u2714Firebase"}),Object(i.jsx)("li",{children:"\u2714NodeJs(basico)"})]})]})})})};var l=c.c.div(a())},JhT6:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("jT3O"),i=t("nKUr"),c=t("q1tI"),o=t("YFqc"),a=t.n(o),l=t("vOnD");function s(){var e=Object(r.a)(["\n  cursor: pointer;\n  line-height: 80px;\n  padding: 0.5em;\n  font-weight: bold;\n"]);return s=function(){return e},e}function u(){var e=Object(r.a)(["\n  width: 100%;\n  background-color: #fff;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  padding-right: 1em;\n\n  i {\n    display: none;\n    @media (max-width: 650px) {\n      display: block;\n      z-index:10000;\n    }\n  }\n  @media (max-width: 650px) {\n    ul{\n      flex-direction: column;\n      width: 50vw;\n      height: auto;\n\n      position: absolute;\n      right: 0;\n      top: -100vh;\n      text-align: center;\n      transition: all 0.5s;\n    }\n    ul.active {\n      flex-direction: column;\n      width: 50vw;\n      height: auto;\n      position: absolute;\n      right: 0;\n      top: 75px;\n      text-align: center;\n      transition: all 0.5s;\n    }\n  }\n  ul {\n    float: right;\n    margin-right: 20px;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: space-between;\n    width: 30vw;\n    background: white;\n\n    li {\n      display: inline-block;\n      :hover {\n        color: red;\n      }\n    }\n  }\n"]);return u=function(){return e},e}function f(){var e=Object(r.a)(["\n  padding: 0 0.5em;\n  height: 75px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  h1 {\n    margin: 0;\n  }\n"]);return f=function(){return e},e}function d(){var e=Object(c.useRef)(),n=Object(c.useRef)();return Object(i.jsx)(j,{children:Object(i.jsxs)(h,{children:[Object(i.jsx)(a.a,{href:"/",children:Object(i.jsx)(p,{children:Object(i.jsx)("h1",{children:"\ud83c\udf9e  Movie Films"})})}),Object(i.jsxs)("ul",{ref:n,children:[Object(i.jsx)("li",{children:Object(i.jsx)(a.a,{href:"/about",children:Object(i.jsx)("a",{children:"About "})})}),Object(i.jsx)("li",{children:Object(i.jsx)(a.a,{href:"/servicios",children:Object(i.jsx)("a",{children:"Servicios"})})}),Object(i.jsx)("li",{children:Object(i.jsx)(a.a,{href:"/favoritos",children:Object(i.jsx)("a",{children:"Mis Favoritos"})})})]}),Object(i.jsx)("label",{ref:e,onClick:function(){n.current.classList.toggle("active")},children:Object(i.jsx)("i",{className:"fas fa-bars"})})]})})}var h=l.c.div(f()),j=l.c.div(u()),p=l.c.div(s());function v(){var e=Object(r.a)(["\n  top: 0;\n  left: 0;\n"]);return v=function(){return e},e}function b(e){var n=e.children;return Object(i.jsxs)(x,{children:[Object(i.jsx)(d,{}),n]})}var x=l.c.div(v())},OQ67:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/servicios",function(){return t("1iga")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),i=t("7KCV");n.__esModule=!0,n.default=void 0;var c=i(t("q1tI")),o=t("elyg"),a=t("nOHt"),l=t("vNVm"),s={};function u(e,n,t,r){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),i=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,o.resolveHref)(i,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,o.resolveHref)(i,e.as):a||c}}),[i,e.href,e.as]),d=f.href,h=f.as,j=e.children,p=e.replace,v=e.shallow,b=e.scroll,x=e.locale;"string"===typeof j&&(j=c.default.createElement("a",null,j));var O=c.Children.only(j),g=O&&"object"===typeof O&&O.ref,m=(0,l.useIntersection)({rootMargin:"200px"}),w=r(m,2),y=w[0],_=w[1],k=c.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,c.useEffect)((function(){var e=_&&n&&(0,o.isLocalURL)(d),r="undefined"!==typeof x?x:t&&t.locale,i=s[d+"%"+h+(r?"%"+r:"")];e&&!i&&u(t,d,h,{locale:r})}),[h,d,_,x,n,t]);var E={ref:k,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,c,a,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[i?"replace":"push"](t,r,{shallow:c,locale:l,scroll:a}))}(e,t,d,h,p,v,b,x)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(t,d,h,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var L="undefined"!==typeof x?x:t&&t.locale,M=t&&t.isLocaleDomain&&(0,o.getDomainLocale)(h,L,t&&t.locales,t&&t.domainLocales);E.href=M||(0,o.addBasePath)((0,o.addLocale)(h,L,t&&t.defaultLocale))}return c.default.cloneElement(O,E)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("zoAU");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,l=(0,i.useRef)(),s=(0,i.useState)(!1),u=r(s,2),f=u[0],d=u[1],h=(0,i.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,c=r.observer,o=r.elements;return o.set(e,n),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,i.useEffect)((function(){if(!o&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[h,f]};var i=t("q1tI"),c=t("0G5g"),o="undefined"!==typeof IntersectionObserver;var a=new Map}},[["OQ67",0,2,1,3]]]);