(this["webpackJsonpreact-context-hook-example"]=this["webpackJsonpreact-context-hook-example"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(6),i=n.n(o),s=n(3);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,c=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(a){c=!0,o=a}finally{try{r||null==s.return||s.return()}finally{if(c)throw o}}return n}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=c.a.createContext(null),p="SET VALUE",y="REMOVE VALUE",m="RESET STORE";var v=Object(s.b)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var n=t.payload,r=n.key,c=n.value,o=b({},e);return o[r]=c,o;case y:var i=t.payload.key,s=b({},e);return delete s[i],s;case m:return t.payload;default:return e}}}),g=function(e){var t=e.getState;return function(e){return function(n){var r=t().main,c=e(n);return console.group("%c react-context-hook","font-weight: bold"),console.info("%c ".concat("PREV STATE"," "),"background: #00e5a0;font-weight: bold",r),console.info("%c ".concat("ACTION"," %c ",n.type),"background: yellow;font-weight: bold","font-weight: bold;",n.payload.key||"",n.payload.value||n.payload),console.info("%c ".concat("NEXT STATE"," "),"background: #00cbff;font-weight: bold",t().main),console.groupEnd(),c}}},x=function(e){return function(t){var n=t.getState;return function(t){return function(r){var c=r.payload.key,o=n().main[c],i=t(r),s=n().main[c];return e(n().main,c,o,s),i}}}};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.logging,r=t.listener,c=[r&&x(r),n&&g].filter(Boolean);return Object(s.c)(v,{main:e},s.a.apply(void 0,h(c)))}var S=function(e,t){return{type:p,payload:{key:e,value:t}}},w=function(e){return{type:y,payload:{key:e}}};function E(e){return{reset:function(t){e.dispatch(function(){return{type:m,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}(t))},set:function(t,n){e.dispatch(S(t,n))},delete:function(t){e.dispatch(w(t))},getState:function(){return e.getState().main}}}var C={},A=(E(k()),function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.unsuscribeFromSubscription=null,this.onStateChange=n.bind(this)}var t,n,r;return t=e,(n=[{key:"subscribe",value:function(){this.unsuscribeFromSubscription=this.store.subscribe(this.onStateChange)}},{key:"unsubscribe",value:function(){this.unsuscribeFromSubscription(),this.unsuscribeFromSubscription=null}}])&&a(t.prototype,n),r&&a(t,r),e}());function T(e){var t=j(Object(r.useReducer)((function(e){return e+1}),0),2)[1],n=Object(r.useContext)(O).store,c=Object(r.useRef)(),o=Object(r.useRef)();function i(){try{var e=c.current(n.getState().main);if(r=e,i=o.current,r===i)return;o.current=e}catch(s){}var r,i;t({})}var s,a=Object(r.useMemo)((function(){return new A(n,i)}),[n,i]);return s=e!==c.current?e(n.getState().main):o.current,Object(r.useEffect)((function(){c.current=e,o.current=s})),Object(r.useEffect)((function(){return a.subscribe(),i(),function(){return a.unsubscribe()}}),[n,a]),s}function R(e,t){return[N(e,t),I(e),P(e)]}function I(e){var t=Object(r.useContext)(O).store;return function(n){t.dispatch(S(e,n))}}function P(e){var t=Object(r.useContext)(O).store;return function(n){t.dispatch(w(e))}}function N(e,t){var n=T((function(t){return t[e]}));return void 0!==n?n:t}var D=n(0);function J(){return Object(D.jsxs)("header",{className:"App-header",children:[Object(D.jsxs)("h1",{children:["React context Hook ",Object(D.jsx)("a",{href:"docs",children:"Documentation"})," ",Object(D.jsx)("a",{href:"https://github.com/Spyna/react-context-hook",children:"GitHub"}),"."]}),Object(D.jsx)("h2",{children:"A 3 KB library to manage the global state with React hooks."})]})}var V=n(2);const B=()=>{const e=c.a.useRef();return c.a.useEffect((()=>{e.current.classList.toggle("flash"),setTimeout((()=>e.current&&e.current.classList.toggle("flash")),100)})),e};function F(){const e=R("count",0),t=Object(V.a)(e,3),n=t[0],r=t[1],c=t[2];return Object(D.jsxs)("section",{ref:B(),children:[Object(D.jsxs)("h3",{children:["Set the value ",Object(D.jsx)("em",{children:'"count"'})," in the store"]}),Object(D.jsxs)("button",{id:"decrement",onClick:()=>r(n-1),children:["Decrement -"," "]}),Object(D.jsx)("span",{className:"count",children:n}),Object(D.jsxs)("button",{id:"increment",onClick:()=>r(n+1),children:["Increment +"," "]}),Object(D.jsx)("button",{id:"delete-count",onClick:()=>c(),children:'Delete "count" from store'})]})}function L(){const e=R("username","spyna"),t=Object(V.a)(e,2),n=t[0],r=t[1],o=c.a.useState(n),i=Object(V.a)(o,2),s=i[0],a=i[1];return Object(D.jsxs)("section",{ref:B(),children:[Object(D.jsxs)("h3",{children:["Set the value ",Object(D.jsx)("em",{children:'"username"'})," in the store"]}),Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(s)},children:[Object(D.jsx)("input",{onChange:function(e){a(e.target.value)},value:s,name:"username",placeholder:"type your username"}),Object(D.jsx)("button",{id:"set-username",children:"Change value in store"})]})]})}n(16);const M="login.logged_user";function U(){const e=N(M,{name:"My name",surname:" surname",access_token:{type:"Bearer",token:"d293LCB5b3UgYXJlIHZlcnkgY3VyaW91cyEgZ29vZCBmb3IgeW91",expires_in:3600}}),t=I(M),n=P(M);return Object(D.jsxs)("section",{ref:B(),children:[Object(D.jsxs)("h3",{children:["Set/Remove this object in the store with the key ",Object(D.jsx)("code",{children:M})]}),Object(D.jsx)("pre",{children:Object(D.jsx)("code",{children:JSON.stringify(e,null," ")})}),Object(D.jsx)("button",{onClick:()=>t(e),children:"set Object in store"}),Object(D.jsx)("button",{onClick:()=>n(),children:"remove Object from store"})]})}function H(){const e=R("price"),t=Object(V.a)(e,3),n=t[0],r=t[1],c=t[2];return Object(D.jsxs)("section",{ref:B(),children:[Object(D.jsxs)("h3",{children:["Set/Remove the key",Object(D.jsx)("code",{children:"price"})," with the value of"," ",Object(D.jsx)("code",{children:"99.9 $"})]}),Object(D.jsx)("pre",{children:Object(D.jsx)("code",{children:n})}),Object(D.jsx)("button",{onClick:()=>r("99.9 $"),children:"set price in store"}),Object(D.jsx)("button",{onClick:()=>c(),children:"remove prce from store"})]})}function Y(){const e=[I(c="a-sample-key"),P(c)],t=Object(V.a)(e,2),n=t[0],r=t[1];var c;return Object(D.jsxs)("section",{ref:B(),children:[Object(D.jsxs)("h3",{children:["Set/Remove the key",Object(D.jsx)("code",{children:"'a-sample-key'"})," with the value"," ",Object(D.jsx)("code",{children:"'the value'"})]}),Object(D.jsx)("button",{id:"set-a-value",onClick:()=>n("the value"),children:"set 'a-sample-key' in store"}),Object(D.jsx)("button",{id:"delete-a-value",onClick:()=>r(),children:"remove 'a-sample-key' from store"})]})}function Z(){const e=T((function(e){return e}));return Object(D.jsxs)("section",{ref:B(),children:[Object(D.jsxs)("h3",{children:["This is a React App that has a global state. This is the value of the global ",Object(D.jsx)("em",{children:"state"}),"."]}),Object(D.jsx)("pre",{children:Object(D.jsx)("code",{id:"global-state",children:JSON.stringify(e,null," ")})}),Object(D.jsx)("p",{children:"You can change the global state from different components, using the buttons you find in this page"}),Object(D.jsx)("p",{children:"Every time a component renders, it flashes. "})]})}function $(){const e=N("logIn"),t=N("counter"),n=N("nullValue");return Object(D.jsxs)("section",{ref:B(),children:[Object(D.jsx)("h3",{children:'"Falsy" value are preserved'}),Object(D.jsxs)("p",{children:['"logIn" value is: ',Object(D.jsx)("code",{children:JSON.stringify(e)})]}),Object(D.jsxs)("p",{children:['"counter" (not count) value is: ',Object(D.jsx)("code",{children:JSON.stringify(t)})]}),Object(D.jsxs)("p",{children:['"nullValue" value is: ',Object(D.jsx)("code",{children:JSON.stringify(n)})]})]})}var _=function(e,t,n){var r=k(t,Object.freeze(b(b({},C),n)));return E(r),function(t){return c.a.createElement(O.Provider,{value:{store:r}},c.a.createElement(e,t))}}((function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(J,{}),Object(D.jsxs)("main",{className:"App",children:[Object(D.jsx)(Z,{}),Object(D.jsx)(F,{}),Object(D.jsx)(L,{}),Object(D.jsx)(U,{}),Object(D.jsx)(H,{}),Object(D.jsx)(Y,{}),Object(D.jsx)($,{})]})]})}),{count:10,logIn:!1,counter:0,nullValue:null},{listener:(e,t,n,r)=>{console.log('the key "'.concat(t,'" changed in the store')),console.log("the old value is",n),console.log("the current value is",r),console.log("the state is",e)},logging:!0});i.a.render(Object(D.jsx)(_,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.542290b9.chunk.js.map