"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5126:function(n,t,e){e.d(t,{S2:function(){return c},XV:function(){return p},my:function(){return o},oi:function(){return s},tA:function(){return f}});var r=e(5861),a=e(4687),u=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"1174e437242bb46ea8831e578adaacd1"};var c=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("\n/search/movie?language=en-US&page=1&include_adult=false&query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?language=en-US&page=1 "));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4146:function(n,t,e){e.d(t,{e:function(){return w}});var r,a,u,i,c,s,o=e(168),p=e(7402),f=e(1087),d=p.Z.div(r||(r=(0,o.Z)(["\n  margin: 0 auto;\n  padding: 20px;\n"]))),l=p.Z.ul(a||(a=(0,o.Z)(["\n  display: flex;\n\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  max-width: calc(100vw - 48px);\n\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=(0,p.Z)(f.OL)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n"]))),h=p.Z.li(i||(i=(0,o.Z)(["\n  max-width: 300px;\n  max-height: 450px;\n  border-radius: 10px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.04);\n  }\n"]))),v=p.Z.img(c||(c=(0,o.Z)(["\n  max-width: 300px;\n  max-height: 400px;\n  object-fit: cover;\n  border-radius: 10px 10px 0 0;\n"]))),m=p.Z.p(s||(s=(0,o.Z)(["\n  padding: 10px;\n\n  font-size: 14px;\n  font-weight: 600;\n  color: #9d99cd68;\n  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #99a4f7;\n  }\n"]))),g=e(7689),Z=e(184),w=function(n){var t=n.movies,e=(0,g.TH)();return(0,Z.jsx)(d,{children:(0,Z.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title,u=n.name;return(0,Z.jsx)(h,{children:(0,Z.jsxs)(x,{id:"".concat(t),to:"/movies/".concat(t),state:{from:e},children:[(0,Z.jsx)(v,{src:"https://image.tmdb.org/t/p/w500"+r,alt:null!==a&&void 0!==a?a:u}),(0,Z.jsxs)(m,{children:[null!==a&&void 0!==a?a:u," "]})]})},"".concat(t))}))})})}},6137:function(n,t,e){e.d(t,{$:function(){return s}});var r,a=e(6286),u=e(168),i=e(7402).Z.span(r||(r=(0,u.Z)(["\n  display: grid;\n  place-items: center;\n"]))),c=e(184);function s(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.s5,{strokeColor:"#99a4f7",strokeWidth:"5",animationDuration:"0.75",width:"70",visible:!0})})}},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),u=e(4687),i=e.n(u),c=e(5126),s=e(2791),o=e(4146),p=e(6137),f=e(712),d=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],l=(0,s.useState)(!1),x=(0,a.Z)(l,2),h=x[0],v=x[1],m=(0,s.useState)(null),g=(0,a.Z)(m,2),Z=g[0],w=g[1];return(0,s.useEffect)((function(){v(!0);var n=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.S2)();case 3:t=n.sent,e=t.results,u(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),w(n.t0.message);case 11:return n.prev=11,v(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.e,{movies:e}),h&&(0,d.jsx)(p.$,{}),Z&&(0,d.jsx)(f.T,{children:"Something went wrong Try again later.\ud83d\ude2d"})]})}}}]);
//# sourceMappingURL=415.70582395.chunk.js.map