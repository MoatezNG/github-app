module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=10)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("semantic-ui-react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@reduxjs/toolkit")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.exports=function(e){var t=n(e,4),r=t[1],a=t[3];if(!a)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),c="/*# ".concat(i," */"),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[r].concat(s).concat([c]).join("\n")}return[r].join("\n")}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&a[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},function(e,t,r){e.exports=r(11)},function(e,t,r){"use strict";r.r(t);var n=r(4),a=r.n(n);let o=r(14).default;const i=parseInt("3000",10);t.default=a()().use((e,t)=>o.handle(e,t)).listen(i,()=>{console.log("> App started http://localhost:"+i)})},function(e,t,r){"use strict";var n=r(8),a=r.n(n),o=r(9),i=r.n(o)()(a.a);i.push([e.i,"body {\r\n  margin: 0;\r\n  padding: 2rem;\r\n  font-family: sans-serif;\r\n}\r\n.center {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.py-1 {\r\n  padding: 2rem 0rem 2rem 0rem;\r\n}\r\n.space-between {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n","",{version:3,sources:["webpack://./src/client/App.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,mBAAmB;AACrB",sourcesContent:["body {\r\n  margin: 0;\r\n  padding: 2rem;\r\n  font-family: sans-serif;\r\n}\r\n.center {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.py-1 {\r\n  padding: 2rem 0rem 2rem 0rem;\r\n}\r\n.space-between {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n"],sourceRoot:""}])},function(e){e.exports=JSON.parse('{"client":{"css":["/static/css/client.4ec85e0c.css"],"js":["/static/js/client.e1c3c6d7.js"],"map":["/static/css/client.4ec85e0c.css.map","/static/js/client.e1c3c6d7.js.map"],"chunks":[0]},"noentry":{"ico":["/favicon.ico"],"txt":["/robots.txt","/static/js/client.e1c3c6d7.js.LICENSE.txt"],"eot":["/static/media/brand-icons.13db00b7.eot","/static/media/icons.8e3c7f55.eot","/static/media/outline-icons.701ae6ab.eot"],"woff":["/static/media/brand-icons.a046592b.woff","/static/media/icons.faff9214.woff","/static/media/outline-icons.ef60a4f6.woff"],"svg":["/static/media/brand-icons.a1a749e8.svg","/static/media/icons.962a1bf3.svg","/static/media/outline-icons.82f60bd0.svg"],"ttf":["/static/media/brand-icons.c5ebe0b3.ttf","/static/media/icons.b87b9ba5.ttf","/static/media/outline-icons.ad97afd3.ttf"],"woff2":["/static/media/brand-icons.e8c322de.woff2","/static/media/icons.0ab54153.woff2","/static/media/outline-icons.cd6c777f.woff2"],"png":["/static/media/flags.9c74e172.png"]}}')},function(e,t,r){"use strict";r.r(t),r.d(t,"renderApp",(function(){return W}));var n=r(3),a=r(5),o=r(6),i=r.n(o);i.a.create({baseURL:"http://localhost:3000/api/v1"});const c=i.a.create({baseURL:"https://api.github.com",headers:{Accept:"application/vnd.github.v3+json"}});function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=Object(n.createAsyncThunk)("github/repositories",async(e,{rejectWithValue:t})=>{try{return await(async()=>(await c.get("/repositories")).data)()}catch(e){return t(e.message)}}),d=Object(n.createAsyncThunk)("github/searchedRepositories",async(e,{rejectWithValue:t})=>{try{return await(async e=>(await c.get("/search/repositories",{params:l(l({},e),{},{per_page:100})})).data)(e)}catch(e){return t(e.message)}});function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const g=Object(n.createSlice)({name:"github",initialState:{repositories:[],loading:!1},reducers:{sortRepositories:(e,{payload:t})=>{switch(t){case"ALPHA":e.repositories=e.repositories.sort((e,t)=>e.name.localeCompare(t.name));break;case"FAVORITES":e.repositories=e.repositories.sort(e=>e.marked?-1:1)}},addToFavorites:(e,{payload:t})=>{e.repositories=e.repositories.map(e=>e.id===t?b(b({},e),{},{marked:!e.marked}):e)}},extraReducers:{[p.pending.type]:e=>{e.loading=!0},[p.fulfilled.type]:(e,{payload:t})=>{e.repositories=t,e.loading=!1},[p.rejected.type]:e=>{e.loading=!1},[d.pending.type]:e=>{e.loading=!0},[d.fulfilled.type]:(e,{payload:t})=>{e.repositories=[...t.items,...e.repositories],e.loading=!1},[d.rejected.type]:e=>{e.loading=!1,e.repositories=[]}}}),{sortRepositories:y,addToFavorites:h}=g.actions;var v=g.reducer;const j=Object(n.combineReducers)({githubReducer:v}),A=Object(n.configureStore)({reducer:j,devTools:!0});var O=A,w=r(4),P=r.n(w),x=r(0),S=r.n(x),C=r(7),E=r(2);const k=Object(w.Router)();k.use((e,t)=>t.status(404).send("Route not found"));var R=k,_=(r(12),r(1)),D=S.a.createElement;var B=({repository:e,onFavorite:t,showMoreDetails:r})=>{const{name:n,owner:a,full_name:o,description:i,id:c,html_url:s,marked:l}=e;return D(_.Card,{fluid:!0},D(_.Card.Content,null,D(_.Image,{floated:"right",size:"mini",src:a.avatar_url}),D(_.Card.Header,null,D("div",null,D(_.Icon,{"data-testid":"favorite-icon",bordered:!0,color:l?"yellow":"teal",onClick:()=>t(c),name:"star"}),n)),D(_.Card.Meta,null,o),D(E.Link,{to:{pathname:s},target:"_blank"},s),D(_.Card.Description,null,i),D(_.Button,{"data-testid":"show-more",onClick:()=>r(e),floated:"right",size:"mini",content:"More",icon:"tasks"})))},M=S.a.createElement;var I=({repository:e})=>{const{owner:{avatar_url:t},name:r,full_name:n,description:a,html_url:o,git_commits_url:i,branches_url:c,collaborators_url:s,issues_url:l,private:u}=e;return M(_.Modal.Content,{image:!0,scrolling:!0},M(_.Image,{size:"medium",src:t,wrapped:!0}),M(_.Modal.Description,null,M(_.Header,null,M("h2",null,r),M("h5",null,u?"Private":"Public")),M("div",null,n),M(E.Link,{to:{pathname:o},target:"_blank"},o),M("p",null,a),M("div",null,"Commits :",M(E.Link,{to:{pathname:i},target:"_blank"}," "+i)),M("div",null,"Branches :",M(E.Link,{to:{pathname:c},target:"_blank"}," "+c)),M("div",null,"Collaborators :",M(E.Link,{to:{pathname:s},target:"_blank"}," "+s)),M("div",null,"Issues :",M(E.Link,{to:{pathname:l},target:"_blank"}," "+l))))};const T=[{text:"alphabetical order",value:"ALPHA",key:"alpha"},{text:"favorites",value:"FAVORITES",key:"favorites"}],L=()=>{const{repositories:e,loading:t}=Object(a.useSelector)(e=>e.githubReducer),{0:r,1:n}=Object(x.useState)(""),o=Object(a.useDispatch)();Object(x.useEffect)(()=>{o(p())},[]);const i=((e,t)=>{const{0:r,1:n}=Object(x.useState)(e);return Object(x.useEffect)(()=>{const r=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(r)}},[e,t]),r})(r,500);Object(x.useEffect)(()=>{i&&o(d({q:i}))},[i]);const{paginatedData:c,handleNextPage:s,activePage:l,totalPages:u,resetPage:f}=((e,t)=>{const{0:r,1:n}=Object(x.useState)(1),{0:a,1:o}=Object(x.useState)([]);Object(x.useEffect)(()=>{o(e.slice((r-1)*t,t*r))},[r,e]);return{paginatedData:a,handleNextPage:(e,t)=>{n(t.activePage)},activePage:r,totalPages:Math.ceil(e.length/t),resetPage:()=>{n(1)}}})(e,30);return{onSearch:e=>{f(),n(e.target.value)},onSort:(e,t)=>{f(),o(y(t.value))},onMarkRepository:e=>{o(h(e))},paginatedData:c,handleNextPage:s,activePage:l,totalPages:u,loading:t}};var q=S.a.createElement;var N=()=>{const{activePage:e,onSearch:t,handleNextPage:r,totalPages:n,loading:a,onMarkRepository:o,onSort:i,paginatedData:c}=L(),[s,l]=S.a.useState(!1),{0:u,1:p}=Object(x.useState)(),d=e=>{p(e),l(!0)};return q("div",null,q("div",{className:"space-between py-1"},q(_.Input,{onChange:t,loading:a,placeholder:"Search..."}),q(_.Select,{onChange:i,placeholder:"Select your sort",options:T})),q(_.Card.Group,null,null==c?void 0:c.map(e=>q(B,{showMoreDetails:d,key:e.id,onFavorite:o,repository:e}))),q("div",{className:"center py-1"},q(_.Pagination,{onPageChange:r,defaultActivePage:e,totalPages:n})),u&&q(_.Modal,{onClose:()=>l(!1),open:s},q(I,{repository:u})))},z=S.a.createElement;var U=()=>z("div",{className:"App"},z("h1",null,"Repositories"),z(N,null)),$=S.a.createElement;var F=()=>$(E.Switch,null,$(E.Route,{exact:!0,path:"/",component:U})),H=S.a.createElement;let V;V=r(13);const W=(e,t)=>{const r={},n=Object(C.renderToString)(H(E.StaticRouter,{context:r,location:e.url},H(a.Provider,{store:O},H(F,null))));if(r.url)return{redirect:r.url};return{html:`<!doctype html>\n    <html lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charSet='utf-8' />\n        <title>Welcome to Razzle</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        ${((e,t)=>e[t]&&e[t].css?e[t].css.map(e=>`<link rel="stylesheet" href="${e}">`).join(""):"")(V,"client")}\n    </head>\n    <body>\n        <div id="root">${n}</div>\n        ${((e,t,r="")=>e[t]&&e[t].js?e[t].js.map(e=>`<script src="${e}"${r}><\/script>`).join(""):"")(V,"client"," defer crossorigin")}\n    </body>\n  </html>`}},J=P()();J.use("/api/v1",R),J.disable("x-powered-by").use(P.a.static("build\\public")).get("/*",(e,t)=>{const{html:r="",redirect:n=!1}=W(e,t);n?t.redirect(n):t.send(r)});t.default=J}]);
//# sourceMappingURL=server.js.map